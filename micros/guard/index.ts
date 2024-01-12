import { run, bench, group } from 'mitata';

import typebox from './src/typebox';
import vld from './src/vld';

import * as obj from './src/utils/obj';

// Avoid JIT bias
for (var i = 50; i > 0; --i)
    bench(i.toString(), () => { });

// Compiled validators
group('Compiled validators', () => {
    bench('VLD', () => {
        vld(obj.valid);
    });

    bench('Typebox', () => {
        typebox(obj.valid);
    });
});

Bun.gc(true);
run();
