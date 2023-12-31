import { run, bench, group } from 'mitata';

import typebox from './src/typebox';
import vld from './src/vld';

import * as obj from './src/utils/obj';

// Avoid JIT bias
for (var i = 0; i < 50; ++i)
    bench(i.toString(), () => { });

console.log('Typebox:', typebox.toString());
console.log('VLD:', vld.toString());

// Compiled validators
group('Compiled validators', () => {
    bench('Typebox', () => {
        typebox(obj.valid);
    });

    bench('VLD', () => {
        vld(obj.valid);
    });
});

run();
