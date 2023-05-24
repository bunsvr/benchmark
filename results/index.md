Bun: 0.6.3

Tested at: 06:05, May 25th, 2023

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
- Duration: 40
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 33681.21 | 36656.02 | 30770.25 | 38800.53 | 28498.06 |
| Elysia 0.5.3 | 30865.57 | 34792.97 | 29739.78 | 29893.87 | 29035.66 |
| Hono 3.2.1 | 24948.24 | 30329.86 | 24738.66 | 21917.00 | 22807.44 |