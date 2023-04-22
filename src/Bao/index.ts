import Bao from "baojs";

const app = new Bao();

app.get("/", c => 
    c.sendText("Hi"));
app.get("/id/:id", c => 
    c.sendText(c.params.id));
app.post("/json", async c => {    
    const body = await c.req.json<any>();
    body.change = body.a;

    return c.sendJson(body);
});

app.listen({ port: 3000 });