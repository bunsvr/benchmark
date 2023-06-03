# Bombardier
FROM alpine

ARG VERSION
ENV UPSTREAM github.com/codesenberg/bombardier

ENV GOROOT /usr/lib/go
ENV GOPATH /gopath
ENV GOBIN /gopath/bin
ENV PATH $PATH:$GOROOT/bin:$GOPATH/bin

# Install dependencies for building httpdiff 
RUN apk --no-cache update && apk --no-cache upgrade && \
 apk --no-cache add ca-certificates && \
 apk --no-cache add --virtual build-dependencies curl git go musl-dev && \
 # Install bombardier client
 echo "Starting installing bombardier $VERSION." && \
 go get -d $UPSTREAM && \
 cd $GOPATH/src/$UPSTREAM/ && git checkout $VERSION && \
 go install $UPSTREAM && \
 apk del build-dependencies

# Main build
FROM oven/bun
WORKDIR /app
COPY . .    

# Add bombardier
COPY --from=go /usr/lib/go/bin/bombardier ./bin/bombardier

# Debug
RUN bombardier --help

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"]