import { Router } from '@stricjs/router';
import { query as parse } from '@stricjs/utils';

const toRes = Response.json;

export default new Router({ base: 'http://localhost:3000' })
    .get('/', () => new Response('Hi'))
    .post('/json', req => req.json().then(toRes))
    .get('/id/:id', req => new Response(
        req.params.id + ' ' + parse(
            req.url.substring(req.query + 1)
        ).name
    ))
    .use(404);
