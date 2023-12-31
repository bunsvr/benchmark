Bun: 1.0.20

Tested at: 12:01, December 31st, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/a/b`
Should return a response with status code 404.
### GET `/api/id/84?name=P87`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/95?name=whu` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45191.86 | 48404.85 | 47631.00 | 47203.20 | 37528.41 |
| [Elysia 0.8](/results/main/Elysia) | 44047.30 | 47939.41 | 47195.94 | 44591.21 | 36462.64 |
| [Hono 3.11](/results/main/Hono) | 38624.51 | 45305.97 | 35971.81 | 39816.45 | 33403.81 |