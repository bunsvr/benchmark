Bun: 1.0.13

Tested at: 22:57, November 20th, 2023

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
### GET `/api/id/4?name=eih`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/49?name=3vI` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45827.24 | 48959.11 | 48731.40 | 48533.24 | 37085.21 |
| [Vix 0.0.7](/results/main/Vix) | 45412.01 | 48523.89 | 47991.24 | 47735.27 | 37397.63 |
| [Elysia 0.7.17](/results/main/Elysia) | 44003.60 | 48353.19 | 45922.50 | 44560.72 | 37177.99 |
| [Hono 3.8.3](/results/main/Hono) | 42642.50 | 48934.42 | 42582.82 | 43215.62 | 35837.16 |
| [Bunicorn 0.0.19](/results/main/Bunicorn) | 39660.28 | 44846.54 | 41001.29 | 39862.22 | 32931.08 |