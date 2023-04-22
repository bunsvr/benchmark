import Elysia from "elysia";

new Elysia()
    .get("/", () => "Hi")
    .get("/id/:id", c => c.params.id)
    .post("/json", c => {
        const body = c.body as any;
        
        return {
            change: body.a,
            a: body.a
        };
    })
    .listen(3000);