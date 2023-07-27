Bun: 0.7.0

Tested at: 22:11, July 27th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/83?name=qqF`
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
| Name | Average | GET `/` | GET `/id/73?name=xAt` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55626.51 | 60798.13 | 53232.81 | 56923.59 | 51551.51 |
| [Bun 0.7.0](/results/Bun) | 55309.25 | 61020.26 | 49937.07 | 58340.30 | 51939.37 |
| [Vixeny 0.0.6](/results/Vixeny) | 55126.00 | 60807.26 | 53912.88 | 55210.44 | 50573.41 |
| [Elysia 0.5.23](/results/Elysia) | 54499.43 | 59462.54 | 52562.69 | 55002.26 | 50970.22 |
| [Hono 3.3.2](/results/Hono) | 50812.06 | 56450.49 | 49794.85 | 47854.35 | 49148.56 |
| [Deno 1.35.3](/results/Deno) | 30403.68 | 32303.66 | 30375.85 | 34322.56 | 24612.65 |
| [Node 20.0.0](/results/Node) | 26820.57 | 28238.88 | 26797.51 | 31245.28 | 21000.62 |