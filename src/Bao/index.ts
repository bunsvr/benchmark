import Bao from "baojs";
import body from "body.json";

const app = new Bao();

app.get("/", c => 
    c.sendText("Hi"));
app.get("/id/:id", c => 
    c.sendText(c.params.id));
app.post("/json", c => c.sendJson(body));

app.listen({ port: 3000 });