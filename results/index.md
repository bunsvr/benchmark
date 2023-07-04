Bun: 0.6.12

Tested at: 22:52, July 4th, 2023

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
| Bun | 54571.04 | 59520.14 | 51830.41 | 55977.74 | 50955.88 |
| Stric 3.2.0 | 54452.13 | 59166.80 | 53312.18 | 54861.03 | 50468.50 |
| Elysia 0.5.20 | 53560.10 | 58598.75 | 52672.28 | 53444.99 | 49524.37 |
| Vixeny 0.0.6 | 53394.04 | 59137.50 | 50551.28 | 54837.63 | 49049.73 |
| Hono 3.2.7 | 49669.60 | 55212.37 | 49105.38 | 47486.11 | 46874.55 |
| Deno | 34491.61 | 35838.55 | 34596.34 | 39624.13 | 27907.43 |
| Node | 29694.47 | 31353.64 | 30396.37 | 34141.45 | 22886.42 |
| HTTP | 7451.36 | 13846.30 | 6843.84 | 5686.27 | 3429.02 |