Bun: 1.0.3

Tested at: 22:41, September 25th, 2023

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
### GET `/id/13?name=c0d`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 20s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/68?name=cmY` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.3](/results/main/Stric) | 45198.48 | 48057.17 | 47312.15 | 45783.25 | 47244.34 | 37595.48 |
| [Vix 0.0.7](/results/main/Vix) | 44684.08 | 48012.31 | 46672.73 | 45503.74 | 46168.88 | 37062.72 |
| [Elysia 0.7.2](/results/main/Elysia) | 43690.22 | 46493.17 | 46017.96 | 42375.27 | 46116.59 | 37448.13 |
| [Hono 3.7.2](/results/main/Hono) | 42383.87 | 47528.60 | 45149.80 | 42177.75 | 42013.82 | 35049.40 |
| [Grace 0.3.9](/results/main/Grace) | 30952.17 | 33839.62 | 33776.27 | 28243.84 | 33127.02 | 25774.11 |