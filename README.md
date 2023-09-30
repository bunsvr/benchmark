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


| Name | Average | GET `/` | GET `/id/1?name=PfR` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.6](/results/main/Stric) | 15944.23 | 17397.70 | 16254.42 | 16582.80 | 13541.99 |
| [Vix 0.0.7](/results/main/Vix) | 15842.73 | 17316.34 | 16187.86 | 16456.84 | 13409.90 |
| [Elysia 0.7.15](/results/main/Elysia) | 15707.77 | 16844.33 | 16234.38 | 16355.88 | 13396.50 |
| [Hono 3.7.2](/results/main/Hono) | 15102.45 | 16213.67 | 15652.62 | 15567.61 | 12975.91 |
| [Grace 0.3.9](/results/main/Grace) | 11586.06 | 13581.80 | 11169.75 | 11831.60 | 9761.10 |