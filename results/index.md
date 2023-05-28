Bun: 0.6.3

Tested at: 23:11, May 27th, 2023

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
- Connections: 100
- Duration: 60
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.1.0 | 28439.82 | 33745.66 | 28227.12 | 30306.23 | 21480.27 |
| Elysia 0.5.8 | 27225.98 | 32690.27 | 27857.14 | 27929.67 | 20426.83 |
| Hono 3.2.1 | 21521.35 | 27680.42 | 21530.88 | 17914.20 | 18959.89 |