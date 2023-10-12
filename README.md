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


| Name | Average | GET `/` | GET `/id/57?name=qRO` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.2](/results/main/Stric) | 44458.99 | 48475.96 | 47698.11 | 37202.89 |
| [Vix 0.0.7](/results/main/Vix) | 44113.28 | 47727.90 | 47187.85 | 37424.10 |
| [Elysia 0.7.15](/results/main/Elysia) | 42934.45 | 47907.02 | 44338.93 | 36557.39 |
| [Hono 3.7.2](/results/main/Hono) | 42084.39 | 48974.05 | 41623.86 | 35655.26 |
| [Grace 0.3.9](/results/main/Grace) | 32324.44 | 37583.60 | 31437.24 | 27952.48 |