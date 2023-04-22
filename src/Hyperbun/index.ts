import { createServer } from "hyperbun";
import body from "body.json";

const app = createServer();

app.get("/", () => "Hi");
app.post("/json", () => body);
app.get("/id/:id", (_, ctx) => 
    ctx.params.id as string);

app.listen({ port: 3000 });