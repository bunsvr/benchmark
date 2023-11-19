import { run, bench, group } from 'mitata';
import { guard } from '@stricjs/utils';
import { Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { TypeSystemPolicy } from '@sinclair/typebox/system';

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

for (var i = 0; i < 50; ++i)
    bench('noop', () => { });

group('Nested', () => {
    const stric = guard.create({
        name: 'str',
        age: 'num',
        hobby: {
            name: 'str',
            since: 'num',
            more: {
                avgScore: 'num',
                weight: 'num'
            }
        }
    }), typebox = Type.Object({
        name: Type.String(),
        age: Type.Number(),
        hobby: Type.Object({
            name: Type.String(),
            since: Type.Number(),
            more: Type.Object({
                avgScore: Type.Number(),
                weight: Type.Number()
            })
        })
    });
    let compiled = TypeCompiler.Compile(typebox);
    const check = compiled.Check.bind(compiled);

    // Test object
    const o = {
        name: 'John', age: 50,
        hobby: {
            name: 'badminton',
            since: 15,
            more: {
                avgScore: 90,
                weight: '67'
            }
        }
    };

    // All tests here
    bench('Typebox compiled', () => {
        check(o);
    });

    bench('Stric guard', () => {
        stric(o);
    });

    console.log(stric.toString());
});

run();
