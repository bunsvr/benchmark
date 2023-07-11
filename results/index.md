Bun: 0.6.13

Tested at: 20:56, July 11th, 2023

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
- Requests: 100000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90?name=bun` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Bun | 19695.01 | 22134.83 | 17340.93 | 20541.19 | 18763.08 |
| Stric 3.2.0 | 19419.26 | 21620.67 | 17903.94 | 19549.83 | 18602.60 |
| Vixeny 0.0.6 | 19299.46 | 22190.49 | 16770.48 | 20541.30 | 17695.57 |
| Elysia 0.5.20 | 18469.56 | 20590.44 | 17034.13 | 18676.52 | 17577.16 |
| Hono 3.2.7 | 17440.05 | 19623.00 | 17082.74 | 16693.70 | 16360.76 |
| Deno | 14660.28 | 15738.14 | 15332.92 | 16819.70 | 10750.38 |
| Node | 9651.60 | 9829.70 | 10100.36 | 10857.67 | 7818.67 |