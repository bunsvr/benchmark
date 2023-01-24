import Colston from "colstonjs";

new Colston()
    .get("/", c => c.text("Hi"))
    .get("/id/:id", c => 
        c.text(c.request.params.id))
    .post("/json", async c => 
        c.json(await c.request.json()))
    .start(3000);