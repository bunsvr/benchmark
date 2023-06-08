import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
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

    return args;
};

// Run benchmark
export async function run(commands: [string, ...string[]][]) {
    const resArr = [];

    for (const command of commands) {
        const out = Bun.spawnSync(command).stdout?.toString() || '-1';
        const res = getReqSec(out);

        resArr.push(res);
        console.log(out);
    }

    return resArr;
}

// Get average req/sec
function average(arr: number[]) {
    return arr.reduce((a, b) => a + b) / arr.length;
};

export function sortResults(frameworks: string[], testsCnt: number, results: number[]) {
    const arr = [];

    for (let i = 0; i < frameworks.length; ++i) {
        const allCategoryRes = results.slice(i * testsCnt, (i + 1) * testsCnt);
        arr.push({
            name: frameworks[i],
            results: allCategoryRes,
            average: average(allCategoryRes)
        });
    }

    return arr
        .sort((a, b) => b.average - a.average)
        .map(val => `| ${val.name} | ${val.average.toFixed(2)} | ${val.results.map(v => v.toFixed(2)).join(' | ')} |`)
        .join('\n');
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
    const expect = test.expect;
    const res = await fetch(url, {
        method: test.method, 
        body: test.bodyFile && await readFile(test.bodyFile, 'utf8'),
        headers: test.headers
    });
    
    if (expect.body && await res.text() !== expect.body)
        return false;

    if (expect.headers) {
        if (!res.headers)
            return false;
        for (const header in expect.headers) {
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

        if (!await testURL('http://localhost:3000' + test.path, test)) {
            console.log(`Test ${test.method} ${test.path} failed!`);
            return false;
        } else 
            console.log(`Test ${test.method} ${test.path} passed!`);
    }

    return true;
}