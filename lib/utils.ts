import { existsSync } from 'fs';
import { Config, Test } from './types';

// Parse default args from config
export function parseDefaultArgs(data: Config) {
    const cmds = data.command;
    const args: string[] = [];

    if (cmds.fasthttp)
        args.push('--fasthttp');
    if (cmds.connections)
        args.push('-c', String(cmds.connections));
    if (cmds.requests)
        args.push('-n', String(cmds.requests));
    if (cmds.duration)
        args.push('-d', cmds.duration);
    if (cmds.timeout)
        args.push('-t', cmds.timeout);

    return args;
};

function formatOutput(o: any) {
    const str = Bun.inspect(o);
    return str.substring(str.indexOf('Done!') + 6);
}

// Run benchmark
export async function run(commands: [string, ...string[]][], desDir: string) {
    const resArr = [];
    let i = 1;

    for (const command of commands) {
        console.log(command.join(' '));

        const out = Bun.spawnSync(command).stdout?.toString() || '-1';
        const res = getReqSec(out);

        resArr.push(res);
        console.log(out);

        await Bun.write(desDir + '/' + i + '.txt', formatOutput(out));
        ++i;
    }

    return resArr;
}

// Get average req/sec
function average(arr: number[]) {
    return arr.reduce((a, b) => a + b) / arr.length;
};

export function sortResults(frameworks: string[], testsCnt: number, results: number[]) {
    let arr = [];

    for (let i = 0; i < frameworks.length; ++i) {
        const allCategoryRes = results.slice(i * testsCnt, (i + 1) * testsCnt),
            avg = average(allCategoryRes);
        arr.push({
            name: frameworks[i],
            results: allCategoryRes,
            average: avg
        });
    }


    arr = arr.sort((a, b) => b.average - a.average);

    return {
        json: arr,
        full: arr
            .sort((a, b) => b.average - a.average)
            .map(val => `| [${val.name}](/results/main/${val.name.substring(0, val.name.indexOf(' '))
                }) | ${val.average.toFixed(2)} | ${val.results.map(v => v.toFixed(2)).join(' | ')} |`)
            .join('\n'),
    }
}

export async function find(absPath: string) {
    if (existsSync(absPath))
        return import(absPath)
            .then(i => i?.default || {});

    return {};
}

// Get req/sec
const catchNumber = /Reqs\/sec\s+(\d+[.|,]\d+)/m;
function getReqSec(v: string) {
    const num = catchNumber.exec(v);

    if (!num?.[1])
        return -1;

    return Number(num[1]);
};

async function testURL(url: string, test: Test) {
    const expect = test.expect, reqInit: RequestInit = {
        method: test.method
    };

    if (test.bodyFile)
        reqInit.body = JSON.stringify(await Bun.file(test.bodyFile).json());
    if (test.headers)
        reqInit.headers = test.headers;

    const res = await fetch(url, reqInit);

    if (expect.body) {
        const recieved = await res.text();

        if (recieved !== expect.body) {
            console.log(`Expected body: ${expect.body}`);
            console.log(`Instead got ${recieved}`);
            return false;
        }
    }

    if (expect.headers) {
        if (!res.headers)
            return false;

        let header: string;
        for (header in expect.headers) {
            if (!Array.isArray(expect.headers[header]))
                // @ts-ignore
                expect.headers[header] = [expect.headers[header]];

            // @ts-ignore
            if (!expect.headers[header].includes(res.headers.get(header))) {
                // @ts-ignore
                console.log(`Expected header ${header}: ${expect.headers[header].join(', ')}`);
                console.log(`Instead got ${res.headers.get(header)}`);
                return false;
            }
        }
    }
    if (expect.statusCode !== res.status)
        return false;

    return true;
}

export async function validate(tests: Test[]) {
    for (const test of tests) {
        test.method ||= 'GET';

        // Skip testing if there are no expectations :)
        if (!test.expect)
            continue;
        test.expect.statusCode ||= 200;

        const name = test.name ?? `${test.method} ${test.path}`;

        if (!await testURL('http://localhost:3000' + test.path, test)) {
            console.log(`Test ${name} failed!`);
            return false;
        } else
            console.log(`Test ${name} passed!`);
    }

    return true;
}
