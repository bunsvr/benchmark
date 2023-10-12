import { Hono } from 'hono';

export default new Hono()
    .get('/', c => c.text('Hi'))
    .get('/id/:id', c => c.text(c.req.param('id') + ' ' + c.req.query('name')))
    .post('/api/json', c => c.req.json().then(
        r => c.json(r.nested)
    ));
