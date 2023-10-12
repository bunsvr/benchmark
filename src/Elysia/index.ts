import Elysia from 'elysia';

new Elysia()
    .get('/', () => 'Hi')
    .get('/id/:id', c => c.params.id + ' ' + c.query.name)
    .post('/api/json', c => (c.body as any).nested, { type: 'json' })
    .listen(3000);
