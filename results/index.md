Bun: 1.0.3

Tested at: 23:13, September 26th, 2023

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
### GET `/id/54?name=meM`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/12?name=8q8` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.4](/results/main/Stric) | 44712.60 | 48014.04 | 46375.02 | 46427.87 | 47045.60 | 35700.48 |
| [Vix 0.0.7](/results/main/Vix) | 44389.67 | 47678.04 | 45929.74 | 45142.51 | 46312.84 | 36885.22 |
| [Elysia 0.7.2](/results/main/Elysia) | 43664.99 | 47525.10 | 45976.46 | 42331.55 | 45868.44 | 36623.39 |
| [Hono 3.7.2](/results/main/Hono) | 41909.99 | 47199.87 | 45692.57 | 40708.73 | 41611.47 | 34337.30 |
| [Grace 0.3.9](/results/main/Grace) | 30767.75 | 35141.81 | 32660.92 | 27535.90 | 32787.56 | 25712.54 |