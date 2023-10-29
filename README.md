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


| Name | Average | GET `/` | GET `/id/34?name=THW` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 6.0.0](/results/main/Stric) | 45017.48 | 48421.68 | 48318.50 | 38312.25 |
| [Vix 0.0.7](/results/main/Vix) | 43335.95 | 47801.58 | 45309.27 | 36897.01 |
| [Elysia 0.7.17](/results/main/Elysia) | 43154.77 | 48467.49 | 43295.76 | 37701.07 |
| [Hono 3.8.3](/results/main/Hono) | 41759.32 | 48425.31 | 41516.73 | 35335.91 |
| [Grace 0.3.15](/results/main/Grace) | 31584.57 | 36649.23 | 31391.94 | 26712.54 |