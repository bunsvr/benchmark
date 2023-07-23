Bun: 0.7.0

Tested at: 08:14, July 23rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/22?name=g3N`
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
| Name | Average | GET `/` | GET `/id/43?name=f6U` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 55973.37 | 61550.41 | 53686.68 | 56881.71 | 51774.69 |
| Vixeny 0.0.6 | 55163.30 | 60984.20 | 53109.00 | 56125.05 | 50434.94 |
| Bun 0.7.0 | 55041.91 | 60516.42 | 49846.13 | 57855.03 | 51950.07 |
| Elysia 0.5.23 | 54897.60 | 60335.61 | 52134.64 | 56044.55 | 51075.59 |
| Hono 3.3.2 | 50740.41 | 56764.59 | 49008.93 | 47914.13 | 49273.98 |
| Deno 1.35.1 | 30296.71 | 32354.60 | 30251.35 | 34395.57 | 24185.32 |
| Node 20.0.0 | 26816.81 | 28225.91 | 26591.34 | 31555.16 | 20894.83 |