import { routes } from '@stricjs/app';
import { text } from '@stricjs/app/send';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

export default routes()
    .get('/', () => text('Hi'))
    .get('/id/:id', ctx => text(`${ctx.params.id} ${parse(ctx)}`));
