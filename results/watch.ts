let res: Response | void;
async function main() {
    // Any URL that does not conflict with benchmark URLs
    res = await fetch("http://localhost:3000/a/b")
        .then(v => v.status === 200 ? v : undefined)
        .catch(() => { })

    if (res) {
        Bun.write(import.meta.dir + "/index.md", res);
        process.exit();
    } else
        console.log("Waiting for results...");
}
main();

setInterval(main, 30000);