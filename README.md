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
Here are the results of the latest benchmark:

| Name | Average | GET `/` | GET `/api/hi` | GET `/id/84?name=VOR` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.7](/results/Stric) | 52588.62 | 56607.11 | 52951.27 | 51506.46 | 54040.57 | 47837.67 |
| [Vixeny 0.0.6](/results/Vixeny) | 52277.45 | 56295.78 | 53715.21 | 51303.26 | 52146.86 | 47926.15 |
| [Elysia 0.6.3](/results/Elysia) | 51907.51 | 55446.53 | 54013.14 | 51524.46 | 52347.69 | 46205.73 |
| [Bun 0.7.3](/results/Bun) | 51889.56 | 55977.96 | 53349.34 | 48572.77 | 53423.95 | 48123.78 |
| [Hono 3.4.1](/results/Hono) | 47048.02 | 53951.27 | 51941.18 | 43939.35 | 42679.80 | 42728.50 |
| [Deno 1.36.0](/results/Deno) | 31309.66 | 33253.39 | 33126.40 | 30890.21 | 35357.18 | 23921.13 |
| [Fastify 4.21.0](/results/Fastify) | 17941.59 | 19286.62 | 19461.29 | 18256.14 | 17283.76 | 15420.15 |