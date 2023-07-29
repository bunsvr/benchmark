Bun: 0.7.1

Tested at: 16:26, July 29th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/74?name=os2`
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
| Name | Average | GET `/` | GET `/id/8?name=Mxg` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.3.4](/results/Stric) | 56040.89 | 61300.42 | 54667.62 | 56694.20 | 51501.34 |
| [Bun 0.7.1](/results/Bun) | 54921.56 | 59848.22 | 50286.02 | 58413.27 | 51138.74 |
| [Elysia 0.5.23](/results/Elysia) | 54697.26 | 60211.74 | 52462.97 | 55404.24 | 50710.11 |
| [Vixeny 0.0.6](/results/Vixeny) | 54409.91 | 59041.07 | 53891.09 | 54925.59 | 49781.88 |
| [Hono 3.3.2](/results/Hono) | 50716.06 | 56481.81 | 49828.19 | 48119.56 | 48434.69 |
| [Deno 1.35.3](/results/Deno) | 30341.10 | 32198.67 | 30345.34 | 34204.30 | 24616.08 |
| [Node 20.0.0](/results/Node) | 27186.59 | 28695.91 | 27357.49 | 31637.86 | 21055.11 |
