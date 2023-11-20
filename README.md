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


| Name | Average | GET `/` | GET `/a/b` | GET `/api/id/49?name=3vI` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0.0](/results/main/Stric) | 45827.24 | 48959.11 | 48731.40 | 48533.24 | 37085.21 |
| [Vix 0.0.7](/results/main/Vix) | 45412.01 | 48523.89 | 47991.24 | 47735.27 | 37397.63 |
| [Elysia 0.7.17](/results/main/Elysia) | 44003.60 | 48353.19 | 45922.50 | 44560.72 | 37177.99 |
| [Hono 3.8.3](/results/main/Hono) | 42642.50 | 48934.42 | 42582.82 | 43215.62 | 35837.16 |
| [Bunicorn 0.0.19](/results/main/Bunicorn) | 39660.28 | 44846.54 | 41001.29 | 39862.22 | 32931.08 |
## Frameworks
- [Hono](https://hono.dev): Ultrafast framework for the Edge.
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Vix](https://vixeny.dev): Harness the Power of Pure Functionality.
- [Bunicorn](https://bunicorn.js.org): Fast and type safe Bun, Deno and Edge backend and client framework.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
