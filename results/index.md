Bun: 1.0.3

Tested at: 22:13, September 25th, 2023

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
### GET `/id/53?name=x37`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/73?name=hN1` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 44593.92 | 48183.41 | 46318.85 | 45525.19 | 46779.82 | 36162.32 |
| [Elysia 0.7.2](/results/main/Elysia) | 43667.53 | 46834.67 | 45921.59 | 42651.83 | 45970.95 | 36958.60 |
| [Vix 0.0.7](/results/main/Vix) | 43286.29 | 45410.19 | 43713.26 | 44982.76 | 45661.48 | 36663.74 |
| [Hono 3.7.2](/results/main/Hono) | 42562.09 | 47357.55 | 45918.21 | 42539.04 | 41704.77 | 35290.90 |
| [Grace 0.3.9](/results/main/Grace) | 30589.25 | 34990.88 | 32618.36 | 27249.78 | 32510.84 | 25576.38 |