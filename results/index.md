Bun: 0.6.12

Tested at: 15:34, July 3rd, 2023

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
| Stric 3.1.11 | 54541.29 | 61140.50 | 52971.50 | 56336.90 | 47716.27 |
| Bun | 54363.45 | 60798.08 | 50536.34 | 57376.46 | 48742.92 |
| Elysia 0.5.20 | 53954.89 | 59703.24 | 53686.57 | 55637.63 | 46792.13 |
| Vixeny 0.0.6 | 52573.95 | 59423.57 | 49457.57 | 55025.62 | 46389.05 |
| Hono 3.2.7 | 49609.06 | 58008.91 | 50319.06 | 46717.69 | 43390.56 |
| Deno | 36459.36 | 38628.96 | 36844.62 | 41330.81 | 29033.06 |
| Node | 28196.51 | 29931.11 | 28715.28 | 33096.29 | 21043.38 |