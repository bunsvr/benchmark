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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/26?name=SfB` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45514.11 | 48406.29 | 48894.65 | 47607.89 | 37147.60 |
| [Vix 0.0.7](/results/main/Vix) | 44598.39 | 48319.45 | 47150.49 | 46425.74 | 36497.90 |
| [Elysia 0.7.17](/results/main/Elysia) | 43875.39 | 48778.78 | 45605.71 | 44789.40 | 36327.67 |
| [Hono 3.8.3](/results/main/Hono) | 42056.50 | 47668.12 | 42602.23 | 42500.69 | 35454.96 |
| [Bunicorn 0.0.19](/results/main/Bunicorn) | 39370.46 | 44616.36 | 40663.97 | 39292.67 | 32908.83 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
- [Bunicorn](https://bunicorn.js.org): Fast and type safe Bun, Deno and Edge backend and client framework.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
