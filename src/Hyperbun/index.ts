import { createServer } from "hyperbun";

const app = createServer();

app.get("/", () => "Hi");
app.post("/json", req => req.json());
app.get("/id/:id", (_, ctx) => 
    ctx.params.id as string);

app.listen({ port: 3000 });