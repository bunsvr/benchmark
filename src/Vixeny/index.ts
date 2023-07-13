import fun from 'vixeny/fun';

export default {
    fetch: fun({ hasName: 'http://localhost:3000/' })(
        [
            {
                path: '/',
                type: 'response',
                r: () => new Response('Hi')
            },
            {
                path: '/id/:id',
                query: {
                    only: ['name']
                },
                f: req => req.param.id + ' ' + req.query.name
            },
            {
                path: '/json',
                method: 'POST',
                headers: '.json',
                f: async ({ req }) => JSON.stringify(await req.json())
            }
        ]
    )
}
