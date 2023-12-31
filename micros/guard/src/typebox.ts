import { Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { TypeSystemPolicy } from '@sinclair/typebox/system';

TypeSystemPolicy.AllowArrayObject = true;
TypeSystemPolicy.AllowNaN = true;

const Hobby = Type.Object({
    name: Type.String(),
    since: Type.Number()
})

const Person = Type.Object({
    name: Type.String(),
    age: Type.Number(),
    hobby: Hobby
});

// @ts-ignore
export default TypeCompiler.Compile(Person).checkFunc;
