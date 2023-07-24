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

| Name | Average | GET `/` | GET `/id/18?name=TJd` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 56383.48 | 61809.66 | 54265.87 | 57473.78 | 51984.60 |
| [Bun 0.7.0](/results/Bun) | 56262.46 | 62273.38 | 50555.62 | 60427.81 | 51793.04 |
| [Vixeny 0.0.6](/results/Vixeny) | 55133.03 | 60733.16 | 53400.30 | 55556.78 | 50841.90 |
| [Elysia 0.5.23](/results/Elysia) | 54464.33 | 59691.11 | 52240.43 | 55075.53 | 50850.25 |
| [Hono 3.3.2](/results/Hono) | 50466.23 | 56626.32 | 49512.56 | 47152.84 | 48573.21 |
| [Deno 1.35.1](/results/Deno) | 30510.31 | 32547.80 | 30439.83 | 34403.60 | 24650.02 |
| [Node 20.0.0](/results/Node) | 26633.02 | 28130.55 | 26375.00 | 31228.40 | 20798.11 |