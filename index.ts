import { appendFile, readdir } from 'fs/promises';
import Bun from 'bun';
import data, { rootDir } from './config';
import { Info } from './lib/types';
import { run, parseDefaultArgs, sortResults, find, validate } from './lib/utils';
import { existsSync, mkdirSync } from 'fs';

// Benchmark CLI
const tool = data.cli ||= 'bombardier';

// Destination file
const allResultsDir = `${rootDir}/results`;
if (!existsSync(allResultsDir))
    mkdirSync(allResultsDir);
const desFile = `${allResultsDir}/index.md`, 
    readmeFile = `${rootDir}/README.md`, 
    templateFile = `${rootDir}/README.template.md`;

// Prepare file
await Bun.write(desFile, `Bun: ${Bun.version}\n`);

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

    return arr;
});

// Run scripts
for (const script of data.scripts) {
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
    // @ts-ignore
    Bun.sleepSync(data.boot);
}

const inTestMode = process.argv[2] === 'test';
// Run benchmark
{
    data.boot ||= 5000;

    // Default arguments parsing
    const defaultArgs = parseDefaultArgs(data);

    // Run commands
    const commands = urls.map(v => {
        const arr = [tool, ...defaultArgs, 'http://localhost:3000' + v[0], '--method', v[1]];
        if (v[2])
            arr.push('--body-file', v[2]);
        if (v[3])
            arr.push(...v[3]);

        return arr;
    });

    for (let i = 0; i < frameworks.length; ++i)
        try {
            const resultDir = `${allResultsDir}/${frameworks[i]}`;
            if (!existsSync(resultDir)) 
                mkdirSync(resultDir);

            Bun.gc(true);

            const desDir = `${rootDir}/src/${frameworks[i]}`;
            const info = await find(desDir + '/package.json') as Info;
            info.runtime ||= 'bun';

            if (info.version) {
                if (info.version === 'runtime')
                    switch (info.runtime) {
                        case 'bun': 
                            info.version = Bun.version; 
                            break;
                        case 'node': 
                            info.version = Bun.spawnSync(
                                ['node', '--version']
                            ).stdout.toString()
                                .substring(1)
                                .replace('\n', '');
                            break;
                        case 'deno': 
                            let versionMsg = Bun.spawnSync(
                                ['deno', '--version']
                            ).stdout.toString().substring(5);
                            info.version = versionMsg.substring(0, versionMsg.indexOf(' '));
                            break;
                    }
                frameworks[i] += ' ' + info.version;
            }

            // Start the server command args
            info.main ||= 'index.ts';
            const args = info.run || (info.runtime === 'deno' 
                ? ['deno', 'run', '--allow-net', '--unstable', info.main] 
                : [info.runtime, `${desDir}/${info.main}`]
            );
            console.log(args.join(' '));

            // Boot up
            const server = Bun.spawn(args, {
                cwd: desDir,
                stdout: 'inherit',
                env: data.env
            });
            console.log('Booting', frameworks[i] + '...');
            Bun.sleepSync(data.boot);

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

            // Clean up
            cleanup(server);
        } catch (e) {
            console.log(frameworks[i], 'Crashed!');
            failedFramework.push(frameworks[i]);

            await appendFile(rootDir + '/debug.log', frameworks[i] + ':\n' + String(e) + '\n\n');
        }
}

// Remove package.json dependencies field
{
    const pkgPath = rootDir + '/package.json',
        pkg = await import(pkgPath).then(v => v.default);

    pkg.dependencies = {};
    Bun.write(pkgPath, JSON.stringify(pkg, null, 4));
}

if (inTestMode)
    process.exit(0);

// Sort results
{
    if (failedFramework.length > 0) {
        console.log(`Frameworks that failed the test: ${failedFramework.join(', ')}.`);
        console.log('These frameworks will not be included in the result!');
        frameworks = frameworks.filter(v => !failedFramework.includes(v));
    } else console.log('All frameworks passed the boot-up test!');

    console.log('Sorting results...');

    const resultTable = // Prepare table headers
        '| Name | Average | '
        + urls.map(v => `${v[1]} \`${v[0]}\``).join(' | ') + ' |\n| '
        // Split headers and results
        + '--- | '.repeat(urls.length + 2) + '\n'
        // All results
        + sortResults(frameworks, urls.length, results);

    await appendFile(desFile, resultTable);
    await Bun.write(readmeFile, 
        await Bun.file(templateFile).text()
        + '\n' + resultTable
    );
}
