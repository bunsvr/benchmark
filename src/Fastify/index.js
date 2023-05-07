import fastify from "fastify";

fastify()
    .get("/", () => "Hi")
    .get("/id/:id", req => req.params.id)
    .post("/json", (req, res) => 
        res
            .header('Content-Type', 'application/json;charset=utf-8')
            .send(req.body)
    )
    .listen({ port: 3000 });