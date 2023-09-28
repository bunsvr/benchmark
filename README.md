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


| Name | Average | GET `/` | GET `/id/89?name=mUS` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.5](/results/main/Stric) | 44251.33 | 47859.33 | 45572.01 | 46682.76 | 36891.21 |
| [Vix 0.0.7](/results/main/Vix) | 43879.45 | 47919.28 | 45519.21 | 45370.24 | 36709.08 |
| [Elysia 0.7.2](/results/main/Elysia) | 43181.56 | 47263.61 | 42269.48 | 46189.10 | 37004.05 |
| [Hono 3.7.2](/results/main/Hono) | 41409.74 | 47411.68 | 42644.72 | 41321.01 | 34261.54 |
| [Grace 0.3.9](/results/main/Grace) | 29618.76 | 34362.32 | 27524.12 | 31053.27 | 25535.35 |