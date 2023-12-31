import { vld, t } from 'vld-ts';

const hobby = t.obj({
    name: t.str,
    since: t.num
});

const person = t.obj({
    name: t.str,
    age: t.num,
    hobby
});

export default vld(person);
