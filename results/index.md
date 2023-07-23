Bun: 0.7.0

Tested at: 19:22, July 23rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/64?name=bhP`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 5000
- Requests: 2000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/99?name=khk` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55720.75 | 60419.78 | 53711.67 | 56479.01 | 52272.53 |
| [Vixeny 0.0.6](/results/Vixeny) | 54818.03 | 59957.86 | 53198.26 | 55291.73 | 50824.27 |
| [Bun 0.7.0](/results/Bun) | 54767.24 | 59478.11 | 50040.76 | 57886.51 | 51663.57 |
| [Elysia 0.5.23](/results/Elysia) | 54124.22 | 59059.21 | 51394.69 | 54817.82 | 51225.18 |
| [Hono 3.3.2](/results/Hono) | 51126.97 | 56910.02 | 49604.20 | 48635.30 | 49358.35 |
| [Deno 1.35.1](/results/Deno) | 30352.21 | 32279.86 | 30302.11 | 34138.98 | 24687.90 |
| [Node 20.0.0](/results/Node) | 26883.34 | 28203.29 | 27018.42 | 31251.29 | 21060.36 |