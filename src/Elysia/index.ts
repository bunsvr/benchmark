import Elysia from "elysia";

new Elysia()
    .get("/", () => "Hi")
    .get("/id/:id", c => c.params.id)
    .post("/json", c => {
        const body = c.body as any;
        body.change = body.a;
        
        return body;
    })
    .listen(3000);