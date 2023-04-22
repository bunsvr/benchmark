import { Zarf } from "@zarfjs/zarf";

const app = new Zarf();

app.get("/", ctx => 
    ctx.text("Hi"));
app.get("/id/:id", (ctx, params) => 
    ctx.text(params.id));
app.post("/json", ctx => {
    const body = ctx.body as any;
    body.change = body.a;

    return ctx.json(body);
});

app.listen({ port: 3000 });