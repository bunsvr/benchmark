import { Router, macro } from '@stricjs/router';
import { qs } from '@stricjs/utils';

const toRes = Response.json, parse = qs.searchKey('name');

export default new Router({ 
    base: 'http://localhost:3000'
})
    .get('/', macro(() => new Response('Hi')))
    .post('/json', req => req.json().then(toRes))
    .get('/id/:id', req => new Response(
        req.params.id + ' ' + parse(req)
    ))
    .use(404);
