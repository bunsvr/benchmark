import { createServer } from "hyperbun";

const app = createServer();

app.get("/", () => "Hi");
app.post("/json", async req => {
    const body = await req.json();
    body.change = body.a;

    return body;
});
app.get("/id/:id", (_, ctx) => 
    ctx.params.id as string);

app.listen({ port: 3000 });