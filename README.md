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

| Name | Average | GET `/` | GET `/id/13?name=JNb` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.0](/results/Bun) | 56626.41 | 62939.37 | 51113.84 | 60275.57 | 52176.85 |
| [Stric 3.2.7](/results/Stric) | 55632.75 | 60439.56 | 53978.62 | 55879.84 | 52232.98 |
| [Vixeny 0.0.6](/results/Vixeny) | 55138.81 | 60543.09 | 53822.90 | 55784.01 | 50405.23 |
| [Elysia 0.5.23](/results/Elysia) | 54626.29 | 60415.92 | 52020.79 | 55071.38 | 50997.07 |
| [Hono 3.3.2](/results/Hono) | 51468.34 | 57993.31 | 49951.00 | 49021.83 | 48907.23 |
| [Deno 1.35.1](/results/Deno) | 30561.69 | 32610.76 | 30499.39 | 34616.26 | 24520.33 |
| [Node 20.0.0](/results/Node) | 26739.37 | 27976.14 | 26713.86 | 31244.70 | 21022.77 |