Bun: 1.0.22

Tested at: 08:47, January 13th, 2024

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/a/b`
Should return a response with status code 404.
### GET `/id/78?name=V2m`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/json`
Return the response in format `${id}: ${name}`. Must include request validation in the process.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | Text | 404 | URL params | Body validation |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45362.94 | 48994.52 | 47655.80 | 47722.78 | 37078.68 |
| [Elysia 0.8](/results/main/Elysia) | 43931.19 | 47943.20 | 47449.30 | 43967.35 | 36364.90 |
| [Fastify 4.25](/results/main/Fastify) | 20770.65 | 25508.64 | 24425.32 | 24272.01 | 8876.61 |