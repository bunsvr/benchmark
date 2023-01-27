import { existsSync } from "fs";
import { Config } from "./types";

// Parse default args from config
export function parseDefaultArgs(data: Config) {
    const cmds = data.command;
    const args: string[] = [];

    if (cmds.fasthttp)
        args.push("--fasthttp");
    if (cmds.connections)
        args.push("-c", String(cmds.connections));
    if (cmds.duration)
        args.push("-d", cmds.duration + "s");

    return args;
};

// Run benchmark
export function run(commands: [string, ...string[]][]) {
    const resArr = [];

    for (const command of commands) {
        const out = Bun.spawnSync(command).stdout?.toString() || "-1";
        const res = getReqSec(out);

        resArr.push(res);
        console.log(out);
    }

    return resArr;
}

// Wait for server to boot up
export async function sleep() {
    return new Promise(res => setTimeout(res, 2000));
}

// Get average req/sec
export function average(arr: number[]) {
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
        .map(val => `| ${val.name} | ${val.average.toFixed(2)} | ${val.results.map(v => v.toFixed(2)).join(" | ")} |`)
        .join("\n");
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