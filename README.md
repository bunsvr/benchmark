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

| Name | Average | GET `/` | GET `/id/27?name=Zyo` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.0.4](/results/Stric) | 52570.17 | 56486.02 | 52290.86 | 54455.63 | 47048.15 |
| [Bun 0.7.2](/results/Bun) | 51879.77 | 55830.25 | 49851.86 | 54441.75 | 47395.23 |
| [Vixeny 0.0.6](/results/Vixeny) | 51862.45 | 56025.35 | 52851.99 | 53144.30 | 45428.16 |
| [Elysia 0.5.25](/results/Elysia) | 51061.85 | 55588.88 | 51286.68 | 51922.17 | 45449.67 |
| [Hono 3.3.2](/results/Hono) | 48022.92 | 54520.12 | 49770.03 | 44663.52 | 43138.00 |
| [Deno 1.35.3](/results/Deno) | 34367.83 | 36408.00 | 34434.81 | 39208.52 | 27420.01 |
| [Node 20.0.0](/results/Node) | 28001.03 | 29451.87 | 28243.53 | 32184.36 | 22124.37 |
| [Fastify 4.21.0](/results/Fastify) | 19034.69 | 19746.57 | 20458.33 | 19139.60 | 16794.28 |