# Benchmark
Benchmarking Bun [frameworks](/src).

You can see the latest benchmark results [here](/results.md).

Tested on Github Codespace. I recommend testing this by yourself.

## Requirements
- [Bun](https://bun.sh)
- [Node](https://nodejs.org)
- [Go](https://go.dev/dl)
- [Bombardier](https://github.com/codesenberg/bombardier)

## Start
Clone this reposity. Go to the root directory of the repo then run:
```bash
# Install all required dependencies
bun install

# Run the benchmark
bun bench
```

## Configurations
See the configuration file [here](/config.json). This file includes all tests, preparation scripts and benchmark command options.