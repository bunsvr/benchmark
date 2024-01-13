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


| Name | Average | Text | 404 | URL params | Body validation |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45362.94 | 48994.52 | 47655.80 | 47722.78 | 37078.68 |
| [Elysia 0.8](/results/main/Elysia) | 43931.19 | 47943.20 | 47449.30 | 43967.35 | 36364.90 |
| [Fastify 4.25](/results/main/Fastify) | 20770.65 | 25508.64 | 24425.32 | 24272.01 | 8876.61 |
## Frameworks
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Fastify](https://fastify.dev): Fast and low overhead web framework, for Node.js.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
