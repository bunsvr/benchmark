import { Context } from "@kapsonfire/bun-bakery";

export async function POST(ctx: Context) {
    const body = await ctx.request.json<any>();
    body.change = body.a;

    ctx.json(body);
};