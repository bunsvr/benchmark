import { Router } from "@bunsvr/router";

new Router()
    .static("GET", "/", 
        () => new Response("Hi"))
    .static("POST", "/json",
        async req => new Response(
            JSON.stringify(await req.json())
        ))
    .dynamic("GET", "/id/:id", 
        req => new Response(req.params?.[1]))
    .serve();