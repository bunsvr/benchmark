Bun: 0.6.12

Tested at: 23:22, July 7th, 2023

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
| Stric 3.2.0 | 54466.61 | 60084.95 | 52282.43 | 55317.64 | 50181.41 |
| Bun | 54233.27 | 59916.09 | 51020.59 | 55877.07 | 50119.33 |
| Elysia 0.5.20 | 52952.30 | 58024.52 | 52366.84 | 53218.96 | 48198.89 |
| Vixeny 0.0.6 | 52525.49 | 58584.21 | 49170.52 | 53781.99 | 48565.24 |
| Hono 3.2.7 | 48672.06 | 55030.32 | 48006.46 | 46340.16 | 45311.29 |
| Deno | 34638.32 | 36949.49 | 34266.55 | 39467.60 | 27869.65 |
| Node | 29391.90 | 31075.44 | 29402.68 | 34183.27 | 22906.20 |