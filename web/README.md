# Sentinel-AV Web UI

This is the web-based user interface for Sentinel-AV, a modern, self-hosted antivirus and lightweight EDR platform. The Web UI provides an authenticated interface for managing agents, signatures, scans, and security events across your infrastructure.

## Overview

The Sentinel-AV Web UI is built with [Next.js](https://nextjs.org) and serves as the central dashboard for:

- Managing agent fleet (Linux, Windows, macOS)
- Controlling signature distribution and updates
- Monitoring real-time security events
- Managing quarantine and threat response
- Viewing scan history and system statistics

## Getting Started

First, ensure the Sentinel-AV server backend is running, then start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the dashboard.

The Web UI connects to the Sentinel-AV server backend to provide real-time monitoring and management capabilities.

## Features

- **Agent Management**: View and control deployed agents across your infrastructure
- **Signature Management**: Upload, version, and distribute YARA and hash signatures
- **Real-time Monitoring**: Live logs and scan queue visualization
- **Threat Response**: Quarantine management and threat remediation
- **Dashboard**: System status, statistics, and event history
- **Secure Authentication**: Role-based access control for system administration

## Learn More

To learn more about the Sentinel-AV project and its architecture, see the main [README](../../README.md) in the project root.

## Deployment

The Web UI is typically deployed as part of the complete Sentinel-AV server component. See the project's main documentation for deployment instructions.
