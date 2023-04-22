import { App } from "uWebSockets.js";
import body from "../../assets/body.json" assert { type: 'json' };

App()
    .get("/", res => res.end("Hi"))
    .post("/json", res => res.end(
        JSON.stringify(body)
    ))
    .get("/id/:id", (res, req) => 
        res.end(req.getParameter(0)))
    // Need 404 handling
    .any("/*", res => res.writeStatus("404 Not Found").end())
    .listen(3000, ls => ls && console.log("App started successfully!"));