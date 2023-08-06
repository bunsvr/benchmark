import fun from 'vixeny/fun';

const { stringify } = JSON;

export default {
    fetch: fun({ hasName: 'http://localhost:3000/' })(
        [
            {
                path: '/',
                type: 'response',
                r: () => new Response('Hi')
            },
            {
                path: '/api/hi',
                type: 'response',
                r: () => new Response('Welcome')
            },
            {
                path: '/id/:id',
                query: {
                    only: ['name']
                },
                f: req => req.param.id + ' ' + req.query.name
            },
            {
                path: '/api/json',
                method: 'POST',
                headers: '.json',
                f: async ctx => stringify(await ctx.req.json())
            }
        ]
    )
}
