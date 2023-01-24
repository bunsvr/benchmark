import { Zarf } from "@zarfjs/zarf";

const app = new Zarf();

app.get("/", ctx => 
    ctx.text("Hi"));
app.get("/id/:id", (ctx, params) => 
    ctx.text(params.id));
app.post("/json", ctx => 
    ctx.json(ctx.body as string));

app.listen({ port: 3000 });