import { readdir } from "fs/promises";
import Bun from "bun";
import data from "../package.json";

const rootDir = Bun.env.ROOT || "/mnt/e/Programming/JS/Project/Packages/bunser/bench";

const frameworks = await readdir(`${rootDir}/src`).then(
    frmks => Promise.all(frmks
        .map(frmk => `${rootDir}/src/${frmk}/info.json`)
        .map(frmk => import(frmk).then(v => v.default.dependencies))
    )
);

console.log(frameworks)

for (const framework of frameworks)
    Object.assign(data.dependencies, framework);

await Bun.write(`${rootDir}/package.json`, JSON.stringify(data, null, 4));