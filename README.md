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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/68?name=cmY` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.3](/results/main/Stric) | 45198.48 | 48057.17 | 47312.15 | 45783.25 | 47244.34 | 37595.48 |
| [Vix 0.0.7](/results/main/Vix) | 44684.08 | 48012.31 | 46672.73 | 45503.74 | 46168.88 | 37062.72 |
| [Elysia 0.7.2](/results/main/Elysia) | 43690.22 | 46493.17 | 46017.96 | 42375.27 | 46116.59 | 37448.13 |
| [Hono 3.7.2](/results/main/Hono) | 42383.87 | 47528.60 | 45149.80 | 42177.75 | 42013.82 | 35049.40 |
| [Grace 0.3.9](/results/main/Grace) | 30952.17 | 33839.62 | 33776.27 | 28243.84 | 33127.02 | 25774.11 |