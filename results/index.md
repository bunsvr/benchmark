Bun: 0.7.3

Tested at: 05:53, August 24th, 2023

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
### GET `/id/73?name=tJD`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/46?name=uWF` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.2](/results/main/Stric) | 49624.10 | 51927.51 | 50064.84 | 47868.21 | 51640.45 | 46619.50 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 48677.09 | 52184.29 | 50372.65 | 46565.49 | 48475.47 | 45787.55 |
| [Elysia 0.6.10](/results/main/Elysia) | 47728.58 | 50550.06 | 48635.60 | 46876.62 | 47388.56 | 45192.06 |
| [Fastify 4.21.0](/results/main/Fastify) | 23313.47 | 25865.34 | 25464.83 | 24079.14 | 22524.02 | 18634.03 |
| [Express 4.18.2](/results/main/Express) | 7942.16 | 9013.45 | 8908.01 | 8423.72 | 7178.27 | 6187.36 |