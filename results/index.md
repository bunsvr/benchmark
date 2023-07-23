Bun: 0.7.0

Tested at: 17:16, July 23rd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/96?name=c2v`
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
| Name | Average | GET `/` | GET `/id/17?name=n7V` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.0](/results/Bun) | 55944.40 | 61852.02 | 50583.86 | 59736.98 | 51604.75 |
| [Stric 3.2.7](/results/Stric) | 55685.12 | 60537.60 | 54305.73 | 56111.93 | 51785.21 |
| [Vixeny 0.0.6](/results/Vixeny) | 55181.44 | 60072.02 | 53887.44 | 56210.92 | 50555.39 |
| [Elysia 0.5.23](/results/Elysia) | 54956.63 | 60404.26 | 52164.65 | 55873.02 | 51384.60 |
| [Hono 3.3.2](/results/Hono) | 51143.08 | 56894.63 | 49172.35 | 48766.58 | 49738.78 |
| [Deno 1.35.1](/results/Deno) | 30606.46 | 32565.15 | 30572.54 | 34634.01 | 24654.13 |
| [Node 20.0.0](/results/Node) | 26290.41 | 27845.32 | 26351.69 | 30431.51 | 20533.13 |