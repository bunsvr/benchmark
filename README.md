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

| Name | Average | GET `/` | GET `/id/43?name=f6U` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 55973.37 | 61550.41 | 53686.68 | 56881.71 | 51774.69 |
| Vixeny 0.0.6 | 55163.30 | 60984.20 | 53109.00 | 56125.05 | 50434.94 |
| Bun 0.7.0 | 55041.91 | 60516.42 | 49846.13 | 57855.03 | 51950.07 |
| Elysia 0.5.23 | 54897.60 | 60335.61 | 52134.64 | 56044.55 | 51075.59 |
| Hono 3.3.2 | 50740.41 | 56764.59 | 49008.93 | 47914.13 | 49273.98 |
| Deno 1.35.1 | 30296.71 | 32354.60 | 30251.35 | 34395.57 | 24185.32 |
| Node 20.0.0 | 26816.81 | 28225.91 | 26591.34 | 31555.16 | 20894.83 |