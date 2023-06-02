import { Router } from "@stricjs/router";

const opts = {
    headers: { 'content-type': 'application/json' }
};

export default new Router() 
    .get('/', () => new Response('Hi'))
    .post('/json', async req => new Response(JSON.stringify(await req.json()), opts))
    .get('/id/:id', ({ params: { id } }) => new Response(id))
    .use(404);