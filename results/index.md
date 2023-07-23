Bun: 0.7.0

Tested at: 14:41, July 23rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/32?name=HgR`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/4?name=B2o` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| [Stric 3.2.7](./results/Stric 3.2.7) | 54820.68 | 58586.58 | 54164.24 | 55828.44 | 50703.44 |
| [Bun 0.7.0](./results/Bun 0.7.0) | 54539.74 | 59058.86 | 51336.51 | 56912.38 | 50851.19 |
| [Vixeny 0.0.6](./results/Vixeny 0.0.6) | 54357.48 | 59185.87 | 53983.98 | 55078.50 | 49181.56 |
| [Elysia 0.5.23](./results/Elysia 0.5.23) | 53785.97 | 58375.59 | 53221.74 | 53759.92 | 49786.64 |
| [Hono 3.3.2](./results/Hono 3.3.2) | 50300.88 | 56846.56 | 50921.01 | 48006.60 | 45429.35 |
| [Deno 1.35.1](./results/Deno 1.35.1) | 30779.10 | 32877.46 | 30669.47 | 35711.95 | 23857.50 |
| [Node 20.0.0](./results/Node 20.0.0) | 28158.26 | 29107.31 | 27897.12 | 33124.95 | 22503.67 |