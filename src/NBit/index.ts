import { createApplication } from "@nbit/bun";

const app = createApplication();

const routes = app.defineRoutes(router => [
    router.get("/", () => "Hi"),
    router.get("/id/:id", req => req.params.id),
    router.post("/json", req => req.body)
]);

export default {
    fetch: app.attachRoutes(routes)
}