import { Router } from "@stricjs/router";

new Router()
    .static("GET", "/", 
        () => new Response("Hi"))
    .static("POST", "/json",
        async req => {
            const body = await req.json<any>();
            body.change = body.a;

            return Response.json(body);
        }
    )
    .dynamic("GET", "/id/:id", 
        req => new Response(req.params[1]))
    .serve();