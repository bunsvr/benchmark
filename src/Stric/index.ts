import { Router, macro } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const toRes = Response.json, parse = qs.searchKey('name');

const app = new Router({ base: 'http://localhost:3000' })
    .get('/', macro('Hi'))
    .get('/api/hi', macro('Welcome'))
    .post('/api/json', req => req.json().then(toRes))
    .get('/id/:id', req => new Response(req.params.id + ' ' + parse(req)))
    .use(404);

console.log(app.fetch.toString());
export default app;
