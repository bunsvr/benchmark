Bun: 1.0.23

Tested at: 20:17, January 16th, 2024

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
### GET `/id/30?name=pnI`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/json`
Return the response in format `${id}: ${name}`. Must include request validation in the process.
### Info
- Connections: 1500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | Text | 404 | URL params | Body validation |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45580.01 | 48578.51 | 47699.93 | 47294.40 | 38747.21 |
| [Elysia 0.8](/results/main/Elysia) | 43410.22 | 46948.59 | 46244.10 | 42586.50 | 37861.68 |
| [Fastify 4.25](/results/main/Fastify) | 20628.66 | 26076.87 | 23738.52 | 23778.43 | 8920.81 |