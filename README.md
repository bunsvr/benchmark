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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/73?name=hN1` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 44593.92 | 48183.41 | 46318.85 | 45525.19 | 46779.82 | 36162.32 |
| [Elysia 0.7.2](/results/main/Elysia) | 43667.53 | 46834.67 | 45921.59 | 42651.83 | 45970.95 | 36958.60 |
| [Vix 0.0.7](/results/main/Vix) | 43286.29 | 45410.19 | 43713.26 | 44982.76 | 45661.48 | 36663.74 |
| [Hono 3.7.2](/results/main/Hono) | 42562.09 | 47357.55 | 45918.21 | 42539.04 | 41704.77 | 35290.90 |
| [Grace 0.3.9](/results/main/Grace) | 30589.25 | 34990.88 | 32618.36 | 27249.78 | 32510.84 | 25576.38 |