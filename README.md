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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/46?name=uWF` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.2](/results/main/Stric) | 49624.10 | 51927.51 | 50064.84 | 47868.21 | 51640.45 | 46619.50 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 48677.09 | 52184.29 | 50372.65 | 46565.49 | 48475.47 | 45787.55 |
| [Elysia 0.6.10](/results/main/Elysia) | 47728.58 | 50550.06 | 48635.60 | 46876.62 | 47388.56 | 45192.06 |
| [Fastify 4.21.0](/results/main/Fastify) | 23313.47 | 25865.34 | 25464.83 | 24079.14 | 22524.02 | 18634.03 |
| [Express 4.18.2](/results/main/Express) | 7942.16 | 9013.45 | 8908.01 | 8423.72 | 7178.27 | 6187.36 |