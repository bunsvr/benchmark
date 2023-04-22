import { Context } from "@kapsonfire/bun-bakery";
import body from "body.json";

export async function POST(ctx: Context) {
    ctx.json(body);
};