import body from 'body.json';
import { Config } from 'lib/types';

/** Root directory of the benchmark (no trailing slash) */
export const rootDir = import.meta.dir;

export default {
    boot: 5000,
    tests: [
        {
            path: '/',
            expect: {
                body: 'Hi'
            },
            description: 'Should return `Hi` as a response.'
        },
        {
            path: '/id/90?name=bun',
            expect: {
                body: '90 bun'
            },
            description: 'Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.' 
        },
        {
            path: '/a/b',
            expect: {
                statusCode: 404
            },
            description: 'Should return a response with `404` status code.'
        },
        {
            path: '/json',
            method: 'POST',
            bodyFile: `${rootDir}/assets/body.json`,
            headers: {
                'Content-Type': 'application/json'
            },
            expect: { 
                body: JSON.stringify(body),
                headers: {
                    // Works for all the framework that tried to put a freaking space between ; and charset
                    'Content-Type': [
                        'application/json', 
                        'application/json;charset=utf-8', 
                        'application/json;charset=UTF-8', 
                        'application/json; charset=utf-8', 
                        'application/json; charset=UTF-8'
                    ]
                }
            },
            description: 'Return the request body with `Content-Type` set to `application/json`.'
        }
    ],
    scripts: [
        { file: 'time.ts' },
        { file: 'detail.ts' }
    ],
    command: {
        connections: 500,
        requests: 1000000,
        fasthttp: true,
        timeout: '10s'
    },
    cli: Bun.which('bombardier')
} as Config;
