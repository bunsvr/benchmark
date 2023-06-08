Bun: 0.6.8

Tested at: 17:54, June 8th, 2023

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
- Duration: undefined seconds
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.0.0 | 33608.51 | 37998.65 | 32172.45 | 34800.22 | 29462.73 |
| Elysia 0.5.17 | 32905.74 | 37806.30 | 32956.12 | 32601.62 | 28258.90 |