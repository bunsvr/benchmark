import fun from 'vixeny/fun';

const { stringify } = JSON;

export default {
    fetch: fun()(
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
                path: '/api/json',
                method: 'POST',
                headings: {
                    headers: '.json'
                },
                f: async ctx => stringify(await ctx.req.json())
            }
        ]
    )
}
