Bun: 1.0.20

Tested at: 22:36, December 31st, 2023

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
### GET `/id/95?name=Mig`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/json`
Return the response in format `${id}: ${name}`. Must include request validation in the process.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/id/35?name=Sjf` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45590.92 | 48989.59 | 47952.32 | 47773.36 | 37648.41 |
| [Elysia 0.8](/results/main/Elysia) | 44149.48 | 47920.90 | 47583.62 | 44954.67 | 36138.72 |
| [Fastify 4.25](/results/main/Fastify) | 20920.99 | 26717.65 | 23783.40 | 24189.96 | 8992.93 |