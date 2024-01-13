import body from 'body.json';
import { Config } from 'lib/types';
import { randomString, randomNum } from 'lib/utils/config';

/** Root directory of the benchmark (no trailing slash) */
export const rootDir = import.meta.dir;

export default {
    env: {
        'NODE_ENV': 'production',
        // JSC flags
        'BUN_JSC_jitPolicyScale': '0.0',
        'BUN_JSC_thresholdForOptimizeSoon': '0.0',
        'BUN_JSC_thresholdForJITSoon': '0.0'
    },
    boot: 8000,
    tests: [
        {
            name: 'Text',
            path: '/',
            expect: {
                body: 'Hi'
            },
            description: 'Should return `Hi` as a response.'
        },
        {
            name: '404',
            path: '/a/b',
            expect: {
                statusCode: 404
            },
            description: 'Should return a response with status code 404.'
        },
        {
            name: 'URL params',
            path: `/id/${randomNum}?name=${randomString}`,
            expect: {
                body: `${randomNum} ${randomString}`
            },
            description: 'Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.'
        },
        {
            name: 'Body validation',
            path: '/json',
            method: 'POST',
            bodyFile: `${rootDir}/assets/body.json`,
            headers: {
                'Content-Type': 'application/json'
            },
            expect: {
                body: `${body.id}: ${body.name}`
            },
            description: 'Return the response in format `${id}: ${name}`. Must include request validation in the process.'
        }
    ],
    scripts: [
        { file: 'time.ts' },
        { file: 'detail.ts' }
    ],
    command: {
        connections: 500,
        duration: '30s',
        fasthttp: true,
        timeout: '10s'
    },
    cli: Bun.which('bombardier')
} as Config;
