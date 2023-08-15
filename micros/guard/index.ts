import { run, bench, group } from 'mitata';
import { guard } from '@stricjs/utils';
import { Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { TypeSystemPolicy } from '@sinclair/typebox/system'

TypeSystemPolicy.AllowArrayObject = true
TypeSystemPolicy.AllowNaN = true

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
        hobby: {
            name: 'badminton',
            since: 15,
            more: {
                avgScore: 90,
                weight: 67
            }
        } 
    };

    // All tests here
    bench('Typebox compiled', () => {
        compiled.Check(o);   
    });

    bench('Stric guard', () => {
        stric(o);
    });
});

console.log('Waiting for the JIT to optimize');
// Try to get the JIT to run
Bun.sleepSync(9000);

run();
