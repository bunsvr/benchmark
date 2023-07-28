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

| Name | Average | GET `/` | GET `/id/65?name=FfY` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55902.31 | 61276.29 | 52783.28 | 56263.45 | 53286.22 |
| [Bun 0.7.0](/results/Bun) | 55677.08 | 61000.59 | 50576.12 | 58425.40 | 52706.23 |
| [Vixeny 0.0.6](/results/Vixeny) | 54694.35 | 59738.08 | 53106.68 | 54783.10 | 51149.52 |
| [Elysia 0.5.23](/results/Elysia) | 54085.11 | 58665.05 | 51713.35 | 54108.28 | 51853.75 |
| [Hono 3.3.2](/results/Hono) | 51359.82 | 56893.57 | 50303.15 | 49120.24 | 49122.30 |
| [Deno 1.35.3](/results/Deno) | 30308.20 | 32151.74 | 30234.05 | 34330.58 | 24516.44 |
| [Node 20.0.0](/results/Node) | 27146.30 | 28383.83 | 27228.71 | 31634.87 | 21337.80 |