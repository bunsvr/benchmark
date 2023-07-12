Bun: 0.6.13

Tested at: 17:56, July 12th, 2023

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
- Connections: 5000
- Requests: 1600000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90?name=bun` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.4 | 56847.42 | 64186.66 | 53249.74 | 57245.98 | 52707.31 |
| Bun | 56701.32 | 64752.27 | 51014.73 | 58055.00 | 52983.30 |
| Vixeny 0.0.6 | 55631.99 | 63419.45 | 50137.59 | 57462.22 | 51508.69 |
| Elysia 0.5.20 | 54960.48 | 60782.54 | 52824.20 | 54672.90 | 51562.28 |
| Hono 3.2.7 | 50906.56 | 56625.87 | 48959.93 | 48171.51 | 49868.94 |
| Deno | 30956.44 | 33090.55 | 30921.81 | 35095.81 | 24717.60 |
| Node | 27152.67 | 28743.88 | 27639.81 | 31429.83 | 20797.17 |