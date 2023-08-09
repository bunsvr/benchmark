Bun: 0.7.3

Tested at: 21:15, August 9th, 2023

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
### GET `/id/41?name=a0j`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/87?name=DiT` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.9](/results/Stric) | 53390.88 | 57038.92 | 54102.07 | 53050.86 | 54552.39 | 48210.14 |
| [Vixeny 0.0.6](/results/Vixeny) | 52379.31 | 56022.75 | 54067.21 | 51908.00 | 52398.83 | 47499.78 |
| [Bun 0.7.3](/results/Bun) | 52160.19 | 56702.31 | 53767.72 | 49041.74 | 53639.93 | 47649.27 |
| [Elysia 0.6.3](/results/Elysia) | 51224.69 | 55136.63 | 53477.52 | 49572.64 | 51638.91 | 46297.73 |
| [Hono 3.4.1](/results/Hono) | 47789.01 | 55682.94 | 53283.28 | 44919.43 | 42989.91 | 42069.51 |
| [Deno 1.36.0](/results/Deno) | 31081.40 | 33023.76 | 32797.87 | 30680.32 | 35557.59 | 23347.48 |
| [Fastify 4.21.0](/results/Fastify) | 18198.94 | 20041.23 | 19583.21 | 18572.75 | 17484.94 | 15312.59 |