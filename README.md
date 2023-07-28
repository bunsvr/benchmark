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

| Name | Average | GET `/` | GET `/id/67?name=6l3` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55762.47 | 61152.83 | 53652.49 | 56077.28 | 52167.29 |
| [Bun 0.7.0](/results/Bun) | 54931.15 | 60082.00 | 49515.52 | 58260.00 | 51867.10 |
| [Vixeny 0.0.6](/results/Vixeny) | 54847.56 | 59987.41 | 53379.23 | 55287.79 | 50735.79 |
| [Elysia 0.5.23](/results/Elysia) | 54327.19 | 57826.43 | 52448.20 | 55835.25 | 51198.88 |
| [Hono 3.3.2](/results/Hono) | 50717.04 | 56484.78 | 49355.93 | 48056.70 | 48970.75 |
| [Deno 1.35.3](/results/Deno) | 30445.17 | 32303.18 | 30302.54 | 34514.90 | 24660.06 |
| [Node 20.0.0](/results/Node) | 26513.68 | 28246.46 | 26492.80 | 30967.49 | 20347.96 |