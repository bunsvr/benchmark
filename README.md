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

| Name | Average | GET `/` | GET `/id/17?name=n7V` | GET `/a/b` | POST `/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Bun 0.7.0](/results/Bun) | 55944.40 | 61852.02 | 50583.86 | 59736.98 | 51604.75 |
| [Stric 3.2.7](/results/Stric) | 55685.12 | 60537.60 | 54305.73 | 56111.93 | 51785.21 |
| [Vixeny 0.0.6](/results/Vixeny) | 55181.44 | 60072.02 | 53887.44 | 56210.92 | 50555.39 |
| [Elysia 0.5.23](/results/Elysia) | 54956.63 | 60404.26 | 52164.65 | 55873.02 | 51384.60 |
| [Hono 3.3.2](/results/Hono) | 51143.08 | 56894.63 | 49172.35 | 48766.58 | 49738.78 |
| [Deno 1.35.1](/results/Deno) | 30606.46 | 32565.15 | 30572.54 | 34634.01 | 24654.13 |
| [Node 20.0.0](/results/Node) | 26290.41 | 27845.32 | 26351.69 | 30431.51 | 20533.13 |