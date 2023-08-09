Bun: 0.7.3

Tested at: 18:16, August 9th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/api/hi`
Should return `Welcome` as a response.
### GET `/id/23?name=oZO`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/84?name=VOR` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.7](/results/Stric) | 52588.62 | 56607.11 | 52951.27 | 51506.46 | 54040.57 | 47837.67 |
| [Vixeny 0.0.6](/results/Vixeny) | 52277.45 | 56295.78 | 53715.21 | 51303.26 | 52146.86 | 47926.15 |
| [Elysia 0.6.3](/results/Elysia) | 51907.51 | 55446.53 | 54013.14 | 51524.46 | 52347.69 | 46205.73 |
| [Bun 0.7.3](/results/Bun) | 51889.56 | 55977.96 | 53349.34 | 48572.77 | 53423.95 | 48123.78 |
| [Hono 3.4.1](/results/Hono) | 47048.02 | 53951.27 | 51941.18 | 43939.35 | 42679.80 | 42728.50 |
| [Deno 1.36.0](/results/Deno) | 31309.66 | 33253.39 | 33126.40 | 30890.21 | 35357.18 | 23921.13 |
| [Fastify 4.21.0](/results/Fastify) | 17941.59 | 19286.62 | 19461.29 | 18256.14 | 17283.76 | 15420.15 |