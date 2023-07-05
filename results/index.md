Bun: 0.6.12

Tested at: 13:32, July 5th, 2023

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
| Bun | 54288.38 | 60040.85 | 51098.37 | 55743.83 | 50270.46 |
| Stric 3.2.0 | 54146.29 | 59397.68 | 52619.24 | 54311.85 | 50256.41 |
| Elysia 0.5.20 | 53251.26 | 58374.08 | 52369.79 | 53444.98 | 48816.19 |
| Vixeny 0.0.6 | 52128.69 | 57654.38 | 49152.50 | 54163.55 | 47544.35 |
| Hono 3.2.7 | 49476.69 | 55758.73 | 50505.92 | 46310.63 | 45331.50 |
| Deno | 34864.74 | 37200.82 | 34641.58 | 39596.77 | 28019.79 |
| Node | 29262.35 | 30735.25 | 30384.78 | 33642.20 | 22287.16 |