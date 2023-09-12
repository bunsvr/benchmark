import { Router, macro } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const toRes = Response.json, parse = qs.searchKey('name');

const app = new Router()
    .get('/', macro('Hi'))
    .get('/api/hi', macro('Welcome'))
    .post('/api/json', c => c.json().then(toRes))
    .get('/id/:id', c => new Response(c.params.id + ' ' + parse(c)))
    .use(404);

app.base = 'http://localhost:3000';
export default app;
