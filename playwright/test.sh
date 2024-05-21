#!/bin/bash

# Stop upon error and undefined variables.
# Print commands before executing.
set -eux

# Start a development server.
bun run dev &

# Clean up on exit.
clean_up() {
    lsof -i:5173 -t | xargs kill -9
}
trap clean_up EXIT

# Wait for the server to start.
sleep 3

# Run playwright tests.
CI=true bun run playwright
