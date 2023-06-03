Bun.serve({
    port: 3000,
    fetch: () => new Response(
        Bun.file(import.meta.dir + "/index.md")
    )
});