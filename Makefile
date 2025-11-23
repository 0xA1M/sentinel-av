.PHONY: all server agent web clean

all: server agent web

# Server
server:
	@echo "Building server..."
	cd server && go build -o bin/sentinel-server ./cmd/server

# Agent
agent:
	@echo "Building agent..."
	cd agent && go build -o bin/sentinel-agent ./cmd/agent

# WebUI
web:
	@echo "Building webUI..."
	cd web && pnpm install
	cd web && pnpm build

# Run server (for dev)
run-server:
	cd server && go run ./cmd/server

# Run agent (for dev)
run-agent:
	cd agent && go run ./cmd/agent

# Run webUI
run-web:
	cd web && pnpm dev

# Clean binaries
clean:
	@echo "Cleaning binaries..."
	rm -rf server/bin/*
	rm -rf agent/bin/*
