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


| Name | Average | GET `/` | GET `/a/b` | GET `/id/35?name=Sjf` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 1.0](/results/main/Stric) | 45590.92 | 48989.59 | 47952.32 | 47773.36 | 37648.41 |
| [Elysia 0.8](/results/main/Elysia) | 44149.48 | 47920.90 | 47583.62 | 44954.67 | 36138.72 |
| [Fastify 4.25](/results/main/Fastify) | 20920.99 | 26717.65 | 23783.40 | 24189.96 | 8992.93 |
## Frameworks
- [Stric](https://stricjs.netlify.app): A web framework for building high-performance, scalable web applications.
- [Elysia](https://elysiajs.com): Ergonomic Framework for Humans.
- [Fastify](https://fastify.dev): Fast and low overhead web framework, for Node.js.
