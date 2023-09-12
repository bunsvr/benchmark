Bun: 1.0.1

Tested at: 23:31, September 12th, 2023

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
### GET `/id/80?name=0a5`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/5?name=5LL` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.0](/results/main/Stric) | 44392.80 | 47273.90 | 45636.78 | 45935.71 | 46353.87 | 36763.73 |
| [Vix 0.0.7](/results/main/Vix) | 44152.41 | 47435.09 | 46321.78 | 44864.77 | 45394.43 | 36745.97 |
| [Elysia 0.6.19](/results/main/Elysia) | 43375.07 | 46955.33 | 45911.14 | 42214.50 | 45682.32 | 36112.05 |
| [Fastify 4.21.0](/results/main/Fastify) | 23192.94 | 25350.92 | 25067.08 | 24330.84 | 22641.32 | 18574.56 |
| [Express 4.18.2](/results/main/Express) | 7905.69 | 9020.99 | 8887.13 | 8289.49 | 7164.58 | 6166.25 |