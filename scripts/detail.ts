import { appendFile } from 'fs/promises';
import os from 'os';
import config from '../config';

const list = ['B', 'KB', 'MB', 'GB', 'TB'];
const formatByte = (bytes: number) => {
    let i = 0;
    while (bytes >= 1024) {
        bytes /= 1024;
        ++i;
    }
    return Math.round(bytes * 10) / 10 + list[i];
}
const formatOS = (str: string) => {
    switch (str) {
        case 'Windows_NT':
            return 'Windows';
        case 'Darwin':
            return 'Mac';
        default:
            return 'Linux';
    }
}

const desFile = process.env.DES as string;

// Get OS details
let str = '';
str += '## OS Details\n';

const cpus = os.cpus();
str += '- Cores: ' + cpus.length + '\n';
str += '- Model: ' + cpus[0].model + '\n';
str += '- OS: ' + formatOS(os.type()) + '\n';
str += '- System memory: ' + formatByte(os.totalmem()) + '\n';
str += '- Architecture: ' + os.arch() + '\n';

// Get benchmark details
str += '## Tests\n';
for (const test of config.tests)
    str += `### ${test.method || 'GET'} \`${test.path}\`\n${test.description}\n`;

// Benchmark command info
str += `### Info\n`;
str += '- Connections: ' + config.command.connections + '\n';
if (config.command.requests)
    str += '- Requests: ' + config.command.requests + '\n';
if (config.command.duration)
    str += '- Duration: ' + config.command.duration + '\n';
str += '- Using `fasthttp`: `' + !!config.command.fasthttp + '`\n';
str += '- Results are measured in requests per second.\n';

// Start benchmark
str += '\n## Results\n';
await appendFile(desFile, str);