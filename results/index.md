Bun: 0.6.3

Tested at: 17:30, May 25th, 2023

## OS Details
- Cores: 4
- Model: Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz
- OS: Linux
- System memory: 3.95GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/90`
Should return the `id` parameter value.
### GET `/a/b`
Should return a response with `404` or `204` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 10
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 34378.69 | 38536.37 | 31502.86 | 38150.11 | 29325.40 |
| Elysia 0.5.3 | 31950.98 | 36503.59 | 31667.89 | 31980.58 | 27651.85 |
| Hono 3.2.1 | 26527.37 | 33145.09 | 26765.46 | 23484.63 | 22714.31 |