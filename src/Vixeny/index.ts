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
                headers: { 'x-powered-by': 'benchmark' },
                query: {
                    only: ['name']
                },
                f: ({ param: { id }, query: { name } }) => id + ' ' + name
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
