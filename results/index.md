Bun: 0.6.14

Tested at: 19:31, July 13th, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/3119972?name=kQCC5tlDKkOUIAJxje6EP3DxnEJ7sfUN`
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
| Name | Average | GET `/` | GET `/id/9017107?name=aJUOBCPZzyobevlYEkVb4JNFiZbroWbz` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.6 | 56466.54 | 62865.62 | 52308.81 | 58186.01 | 52505.74 |
| Vixeny 0.0.6 | 55504.85 | 61161.11 | 54264.64 | 55879.95 | 50713.70 |
| Elysia 0.5.20 | 54681.67 | 60219.75 | 51730.90 | 54724.08 | 52051.94 |
| Bun | 54511.66 | 60883.67 | 49365.58 | 55804.70 | 51992.68 |
| Hono 3.2.7 | 50758.74 | 57409.06 | 48791.14 | 48007.37 | 48827.38 |
| Deno | 30410.78 | 33018.20 | 29219.89 | 34735.07 | 24669.98 |
| Node | 26613.22 | 28563.40 | 26077.14 | 30850.93 | 20961.43 |