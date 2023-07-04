Bun: 0.6.12

Tested at: 06:36, July 5th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/90?name=bun`
Should return the `id` parameter value and the query value, for example `1 a` when the request path is `/id/1?name=a`.
### GET `/a/b`
Should return a response with `404` status code.
### POST `/json`
Return the request body with `Content-Type` set to `application/json`.
### Info
- Connections: 500
- Requests: 1000000
- Using `fasthttp`: `true`
- Results are measured in requests per second.

## Results
| Name | Average | GET `/` | GET `/id/90?name=bun` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.0 | 54136.43 | 59610.64 | 52981.37 | 54283.39 | 49670.31 |
| Elysia 0.5.20 | 53088.07 | 58304.77 | 52357.70 | 53231.93 | 48457.90 |
| Bun | 53075.79 | 59753.19 | 48077.62 | 55660.12 | 48812.25 |
| Vixeny 0.0.6 | 51685.11 | 57195.46 | 48389.46 | 53459.46 | 47696.06 |
| Hono 3.2.7 | 49436.69 | 55805.11 | 49690.71 | 46983.60 | 45267.32 |
| Deno | 34771.32 | 37228.91 | 34422.30 | 39767.29 | 27666.80 |
| Node | 29618.19 | 31591.02 | 30246.48 | 34271.91 | 22363.37 |
| HTTP | 22808.91 | 26542.87 | 23734.24 | 26899.76 | 14058.78 |