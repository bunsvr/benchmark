FROM debian:11.6-slim as builder
WORKDIR /app

# Install Bun
RUN apt update
RUN apt install curl unzip -y
RUN curl https://bun.sh/install | bash

# Install Go
ENV VERSION="1.18.1"
ENV ARCH="amd64" 
RUN curl -O -L "https://go.dev/dl/go${VERSION}.linux-${ARCH}.tar.gz"
RUN tar -xf "go${VERSION}.linux-${ARCH}.tar.gz"
RUN chown -R root:root ./go

# Add Go binaries to PATH
ENV PATH="/app/go/bin:${PATH}"

RUN go install -mod=mod github.com/codesenberg/bombardier@latest

# Main
FROM gcr.io/distroless/base
WORKDIR /app

COPY --from=builder /root/.bun/bin/bun bun
COPY --from=builder /root/go/bin/bombardier bombardier

COPY . .

ENV NODE_ENV production
CMD ["./bun", "docker:task"]

EXPOSE 3000