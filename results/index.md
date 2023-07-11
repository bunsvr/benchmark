Bun: 0.6.13

Tested at: 22:41, July 11th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/90?name=bun`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Requests: 1000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90?name=bun` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.0 | 55004.68 | 62268.88 | 51660.82 | 55742.72 | 50346.29 |
| Bun | 54583.01 | 60760.75 | 51193.23 | 56086.81 | 50291.27 |
| Vixeny 0.0.6 | 53825.24 | 60866.15 | 50028.76 | 55629.01 | 48777.05 |
| Elysia 0.5.20 | 53795.76 | 59755.98 | 51815.84 | 54415.36 | 49195.85 |
| Hono 3.2.7 | 49758.16 | 56146.02 | 50177.21 | 47670.25 | 45039.16 |
| Deno | 34676.31 | 36899.40 | 34391.50 | 39585.26 | 27829.07 |
| Node | 29406.23 | 30518.77 | 29670.95 | 34898.19 | 22537.02 |