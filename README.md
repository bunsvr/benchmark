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


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/12?name=QTx` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.1.5](/results/main/Stric) | 46263.49 | 48877.99 | 48875.59 | 47408.84 | 47730.69 | 38424.35 |
| [Vixeny 0.0.7](/results/main/Vixeny) | 45060.48 | 48226.25 | 45809.46 | 46377.57 | 46842.32 | 38046.80 |
| [Elysia 0.6.10](/results/main/Elysia) | 44853.89 | 47927.20 | 46866.07 | 45017.10 | 46946.20 | 37512.88 |
| [Fastify 4.21.0](/results/main/Fastify) | 22632.36 | 25030.18 | 24925.94 | 23993.22 | 21829.39 | 17383.08 |
| [Express 4.18.2](/results/main/Express) | 7840.44 | 8944.50 | 8859.80 | 8259.80 | 7112.15 | 6025.97 |