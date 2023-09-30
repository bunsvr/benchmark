Bun: 1.0.3

Tested at: 19:59, September 30th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/63?name=2g9`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/api/js`
Should return a response with `404` status code.
### POST `/api/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Duration: 15s
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/1?name=PfR` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.6](/results/main/Stric) | 15944.23 | 17397.70 | 16254.42 | 16582.80 | 13541.99 |
| [Vix 0.0.7](/results/main/Vix) | 15842.73 | 17316.34 | 16187.86 | 16456.84 | 13409.90 |
| [Elysia 0.7.15](/results/main/Elysia) | 15707.77 | 16844.33 | 16234.38 | 16355.88 | 13396.50 |
| [Hono 3.7.2](/results/main/Hono) | 15102.45 | 16213.67 | 15652.62 | 15567.61 | 12975.91 |
| [Grace 0.3.9](/results/main/Grace) | 11586.06 | 13581.80 | 11169.75 | 11831.60 | 9761.10 |