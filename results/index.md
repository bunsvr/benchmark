Bun: 1.0.5

Tested at: 08:39, October 12th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/94?name=si6`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/57?name=qRO` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.2](/results/main/Stric) | 44458.99 | 48475.96 | 47698.11 | 37202.89 |
| [Vix 0.0.7](/results/main/Vix) | 44113.28 | 47727.90 | 47187.85 | 37424.10 |
| [Elysia 0.7.15](/results/main/Elysia) | 42934.45 | 47907.02 | 44338.93 | 36557.39 |
| [Hono 3.7.2](/results/main/Hono) | 42084.39 | 48974.05 | 41623.86 | 35655.26 |
| [Grace 0.3.9](/results/main/Grace) | 32324.44 | 37583.60 | 31437.24 | 27952.48 |