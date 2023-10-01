Bun: 1.0.3

Tested at: 22:33, October 1st, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/89?name=oOI`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/api/js`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/45?name=Awc` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.9](/results/main/Stric) | 44749.45 | 48127.01 | 46628.53 | 47398.83 | 36843.44 |
| [Vix 0.0.7](/results/main/Vix) | 44254.54 | 47995.11 | 45888.63 | 45856.79 | 37277.65 |
| [Elysia 0.7.15](/results/main/Elysia) | 42670.84 | 47398.57 | 42463.94 | 43552.35 | 37268.51 |
| [Hono 3.7.2](/results/main/Hono) | 41706.46 | 48525.78 | 41255.83 | 41363.50 | 35680.72 |
| [Grace 0.3.9](/results/main/Grace) | 32312.10 | 37025.80 | 31429.79 | 33319.42 | 27473.41 |