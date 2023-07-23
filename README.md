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

| Name | Average | GET `/` | GET `/id/4?name=B2o` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| [Stric 3.2.7](./results/Stric) | 54820.68 | 58586.58 | 54164.24 | 55828.44 | 50703.44 |
| [Bun 0.7.0](./results/Bun) | 54539.74 | 59058.86 | 51336.51 | 56912.38 | 50851.19 |
| [Vixeny 0.0.6](./results/Vixeny) | 54357.48 | 59185.87 | 53983.98 | 55078.50 | 49181.56 |
| [Elysia 0.5.23](./results/Elysia) | 53785.97 | 58375.59 | 53221.74 | 53759.92 | 49786.64 |
| [Hono 3.3.2](./results/Hono) | 50300.88 | 56846.56 | 50921.01 | 48006.60 | 45429.35 |
| [Deno 1.35.1](./results/Deno) | 30779.10 | 32877.46 | 30669.47 | 35711.95 | 23857.50 |
| [Node 20.0.0](./results/Node) | 28158.26 | 29107.31 | 27897.12 | 33124.95 | 22503.67 |
