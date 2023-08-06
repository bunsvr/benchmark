const app = require("fastify")()
    .get("/", () => "Hi")
    .get("/api/hi", () => "Welcome")
    .post("/api/json", {
        schema: {
            response: {
                200: {
                    type: "object",
                    properties: {
                        a: {
                            type: "string",
                        },
                    },
                },
            }
        },
    }, req => req.body)
    .get("/id/:id", {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    name: { type: 'string'}
                },
                required: ['name'],
            }
        }
    }, req => req.params.id + ' ' + req.query.name);

app.listen({ port: 3000 }, err => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
