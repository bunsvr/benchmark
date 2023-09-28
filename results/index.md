Bun: 1.0.3

Tested at: 09:31, September 28th, 2023

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
### GET `/id/65?name=fvN`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/81?name=weD` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.5](/results/main/Stric) | 45084.81 | 48332.75 | 46623.88 | 46072.62 | 47038.54 | 37356.26 |
| [Vix 0.0.7](/results/main/Vix) | 44269.08 | 47618.59 | 45978.74 | 45058.74 | 45608.76 | 37080.58 |
| [Elysia 0.7.2](/results/main/Elysia) | 44108.86 | 48103.29 | 46272.13 | 43246.88 | 46058.33 | 36863.69 |
| [Hono 3.7.2](/results/main/Hono) | 42564.88 | 48204.41 | 46573.03 | 40967.01 | 41434.29 | 35645.65 |
| [Grace 0.3.9](/results/main/Grace) | 31179.96 | 34796.91 | 33720.99 | 28131.19 | 33694.72 | 25555.97 |