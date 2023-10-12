import { router, macro } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

export default router()
    .get('/', macro('Hi'))
    .post('/api/json', c => c.data.nested, { body: 'json', wrap: 'json' })
    .get('/id/:id', c => c.params.id + ' ' + parse(c), { wrap: true });
