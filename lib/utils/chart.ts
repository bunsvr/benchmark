import { resolve } from 'path';
import { appendFileSync, existsSync } from 'fs';
import QuickChart from 'quickchart-js';

export function render(output: string, result: typeof import('../../results/data.json')) {
    output = resolve(output);

    const chart = new QuickChart();
    chart.setWidth(800);
    chart.setHeight(600);

    chart.setConfig({
        type: 'bar',
        data: {
            labels: result.map(v => v.name),
            datasets: [{
                label: 'Average req/sec',
                data: result.map(v => v.average)
            }]
        }
    });

    console.log('Writing to file:', output);
    if (!existsSync(output)) appendFileSync(output, '');
    chart.toFile(output);
}
