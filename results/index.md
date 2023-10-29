Bun: 1.0.7

Tested at: 21:48, October 29th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/17?name=cMl`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/34?name=THW` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 6.0.0](/results/main/Stric) | 45017.48 | 48421.68 | 48318.50 | 38312.25 |
| [Vix 0.0.7](/results/main/Vix) | 43335.95 | 47801.58 | 45309.27 | 36897.01 |
| [Elysia 0.7.17](/results/main/Elysia) | 43154.77 | 48467.49 | 43295.76 | 37701.07 |
| [Hono 3.8.3](/results/main/Hono) | 41759.32 | 48425.31 | 41516.73 | 35335.91 |
| [Grace 0.3.15](/results/main/Grace) | 31584.57 | 36649.23 | 31391.94 | 26712.54 |