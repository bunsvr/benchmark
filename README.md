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

| Name | Average | GET `/` | GET `/api/hi` | GET `/id/87?name=DiT` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.9](/results/Stric) | 53390.88 | 57038.92 | 54102.07 | 53050.86 | 54552.39 | 48210.14 |
| [Vixeny 0.0.6](/results/Vixeny) | 52379.31 | 56022.75 | 54067.21 | 51908.00 | 52398.83 | 47499.78 |
| [Bun 0.7.3](/results/Bun) | 52160.19 | 56702.31 | 53767.72 | 49041.74 | 53639.93 | 47649.27 |
| [Elysia 0.6.3](/results/Elysia) | 51224.69 | 55136.63 | 53477.52 | 49572.64 | 51638.91 | 46297.73 |
| [Hono 3.4.1](/results/Hono) | 47789.01 | 55682.94 | 53283.28 | 44919.43 | 42989.91 | 42069.51 |
| [Deno 1.36.0](/results/Deno) | 31081.40 | 33023.76 | 32797.87 | 30680.32 | 35557.59 | 23347.48 |
| [Fastify 4.21.0](/results/Fastify) | 18198.94 | 20041.23 | 19583.21 | 18572.75 | 17484.94 | 15312.59 |