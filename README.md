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

| Name | Average | GET `/` | GET `/id/57?name=ChD` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.1](/results/Bun) | 55375.79 | 61017.06 | 49767.45 | 59607.47 | 51111.19 |
| [Stric 3.3.4](/results/Stric) | 55008.06 | 60638.58 | 52975.46 | 55467.36 | 50950.83 |
| [Elysia 0.5.23](/results/Elysia) | 53789.23 | 58365.22 | 51816.66 | 54552.72 | 50422.33 |
| [Vixeny 0.0.6](/results/Vixeny) | 53546.00 | 58265.11 | 52710.46 | 54208.91 | 48999.52 |
| [Hono 3.3.2](/results/Hono) | 49829.79 | 55753.80 | 48184.61 | 47397.21 | 47983.54 |
| [Deno 1.35.3](/results/Deno) | 30147.11 | 32008.16 | 30072.98 | 33814.10 | 24693.20 |
| [Node 20.0.0](/results/Node) | 26764.61 | 28123.50 | 26822.10 | 31267.52 | 20845.32 |