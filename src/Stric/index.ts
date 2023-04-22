import { Router } from "@stricjs/router";
import body from "body.json";

new Router()
    .static("GET", "/", 
        () => new Response("Hi"))
    .static("POST", "/json", () => 
        Response.json(body))
    .dynamic("GET", "/id/:id", 
        req => new Response(req.params[1]))
    .serve();