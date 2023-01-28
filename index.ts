import { appendFile, readdir } from "fs/promises";
import Bun from "bun";
import confData from "./config.json";
import { Config } from "./lib/types";
import { average, run, parseDefaultArgs, sleep, sortResults, find } from "./lib/utils";

const data = confData as Config;

// Root directory of the benchmark
const rootDir = import.meta.dir;

// Destination file
const desFile = `${rootDir}/results.md`;

// Prepare file
await Bun.write(desFile, `Bun: ${Bun.version}\n`);

// Benchmark results
const results: number[] = [];

// Framework and test URLs
const frameworks = await readdir(`${rootDir}/src`);
const urls = data.tests.map(v => {
    const arr: any[] = [v.path, v.method || "GET"];
    if (v.body)
        arr.push(v.body);
    if (v.headers) {
        const headerArr: string[] = []
        for (const key in v.headers)
            headerArr.push("--header", `${key}: ${v.headers[key]}`);

        arr.push(headerArr);
    }

    return arr;
});

// Run scripts
{
    for (const script of data.scripts) {
        const args = [
            script.type || "bun",
            `${rootDir}/scripts/${script.file}`
        ] as [string, string];

        console.log(args.join(" "));
        Bun.spawnSync(args, {
            stdout: "inherit",
            env: { ROOT: rootDir }
        });
    }

    // Install dependencies
    console.log("Installing dependencies...");
    Bun.spawnSync(["bun", "install"]);
}

// Run benchmark
{
    // Default arguments parsing
    const defaultArgs = parseDefaultArgs(data);

    // Run commands
    const commands = urls.map(v => {
        const arr = ["bombardier", ...defaultArgs, "http://localhost:3000" + v[0], "-m", v[1]];
        if (v[2])
            arr.push("-f", `${rootDir}/assets/${v[2]}`);
        if (v[3])
            arr.push(...v[3]);

        return arr;
    });

    for (const framework of frameworks) {
        Bun.gc(true);
        const desDir = `${rootDir}/src/${framework}`;
        const info = await find(desDir + "/info.json");

        // Start the server command args
        const args = info.run || ["bun", `${desDir}/index.ts`];

        // Boot up
        const server = Bun.spawn(args, {
            cwd: desDir,
            stdout: "inherit",
            env: data.env
        });
        console.log("Booting", framework + "...");
        await sleep();

        // Benchmark
        console.log("Benchmarking...");
        results.push(...run(commands as any));

        // Clean up
        server.kill();
    }
}

// Sort results
{
    console.log("Sorting results...");
    await appendFile(desFile,
        // Prepare table headers
        "| Name | Average | "
        + urls.map(v => `${v[1]} \`${v[0]}\``).join(" | ") + " |\n| "
        // Split headers and results
        + "--- | ".repeat(urls.length + 2) + "\n"
        // All results
        + sortResults(frameworks, urls.length, results)
    );
}