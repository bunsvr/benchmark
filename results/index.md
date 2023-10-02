Bun: 1.0.3

Tested at: 13:53, October 2nd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/49?name=7Hz`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/api/js`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/89?name=Kmh` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.3.0](/results/main/Stric) | 45167.80 | 48667.84 | 47044.80 | 47401.51 | 37557.05 |
| [Vix 0.0.7](/results/main/Vix) | 44709.07 | 48264.15 | 46491.24 | 46995.34 | 37085.54 |
| [Elysia 0.7.15](/results/main/Elysia) | 43409.06 | 47710.95 | 43632.90 | 44304.31 | 37988.08 |
| [Hono 3.7.2](/results/main/Hono) | 42032.14 | 48463.41 | 43375.18 | 41626.86 | 34663.12 |
| [Grace 0.3.9](/results/main/Grace) | 32807.06 | 37838.13 | 32355.63 | 33495.38 | 27539.11 |