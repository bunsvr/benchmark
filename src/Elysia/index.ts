import Elysia from 'elysia';

new Elysia()
    .get('/', () => 'Hi')
    .get('/id/:id', c => c.params.id + ' ' + c.query.name)
    .get('/api/hi', () => 'Welcome')
    .post('/api/json', c => c.body, { type: 'json' })
    .listen(3000);
