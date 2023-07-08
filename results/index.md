Bun: 0.6.12

Tested at: 23:28, July 8th, 2023

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
| Stric 3.2.0 | 54138.92 | 60440.92 | 51784.34 | 54943.82 | 49386.62 |
| Bun | 53629.96 | 59237.70 | 50421.89 | 54661.40 | 50198.86 |
| Elysia 0.5.20 | 53380.59 | 59598.65 | 51412.77 | 53585.97 | 48924.97 |
| Vixeny 0.0.6 | 52801.64 | 59026.42 | 50229.84 | 54170.25 | 47780.05 |
| Hono 3.2.7 | 49498.34 | 56075.48 | 49653.26 | 46527.98 | 45736.65 |
| Deno | 34373.61 | 36770.98 | 34244.08 | 39326.56 | 27152.84 |
| Node | 29388.09 | 30913.63 | 29546.12 | 34400.19 | 22692.42 |