import { Router, macro } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const parse = qs.searchKey('name');

new Router({ base: 'http://localhost:3000' })
    // Macros
    .get('/', macro('Hi'))
    .get('/api/hi', macro('Welcome'))
    // JSON macro
    .post('/api/json', macro(
        c => c.json().then(Response.json)
    ))
    .get('/id/:id', c => new Response(
        c.params.id + ' ' + parse(c))
    )
    .use(404).listen();
