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


| Name | Average | GET `/` | GET `/id/27?name=3Hn` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 44851.87 | 48384.02 | 48336.19 | 37835.39 |
| [Vix 0.0.7](/results/main/Vix) | 44547.26 | 48786.64 | 47792.93 | 37062.22 |
| [Elysia 0.7.17](/results/main/Elysia) | 43801.35 | 48656.82 | 45758.09 | 36989.13 |
| [Hono 3.8.3](/results/main/Hono) | 42814.69 | 48968.52 | 43695.23 | 35780.32 |
| [Grace 0.3.15](/results/main/Grace) | 31702.62 | 37106.17 | 30703.83 | 27297.85 |