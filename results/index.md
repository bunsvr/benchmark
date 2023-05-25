Bun: 0.6.3

Tested at: 22:50, May 25th, 2023

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
Should return a response with `404` or `204` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 10
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 30802.85 | 34410.75 | 29636.51 | 35492.03 | 23672.12 |
| Elysia 0.5.3 | 27937.21 | 30915.54 | 28884.47 | 29171.48 | 22777.33 |
| Hono 3.2.1 | 23638.99 | 28131.81 | 24911.14 | 21306.66 | 20206.33 |