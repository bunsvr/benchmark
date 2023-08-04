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

| Name | Average | GET `/` | GET `/id/48?name=P7g` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.1](/results/Stric) | 52773.19 | 56843.48 | 52983.02 | 54457.44 | 46808.84 |
| [Bun 0.7.2](/results/Bun) | 52651.48 | 57456.03 | 50621.56 | 55272.73 | 47255.60 |
| [Elysia 0.5.25](/results/Elysia) | 51186.21 | 55620.26 | 50602.15 | 52408.56 | 46113.85 |
| [Vixeny 0.0.6](/results/Vixeny) | 51120.42 | 55715.04 | 51780.83 | 52357.98 | 44627.84 |
| [Hono 3.3.2](/results/Hono) | 48254.55 | 54927.51 | 49969.96 | 45440.05 | 42680.69 |
| [Deno 1.35.3](/results/Deno) | 34407.74 | 36608.26 | 34343.76 | 39455.29 | 27223.64 |
| [Node 20.0.0](/results/Node) | 28107.37 | 29321.10 | 28202.42 | 33298.82 | 21607.13 |
| [Fastify 4.21.0](/results/Fastify) | 19070.67 | 21033.85 | 19226.24 | 18768.17 | 17254.42 |