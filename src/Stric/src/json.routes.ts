import { routes } from '@stricjs/app';
import { jsonv } from '@stricjs/app/parser';
import { text } from '@stricjs/app/send';
import { t, vld } from 'vld-ts';

// Build schema
const User = t.obj({
    id: t.num,
    name: t.str
}), isUser = vld(User);

export default routes()
    .state(jsonv(isUser))
    .post('/json', c => text(c.state.id + ': ' + c.state.name));

