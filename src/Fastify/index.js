import body from "../../assets/body.json" assert { type: 'json' };
import fastify from "fastify";

fastify()
    .get("/", () => "Hi")
    .get("/id/:id", req => req.params.id)
    .post("/json", () => body)
    .listen({ port: 3000 });