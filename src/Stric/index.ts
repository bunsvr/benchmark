import { Router } from "@stricjs/router";

export default new Router() 
    .use("GET", "/", 
        () => new Response("Hi"))
    .use("POST", "/json", async req =>
        Response.json(await req.json()))
    .use("GET", "/id/:id", 
        req => new Response(req.params.id));