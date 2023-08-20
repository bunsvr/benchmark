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

### Chart
[!](/results/chart.png)

### Table
| Name | Average | GET `/` | GET `/api/hi` | GET `/id/18?name=J3h` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/Stric) | 52397.40 | 54833.42 | 53338.12 | 51159.38 | 53600.10 | 49055.97 |
| [Bun 0.7.3](/results/Bun) | 51540.82 | 54926.19 | 52573.49 | 48596.64 | 52855.37 | 48752.42 |
| [Vixeny 0.0.6](/results/Vixeny) | 51353.17 | 54359.93 | 52610.87 | 50251.53 | 50921.25 | 48622.25 |
| [Elysia 0.6.10](/results/Elysia) | 51037.95 | 53862.94 | 52177.78 | 50902.07 | 51168.74 | 47078.21 |
| [Hono 3.4.3](/results/Hono) | 47501.07 | 53053.92 | 51381.67 | 44208.88 | 45965.26 | 42895.63 |
| [Deno 1.36.1](/results/Deno) | 31914.24 | 33461.94 | 33389.49 | 30785.98 | 38414.16 | 23519.62 |
| [Fastify 4.21.0](/results/Fastify) | 18442.54 | 19860.29 | 20168.77 | 19135.39 | 17529.74 | 15518.49 |
