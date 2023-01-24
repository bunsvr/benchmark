Bun: 0.5.1

Tested at: 20:27, January 24th, 2023

## OS Details
- CPU: Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz
- Cores: 4
- OS: Linux
- System memory: 3.95GB
- Architecture: x64

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Native | 78515.92 | 90847.83 | 85422.41 | 85375.47 | 52417.96 |
| BunSVR | 72996.58 | 83996.18 | 77046.22 | 77656.27 | 53287.65 |
| Elysia | 67544.55 | 79120.59 | 73633.03 | 55226.99 | 62197.57 |