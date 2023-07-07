Bun: 0.6.12

Tested at: 18:35, July 7th, 2023

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
| Stric 3.2.0 | 54446.22 | 60098.46 | 52484.90 | 55179.27 | 50022.25 |
| Bun | 54212.81 | 60392.25 | 51581.69 | 55781.19 | 49096.11 |
| Elysia 0.5.20 | 53522.43 | 59326.17 | 52405.75 | 53655.37 | 48702.41 |
| Vixeny 0.0.6 | 51928.14 | 57754.95 | 48071.33 | 53817.67 | 48068.61 |
| Hono 3.2.7 | 48953.36 | 54997.85 | 49408.61 | 46160.22 | 45246.76 |
| Deno | 34726.65 | 37235.42 | 34305.07 | 39484.55 | 27881.57 |
| Node | 29397.31 | 30943.81 | 30183.56 | 33784.28 | 22677.61 |