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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/12?name=8q8` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.4](/results/main/Stric) | 44712.60 | 48014.04 | 46375.02 | 46427.87 | 47045.60 | 35700.48 |
| [Vix 0.0.7](/results/main/Vix) | 44389.67 | 47678.04 | 45929.74 | 45142.51 | 46312.84 | 36885.22 |
| [Elysia 0.7.2](/results/main/Elysia) | 43664.99 | 47525.10 | 45976.46 | 42331.55 | 45868.44 | 36623.39 |
| [Hono 3.7.2](/results/main/Hono) | 41909.99 | 47199.87 | 45692.57 | 40708.73 | 41611.47 | 34337.30 |
| [Grace 0.3.9](/results/main/Grace) | 30767.75 | 35141.81 | 32660.92 | 27535.90 | 32787.56 | 25712.54 |