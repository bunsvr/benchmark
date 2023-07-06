Bun: 0.6.12

Tested at: 19:33, July 6th, 2023

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
| Stric 3.2.0 | 53837.98 | 59040.86 | 52421.59 | 53714.24 | 50175.22 |
| Bun | 53522.56 | 58518.29 | 50534.24 | 55153.16 | 49884.56 |
| Elysia 0.5.20 | 52660.78 | 57603.23 | 52319.81 | 52454.92 | 48265.15 |
| Vixeny 0.0.6 | 51419.83 | 57209.15 | 47025.04 | 53545.86 | 47899.26 |
| Hono 3.2.7 | 49750.57 | 55559.36 | 50585.96 | 47767.22 | 45089.72 |
| Deno | 34479.96 | 35853.53 | 34522.58 | 39844.23 | 27699.52 |
| Node | 29102.35 | 31097.13 | 30074.80 | 33218.26 | 22019.23 |