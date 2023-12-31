Bun: 1.0.20

Tested at: 20:52, December 31st, 2023

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
### GET `/api/id/7?name=Tys`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the response in format `${id}: ${name}`. Must include request validation in the process.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/59?name=wvN` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45499.82 | 48423.83 | 47922.43 | 47816.83 | 37836.19 |
| [Elysia 0.8](/results/main/Elysia) | 43776.75 | 47800.66 | 47264.47 | 43231.20 | 36810.65 |