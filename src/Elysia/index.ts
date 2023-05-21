import Elysia from "elysia";

const elysia = new Elysia()
    .get("/", () => "Hi")
    .get('/id/:id', (c) => c.params.id)
    .post('/json', (c) => c.body, {
        type: 'json'
    });

elysia.fetch(new Request("http://localhost:3000/"))

console.log(elysia.fetch.toString());
