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

| Name | Average | GET `/` | GET `/api/hi` | GET `/id/10?name=LsU` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/Stric) | 54038.71 | 56843.41 | 55245.69 | 53522.25 | 56126.23 | 48455.96 |
| [Vixeny 0.0.6](/results/Vixeny) | 52652.42 | 56253.65 | 54295.29 | 52898.50 | 51770.56 | 48044.12 |
| [Bun 0.7.3](/results/Bun) | 52648.92 | 56911.46 | 54176.47 | 49555.49 | 53812.37 | 48788.83 |
| [Elysia 0.6.10](/results/Elysia) | 51858.12 | 55036.86 | 53294.71 | 51481.79 | 52136.13 | 47341.11 |
| [Hono 3.4.3](/results/Hono) | 48415.97 | 55125.49 | 53775.95 | 46295.00 | 43124.41 | 43759.01 |
| [Deno 1.36.1](/results/Deno) | 31444.59 | 33360.52 | 33470.03 | 30746.08 | 36207.77 | 23438.56 |
| [Fastify 4.21.0](/results/Fastify) | 18029.49 | 19739.86 | 19329.01 | 18352.80 | 17238.03 | 15487.74 |