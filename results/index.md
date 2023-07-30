Bun: 0.7.1

Tested at: 20:37, July 30th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/99?name=Ytp`
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
| Name | Average | GET `/` | GET `/id/57?name=ChD` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.1](/results/Bun) | 55375.79 | 61017.06 | 49767.45 | 59607.47 | 51111.19 |
| [Stric 3.3.4](/results/Stric) | 55008.06 | 60638.58 | 52975.46 | 55467.36 | 50950.83 |
| [Elysia 0.5.23](/results/Elysia) | 53789.23 | 58365.22 | 51816.66 | 54552.72 | 50422.33 |
| [Vixeny 0.0.6](/results/Vixeny) | 53546.00 | 58265.11 | 52710.46 | 54208.91 | 48999.52 |
| [Hono 3.3.2](/results/Hono) | 49829.79 | 55753.80 | 48184.61 | 47397.21 | 47983.54 |
| [Deno 1.35.3](/results/Deno) | 30147.11 | 32008.16 | 30072.98 | 33814.10 | 24693.20 |
| [Node 20.0.0](/results/Node) | 26764.61 | 28123.50 | 26822.10 | 31267.52 | 20845.32 |