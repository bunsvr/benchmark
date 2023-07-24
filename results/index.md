Bun: 0.7.0

Tested at: 23:11, July 24th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/1?name=OhX`
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
| Name | Average | GET `/` | GET `/id/13?name=JNb` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.0](/results/Bun) | 56626.41 | 62939.37 | 51113.84 | 60275.57 | 52176.85 |
| [Stric 3.2.7](/results/Stric) | 55632.75 | 60439.56 | 53978.62 | 55879.84 | 52232.98 |
| [Vixeny 0.0.6](/results/Vixeny) | 55138.81 | 60543.09 | 53822.90 | 55784.01 | 50405.23 |
| [Elysia 0.5.23](/results/Elysia) | 54626.29 | 60415.92 | 52020.79 | 55071.38 | 50997.07 |
| [Hono 3.3.2](/results/Hono) | 51468.34 | 57993.31 | 49951.00 | 49021.83 | 48907.23 |
| [Deno 1.35.1](/results/Deno) | 30561.69 | 32610.76 | 30499.39 | 34616.26 | 24520.33 |
| [Node 20.0.0](/results/Node) | 26739.37 | 27976.14 | 26713.86 | 31244.70 | 21022.77 |