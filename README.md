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


| Name | Average | GET `/` | GET `/id/5?name=Ne4` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.4](/results/main/Stric) | 45471.03 | 49129.95 | 48973.15 | 38310.00 |
| [Vix 0.0.7](/results/main/Vix) | 44311.63 | 48189.07 | 46717.18 | 38028.65 |
| [Elysia 0.7.17](/results/main/Elysia) | 43851.77 | 48109.24 | 45342.47 | 38103.61 |
| [Hono 3.8.3](/results/main/Hono) | 42387.21 | 48686.79 | 42617.33 | 35857.50 |
| [Grace 0.3.15](/results/main/Grace) | 31972.53 | 37408.14 | 31088.64 | 27420.82 |