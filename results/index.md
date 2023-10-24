Bun: 1.0.6

Tested at: 09:43, October 24th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/71?name=L9w`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/5?name=Ne4` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.4](/results/main/Stric) | 45471.03 | 49129.95 | 48973.15 | 38310.00 |
| [Vix 0.0.7](/results/main/Vix) | 44311.63 | 48189.07 | 46717.18 | 38028.65 |
| [Elysia 0.7.17](/results/main/Elysia) | 43851.77 | 48109.24 | 45342.47 | 38103.61 |
| [Hono 3.8.3](/results/main/Hono) | 42387.21 | 48686.79 | 42617.33 | 35857.50 |
| [Grace 0.3.15](/results/main/Grace) | 31972.53 | 37408.14 | 31088.64 | 27420.82 |