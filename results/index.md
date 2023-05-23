Bun: 0.6.3

Tested at: 23:14, May 23rd, 2023

## OS Details
- Cores: 4
- Model: Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz
- OS: Linux
- System memory: 3.95GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/90`
Should return the `id` parameter value.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 60
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 30461.03 | 34710.09 | 29168.55 | 30250.73 | 27714.75 |
| Elysia 0.5.2 | 29452.25 | 33858.41 | 27956.16 | 28898.01 | 27096.41 |
| Hono 3.2.1 | 23797.14 | 28491.53 | 23361.24 | 20831.03 | 22504.74 |