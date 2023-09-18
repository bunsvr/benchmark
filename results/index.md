Bun: 1.0.2

Tested at: 23:26, September 18th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/api/hi`
Should return `Welcome` as a response.
### GET `/id/34?name=UGe`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1000
- Duration: 25s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/82?name=lZK` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 45162.67 | 48266.48 | 47264.72 | 46231.74 | 47103.01 | 36947.41 |
| [Vix 0.0.7](/results/main/Vix) | 44919.01 | 47522.12 | 46566.05 | 46163.88 | 46751.82 | 37591.18 |
| [Elysia 0.6.24](/results/main/Elysia) | 44399.27 | 48551.60 | 47207.03 | 41960.58 | 46687.72 | 37589.41 |
| [Fastify 4.21.0](/results/main/Fastify) | 19738.03 | 21202.43 | 21734.39 | 20092.79 | 19366.39 | 16294.15 |
| [Express 4.18.2](/results/main/Express) | 7906.07 | 9132.33 | 8922.92 | 8370.37 | 7074.27 | 6030.47 |