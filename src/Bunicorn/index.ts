import { BunicornApp, RB } from '@bunicorn/server';

const
    rb = new RB(),
    app = new BunicornApp().addRoutes([
        rb.get('/', c => c.raw('Hi')),
        // @ts-ignore
        rb.get('/api/id/:id', c => c.raw(c.params.id + ' ' + c.getSearchParams().name)),
        rb.post('/api/json', async c => c.json(await c.getBody())),
    ]);

app.serve({ port: 3000 });
