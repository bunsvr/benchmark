# Copy bombardier
FROM alpine/bombardier
COPY /usr/local/go/bin/bombardier ./bin/bombardier

# Debug
RUN bombardier --help

# Main build
FROM oven/bun
WORKDIR /app
COPY . .    

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"];