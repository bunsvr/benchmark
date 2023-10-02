# Benchmark
Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md). 

I recommend testing this by yourself as performance may varies on different machine.

## Requirements
All tool required to set up and run the benchmark.

### Bun
Bun is required to run Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

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
![Chart](/results/chart.png)

### Table 


| Name | Average | GET `/` | GET `/id/89?name=Kmh` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.3.0](/results/main/Stric) | 45167.80 | 48667.84 | 47044.80 | 47401.51 | 37557.05 |
| [Vix 0.0.7](/results/main/Vix) | 44709.07 | 48264.15 | 46491.24 | 46995.34 | 37085.54 |
| [Elysia 0.7.15](/results/main/Elysia) | 43409.06 | 47710.95 | 43632.90 | 44304.31 | 37988.08 |
| [Hono 3.7.2](/results/main/Hono) | 42032.14 | 48463.41 | 43375.18 | 41626.86 | 34663.12 |
| [Grace 0.3.9](/results/main/Grace) | 32807.06 | 37838.13 | 32355.63 | 33495.38 | 27539.11 |