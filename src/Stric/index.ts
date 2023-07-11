import { Router } from '@stricjs/router';
import { query as parse } from '@stricjs/utils';

const toRes = Response.json;

const app = new Router()
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

app.exactHost = 'http://localhost:3000';
export default app;
