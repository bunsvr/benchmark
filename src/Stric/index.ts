import { Router } from "@stricjs/router";
import body from "body.json";

export default new Router()
    .use("GET", "/", 
        () => new Response("Hi"))
    .use("POST", "/json", () => 
        Response.json(body))
    .use("GET", "/id/:id", 
        req => new Response(req.params.id))
    // Produce a detailed 404
    .use("/*", 
        () => new Response("", { status: 404 })
    );