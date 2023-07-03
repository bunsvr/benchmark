import { Hono } from 'hono';
import { RegExpRouter } from 'hono/router/reg-exp-router';

export default new Hono({ router: new RegExpRouter() })
    .get('/', c => c.text('Hi'))
    .post('/json', async c => c.json(await c.req.json()))
    .get('/id/:id', c => c.text(`${c.req.param('id')} ${c.req.query('name')}`));
