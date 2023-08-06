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

| Name | Average | GET `/` | GET `/api/hi` | GET `/id/83?name=qU3` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.4](/results/Stric) | 52440.73 | 56002.86 | 53836.65 | 51383.40 | 54007.04 | 46973.72 |
| [Bun 0.7.2](/results/Bun) | 52252.89 | 56420.96 | 53503.18 | 50335.19 | 54002.04 | 47003.06 |
| [Vixeny 0.0.6](/results/Vixeny) | 51606.47 | 55503.35 | 54056.67 | 51214.63 | 52339.78 | 44917.94 |
| [Elysia 0.6.0](/results/Elysia) | 51466.70 | 55865.06 | 53121.92 | 50401.70 | 52735.60 | 45209.22 |
| [Hono 3.3.2](/results/Hono) | 47968.31 | 54785.44 | 52808.42 | 45347.42 | 44148.72 | 42751.56 |
| [Deno 1.36.0](/results/Deno) | 34747.99 | 36535.81 | 36303.58 | 34313.44 | 39126.84 | 27460.26 |
| [Fastify 4.21.0](/results/Fastify) | 19427.59 | 20006.42 | 21654.99 | 20029.20 | 18914.03 | 16533.31 |