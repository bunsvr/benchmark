Bun: 1.0.5

Tested at: 08:10, October 12th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/96?name=WIc`
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
| Name | Average | GET `/` | GET `/id/39?name=OCI` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.2](/results/main/Stric) | 44058.77 | 47639.22 | 46560.05 | 46110.47 | 35925.36 |
| [Vix 0.0.7](/results/main/Vix) | 43800.69 | 46480.79 | 46285.97 | 45384.30 | 37051.71 |
| [Elysia 0.7.15](/results/main/Elysia) | 42528.34 | 46548.55 | 43732.66 | 43380.82 | 36451.32 |
| [Hono 3.7.2](/results/main/Hono) | 40353.37 | 46542.88 | 40174.16 | 39887.75 | 34808.70 |
| [Grace 0.3.9](/results/main/Grace) | 32200.16 | 36000.82 | 31178.33 | 34143.83 | 27477.65 |