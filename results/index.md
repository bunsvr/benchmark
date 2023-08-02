Bun: 0.7.1

Tested at: 23:01, August 2nd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/45?name=5ea`
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
| Name | Average | GET `/` | GET `/id/96?name=TOl` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.0](/results/Stric) | 52773.06 | 58365.70 | 53014.21 | 53632.10 | 46080.22 |
| [Bun 0.7.1](/results/Bun) | 52011.06 | 56798.20 | 49299.88 | 55041.53 | 46904.65 |
| [Elysia 0.5.25](/results/Elysia) | 51817.94 | 56845.06 | 51676.38 | 52997.84 | 45752.47 |
| [Vixeny 0.0.6](/results/Vixeny) | 51520.63 | 56362.58 | 51976.80 | 53045.02 | 44698.12 |
| [Hono 3.3.2](/results/Hono) | 47751.85 | 55213.58 | 48760.76 | 44737.76 | 42295.29 |
| [Deno 1.35.3](/results/Deno) | 34472.40 | 36763.01 | 34331.70 | 39423.38 | 27371.50 |
| [Node 20.0.0](/results/Node) | 28058.98 | 29381.28 | 28044.95 | 32664.49 | 22145.21 |
