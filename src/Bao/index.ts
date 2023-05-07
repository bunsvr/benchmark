import Bao from "baojs";

const app = new Bao();

app.get("/", c => 
    c.sendText("Hi"));
app.get("/id/:id", c => 
    c.sendText(c.params.id));
app.post("/json", async c => 
    c.sendJson(await c.req.json())
);

app.listen({ port: 3000 });