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

| Name | Average | GET `/` | GET `/id/16?name=0Ry` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 56005.30 | 61210.56 | 54134.48 | 56685.39 | 51990.78 |
| Bun 0.7.0 | 55618.51 | 60721.89 | 50361.12 | 59320.94 | 52070.10 |
| Vixeny 0.0.6 | 55191.71 | 60692.97 | 53441.74 | 55909.48 | 50722.66 |
| Elysia 0.5.23 | 54544.68 | 59490.21 | 51882.63 | 55019.14 | 51786.73 |
| Hono 3.3.2 | 50732.63 | 57015.74 | 48976.06 | 47654.34 | 49284.37 |
| Deno 1.35.1 | 30456.04 | 32353.04 | 30445.64 | 34287.26 | 24738.23 |
| Node 20.0.0 | 26639.29 | 28241.17 | 26786.90 | 30716.94 | 20812.15 |