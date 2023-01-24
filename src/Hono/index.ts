import { Hono } from "hono";

export default new Hono()
    .get("/", c => 
        c.text("Hi"))
    .get("/id/:id", c => 
        c.text(c.req.param("id")))
    .post("/json", async c =>
        c.json(await c.req.json()));