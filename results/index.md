Bun: 0.6.14

Tested at: 21:15, July 13th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/650098?name=ydEflvBSqY`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 5000
- Requests: 2000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/47809?name=txztQ9UGlI` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.6 | 55349.79 | 61301.73 | 51997.95 | 56238.05 | 51861.45 |
| Vixeny 0.0.6 | 55245.29 | 60824.68 | 53829.40 | 55405.07 | 50922.00 |
| Bun | 55178.31 | 60768.19 | 49689.93 | 58134.88 | 52120.24 |
| Elysia 0.5.20 | 54796.85 | 60940.31 | 51615.80 | 55037.98 | 51593.31 |
| Hono 3.2.7 | 51324.86 | 57467.84 | 49904.88 | 48836.19 | 49090.52 |
| Deno 1.35.1 | 30445.31 | 32497.79 | 30029.13 | 34644.00 | 24610.34 |
| Node 20.0.0 | 26898.03 | 28514.40 | 26630.47 | 31228.50 | 21218.75 |