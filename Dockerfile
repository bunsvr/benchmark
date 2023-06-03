# Main build
FROM oven/bun
WORKDIR /app
COPY . .    

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"];