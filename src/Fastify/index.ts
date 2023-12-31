import fastify from 'fastify';

fastify()
    .get('/', () => 'Hi')
    // @ts-ignore
    .get('/id/:id', c => c.params.id + ' ' + c.query.name)
    .route({
        method: 'POST',
        url: '/json',
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' }
                },
                required: ['id', 'name']
            }
        },
        // @ts-ignore
        handler: c => c.body.id + ': ' + c.body.name
    })
    .listen({ port: 3000 });

