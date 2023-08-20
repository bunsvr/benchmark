Bun: 0.7.3

Tested at: 13:05, August 20th, 2023

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
### GET `/id/94?name=nn8`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/18?name=J3h` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/Stric) | 52397.40 | 54833.42 | 53338.12 | 51159.38 | 53600.10 | 49055.97 |
| [Bun 0.7.3](/results/Bun) | 51540.82 | 54926.19 | 52573.49 | 48596.64 | 52855.37 | 48752.42 |
| [Vixeny 0.0.6](/results/Vixeny) | 51353.17 | 54359.93 | 52610.87 | 50251.53 | 50921.25 | 48622.25 |
| [Elysia 0.6.10](/results/Elysia) | 51037.95 | 53862.94 | 52177.78 | 50902.07 | 51168.74 | 47078.21 |
| [Hono 3.4.3](/results/Hono) | 47501.07 | 53053.92 | 51381.67 | 44208.88 | 45965.26 | 42895.63 |
| [Deno 1.36.1](/results/Deno) | 31914.24 | 33461.94 | 33389.49 | 30785.98 | 38414.16 | 23519.62 |
| [Fastify 4.21.0](/results/Fastify) | 18442.54 | 19860.29 | 20168.77 | 19135.39 | 17529.74 | 15518.49 |