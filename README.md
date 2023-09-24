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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/29?name=DYq` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 44827.69 | 48017.12 | 46694.40 | 45884.78 | 47391.68 | 36150.48 |
| [Vix 0.0.7](/results/main/Vix) | 44608.92 | 47530.22 | 46279.28 | 45643.34 | 45941.37 | 37650.39 |
| [Elysia 0.7.2](/results/main/Elysia) | 43734.72 | 47221.99 | 45889.44 | 42781.14 | 45746.15 | 37034.89 |
| [Grace 0.3.9](/results/main/Grace) | 31344.80 | 35806.93 | 33806.24 | 27593.63 | 32789.40 | 26727.79 |