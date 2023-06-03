# Bombardier
FROM golang as go

FROM alpine/bombardier as bombardier
COPY --from=go /usr/lib/go /usr/lib/go

# Main build
FROM oven/bun
WORKDIR /app
COPY . .    

# Add bombardier
COPY --from=bombardier /usr/lib/go/bin/bombardier ./bin/bombardier

# Debug
RUN bombardier --help

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"];