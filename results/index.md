Bun: 1.0.0

Tested at: 23:12, September 10th, 2023

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
### GET `/id/45?name=9bQ`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/94?name=0GG` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.7](/results/main/Stric) | 45274.20 | 48304.88 | 46584.18 | 47282.34 | 47043.62 | 37155.97 |
| [Elysia 0.6.19](/results/main/Elysia) | 44034.95 | 47858.70 | 46292.78 | 43773.53 | 45753.73 | 36496.00 |
| [Vix 0.0.7](/results/main/Vix) | 43922.58 | 47126.71 | 45930.29 | 44497.73 | 45816.05 | 36242.10 |
| [Fastify 4.21.0](/results/main/Fastify) | 23185.19 | 25335.32 | 25131.62 | 24554.11 | 22369.81 | 18535.11 |
| [Express 4.18.2](/results/main/Express) | 7891.01 | 8990.01 | 8904.15 | 8451.44 | 7042.01 | 6067.44 |