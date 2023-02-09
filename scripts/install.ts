import { readdir } from "fs/promises";
import Bun from "bun";
import data from "../package.json";
import { find } from "../lib/utils";

const rootDir = Bun.env.ROOT || import.meta.dir.slice(0, -8);

const frameworks = await readdir(`${rootDir}/src`).then(
    frmks => Promise.all(frmks
        .map(frmk => `${rootDir}/src/${frmk}/info.json`)
        .map(frmk => find(frmk).then(v => v.dependencies))
    )
);

// @ts-ignore
data.dependencies = {};

for (const framework of frameworks) 
    if (framework)
        Object.assign(data.dependencies, framework);

// Adding packages to package.json
console.log("Searching for packages...");
await Bun.write(`${rootDir}/package.json`, JSON.stringify(data, null, 4));

// Install dependencies
console.log("Installing dependencies...");
Bun.spawnSync(["bun", "install"], { stdout: "inherit" });