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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/71?name=LmR` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45412.87 | 48533.73 | 48260.86 | 47387.99 | 37468.89 |
| [Vix 0.0.7](/results/main/Vix) | 44860.13 | 48094.32 | 48378.27 | 46382.15 | 36585.78 |
| [Elysia 0.7.17](/results/main/Elysia) | 43815.44 | 48671.07 | 45000.99 | 44410.51 | 37179.21 |
| [Hono 3.8.3](/results/main/Hono) | 42788.43 | 48712.28 | 43193.23 | 43717.53 | 35530.69 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
