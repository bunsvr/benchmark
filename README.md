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

| Name | Average | GET `/` | GET `/id/73?name=xAt` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 3.2.7](/results/Stric) | 55626.51 | 60798.13 | 53232.81 | 56923.59 | 51551.51 |
| [Bun 0.7.0](/results/Bun) | 55309.25 | 61020.26 | 49937.07 | 58340.30 | 51939.37 |
| [Vixeny 0.0.6](/results/Vixeny) | 55126.00 | 60807.26 | 53912.88 | 55210.44 | 50573.41 |
| [Elysia 0.5.23](/results/Elysia) | 54499.43 | 59462.54 | 52562.69 | 55002.26 | 50970.22 |
| [Hono 3.3.2](/results/Hono) | 50812.06 | 56450.49 | 49794.85 | 47854.35 | 49148.56 |
| [Deno 1.35.3](/results/Deno) | 30403.68 | 32303.66 | 30375.85 | 34322.56 | 24612.65 |
| [Node 20.0.0](/results/Node) | 26820.57 | 28238.88 | 26797.51 | 31245.28 | 21000.62 |