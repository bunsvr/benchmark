Bun: 0.6.9

Tested at: 17:50, June 14th, 2023

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
- Requests: 5000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.0.5 | 32034.36 | 37001.82 | 30927.86 | 32481.13 | 27726.65 |
| Elysia 0.5.18 | 31044.48 | 35874.63 | 30491.18 | 30397.55 | 27414.56 |