# Sentinel-AV Dashboard Project

## Project Overview

The Sentinel-AV Dashboard is a modern antivirus monitoring and management web application built using React, TypeScript, and Vite. The application provides real-time antivirus monitoring with features such as threat detection, scan management, and system protection analytics.

The project was created as a Lovable project (https://lovable.dev/projects/91d69a8f-47aa-40a4-b2d1-58305670cd6d) and is built with modern web technologies including shadcn/ui components and Tailwind CSS for styling.

## Architecture & Technologies

### Core Technologies
- **React 18**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript for improved development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Reusable UI components built on Radix UI and Tailwind CSS

### Key Libraries & Features
- **React Router DOM**: Client-side routing for SPA navigation
- **TanStack Query (React Query)**: Server state management and caching
- **Recharts**: Declarative charting library for data visualization
- **Lucide React**: Beautifully simple icon library
- **Radix UI Primitives**: Accessible low-level UI components
- **Zod**: TypeScript-first schema validation

### UI Components
The project uses shadcn/ui with Tailwind CSS for consistent, accessible UI components. Components are organized as:
- Base UI components in `@/components/ui`
- Custom application components in `@/components`
- Page components in `@/pages`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Application header with navigation
│   ├── Sidebar.tsx     # Sidebar navigation
│   └── NavLink.tsx     # Navigation link wrapper
├── pages/              # Route-specific page components
│   ├── Overview.tsx    # Main dashboard overview
│   ├── Scans.tsx       # Scan management page
│   ├── Threats.tsx     # Threats detection page
│   ├── Settings.tsx    # Settings page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite environment type definitions
```

## Building and Running

### Prerequisites
- Node.js (version compatible with package.json)
- npm, pnpm, or bun package manager

### Development Commands
```bash
# Install dependencies (using the lockfile in the repo)
pnpm install  # or npm install or bun install

# Start development server
pnpm dev      # or npm run dev or bun run dev

# Build for production
pnpm build    # or npm run build or bun run build

# Preview production build locally
pnpm preview  # or npm run preview or bun run preview

# Lint code
pnpm lint     # or npm run lint or bun run lint
```

### Development Server Configuration
- The development server runs on port 8080
- Hosted on `::` (IPv6) which also supports IPv4 connections
- Hot Module Replacement (HMR) enabled for fast development

## Development Conventions

### File Naming
- React components use PascalCase (e.g., `Overview.tsx`, `StatCard.tsx`)
- Utilities and functions use camelCase (e.g., `utils.ts`)
- Constants may use PascalCase or camelCase depending on context

### Component Architecture
- Pages are in the `pages/` directory and contain route-specific logic
- Reusable UI components are in `components/` directory
- Base shadcn/ui components are in `components/ui/`
- Complex UI patterns are abstracted into custom components (e.g., `Layout.tsx`)

### Styling Approach
- Tailwind CSS utility classes for styling
- CSS variables for theming and consistent color system
- Responsive design using Tailwind's responsive prefixes
- Dark mode support using Tailwind's dark mode variant

### Routing
- React Router DOM for client-side navigation
- Main routes defined in `App.tsx`
- Sidebar navigation in `Sidebar.tsx` with active state management
- 404 catch-all route for unmatched paths

## Key Features

### Dashboard Components
- System status monitoring (protected/unprotected)
- Scan activity tracking with charts
- Threat detection visualization
- Vulnerability classification
- Quick action buttons for scanning and updates

### Data Visualization
- Bar charts for scan activity
- Line charts for threat trends
- Pie charts for vulnerability types
- Stat cards for key metrics
- All powered by Recharts library

### Navigation Structure
- Sidebar navigation with collapsible support
- Header with application title and status
- Responsive design that works on different screen sizes
- Active route highlighting

## Environment & Configuration

### TypeScript Configuration
- Strict mode is disabled to allow flexibility during development
- Path aliases configured: `@/*` maps to `./src/*`
- Base URL set to project root

### Tailwind CSS Configuration
- Theme extends with custom colors using CSS variables
- Border radius using design tokens
- Custom shadows defined as CSS variables
- Dark mode support using `[data-theme="dark"]` attribute
- Custom font families configured (DM Sans, Crimson Pro, SF Mono)

### API Integration
- Uses React Query for data fetching and caching
- Presumably connects to backend API for real-time antivirus data
- Error handling and loading states managed through React Query

## Project-Specific Notes

- The project is configured for the "lovable.dev" platform with component tagging during development
- The alias "Sentinal-av" is used in the project path (note: "Sentinal" is likely intended to be "Sentinel")
- The project follows shadcn/ui conventions and styling patterns
- Components are designed to be reusable and maintainable
- Proper accessibility is maintained through Radix UI primitives