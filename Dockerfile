# Bombardier
FROM golang as go

ENV GOROOT .
ENV GOPATH /go
ENV GOBIN /go/bin
ENV PATH $PATH:$GOROOT/bin:$GOPATH/bin

RUN go clean -modcache
RUN go install -mod=mod github.com/codesenberg/bombardier@latest

# Main build
FROM oven/bun
WORKDIR /app

# Add bombardier binary
COPY --from=go ./bin/bombardier ./bin/bombardier

# Copy all other stuff
COPY . .    

# Debug
RUN bombardier --help

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"]