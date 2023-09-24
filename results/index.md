Bun: 1.0.3

Tested at: 21:17, September 24th, 2023

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
### GET `/id/65?name=eUt`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/29?name=DYq` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 44827.69 | 48017.12 | 46694.40 | 45884.78 | 47391.68 | 36150.48 |
| [Vix 0.0.7](/results/main/Vix) | 44608.92 | 47530.22 | 46279.28 | 45643.34 | 45941.37 | 37650.39 |
| [Elysia 0.7.2](/results/main/Elysia) | 43734.72 | 47221.99 | 45889.44 | 42781.14 | 45746.15 | 37034.89 |
| [Grace 0.3.9](/results/main/Grace) | 31344.80 | 35806.93 | 33806.24 | 27593.63 | 32789.40 | 26727.79 |