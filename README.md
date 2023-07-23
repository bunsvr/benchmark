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

| Name | Average | GET `/` | GET `/id/99?name=khk` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55720.75 | 60419.78 | 53711.67 | 56479.01 | 52272.53 |
| [Vixeny 0.0.6](/results/Vixeny) | 54818.03 | 59957.86 | 53198.26 | 55291.73 | 50824.27 |
| [Bun 0.7.0](/results/Bun) | 54767.24 | 59478.11 | 50040.76 | 57886.51 | 51663.57 |
| [Elysia 0.5.23](/results/Elysia) | 54124.22 | 59059.21 | 51394.69 | 54817.82 | 51225.18 |
| [Hono 3.3.2](/results/Hono) | 51126.97 | 56910.02 | 49604.20 | 48635.30 | 49358.35 |
| [Deno 1.35.1](/results/Deno) | 30352.21 | 32279.86 | 30302.11 | 34138.98 | 24687.90 |
| [Node 20.0.0](/results/Node) | 26883.34 | 28203.29 | 27018.42 | 31251.29 | 21060.36 |