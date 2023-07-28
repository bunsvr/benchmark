Bun: 0.7.0

Tested at: 09:02, July 28th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/6?name=lvM`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 5000
- Requests: 2000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/65?name=FfY` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55902.31 | 61276.29 | 52783.28 | 56263.45 | 53286.22 |
| [Bun 0.7.0](/results/Bun) | 55677.08 | 61000.59 | 50576.12 | 58425.40 | 52706.23 |
| [Vixeny 0.0.6](/results/Vixeny) | 54694.35 | 59738.08 | 53106.68 | 54783.10 | 51149.52 |
| [Elysia 0.5.23](/results/Elysia) | 54085.11 | 58665.05 | 51713.35 | 54108.28 | 51853.75 |
| [Hono 3.3.2](/results/Hono) | 51359.82 | 56893.57 | 50303.15 | 49120.24 | 49122.30 |
| [Deno 1.35.3](/results/Deno) | 30308.20 | 32151.74 | 30234.05 | 34330.58 | 24516.44 |
| [Node 20.0.0](/results/Node) | 27146.30 | 28383.83 | 27228.71 | 31634.87 | 21337.80 |