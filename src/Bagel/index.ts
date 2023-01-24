import { Bagel } from "@kakengloh/bagel";

new Bagel()
    .get("/", async (_, res) => res.send("Hi"))
    .get("/id/:id", async (req, res) => 
        res.send(req.params.id))
    .post("/json", async (req, res) => 
        res.json(req.body))
    .listen(3000);