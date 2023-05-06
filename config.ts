import body from "body.json";

export default {
    boot: 3000,
    tests: [
        {
            path: "/",
            expect: {
                body: "Hi"
            }
        },
        {
            path: "/id/90",
            expect: {
                body: "90"
            }
        },
        {
            path: "/a/b",
            expect: {
                statusCode: 404
            }
        },
        {
            path: "/json",
            method: "POST",
            expect: { 
                body: JSON.stringify(body) 
            }
        }
    ],
    scripts: [
        { file: "time.ts" },
        { file: "os.ts" }
    ],
    command: {
        connections: 500,
        duration: 10,
        fasthttp: true
    },
    env: {
        NODE_ENV: "production"
    }
}