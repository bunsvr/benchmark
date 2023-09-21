Bun: 1.0.2

Tested at: 15:49, September 21st, 2023

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
### GET `/id/86?name=NGQ`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/72?name=0yD` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 45317.71 | 47772.25 | 47557.05 | 45735.83 | 47674.42 | 37849.00 |
| [Vix 0.0.7](/results/main/Vix) | 44660.08 | 47802.95 | 47229.62 | 44694.05 | 46648.31 | 36925.45 |
| [Elysia 0.7.1](/results/main/Elysia) | 43806.02 | 47475.29 | 46114.62 | 42732.38 | 45698.38 | 37009.42 |