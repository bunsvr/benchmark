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

| Name | Average | GET `/` | GET `/id/2?name=Lfc` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.3.4](/results/Stric) | 52533.42 | 57185.92 | 52488.94 | 53207.62 | 47251.21 |
| [Bun 0.7.1](/results/Bun) | 52287.53 | 56201.91 | 51314.27 | 55031.21 | 46602.75 |
| [Vixeny 0.0.6](/results/Vixeny) | 51509.89 | 56683.99 | 51696.39 | 52913.81 | 44745.35 |
| [Elysia 0.5.25](/results/Elysia) | 51457.01 | 55470.10 | 51700.32 | 53050.38 | 45607.24 |
| [Hono 3.3.2](/results/Hono) | 47937.31 | 55074.66 | 48757.69 | 45348.51 | 42568.38 |
| [Deno 1.35.3](/results/Deno) | 34576.44 | 36677.68 | 34591.03 | 39710.25 | 27326.81 |
| [Node 20.0.0](/results/Node) | 28531.75 | 30523.95 | 28954.78 | 33019.63 | 21628.65 |