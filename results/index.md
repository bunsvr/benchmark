Bun: 1.0.0

Tested at: 05:48, September 9th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/api/hi`
Should return `Welcome` as a response.
### GET `/id/43?name=0t5`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 1000
- Duration: 25s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/61?name=O1Y` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.7](/results/main/Stric) | 45816.17 | 48502.32 | 47160.20 | 46817.86 | 47520.27 | 39080.20 |
| [Elysia 0.6.19](/results/main/Elysia) | 44939.80 | 48071.32 | 47055.21 | 43989.98 | 47166.10 | 38416.40 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 44906.08 | 48091.01 | 46649.50 | 45449.04 | 46819.57 | 37521.28 |
| [Fastify 4.21.0](/results/main/Fastify) | 23578.85 | 25971.88 | 25854.67 | 24831.27 | 22669.00 | 18567.42 |
| [Express 4.18.2](/results/main/Express) | 7970.02 | 9073.43 | 8981.43 | 8382.89 | 7167.82 | 6244.55 |