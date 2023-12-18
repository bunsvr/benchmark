Bun: 1.0.18

Tested at: 16:35, December 18th, 2023

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
### GET `/api/id/59?name=KfD`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/83?name=16I` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 44962.91 | 48450.07 | 48084.17 | 46538.43 | 36778.98 |
| [Elysia 0.7](/results/main/Elysia) | 43523.57 | 48428.90 | 45613.26 | 43711.28 | 36340.84 |
| [Hono 3.11](/results/main/Hono) | 38574.88 | 44768.20 | 36465.75 | 39995.97 | 33069.61 |