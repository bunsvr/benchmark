import { appendFile, readdir } from "fs/promises";
import Bun from "bun";
import data from "./config.json";
import pkg from "./package.json";

// Root directory of the benchmark
const rootDir = import.meta.dir;

// Destination file
const desFile = `${rootDir}/results.md`;

// Prepare file
await Bun.write(desFile, "");
await appendFile(desFile, `Bun: ${Bun.version}\n`);

// Benchmark results
const results: number[] = [];

// Framework and test URLs
const frameworks = await readdir(`${rootDir}/src`);
const urls = data.tests.map(v => {
    const arr: any[] = [v.path, v.method];
    if (v.body)
        arr.push(v.body);
    if (v.headers) {
        const headerArr: string[] = [],
            headers = v.headers as Record<string, string>;
        for (const key in headers)
            headerArr.push("--header", `${key}: ${headers[key]}`);

        arr.push(headerArr);
    }

    return arr;
});

// Run scripts
{
    for (const script of data.scripts) {
        const args = [
            script.type,
            `${rootDir}/scripts/${script.file}`
        ] as [string, string];

        console.log(args.join(" "));
        Bun.spawnSync(args, {
            env: { ROOT: rootDir }
        });
    }

    // Install dependencies
    console.log("Install dependencies...");
    Bun.spawnSync(["bun", "install"]);
}

// Run benchmark
{
    // Format stuff
    const catchNumber = /Reqs\/sec\s+(\d+[.|,]\d+)/m;
    const getReqSec = (v: string) => {
        const num = catchNumber.exec(v);

        if (!num?.[1])
            return -1;

        return Number(num[1]);
    }

    // Default arguments parsing
    const parseDefaultArgs = () => {
        const cmds = data.command;
        const args: string[] = [];

        if (cmds.fasthttp)
            args.push("--fasthttp");
        if (cmds.connections)
            args.push("-c", String(cmds.connections));
        if (cmds.duration)
            args.push("-d", cmds.duration + "s");

        return args;
    }
    const defaultArgs = parseDefaultArgs();

    // Run commands
    const commands = urls.map(v => {
        const arr = ["bombardier", ...defaultArgs, "http://localhost:3000" + v[0], "-m", v[1]];
        if (v[2])
            arr.push("-f", `${rootDir}/assets/${v[2]}`);
        if (v[3])
            arr.push(...v[3]);

        return arr;
    });

    const run = () => {
        for (const command of commands) {
            const out = Bun.spawnSync(command as [string, ...string[]]).stdout?.toString() || "-1";
            const res = getReqSec(out);

            results.push(res);
            console.log(out);
        }
    }

    // Wait for server to boot up
    const sleep = async () =>
        new Promise(res => setTimeout(res, 2000));

    for (const framework of frameworks) {
        Bun.gc(true);
        const desDir = `${rootDir}/src/${framework}`;

        // Boot up
        const server = Bun.spawn(["bun", `${desDir}/index.ts`], { cwd: desDir, stdout: "inherit" });
        console.log("Booting", framework + "...");
        await sleep();

        // Benchmark
        console.log("Benchmarking...");
        run();

        // Clean up
        server.kill();
    }
}

// Sort results
{
    console.log("Sorting results...");

    const average = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length;
    const sortResults = () => {
        const arr = [];

        for (let i = 0; i < frameworks.length; ++i) {
            const allCategoryRes = results.slice(i * urls.length, (i + 1) * urls.length);
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

    // Prepare table headers
    let str =
        "| Name | Average | "
        + urls.map(v => `${v[1]} \`${v[0]}\``).join(" | ") + " |\n| "
        + "--- | ".repeat(urls.length + 2) + "\n"
        + sortResults();

    await appendFile(desFile, str);
}