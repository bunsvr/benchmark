import body from "body.json";
import { Config } from "lib/types";

// Root directory of the benchmark
export const rootDir = import.meta.dir;

export default {
    include: ["Stric", "Elysia"],
    boot: 5000,
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
    },
    pkg: "yarn"
} as Config;