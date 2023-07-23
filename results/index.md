Bun: 0.7.0

Tested at: 13:04, July 23rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/16?name=k5V`
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
| Name | Average | GET `/` | GET `/id/10?name=zRK` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 55800.55 | 60298.94 | 54245.92 | 56995.42 | 51661.92 |
| Bun 0.7.0 | 55765.90 | 61113.76 | 50898.36 | 59247.63 | 51803.85 |
| Vixeny 0.0.6 | 55388.56 | 61263.27 | 53297.06 | 56093.40 | 50900.53 |
| Elysia 0.5.23 | 54185.44 | 59007.80 | 51725.14 | 54744.65 | 51264.16 |
| Hono 3.3.2 | 50742.52 | 56666.84 | 49192.60 | 47920.38 | 49190.26 |
| Deno 1.35.1 | 30641.40 | 32621.77 | 30464.02 | 34757.41 | 24722.38 |
| Node 20.0.0 | 26466.40 | 28158.58 | 26468.98 | 30725.41 | 20512.64 |