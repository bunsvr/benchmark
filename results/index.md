Bun: 1.0.4

Tested at: 21:55, October 5th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/44?name=wIG`
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
| Name | Average | GET `/` | GET `/id/50?name=V0n` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.0](/results/main/Stric) | 44889.93 | 48666.84 | 45386.59 | 48384.23 | 37122.06 |
| [Vix 0.0.7](/results/main/Vix) | 43993.34 | 46890.58 | 46670.92 | 46326.26 | 36085.58 |
| [Elysia 0.7.15](/results/main/Elysia) | 42059.74 | 46554.64 | 42671.43 | 43582.20 | 35430.67 |
| [Hono 3.7.2](/results/main/Hono) | 40527.17 | 47128.31 | 40540.81 | 39307.13 | 35132.42 |
| [Grace 0.3.9](/results/main/Grace) | 32174.52 | 36398.88 | 30672.58 | 34003.74 | 27622.88 |