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


| Name | Average | GET `/` | GET `/id/50?name=V0n` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.0](/results/main/Stric) | 44889.93 | 48666.84 | 45386.59 | 48384.23 | 37122.06 |
| [Vix 0.0.7](/results/main/Vix) | 43993.34 | 46890.58 | 46670.92 | 46326.26 | 36085.58 |
| [Elysia 0.7.15](/results/main/Elysia) | 42059.74 | 46554.64 | 42671.43 | 43582.20 | 35430.67 |
| [Hono 3.7.2](/results/main/Hono) | 40527.17 | 47128.31 | 40540.81 | 39307.13 | 35132.42 |
| [Grace 0.3.9](/results/main/Grace) | 32174.52 | 36398.88 | 30672.58 | 34003.74 | 27622.88 |