import { Router } from '@stricjs/router';
import { query as parse } from '@stricjs/utils';

const jsonHeaders = { headers: { 'Content-Type': 'application/json' } }, 
    stringify = JSON.stringify,
    toRes = (json: any) => new Response(stringify(json), jsonHeaders);

export default new Router()
    .get('/', () => new Response('Hi'))
    .post('/json', req => req.json().then(toRes))
    .get('/id/:id', ({
        params: { id }, query, url
    }) => new Response(
        id + ' ' + parse(
            url.substring(query + 1)
        ).name
    ))
    .use(404);
