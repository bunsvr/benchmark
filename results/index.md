Bun: 0.6.3

Tested at: 13:45, May 28th, 2023

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
| Stric 2.1.0 | 31842.48 | 36315.22 | 30638.48 | 32142.54 | 28273.69 |
| Elysia 0.5.8 | 30489.51 | 34519.82 | 29839.09 | 30066.87 | 27532.26 |
| Hono 3.2.1 | 24989.47 | 30853.47 | 25171.26 | 21983.69 | 21949.44 |