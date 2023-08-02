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

| Name | Average | GET `/` | GET `/id/96?name=TOl` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.0](/results/Stric) | 52773.06 | 58365.70 | 53014.21 | 53632.10 | 46080.22 |
| [Bun 0.7.1](/results/Bun) | 52011.06 | 56798.20 | 49299.88 | 55041.53 | 46904.65 |
| [Elysia 0.5.25](/results/Elysia) | 51817.94 | 56845.06 | 51676.38 | 52997.84 | 45752.47 |
| [Vixeny 0.0.6](/results/Vixeny) | 51520.63 | 56362.58 | 51976.80 | 53045.02 | 44698.12 |
| [Hono 3.3.2](/results/Hono) | 47751.85 | 55213.58 | 48760.76 | 44737.76 | 42295.29 |
| [Deno 1.35.3](/results/Deno) | 34472.40 | 36763.01 | 34331.70 | 39423.38 | 27371.50 |
| [Node 20.0.0](/results/Node) | 28058.98 | 29381.28 | 28044.95 | 32664.49 | 22145.21 |
