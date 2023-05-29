Bun: 0.6.3

Tested at: 18:20, May 29th, 2023

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
- Duration: 30
- Using `fasthttp`: `true`

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.1.x | 31568.32 | 35867.08 | 30511.11 | 31878.53 | 28016.57 |
| Elysia 0.5.8 | 29985.30 | 33662.72 | 29161.82 | 29610.26 | 27506.41 |
| Hono 3.2.1 | 23979.92 | 29232.37 | 23822.25 | 21292.33 | 21572.75 |