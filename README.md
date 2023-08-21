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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/0?name=01U` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.1](/results/main/Stric) | 49798.46 | 52130.91 | 50632.17 | 48165.28 | 51362.53 | 46701.43 |
| [Vixeny 0.0.6](/results/main/Vixeny) | 48885.09 | 51399.58 | 49718.50 | 47950.19 | 48687.50 | 46669.70 |
| [Elysia 0.6.10](/results/main/Elysia) | 47909.02 | 50401.06 | 48992.43 | 46767.69 | 47765.02 | 45618.88 |
| [Fastify 4.21.0](/results/main/Fastify) | 23112.15 | 25499.25 | 25303.64 | 24457.51 | 22472.76 | 17827.59 |
| [Express 4.18.2](/results/main/Express) | 7753.88 | 8892.44 | 8708.15 | 8281.25 | 6892.88 | 5994.68 |