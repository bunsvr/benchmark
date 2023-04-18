# Benchmark
Benchmarking Bun [frameworks](/src).

You can see the latest benchmark results [here](/results/index.md).

Tested on Github Codespace. I recommend testing this by yourself.

## Requirements
- [Bun](https://bun.sh)
- [Node](https://nodejs.org)
- [Go](https://go.dev/dl)
- [Bombardier](https://github.com/codesenberg/bombardier)

## Start
Clone this reposity. Go to the root directory of the repo then run:
```bash
# Run the benchmark
bun bench
```

## Configurations
See [configuration file](/config.json) and the [type declarations](/lib/types.ts). 