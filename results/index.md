Bun: 0.7.2

Tested at: 22:18, August 6th, 2023

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
### GET `/id/41?name=70M`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 25s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/83?name=qU3` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.4](/results/Stric) | 52440.73 | 56002.86 | 53836.65 | 51383.40 | 54007.04 | 46973.72 |
| [Bun 0.7.2](/results/Bun) | 52252.89 | 56420.96 | 53503.18 | 50335.19 | 54002.04 | 47003.06 |
| [Vixeny 0.0.6](/results/Vixeny) | 51606.47 | 55503.35 | 54056.67 | 51214.63 | 52339.78 | 44917.94 |
| [Elysia 0.6.0](/results/Elysia) | 51466.70 | 55865.06 | 53121.92 | 50401.70 | 52735.60 | 45209.22 |
| [Hono 3.3.2](/results/Hono) | 47968.31 | 54785.44 | 52808.42 | 45347.42 | 44148.72 | 42751.56 |
| [Deno 1.36.0](/results/Deno) | 34747.99 | 36535.81 | 36303.58 | 34313.44 | 39126.84 | 27460.26 |
| [Fastify 4.21.0](/results/Fastify) | 19427.59 | 20006.42 | 21654.99 | 20029.20 | 18914.03 | 16533.31 |