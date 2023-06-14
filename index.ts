import { appendFile, readdir } from 'fs/promises';
import Bun from 'bun';
import data, { rootDir } from './config';
import { Info } from './lib/types';
import { run, parseDefaultArgs, sortResults, find, validate } from './lib/utils';

// Benchmark CLI
const tool = data.cli ||= 'bombardier';

// Destination file
const desFile = `${rootDir}/results/index.md`;

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

    for (let i = 0; i < frameworks.length; ++i) {
        Bun.gc(true);

        const desDir = `${rootDir}/src/${frameworks[i]}`;
        const info = await find(desDir + '/package.json') as Info;

        if (info.version)
            frameworks[i] += ' ' + info.version;

        // Start the server command args
        const args = info.run || [info.runtime || 'bun', `${desDir}/${info.main || 'index.ts'}`];
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

        // Benchmark
        console.log('Benchmarking...');
        results.push(...await run(commands as any));

        // Clean up
        cleanup(server);
    }
}

// Sort results
{
    if (failedFramework.length > 0) {
        console.log(`Frameworks that failed the test: ${failedFramework.join(', ')}.`);
        console.log('These frameworks will not be included in the result!');
        frameworks = frameworks.filter(v => !failedFramework.includes(v));
    } else 
        console.log('All frameworks passed the boot-up test!');
    console.log('Sorting results...');
    await appendFile(desFile,
        // Prepare table headers
        '| Name | Average | '
        + urls.map(v => `${v[1]} \`${v[0]}\``).join(' | ') + ' |\n| '
        // Split headers and results
        + '--- | '.repeat(urls.length + 2) + '\n'
        // All results
        + sortResults(frameworks, urls.length, results)
    );
}
