Bun: 0.7.3

Tested at: 13:35, August 21st, 2023

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
### GET `/id/55?name=BAB`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/0?name=01U` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/main/Stric) | 49798.46 | 52130.91 | 50632.17 | 48165.28 | 51362.53 | 46701.43 |
| [Vixeny 0.0.6](/results/main/Vixeny) | 48885.09 | 51399.58 | 49718.50 | 47950.19 | 48687.50 | 46669.70 |
| [Elysia 0.6.10](/results/main/Elysia) | 47909.02 | 50401.06 | 48992.43 | 46767.69 | 47765.02 | 45618.88 |
| [Fastify 4.21.0](/results/main/Fastify) | 23112.15 | 25499.25 | 25303.64 | 24457.51 | 22472.76 | 17827.59 |
| [Express 4.18.2](/results/main/Express) | 7753.88 | 8892.44 | 8708.15 | 8281.25 | 6892.88 | 5994.68 |