Bun: 0.7.0

Tested at: 16:11, July 22nd, 2023

## OS Details
- Cores: 8
- Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
- OS: Linux
- System memory: 15.4GB
- Architecture: x64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/id/82?name=Szp`
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
| Name | Average | GET `/` | GET `/id/50?name=KxT` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 55617.28 | 60582.25 | 53655.09 | 55920.09 | 52311.70 |
| Bun 0.7.0 | 55514.61 | 60914.71 | 50615.33 | 58905.32 | 51623.06 |
| Vixeny 0.0.6 | 54765.57 | 60180.34 | 53283.58 | 55184.69 | 50413.67 |
| Elysia 0.5.23 | 54457.56 | 59530.45 | 52114.08 | 54560.42 | 51625.27 |
| Hono 3.3.2 | 50516.03 | 57430.90 | 48095.95 | 47791.28 | 48745.98 |
| Deno 1.35.1 | 30400.58 | 32269.96 | 30230.26 | 34398.58 | 24703.50 |
| Node 20.0.0 | 26786.02 | 28393.50 | 26936.55 | 30989.96 | 20824.06 |