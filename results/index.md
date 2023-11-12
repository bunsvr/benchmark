Bun: 1.0.11

Tested at: 10:00, November 12th, 2023

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
### GET `/api/id/53?name=n6N`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/71?name=LmR` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45412.87 | 48533.73 | 48260.86 | 47387.99 | 37468.89 |
| [Vix 0.0.7](/results/main/Vix) | 44860.13 | 48094.32 | 48378.27 | 46382.15 | 36585.78 |
| [Elysia 0.7.17](/results/main/Elysia) | 43815.44 | 48671.07 | 45000.99 | 44410.51 | 37179.21 |
| [Hono 3.8.3](/results/main/Hono) | 42788.43 | 48712.28 | 43193.23 | 43717.53 | 35530.69 |