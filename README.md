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

| Name | Average | GET `/` | GET `/id/33?name=ws2` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55997.38 | 61140.82 | 53830.27 | 56910.18 | 52108.25 |
| [Bun 0.7.0](/results/Bun) | 55915.67 | 61021.16 | 50609.08 | 60092.51 | 51939.91 |
| [Vixeny 0.0.6](/results/Vixeny) | 55558.92 | 61148.15 | 54391.59 | 55898.26 | 50797.68 |
| [Elysia 0.5.23](/results/Elysia) | 54527.63 | 60360.53 | 52108.75 | 54466.27 | 51174.97 |
| [Hono 3.3.2](/results/Hono) | 50877.83 | 57265.54 | 49675.40 | 48285.56 | 48284.82 |
| [Deno 1.35.1](/results/Deno) | 30430.08 | 32283.39 | 30339.70 | 34488.75 | 24608.49 |
| [Node 20.0.0](/results/Node) | 26510.97 | 28146.54 | 26866.58 | 30235.97 | 20794.80 |