Bun: 0.7.3

Tested at: 22:50, August 19th, 2023

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
### GET `/id/17?name=4p4`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/10?name=LsU` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/Stric) | 54038.71 | 56843.41 | 55245.69 | 53522.25 | 56126.23 | 48455.96 |
| [Vixeny 0.0.6](/results/Vixeny) | 52652.42 | 56253.65 | 54295.29 | 52898.50 | 51770.56 | 48044.12 |
| [Bun 0.7.3](/results/Bun) | 52648.92 | 56911.46 | 54176.47 | 49555.49 | 53812.37 | 48788.83 |
| [Elysia 0.6.10](/results/Elysia) | 51858.12 | 55036.86 | 53294.71 | 51481.79 | 52136.13 | 47341.11 |
| [Hono 3.4.3](/results/Hono) | 48415.97 | 55125.49 | 53775.95 | 46295.00 | 43124.41 | 43759.01 |
| [Deno 1.36.1](/results/Deno) | 31444.59 | 33360.52 | 33470.03 | 30746.08 | 36207.77 | 23438.56 |
| [Fastify 4.21.0](/results/Fastify) | 18029.49 | 19739.86 | 19329.01 | 18352.80 | 17238.03 | 15487.74 |