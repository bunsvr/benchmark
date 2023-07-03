import Elysia from 'elysia';

new Elysia()
    .get('/', () => 'Hi')
    .get('/id/:id', c => c.params.id + ' ' + c.query.name)
    .post('/json', c => c.body, {
        type: 'json'
    })
    .listen(3000);
