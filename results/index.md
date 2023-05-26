Bun: 0.6.3

Tested at: 22:08, May 26th, 2023

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
- Connections: 100
- Duration: 60
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 31715.76 | 34992.34 | 29263.45 | 35435.84 | 27171.40 |
| Elysia 0.5.3 | 29437.53 | 33900.27 | 28430.55 | 29030.51 | 26388.78 |
| Hono 3.2.1 | 23552.32 | 28992.14 | 22783.99 | 19705.54 | 22727.61 |