Bun: 0.7.2

Tested at: 13:17, August 6th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/31?name=ph0`
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
| Name | Average | GET `/` | GET `/id/27?name=Zyo` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.4](/results/Stric) | 52570.17 | 56486.02 | 52290.86 | 54455.63 | 47048.15 |
| [Bun 0.7.2](/results/Bun) | 51879.77 | 55830.25 | 49851.86 | 54441.75 | 47395.23 |
| [Vixeny 0.0.6](/results/Vixeny) | 51862.45 | 56025.35 | 52851.99 | 53144.30 | 45428.16 |
| [Elysia 0.5.25](/results/Elysia) | 51061.85 | 55588.88 | 51286.68 | 51922.17 | 45449.67 |
| [Hono 3.3.2](/results/Hono) | 48022.92 | 54520.12 | 49770.03 | 44663.52 | 43138.00 |
| [Deno 1.35.3](/results/Deno) | 34367.83 | 36408.00 | 34434.81 | 39208.52 | 27420.01 |
| [Node 20.0.0](/results/Node) | 28001.03 | 29451.87 | 28243.53 | 32184.36 | 22124.37 |
| [Fastify 4.21.0](/results/Fastify) | 19034.69 | 19746.57 | 20458.33 | 19139.60 | 16794.28 |