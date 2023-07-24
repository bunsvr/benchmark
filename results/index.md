Bun: 0.7.0

Tested at: 11:14, July 24th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/18?name=bnP`
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
| Name | Average | GET `/` | GET `/id/33?name=ws2` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55997.38 | 61140.82 | 53830.27 | 56910.18 | 52108.25 |
| [Bun 0.7.0](/results/Bun) | 55915.67 | 61021.16 | 50609.08 | 60092.51 | 51939.91 |
| [Vixeny 0.0.6](/results/Vixeny) | 55558.92 | 61148.15 | 54391.59 | 55898.26 | 50797.68 |
| [Elysia 0.5.23](/results/Elysia) | 54527.63 | 60360.53 | 52108.75 | 54466.27 | 51174.97 |
| [Hono 3.3.2](/results/Hono) | 50877.83 | 57265.54 | 49675.40 | 48285.56 | 48284.82 |
| [Deno 1.35.1](/results/Deno) | 30430.08 | 32283.39 | 30339.70 | 34488.75 | 24608.49 |
| [Node 20.0.0](/results/Node) | 26510.97 | 28146.54 | 26866.58 | 30235.97 | 20794.80 |