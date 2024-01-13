import { appendFile, readdir } from 'fs/promises';
import Bun from 'bun';
import data, { rootDir } from './config';
import { Info } from './lib/types';
import { run, parseDefaultArgs, sortResults, find, validate } from './lib/utils';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { render } from 'lib/utils/chart';
import { descript } from 'lib/description';

// Benchmark CLI
const tool = data.cli ||= 'bombardier';
const inTestMode = process.argv[2] === 'test';

// Destination file
const allResultsDir = `${rootDir}/results`,
    subResultDir = `${allResultsDir}/main`;

const desFile = `${allResultsDir}/index.md`,
    jsonResultFile = `${allResultsDir}/data.json`,
    readmeFile = `${rootDir}/README.md`,
    templateFile = `${rootDir}/README.template.md`,
    debugFile = `${rootDir}/debug.log`;

// Prepare files
if (!inTestMode) {
    await Bun.write(desFile, `Bun: ${Bun.version}\n`);
    if (existsSync(debugFile)) rmSync(debugFile);
}

// Benchmark results
const results: number[] = [];

// Framework and test URLs
let frameworks = await readdir(`${rootDir}/src`);

if (data.include)
    // @ts-ignore
    frameworks = frameworks.filter(f => data.include.includes(f));
if (data.exclude)
    // @ts-ignore
    frameworks = frameworks.filter(f => !data.exclude.includes(f));

// URLs to test and benchmark
const urls = data.tests.map(v => {
    const arr: any[] = [v.path, v.method || 'GET'];

    if (v.bodyFile)
        arr.push(v.bodyFile);

    if (v.headers) {
        const headerArr: string[] = []
        for (const key in v.headers)
            headerArr.push('--header', `${key}: ${v.headers[key]}`);

        arr.push(headerArr);
    }

    arr.push(v.name);
    return arr;
});

// Run scripts
if (!inTestMode) for (const script of data.scripts) {
    const args = [
        script.type || 'bun',
        `${rootDir}/scripts/${script.file}`
    ] as [string, string];

    console.log(args.join(' '));
    Bun.spawnSync(args, {
        stdout: 'inherit',
        env: {
            ROOT: rootDir,
            DES: desFile
        }
    });
}

const failedFramework: string[] = [];
function cleanup(server: Bun.Subprocess) {
    // Clean up
    server.kill();

    Bun.sleepSync(data.boot ?? 5000);
}

let frameworksDescription = '## Frameworks\n';

// Run benchmark
{
    data.boot ||= 5000;

    // Default arguments parsing
    const defaultArgs = parseDefaultArgs(data);

    // Run commands
    const commands = urls.map(v => {
        v = v.slice(0, -1);

        const arr = [tool, ...defaultArgs, 'http://localhost:3000' + v[0], '--method', v[1]];
        if (v[2])
            arr.push('--body-file', v[2]);
        if (v[3])
            arr.push(...v[3]);

        return arr;
    });

    // Search each framework
    for (let i = 0; i < frameworks.length; ++i) {
        const resultDir = `${subResultDir}/${frameworks[i]}`;
        if (!existsSync(resultDir))
            mkdirSync(resultDir);

        Bun.gc(true);
        const desDir = `${rootDir}/src/${frameworks[i]}`,
            info = await find(desDir + '/package.json') as Info;

        // Push to description
        frameworksDescription += descript(frameworks[i], info);

        // Check JS runtime
        info.runtime ||= process.execPath;

        // Check framework version
        if (info.version) {
            if (info.version === 'runtime') {
                if (info.runtime.endsWith('bun'))
                    info.version = Bun.version;
                if (info.runtime.endsWith('deno'))
                    info.version = Bun.spawnSync([info.runtime, '--version']).stdout.toString().substring(1).replace('\n', '');
                else {
                    let versionMsg = Bun.spawnSync([info.runtime, '--version']).stdout.toString().substring(5);
                    info.version = versionMsg.substring(0, versionMsg.indexOf(' '));
                }
            }

            frameworks[i] += ' ' + info.version;
        }

        // Spawn process options
        const spawnOpts = {
            cwd: desDir,
            stdout: 'inherit',
            env: data.env
        } as any;

        // Build if a build script exists 
        if (info.build) Bun.spawnSync(info.build, spawnOpts);

        // Start the server command args
        info.main ||= 'index.ts';
        const args = info.run || (info.runtime === 'deno'
            ? ['deno', 'run', '--allow-net', '--unstable', info.main]
            : [info.runtime, `${desDir}/${info.main}`]
        );
        console.log(args.join(' '));

        // Boot up
        const server = Bun.spawn(args, spawnOpts);
        console.log('Booting', frameworks[i] + '...');
        Bun.sleepSync(data.boot);

        try {
            // Validate
            console.log('Validating...');
            if (!await validate(data.tests)) {
                console.log('The server does not pass the tests! Skip to the next one!');
                failedFramework.push(frameworks[i]);
                cleanup(server);
                continue;
            }
            Bun.gc(true);
            Bun.sleepSync(data.boot);

            // Only benchmark if not in test mode
            if (inTestMode) {
                cleanup(server);
                continue;
            }

            // Benchmark
            console.log('Benchmarking...');
            results.push(...await run(commands as any, resultDir));
        } catch (e) {
            console.log(frameworks[i], 'Crashed!');
            failedFramework.push(frameworks[i]);

            await appendFile(debugFile, frameworks[i] + ':\n' + String(e) + '\n\n');
        } finally {
            if (!server.killed) cleanup(server);
        }
    }
}

if (inTestMode) {
    console.log(frameworksDescription);
    process.exit(0);
}

// Remove package.json dependencies field
{
    const pkgPath = rootDir + '/package.json',
        pkg = await import(pkgPath).then(v => v.default);

    pkg.dependencies = {};
    Bun.write(pkgPath, JSON.stringify(pkg, null, 4));
}

// Sort results
{
    if (failedFramework.length > 0) {
        console.log(`Frameworks that failed the test: ${failedFramework.join(', ')}.`);
        console.log('These frameworks will not be included in the result!');
        frameworks = frameworks.filter(v => !failedFramework.includes(v));
    } else console.log('All frameworks passed the boot-up test!');

    console.log('Sorting results...');

    const tableResultString = sortResults(frameworks, urls.length, results),
        resultTable = // Prepare table headers
            '| Name | Average | '
            + urls.map(v => v.at(-1) ?? `${v[1]} \`${v[0]}\``).join(' | ') + ' |\n| '
            // Split headers and results
            + ' :---: |'.repeat(urls.length + 2) + '\n'
            // All results
            + tableResultString.full;

    // Main result file
    appendFile(desFile, resultTable);

    // Write asynchronously
    Bun.write(readmeFile, await Bun.file(templateFile).text() + '\n' + resultTable + '\n' + frameworksDescription);
    Bun.write(jsonResultFile, JSON.stringify(tableResultString.json));

    // Render the result chart
    render(`${allResultsDir}/chart.png`, tableResultString.json);
}
