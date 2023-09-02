Bun: 0.8.1

Tested at: 19:01, September 2nd, 2023

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
### GET `/id/42?name=flv`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/12?name=QTx` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.5](/results/main/Stric) | 46263.49 | 48877.99 | 48875.59 | 47408.84 | 47730.69 | 38424.35 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 45060.48 | 48226.25 | 45809.46 | 46377.57 | 46842.32 | 38046.80 |
| [Elysia 0.6.10](/results/main/Elysia) | 44853.89 | 47927.20 | 46866.07 | 45017.10 | 46946.20 | 37512.88 |
| [Fastify 4.21.0](/results/main/Fastify) | 22632.36 | 25030.18 | 24925.94 | 23993.22 | 21829.39 | 17383.08 |
| [Express 4.18.2](/results/main/Express) | 7840.44 | 8944.50 | 8859.80 | 8259.80 | 7112.15 | 6025.97 |