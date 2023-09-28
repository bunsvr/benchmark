Bun: 1.0.3

Tested at: 21:21, September 28th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/60?name=EHb`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/api/js`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 30s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/89?name=mUS` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.5](/results/main/Stric) | 44251.33 | 47859.33 | 45572.01 | 46682.76 | 36891.21 |
| [Vix 0.0.7](/results/main/Vix) | 43879.45 | 47919.28 | 45519.21 | 45370.24 | 36709.08 |
| [Elysia 0.7.2](/results/main/Elysia) | 43181.56 | 47263.61 | 42269.48 | 46189.10 | 37004.05 |
| [Hono 3.7.2](/results/main/Hono) | 41409.74 | 47411.68 | 42644.72 | 41321.01 | 34261.54 |
| [Grace 0.3.9](/results/main/Grace) | 29618.76 | 34362.32 | 27524.12 | 31053.27 | 25535.35 |