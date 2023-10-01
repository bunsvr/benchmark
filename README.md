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


| Name | Average | GET `/` | GET `/id/45?name=Awc` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.9](/results/main/Stric) | 44749.45 | 48127.01 | 46628.53 | 47398.83 | 36843.44 |
| [Vix 0.0.7](/results/main/Vix) | 44254.54 | 47995.11 | 45888.63 | 45856.79 | 37277.65 |
| [Elysia 0.7.15](/results/main/Elysia) | 42670.84 | 47398.57 | 42463.94 | 43552.35 | 37268.51 |
| [Hono 3.7.2](/results/main/Hono) | 41706.46 | 48525.78 | 41255.83 | 41363.50 | 35680.72 |
| [Grace 0.3.9](/results/main/Grace) | 32312.10 | 37025.80 | 31429.79 | 33319.42 | 27473.41 |