import { Context } from "@kapsonfire/bun-bakery";

export async function POST(ctx: Context) {
    ctx.json(await ctx.request.json());
};