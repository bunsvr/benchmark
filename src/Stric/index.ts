import { router, macro, wrap } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

router()
    // Routes
    .get('/', macro('Hi'))
    .post('/api/json', c => c.json().then(wrap.json))
    .get('/id/:id', c => new Response(c.params.id + ' ' + parse(c)))
    // Others
    .use(404).listen();
