Bun: 0.7.2

Tested at: 09:12, August 4th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/51?name=tDj`
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
| Name | Average | GET `/` | GET `/id/46?name=26I` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.1](/results/Stric) | 52410.03 | 56459.64 | 52415.92 | 53629.03 | 47135.54 |
| [Bun 0.7.2](/results/Bun) | 52292.23 | 57070.85 | 49242.65 | 55069.87 | 47785.56 |
| [Vixeny 0.0.6](/results/Vixeny) | 51678.59 | 56529.34 | 52215.87 | 52751.70 | 45217.44 |
| [Elysia 0.5.25](/results/Elysia) | 51399.43 | 56270.62 | 51346.40 | 52450.66 | 45530.04 |
| [Hono 3.3.2](/results/Hono) | 48018.71 | 55254.45 | 49736.80 | 44545.50 | 42538.10 |
| [Deno 1.35.3](/results/Deno) | 34184.19 | 36321.39 | 34094.04 | 39073.43 | 27247.92 |
| [Node 20.0.0](/results/Node) | 28010.30 | 29789.26 | 28075.51 | 32089.01 | 22087.42 |