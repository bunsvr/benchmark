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

| Name | Average | GET `/` | GET `/id/10?name=zRK` | GET `/a/b` | POST `/json` |
| --- | --- | --- | --- | --- | --- | 
| Stric 3.2.7 | 55800.55 | 60298.94 | 54245.92 | 56995.42 | 51661.92 |
| Bun 0.7.0 | 55765.90 | 61113.76 | 50898.36 | 59247.63 | 51803.85 |
| Vixeny 0.0.6 | 55388.56 | 61263.27 | 53297.06 | 56093.40 | 50900.53 |
| Elysia 0.5.23 | 54185.44 | 59007.80 | 51725.14 | 54744.65 | 51264.16 |
| Hono 3.3.2 | 50742.52 | 56666.84 | 49192.60 | 47920.38 | 49190.26 |
| Deno 1.35.1 | 30641.40 | 32621.77 | 30464.02 | 34757.41 | 24722.38 |
| Node 20.0.0 | 26466.40 | 28158.58 | 26468.98 | 30725.41 | 20512.64 |