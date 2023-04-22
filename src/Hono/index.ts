import { Hono } from "hono";
import body from "body.json";

export default new Hono()
    .get("/", c => 
        c.text("Hi"))
    .get("/id/:id", c => 
        c.text(c.req.param("id")))
    .post("/json", c => c.json(body));