import Elysia from "elysia";
import body from "body.json";

new Elysia()
    .get("/", () => "Hi")
    .get("/id/:id", c => c.params.id)
    .post("/json", () => body)
    .listen(3000);