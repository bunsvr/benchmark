Bun: 1.0.18

Tested at: 23:43, December 14th, 2023

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
### GET `/api/id/52?name=pWA`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/39?name=WJV` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 44824.97 | 50243.86 | 47856.05 | 46171.21 | 35028.77 |
| [Vix 0.0.7](/results/main/Vix) | 44518.03 | 50170.34 | 47038.98 | 45601.67 | 35261.14 |
| [Elysia 0.7](/results/main/Elysia) | 43930.82 | 49081.65 | 45801.75 | 45033.77 | 35806.12 |
| [Bunicorn 0.0](/results/main/Bunicorn) | 38702.99 | 45410.04 | 39124.18 | 38354.77 | 31922.96 |
| [Hono 3.11](/results/main/Hono) | 38484.59 | 45197.44 | 36049.63 | 40103.74 | 32587.55 |