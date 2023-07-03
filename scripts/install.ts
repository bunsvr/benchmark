import { readdir } from 'fs/promises';
import Bun from 'bun';
import data from '../package.json';
import config, { rootDir } from '../config';
import { find } from '../lib/utils';

const frameworks = await readdir(`${rootDir}/src`).then(
    frmks => Promise.all(frmks
        .map(frmk => `${rootDir}/src/${frmk}/package.json`)
        .map(frmk => find(frmk).then(v => v.dependencies))
    )
);

// @ts-ignore
data.dependencies = {};

for (const framework of frameworks) 
    if (framework)
        Object.assign(data.dependencies, framework);

// Adding packages to package.json
console.log('Searching for packages...');
await Bun.write(`${rootDir}/package.json`, JSON.stringify(data, null, 4));

// Remove old installations
console.log('Remove old installations...');
Bun.spawnSync(['rm', '-rf', rootDir + '/node_modules']);

Bun.spawnSync(['rm', '-rf', rootDir + '/bun.lockb']);
Bun.spawnSync(['rm', '-rf', rootDir + '/yarn.lock']);
Bun.spawnSync(['rm', '-rf', rootDir + '/package-lock.json']);

// Install dependencies
const configPkg = config.pkg || 'bun';
console.log('Installing dependencies using', configPkg);
Bun.spawnSync([configPkg, 'install'], { 
    stdout: 'inherit', 
    cwd: rootDir
});