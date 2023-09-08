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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/61?name=O1Y` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.7](/results/main/Stric) | 45816.17 | 48502.32 | 47160.20 | 46817.86 | 47520.27 | 39080.20 |
| [Elysia 0.6.19](/results/main/Elysia) | 44939.80 | 48071.32 | 47055.21 | 43989.98 | 47166.10 | 38416.40 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 44906.08 | 48091.01 | 46649.50 | 45449.04 | 46819.57 | 37521.28 |
| [Fastify 4.21.0](/results/main/Fastify) | 23578.85 | 25971.88 | 25854.67 | 24831.27 | 22669.00 | 18567.42 |
| [Express 4.18.2](/results/main/Express) | 7970.02 | 9073.43 | 8981.43 | 8382.89 | 7167.82 | 6244.55 |