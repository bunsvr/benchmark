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

| Name | Average | GET `/` | GET `/id/8?name=Mxg` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.3.4](/results/Stric) | 56040.89 | 61300.42 | 54667.62 | 56694.20 | 51501.34 |
| [Bun 0.7.1](/results/Bun) | 54921.56 | 59848.22 | 50286.02 | 58413.27 | 51138.74 |
| [Elysia 0.5.23](/results/Elysia) | 54697.26 | 60211.74 | 52462.97 | 55404.24 | 50710.11 |
| [Vixeny 0.0.6](/results/Vixeny) | 54409.91 | 59041.07 | 53891.09 | 54925.59 | 49781.88 |
| [Hono 3.3.2](/results/Hono) | 50716.06 | 56481.81 | 49828.19 | 48119.56 | 48434.69 |
| [Deno 1.35.3](/results/Deno) | 30341.10 | 32198.67 | 30345.34 | 34204.30 | 24616.08 |
| [Node 20.0.0](/results/Node) | 27186.59 | 28695.91 | 27357.49 | 31637.86 | 21055.11 |
