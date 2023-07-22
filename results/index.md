Bun: 0.7.0

Tested at: 22:48, July 22nd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/61?name=C77`
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
| Name | Average | GET `/` | GET `/id/16?name=0Ry` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 56005.30 | 61210.56 | 54134.48 | 56685.39 | 51990.78 |
| Bun 0.7.0 | 55618.51 | 60721.89 | 50361.12 | 59320.94 | 52070.10 |
| Vixeny 0.0.6 | 55191.71 | 60692.97 | 53441.74 | 55909.48 | 50722.66 |
| Elysia 0.5.23 | 54544.68 | 59490.21 | 51882.63 | 55019.14 | 51786.73 |
| Hono 3.3.2 | 50732.63 | 57015.74 | 48976.06 | 47654.34 | 49284.37 |
| Deno 1.35.1 | 30456.04 | 32353.04 | 30445.64 | 34287.26 | 24738.23 |
| Node 20.0.0 | 26639.29 | 28241.17 | 26786.90 | 30716.94 | 20812.15 |