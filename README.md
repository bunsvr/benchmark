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

| Name | Average | GET `/` | GET `/id/46?name=26I` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.1](/results/Stric) | 52410.03 | 56459.64 | 52415.92 | 53629.03 | 47135.54 |
| [Bun 0.7.2](/results/Bun) | 52292.23 | 57070.85 | 49242.65 | 55069.87 | 47785.56 |
| [Vixeny 0.0.6](/results/Vixeny) | 51678.59 | 56529.34 | 52215.87 | 52751.70 | 45217.44 |
| [Elysia 0.5.25](/results/Elysia) | 51399.43 | 56270.62 | 51346.40 | 52450.66 | 45530.04 |
| [Hono 3.3.2](/results/Hono) | 48018.71 | 55254.45 | 49736.80 | 44545.50 | 42538.10 |
| [Deno 1.35.3](/results/Deno) | 34184.19 | 36321.39 | 34094.04 | 39073.43 | 27247.92 |
| [Node 20.0.0](/results/Node) | 28010.30 | 29789.26 | 28075.51 | 32089.01 | 22087.42 |