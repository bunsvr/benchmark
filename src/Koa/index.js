import Koa from "koa";
import body from "../../assets/body.json" assert { type: 'json' };
import Router from "@koa/router";

const router = new Router()
    .get("/", ctx => ctx.body = "Hi")
    .get("/id/:id", ctx => ctx.body = ctx.params.id)
    .post("/json", ctx => ctx.body = body)

new Koa()
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);