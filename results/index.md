Bun: 0.6.12

Tested at: 22:00, July 4th, 2023

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
| Stric 3.2.0 | 53792.37 | 58691.63 | 52708.06 | 53971.35 | 49798.42 |
| Bun | 53537.76 | 58227.43 | 50950.10 | 54950.69 | 50022.81 |
| Elysia 0.5.20 | 52759.99 | 58486.59 | 50628.42 | 52925.54 | 48999.42 |
| Vixeny 0.0.6 | 52018.25 | 58023.15 | 47792.20 | 53644.68 | 48612.98 |
| Hono 3.2.7 | 48647.24 | 54401.70 | 48238.75 | 46438.23 | 45510.29 |
| Deno | 34422.00 | 36592.00 | 34702.33 | 39515.04 | 26878.62 |
| Node | 29692.82 | 31146.82 | 30485.24 | 33997.91 | 23141.31 |