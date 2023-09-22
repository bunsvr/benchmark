Bun: 1.0.2

Tested at: 10:07, September 22nd, 2023

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
### GET `/id/98?name=Y6p`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/20?name=a6v` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 45596.59 | 48446.86 | 48076.48 | 46159.56 | 47538.69 | 37761.35 |
| [Vix 0.0.7](/results/main/Vix) | 44834.60 | 48215.89 | 47004.49 | 45372.81 | 46844.74 | 36735.09 |
| [Elysia 0.7.1](/results/main/Elysia) | 43753.16 | 47319.76 | 46241.75 | 42018.25 | 46282.17 | 36903.87 |