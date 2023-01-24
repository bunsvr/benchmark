Bun: 0.5.1

Tested at: 19:43, January 24th, 2023

## OS Details
- CPU: Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz
- Cores: 4
- OS: Linux
- System memory: 3.95GB
- Architecture: x64

## Results
### GET `/`:
- Native: 89461.65
- BunSVR: 84367.51
- Elysia: 77703.51
### GET `/id/90`:
- Native: 83980.86
- BunSVR: 75345.07
- Elysia: 70695.76
### GET `/a/b`:
- Native: 85579.71
- BunSVR: 75947.82
- Elysia: 53314.27
### POST `/json`:
- Elysia: 60565.8
- BunSVR: 53858.2
- Native: 48707.4
