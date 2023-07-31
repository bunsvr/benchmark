Bun: 0.7.1

Tested at: 09:58, July 31st, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/57?name=GWg`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 25s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/2?name=Lfc` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.3.4](/results/Stric) | 52533.42 | 57185.92 | 52488.94 | 53207.62 | 47251.21 |
| [Bun 0.7.1](/results/Bun) | 52287.53 | 56201.91 | 51314.27 | 55031.21 | 46602.75 |
| [Vixeny 0.0.6](/results/Vixeny) | 51509.89 | 56683.99 | 51696.39 | 52913.81 | 44745.35 |
| [Elysia 0.5.25](/results/Elysia) | 51457.01 | 55470.10 | 51700.32 | 53050.38 | 45607.24 |
| [Hono 3.3.2](/results/Hono) | 47937.31 | 55074.66 | 48757.69 | 45348.51 | 42568.38 |
| [Deno 1.35.3](/results/Deno) | 34576.44 | 36677.68 | 34591.03 | 39710.25 | 27326.81 |
| [Node 20.0.0](/results/Node) | 28531.75 | 30523.95 | 28954.78 | 33019.63 | 21628.65 |