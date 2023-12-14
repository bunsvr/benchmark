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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/39?name=WJV` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 44824.97 | 50243.86 | 47856.05 | 46171.21 | 35028.77 |
| [Vix 0.0.7](/results/main/Vix) | 44518.03 | 50170.34 | 47038.98 | 45601.67 | 35261.14 |
| [Elysia 0.7](/results/main/Elysia) | 43930.82 | 49081.65 | 45801.75 | 45033.77 | 35806.12 |
| [Bunicorn 0.0](/results/main/Bunicorn) | 38702.99 | 45410.04 | 39124.18 | 38354.77 | 31922.96 |
| [Hono 3.11](/results/main/Hono) | 38484.59 | 45197.44 | 36049.63 | 40103.74 | 32587.55 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
- [Bunicorn](https://bunicorn.js.org): Fast and type safe Bun, Deno and Edge backend and client framework.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
