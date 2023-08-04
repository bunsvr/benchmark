Bun: 0.7.2

Tested at: 18:27, August 4th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/17?name=CnU`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 25s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/48?name=P7g` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.1](/results/Stric) | 52773.19 | 56843.48 | 52983.02 | 54457.44 | 46808.84 |
| [Bun 0.7.2](/results/Bun) | 52651.48 | 57456.03 | 50621.56 | 55272.73 | 47255.60 |
| [Elysia 0.5.25](/results/Elysia) | 51186.21 | 55620.26 | 50602.15 | 52408.56 | 46113.85 |
| [Vixeny 0.0.6](/results/Vixeny) | 51120.42 | 55715.04 | 51780.83 | 52357.98 | 44627.84 |
| [Hono 3.3.2](/results/Hono) | 48254.55 | 54927.51 | 49969.96 | 45440.05 | 42680.69 |
| [Deno 1.35.3](/results/Deno) | 34407.74 | 36608.26 | 34343.76 | 39455.29 | 27223.64 |
| [Node 20.0.0](/results/Node) | 28107.37 | 29321.10 | 28202.42 | 33298.82 | 21607.13 |
| [Fastify 4.21.0](/results/Fastify) | 19070.67 | 21033.85 | 19226.24 | 18768.17 | 17254.42 |