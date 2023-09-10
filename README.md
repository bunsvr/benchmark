# Benchmark
Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md). 

I recommend testing this by yourself as performance may varies on different machine.

## Requirements
All tool required to set up and run the benchmark.

### Bun
Bun is required to run the Bun server, Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

### Node
Node is required to run the Node server. See [nodejs.dev](https://nodejs.dev).

### Deno
Deno is required to run the Deno server. See [deno.land](https://deno.land).

### Bombardier
Go is required to install the `bombardier` CLI. See [go.dev](https://go.dev).
Install `bombardier` using:
```bash
# Install the CLI without a `go.mod` file
go install -mod=mod github.com/codesenberg/bombardier

# Check after install
bombardier --version
```
You need to manually set `GO_PATH` to your extracted `go` directory, `GO_BIN` to `$GO_PATH/bin` and add `GO_BIN` to `PATH` if `bombardier --version` fails.

## Start
Clone this reposity. Go to the root directory and run:
```bash
# Install required dependencies
bun ins

# Run the benchmark
bun bench

# Or do both
bun start
```

## Configurations
See [configuration file](/config.ts) and the [type declarations](/lib/types.ts). 

## Results

### Chart
![Chart](/results/chart.png)

### Table 


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/94?name=0GG` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.7](/results/main/Stric) | 45274.20 | 48304.88 | 46584.18 | 47282.34 | 47043.62 | 37155.97 |
| [Elysia 0.6.19](/results/main/Elysia) | 44034.95 | 47858.70 | 46292.78 | 43773.53 | 45753.73 | 36496.00 |
| [Vix 0.0.7](/results/main/Vix) | 43922.58 | 47126.71 | 45930.29 | 44497.73 | 45816.05 | 36242.10 |
| [Fastify 4.21.0](/results/main/Fastify) | 23185.19 | 25335.32 | 25131.62 | 24554.11 | 22369.81 | 18535.11 |
| [Express 4.18.2](/results/main/Express) | 7891.01 | 8990.01 | 8904.15 | 8451.44 | 7042.01 | 6067.44 |