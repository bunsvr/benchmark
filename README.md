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


| Name | Average | GET `/` | GET `/id/62?name=Tdl` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.6](/results/main/Stric) | 44891.73 | 47716.99 | 46409.79 | 46951.22 | 38488.91 |
| [Vix 0.0.7](/results/main/Vix) | 44386.82 | 47913.26 | 45471.55 | 47261.93 | 36900.53 |
| [Elysia 0.7.15](/results/main/Elysia) | 42981.74 | 47969.01 | 43245.86 | 44488.43 | 36223.65 |
| [Hono 3.7.2](/results/main/Hono) | 41268.64 | 47713.41 | 40710.94 | 40390.58 | 36259.61 |
| [Grace 0.3.9](/results/main/Grace) | 33630.15 | 38477.66 | 33473.91 | 34971.57 | 27597.47 |