Bun: 1.0.18

Tested at: 13:20, December 16th, 2023

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
### GET `/api/id/27?name=uMK`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/54?name=Mnc` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45614.83 | 48888.21 | 48215.30 | 47596.22 | 37759.60 |
| [Vix 0.0](/results/main/Vix) | 44735.14 | 48683.02 | 46457.72 | 46782.85 | 37016.97 |
| [Elysia 0.7](/results/main/Elysia) | 44000.16 | 48344.62 | 45376.74 | 44610.41 | 37668.86 |
| [Bunicorn 0.0](/results/main/Bunicorn) | 39244.29 | 44345.44 | 41245.78 | 38508.39 | 32877.54 |
| [Hono 3.11](/results/main/Hono) | 39170.99 | 45561.52 | 37040.89 | 41190.25 | 32891.31 |