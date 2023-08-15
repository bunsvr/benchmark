Bun: 0.7.3

Tested at: 16:54, August 15th, 2023

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
### GET `/id/56?name=68Y`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/54?name=SjY` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.11](/results/Stric) | 53111.41 | 56772.17 | 54269.52 | 51815.29 | 55040.45 | 47659.61 |
| [Bun 0.7.3](/results/Bun) | 52710.06 | 56887.32 | 54200.31 | 49857.24 | 54377.37 | 48228.08 |
| [Vixeny 0.0.6](/results/Vixeny) | 52201.34 | 55807.60 | 53418.76 | 51460.22 | 52545.90 | 47774.21 |
| [Elysia 0.6.10](/results/Elysia) | 51533.04 | 55171.70 | 53266.99 | 50753.28 | 51685.87 | 46787.34 |
| [Hono 3.4.3](/results/Hono) | 46244.38 | 50971.15 | 51853.14 | 43435.91 | 42859.55 | 42102.13 |
| [Deno 1.36.1](/results/Deno) | 31303.33 | 33181.43 | 33212.39 | 30916.51 | 35683.39 | 23522.91 |
| [Fastify 4.21.0](/results/Fastify) | 18110.71 | 19822.93 | 19372.99 | 18407.88 | 17523.21 | 15426.55 |