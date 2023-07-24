Bun: 0.7.0

Tested at: 12:59, July 24th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/95?name=lmz`
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
| Name | Average | GET `/` | GET `/id/18?name=TJd` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 56383.48 | 61809.66 | 54265.87 | 57473.78 | 51984.60 |
| [Bun 0.7.0](/results/Bun) | 56262.46 | 62273.38 | 50555.62 | 60427.81 | 51793.04 |
| [Vixeny 0.0.6](/results/Vixeny) | 55133.03 | 60733.16 | 53400.30 | 55556.78 | 50841.90 |
| [Elysia 0.5.23](/results/Elysia) | 54464.33 | 59691.11 | 52240.43 | 55075.53 | 50850.25 |
| [Hono 3.3.2](/results/Hono) | 50466.23 | 56626.32 | 49512.56 | 47152.84 | 48573.21 |
| [Deno 1.35.1](/results/Deno) | 30510.31 | 32547.80 | 30439.83 | 34403.60 | 24650.02 |
| [Node 20.0.0](/results/Node) | 26633.02 | 28130.55 | 26375.00 | 31228.40 | 20798.11 |