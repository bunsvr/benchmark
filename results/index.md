Bun: 1.0.12

Tested at: 11:17, November 18th, 2023

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
### GET `/api/id/95?name=3YP`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/26?name=SfB` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45514.11 | 48406.29 | 48894.65 | 47607.89 | 37147.60 |
| [Vix 0.0.7](/results/main/Vix) | 44598.39 | 48319.45 | 47150.49 | 46425.74 | 36497.90 |
| [Elysia 0.7.17](/results/main/Elysia) | 43875.39 | 48778.78 | 45605.71 | 44789.40 | 36327.67 |
| [Hono 3.8.3](/results/main/Hono) | 42056.50 | 47668.12 | 42602.23 | 42500.69 | 35454.96 |
| [Bunicorn 0.0.19](/results/main/Bunicorn) | 39370.46 | 44616.36 | 40663.97 | 39292.67 | 32908.83 |