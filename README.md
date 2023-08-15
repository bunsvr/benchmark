# Benchmark
Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md). 

I recommend testing this by yourself as performance may varies on different machine.

## Requirements
All tool required to set up and run the benchmark.

### Bun
Bun is required to run the Bun server, Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

### Node
Node is required to run the Node server. See [nodejs.dev](https://nodejs.dev).

### Deno
Deno is required to run the Deno server. See [deno.land](https://deno.land).

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
Here are the results of the latest benchmark:

| Name | Average | GET `/` | GET `/api/hi` | GET `/id/54?name=SjY` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.11](/results/Stric) | 53111.41 | 56772.17 | 54269.52 | 51815.29 | 55040.45 | 47659.61 |
| [Bun 0.7.3](/results/Bun) | 52710.06 | 56887.32 | 54200.31 | 49857.24 | 54377.37 | 48228.08 |
| [Vixeny 0.0.6](/results/Vixeny) | 52201.34 | 55807.60 | 53418.76 | 51460.22 | 52545.90 | 47774.21 |
| [Elysia 0.6.10](/results/Elysia) | 51533.04 | 55171.70 | 53266.99 | 50753.28 | 51685.87 | 46787.34 |
| [Hono 3.4.3](/results/Hono) | 46244.38 | 50971.15 | 51853.14 | 43435.91 | 42859.55 | 42102.13 |
| [Deno 1.36.1](/results/Deno) | 31303.33 | 33181.43 | 33212.39 | 30916.51 | 35683.39 | 23522.91 |
| [Fastify 4.21.0](/results/Fastify) | 18110.71 | 19822.93 | 19372.99 | 18407.88 | 17523.21 | 15426.55 |