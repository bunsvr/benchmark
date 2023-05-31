Bun: 0.6.5

Tested at: 22:20, May 31st, 2023

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
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.1.6 | 32769.79 | 37503.87 | 31210.66 | 32675.02 | 29689.62 |
| Elysia 0.5.11 | 30874.12 | 35308.67 | 29903.52 | 29646.22 | 28638.08 |
| Hono 3.2.1 | 25017.17 | 30500.12 | 24395.58 | 21780.74 | 23392.24 |