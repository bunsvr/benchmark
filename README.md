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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/76?name=8W8` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.4](/results/main/Stric) | 45589.15 | 47989.13 | 47795.33 | 47048.84 | 47457.16 | 37655.30 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 44951.58 | 48347.74 | 46944.82 | 45643.39 | 46934.41 | 36887.52 |
| [Elysia 0.6.10](/results/main/Elysia) | 44193.51 | 47257.16 | 46540.29 | 44189.59 | 46243.50 | 36737.02 |
| [Fastify 4.21.0](/results/main/Fastify) | 23013.20 | 25016.20 | 25303.95 | 23518.05 | 22278.51 | 18949.29 |
| [Express 4.18.2](/results/main/Express) | 7796.25 | 8745.89 | 8890.24 | 8370.15 | 6937.15 | 6037.80 |