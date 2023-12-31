import Elysia, { t } from 'elysia';

new Elysia()
    .get('/', () => 'Hi')
    .get('/api/id/:id', c => c.params.id + ' ' + c.query.name)

    .post('/api/json', c => `${c.body.id}: ${c.body.name}`, {
        body: t.Object({
            id: t.Number(),
            name: t.String()
        })
    })

    .listen(3000);
