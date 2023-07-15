Bun: 0.6.14

Tested at: 07:05, July 15th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/481518?name=TkYBtIcOeU`
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
| Name | Average | GET `/` | GET `/id/661323?name=VwuASTahHv` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 56246.40 | 62561.82 | 52302.58 | 57721.60 | 52399.61 |
| Vixeny 0.0.6 | 55459.42 | 61892.49 | 53839.14 | 55468.27 | 50637.76 |
| Bun 0.6.14 | 55331.86 | 60983.89 | 49013.11 | 59497.44 | 51832.98 |
| Elysia 0.5.20 | 53931.35 | 59131.92 | 51337.22 | 54082.52 | 51173.75 |
| Hono 3.2.7 | 50975.07 | 56760.58 | 49389.90 | 48651.52 | 49098.26 |
| Deno 1.35.1 | 30386.24 | 32336.72 | 29768.44 | 34575.18 | 24864.63 |
| Node 20.0.0 | 26395.68 | 28128.48 | 26030.21 | 30771.79 | 20652.23 |