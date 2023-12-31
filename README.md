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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/95?name=whu` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45191.86 | 48404.85 | 47631.00 | 47203.20 | 37528.41 |
| [Elysia 0.8](/results/main/Elysia) | 44047.30 | 47939.41 | 47195.94 | 44591.21 | 36462.64 |
| [Hono 3.11](/results/main/Hono) | 38624.51 | 45305.97 | 35971.81 | 39816.45 | 33403.81 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
