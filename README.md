# Benchmark
Benchmarking Bun, Node and Deno [frameworks](/src) performance, in requests per second.

You can see the details results [here](/results/index.md). 

I recommend testing this by yourself as performance may varies on different machine.

## Requirements
All tool required to set up and run the benchmark.

### Bun
Bun is required to run Bun frameworks and benchmark scripts. See [bun.sh](https://bun.sh).

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


| Name | Average | GET `/` | GET `/id/39?name=OCI` | GET `/api/js` | POST `/api/json` |
|  :---: | :---: | :---: | :---: | :---: | :---: |
| [Stric 5.0.2](/results/main/Stric) | 44058.77 | 47639.22 | 46560.05 | 46110.47 | 35925.36 |
| [Vix 0.0.7](/results/main/Vix) | 43800.69 | 46480.79 | 46285.97 | 45384.30 | 37051.71 |
| [Elysia 0.7.15](/results/main/Elysia) | 42528.34 | 46548.55 | 43732.66 | 43380.82 | 36451.32 |
| [Hono 3.7.2](/results/main/Hono) | 40353.37 | 46542.88 | 40174.16 | 39887.75 | 34808.70 |
| [Grace 0.3.9](/results/main/Grace) | 32200.16 | 36000.82 | 31178.33 | 34143.83 | 27477.65 |