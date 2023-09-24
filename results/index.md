Bun: 1.0.2

Tested at: 15:46, September 24th, 2023

## OS Details
- Cores: 10
- Model: Apple M1 Pro
- OS: Mac
- System memory: 32GB
- Architecture: arm64
## Tests
### GET `/`
Should return `Hi` as a response.
### GET `/api/hi`
Should return `Welcome` as a response.
### GET `/id/51?name=tME`
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
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/12?name=i11` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Vix 0.0.7](/results/main/Vix) | 87468.79 | 93309.21 | 93228.93 | 87697.68 | 89015.30 | 74092.81 |
| [Elysia 0.7.1](/results/main/Elysia) | 86047.81 | 92632.47 | 92649.13 | 84108.08 | 97737.67 | 63111.71 |
| [Grace 0.3.9](/results/main/Grace) | 68691.71 | 74563.31 | 74699.99 | 62883.21 | 71703.24 | 59608.81 |