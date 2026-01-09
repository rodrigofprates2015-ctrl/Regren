# REGREN - Industrial Engineering Website

## Overview

This is a corporate website for REGREN Engenharia e Soluções Industriais, a Brazilian industrial engineering and maintenance company with over 20 years of experience. The site is a modern single-page application (SPA) redesign showcasing their services in industrial maintenance, 3D projects, and engineering solutions. The website features multiple pages including Home, Services, Quote Request, Videos/Photos gallery, and Clients/Partners sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom industrial theme (slate-900, blue-600 color scheme)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Server Pattern**: Single Express server serving both API routes and static files
- **Development**: Hot module replacement via Vite middleware
- **Production**: Static file serving from built assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Storage Pattern**: In-memory storage abstraction (`server/storage.ts`) with interface for future database integration
- **Migrations**: Drizzle Kit for database schema management

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (layout, shadcn/ui)
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage abstraction
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migration files
```

### Build System
- Development: `tsx` for TypeScript execution with Vite dev server
- Production: esbuild for server bundling, Vite for client bundling
- Output: `dist/` directory with compiled server and `dist/public/` for static assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: Session storage for Express sessions

### UI/Design
- **Radix UI**: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **TypeScript**: Type checking across full stack
- **Replit plugins**: Dev banner, cartographer, runtime error overlay for Replit environment

### External APIs/Services
- Company logo hosted on Locaweb S3: `yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br`
- Stock images from Unsplash for service illustrations
- Google Maps integration for location display