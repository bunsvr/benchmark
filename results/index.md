Bun: 0.6.3

Tested at: 15:26, May 23rd, 2023

## OS Details
- Cores: 4
- OS: Linux
- System memory: 3.95GB
- Architecture: x64

## Results
| Name | Average | GET `/` | GET `/id/90` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 2.0.6 | 33418.96 | 37642.06 | 31162.31 | 32157.79 | 32713.66 |
| Elysia 0.5.2 | 32366.05 | 35606.75 | 30503.44 | 31519.03 | 31834.97 |
| Hono 3.2.1 | 23428.38 | 27061.52 | 20846.55 | 19731.55 | 26073.91 |