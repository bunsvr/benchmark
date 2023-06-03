# Main build
FROM oven/bun
COPY . .    

# Install required dependencies
RUN bun ins

# Serve the results
EXPOSE 3000
ENTRYPOINT ["bun", "docker:task"];