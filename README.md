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

### Chart
![Chart](/results/chart.png)

### Table 


| Name | Average | GET `/` | GET `/api/hi` | GET `/id/5?name=5LL` | GET `/a/b` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 4.2.0](/results/main/Stric) | 44392.80 | 47273.90 | 45636.78 | 45935.71 | 46353.87 | 36763.73 |
| [Vix 0.0.7](/results/main/Vix) | 44152.41 | 47435.09 | 46321.78 | 44864.77 | 45394.43 | 36745.97 |
| [Elysia 0.6.19](/results/main/Elysia) | 43375.07 | 46955.33 | 45911.14 | 42214.50 | 45682.32 | 36112.05 |
| [Fastify 4.21.0](/results/main/Fastify) | 23192.94 | 25350.92 | 25067.08 | 24330.84 | 22641.32 | 18574.56 |
| [Express 4.18.2](/results/main/Express) | 7905.69 | 9020.99 | 8887.13 | 8289.49 | 7164.58 | 6166.25 |