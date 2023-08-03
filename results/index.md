Bun: 0.7.1

Tested at: 16:37, August 3rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/73?name=1t8`
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
| Name | Average | GET `/` | GET `/id/89?name=1wN` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.0](/results/Stric) | 52664.85 | 58425.60 | 52176.34 | 53683.98 | 46373.47 |
| [Bun 0.7.1](/results/Bun) | 52502.50 | 57726.91 | 48974.37 | 55809.23 | 47499.50 |
| [Vixeny 0.0.6](/results/Vixeny) | 51637.82 | 56685.13 | 51783.92 | 52918.01 | 45164.21 |
| [Elysia 0.5.25](/results/Elysia) | 51072.42 | 55530.73 | 51518.65 | 52396.87 | 44843.42 |
| [Hono 3.3.2](/results/Hono) | 47565.78 | 55125.66 | 48148.76 | 44788.20 | 42200.52 |
| [Deno 1.35.3](/results/Deno) | 34322.24 | 36563.85 | 34282.73 | 39291.80 | 27150.59 |
| [Node 20.0.0](/results/Node) | 28051.10 | 30034.93 | 28378.64 | 31806.63 | 21984.18 |