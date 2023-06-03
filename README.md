# Benchmark
Benchmarking Bun and Node [frameworks](/src) requests per second.

You can see the latest benchmark results [here](/results/index.md).

Tested on Github Codespace. I recommend testing this by yourself.

## Requirements
- [Bun](https://bun.sh)
- Bombardier (Copy the binary to `bin` or change the CLI option in the configuration [file](/config.ts)).

## Start
Clone this reposity. Go to the root directory of the repo then run:
```bash
# Install required dependencies
bun ins

# Run the benchmark
bun bench

# Or do both
bun start
```

# Docker
Use with docker.

```bash
# Build
bun docker:build

# Start
bun docker:start

# Watch for results
bun docker:watch
```

## Configurations
See [configuration file](/config.ts) and the [type declarations](/lib/types.ts). 