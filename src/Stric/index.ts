import { Router as Stric, macro, wrap } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

export default new Stric()
    .get('/', macro('Hi'))
    .post('/api/json', c => c.json().then(wrap.json))
    .get('/id/:id', c => new Response(c.params.id + ' ' + parse(c)))
    .use(404);
