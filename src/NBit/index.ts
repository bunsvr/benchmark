import { createApplication } from "@nbit/bun";
import body from "body.json";

const app = createApplication();

const routes = app.defineRoutes(router => [
    router.get("/", () => "Hi"),
    router.get("/id/:id", req => req.params.id),
    router.post("/json", () => body)
]);

export default {
    fetch: app.attachRoutes(routes)
}