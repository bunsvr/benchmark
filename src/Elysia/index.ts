import Elysia from "elysia";

new Elysia()
    .get("/", () => "Hi")
    .get('/id/:id', (c) => c.params.id)
    .post('/json', (c) => c.body, {
        type: 'json'
    })
    .listen(3000);
