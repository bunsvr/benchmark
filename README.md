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
| [Stric 1.0](/results/main/Stric) | 45580.01 | 48578.51 | 47699.93 | 47294.40 | 38747.21 |
| [Elysia 0.8](/results/main/Elysia) | 43410.22 | 46948.59 | 46244.10 | 42586.50 | 37861.68 |
| [Fastify 4.25](/results/main/Fastify) | 20628.66 | 26076.87 | 23738.52 | 23778.43 | 8920.81 |
## Frameworks
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Fastify](https://fastify.dev): Fast and low overhead web framework, for Node.js.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
