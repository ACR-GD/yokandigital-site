# Overview

This is a full-stack web application for Yokan Digital, a Malaysian digital marketing agency. The application is built with a React frontend and Express.js backend, featuring a bilingual (English/Malay) marketing website with contact forms, consultation booking, and free SEO/speed testing tools. The app uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query for server state management and API caching
- **Internationalization**: Custom hook-based i18n system supporting English and Malay languages
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions

## Backend Architecture
- **Framework**: Express.js with TypeScript for API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Dual storage implementation with in-memory storage for development and PostgreSQL for production
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Development**: Vite integration for hot module replacement in development mode

## Database Schema
The application uses five main entities:
- **Users**: Basic user authentication (username/password)
- **Contacts**: Contact form submissions with service selection
- **Consultations**: Consultation booking requests with scheduling
- **SEO Audits**: Website analysis results with scoring and recommendations
- **Speed Tests**: Website performance testing with load times and optimization suggestions

## API Design
RESTful API endpoints:
- `POST /api/contact` - Submit contact form
- `POST /api/consultation` - Book consultation
- `POST /api/seo-audit` - Request SEO analysis
- `POST /api/speed-test` - Run website speed test

All endpoints use JSON payloads with Zod validation and return structured responses with success/error indicators.

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database toolkit with migration support

## UI Components
- **Radix UI**: Headless UI primitives for accessibility-compliant components
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment support
- **TypeScript**: Full type safety across frontend, backend, and shared schemas
- **ESBuild**: Fast bundling for production builds

## Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library with consistent design tokens
- **CSS Variables**: Theme system supporting light/dark modes

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation shared between client and server
- **@hookform/resolvers**: Integration between React Hook Form and Zod

The application is configured for deployment on Replit with development-optimized tooling and production-ready build processes.