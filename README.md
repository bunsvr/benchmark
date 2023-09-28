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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/81?name=weD` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.5](/results/main/Stric) | 45084.81 | 48332.75 | 46623.88 | 46072.62 | 47038.54 | 37356.26 |
| [Vix 0.0.7](/results/main/Vix) | 44269.08 | 47618.59 | 45978.74 | 45058.74 | 45608.76 | 37080.58 |
| [Elysia 0.7.2](/results/main/Elysia) | 44108.86 | 48103.29 | 46272.13 | 43246.88 | 46058.33 | 36863.69 |
| [Hono 3.7.2](/results/main/Hono) | 42564.88 | 48204.41 | 46573.03 | 40967.01 | 41434.29 | 35645.65 |
| [Grace 0.3.9](/results/main/Grace) | 31179.96 | 34796.91 | 33720.99 | 28131.19 | 33694.72 | 25555.97 |