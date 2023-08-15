import { run, bench, group } from 'mitata';
import { guard } from '@stricjs/utils';
import { Type } from '@sinclair/typebox';
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
    });

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

    bench('Typebox', () => {
        Value.Check(typebox, o);
    });

    bench('Stric guard', () => {
        stric(o);
    }); 
});

run();
