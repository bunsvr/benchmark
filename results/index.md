Bun: 0.8.1

Tested at: 10:00, September 2nd, 2023

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
### GET `/id/90?name=4dY`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/76?name=8W8` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.4](/results/main/Stric) | 45589.15 | 47989.13 | 47795.33 | 47048.84 | 47457.16 | 37655.30 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 44951.58 | 48347.74 | 46944.82 | 45643.39 | 46934.41 | 36887.52 |
| [Elysia 0.6.10](/results/main/Elysia) | 44193.51 | 47257.16 | 46540.29 | 44189.59 | 46243.50 | 36737.02 |
| [Fastify 4.21.0](/results/main/Fastify) | 23013.20 | 25016.20 | 25303.95 | 23518.05 | 22278.51 | 18949.29 |
| [Express 4.18.2](/results/main/Express) | 7796.25 | 8745.89 | 8890.24 | 8370.15 | 6937.15 | 6037.80 |