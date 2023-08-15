import { run, bench, group } from 'mitata';
import { guard } from '@stricjs/utils';
import { Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { Value } from '@sinclair/typebox/value';

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
    }), compiled = TypeCompiler.Compile(typebox);

    // Test object
    const o = { 
        name: 'John', age: 50, 
        hobbies: {
            name: 'badminton',
            since: 15,
            more: {
                avgScore: 90,
                weight: 67
            }
        } 
    };

    // Try to get the JIT to run
    Bun.sleepSync(9000);

    // All tests here
    bench('Typebox compiled', () => {
        compiled.Check(o);   
    })

    bench('Typebox', () => {
        Value.Check(typebox, o);
    });

    bench('Stric guard', () => {
        stric(o);
    }); 
});

run();
