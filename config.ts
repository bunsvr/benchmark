import body from "body.json";
import { Config } from "lib/types";

// Root directory of the benchmark
export const rootDir = import.meta.dir;

export default {
    boot: 1000,
    tests: [
        {
            path: "/",
            expect: {
                body: "Hi"
            },
            description: "Should return `Hi` as a response."
        },
        {
            path: "/id/90",
            expect: {
                body: "90"
            },
            description: "Should return the `id` parameter value." 
        },
        {
            path: "/a/b",
            expect: {
                statusCode: 404
            },
            description: "Should return a response with `404` status code."
        },
        {
            path: "/json",
            method: "POST",
            bodyFile: `${rootDir}/assets/body.json`,
            headers: {
                "Content-Type": "application/json"
            },
            expect: { 
                body: JSON.stringify(body),
                headers: {
                    // Works for all the framework that tried to put a freaking space between ; and charset
                    "Content-Type": [
                        "application/json", 
                        "application/json;charset=utf-8", 
                        "application/json;charset=UTF-8", 
                        "application/json; charset=utf-8", 
                        "application/json; charset=UTF-8"
                    ]
                }
            },
            description: "Return the request body with `Content-Type` set to `application/json`."
        }
    ],
    scripts: [
        { file: "time.ts" },
        { file: "detail.ts" }
    ],
    command: {
        connections: 500,
        duration: 30,
        fasthttp: true
    },
    env: {
        NODE_ENV: "production"
    },
    cli: "./bombardier"
} as Config;
