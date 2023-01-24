import { Buchta } from "buchta";

const app = new Buchta();

app.get("/", (_, res) => res.send("Hi"));
app.get("/id/:id", (req, res) => 
    res.send(`${req.params.get("id")}`));
app.post("/json", async (req, res) => 
    res.sendJson(await req.json()));

app.run();