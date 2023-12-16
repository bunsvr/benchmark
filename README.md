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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/54?name=Mnc` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45614.83 | 48888.21 | 48215.30 | 47596.22 | 37759.60 |
| [Vix 0.0](/results/main/Vix) | 44735.14 | 48683.02 | 46457.72 | 46782.85 | 37016.97 |
| [Elysia 0.7](/results/main/Elysia) | 44000.16 | 48344.62 | 45376.74 | 44610.41 | 37668.86 |
| [Bunicorn 0.0](/results/main/Bunicorn) | 39244.29 | 44345.44 | 41245.78 | 38508.39 | 32877.54 |
| [Hono 3.11](/results/main/Hono) | 39170.99 | 45561.52 | 37040.89 | 41190.25 | 32891.31 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
- [Bunicorn](https://bunicorn.js.org): Fast and type safe Bun, Deno and Edge backend and client framework.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
