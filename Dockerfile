# Bombardier
FROM alpine/bombardier AS bombardier
RUN ls /gopath/bin

# Main build
FROM oven/bun
WORKDIR /app

# Add bombardier binary
RUN mkdir ./bin
COPY --from=bombardier /gopath/bin ./bin

# Copy all other stuff
COPY . .    

# Debug
RUN ls ./bin
RUN ./bin/bombardier --help

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"]