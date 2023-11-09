Bun: 1.0.11

Tested at: 21:33, November 9th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/55?name=sVL`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/27?name=3Hn` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 44851.87 | 48384.02 | 48336.19 | 37835.39 |
| [Vix 0.0.7](/results/main/Vix) | 44547.26 | 48786.64 | 47792.93 | 37062.22 |
| [Elysia 0.7.17](/results/main/Elysia) | 43801.35 | 48656.82 | 45758.09 | 36989.13 |
| [Hono 3.8.3](/results/main/Hono) | 42814.69 | 48968.52 | 43695.23 | 35780.32 |
| [Grace 0.3.15](/results/main/Grace) | 31702.62 | 37106.17 | 30703.83 | 27297.85 |