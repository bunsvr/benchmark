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

### Chart
![Chart](/results/chart.png)

### Table 


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/82?name=lZK` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.2](/results/main/Stric) | 45162.67 | 48266.48 | 47264.72 | 46231.74 | 47103.01 | 36947.41 |
| [Vix 0.0.7](/results/main/Vix) | 44919.01 | 47522.12 | 46566.05 | 46163.88 | 46751.82 | 37591.18 |
| [Elysia 0.6.24](/results/main/Elysia) | 44399.27 | 48551.60 | 47207.03 | 41960.58 | 46687.72 | 37589.41 |
| [Fastify 4.21.0](/results/main/Fastify) | 19738.03 | 21202.43 | 21734.39 | 20092.79 | 19366.39 | 16294.15 |
| [Express 4.18.2](/results/main/Express) | 7906.07 | 9132.33 | 8922.92 | 8370.37 | 7074.27 | 6030.47 |