import { run, bench, group } from 'mitata';
import { guard } from '@stricjs/utils';
import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

// Simple validation
group('Simple', () => {
    const stric = guard.create({
        name: 'str',
        age: 'num'
    }), typebox = Type.Object({
        name: Type.String(),
        age: Type.Number()
    });

    const o = { name: 'John', age: 50 };

    bench('Stric guard', () => {
        stric(o);
    });

    bench('Typebox', () => {
        Value.Check(typebox, o);
    });
});

group('Nested', () => {
    const stric = guard.create({
        name: 'str',
        age: 'num',
        hobby: {
            name: 'str',
            since: 'num'
        }
    }), typebox = Type.Object({
        name: Type.String(),
        age: Type.Number(),
        hobby: Type.Object({
            name: Type.String(),
            since: Type.Number()
        })
    });

    const o = { 
        name: 'John', age: 50, 
        hobbies: {
            name: 'badminton',
            since: 15
        } 
    };

    bench('Stric guard', () => {
        stric(o);
    });

    bench('Typebox', () => {
        Value.Check(typebox, o);
    });
});

await run();
