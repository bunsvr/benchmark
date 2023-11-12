import Elysia from 'elysia';

new Elysia()
    .get('/', () => 'Hi')
    .get('/api/id/:id', c => c.params.id + ' ' + c.query.name)
    .post('/api/json', c => c.body, { type: 'json' })
    .listen(3000);
