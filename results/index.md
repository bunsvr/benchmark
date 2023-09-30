Bun: 1.0.3

Tested at: 22:22, September 30th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/72?name=yEp`
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
| Name | Average | GET `/` | GET `/id/62?name=Tdl` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.6](/results/main/Stric) | 44891.73 | 47716.99 | 46409.79 | 46951.22 | 38488.91 |
| [Vix 0.0.7](/results/main/Vix) | 44386.82 | 47913.26 | 45471.55 | 47261.93 | 36900.53 |
| [Elysia 0.7.15](/results/main/Elysia) | 42981.74 | 47969.01 | 43245.86 | 44488.43 | 36223.65 |
| [Hono 3.7.2](/results/main/Hono) | 41268.64 | 47713.41 | 40710.94 | 40390.58 | 36259.61 |
| [Grace 0.3.9](/results/main/Grace) | 33630.15 | 38477.66 | 33473.91 | 34971.57 | 27597.47 |