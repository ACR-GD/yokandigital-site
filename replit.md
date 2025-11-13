# Overview

This is a full-stack web application for Yokan Digital, a Malaysian digital marketing agency. The application is built with a React frontend and Express.js backend, featuring a bilingual (English/Malay) marketing website with contact forms, consultation booking, free SEO/speed testing tools, and comprehensive blog with 12 SEO-optimized posts. The app uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Updates (November 2025)

## Labuan Digital Marketing Landing Page (Latest)
- **SEO-optimized landing page**: New /labuan-digital-marketing page targeting "Digital Marketing Agency in Labuan" keyword
- **Keyword integration**: All required keywords from SEO brief naturally integrated (digital marketing, companies in labuan, yokan digital, SEO, PPC, ROI, conversion rates, etc.)
- **Comprehensive content**: Hero section, success metrics (250% traffic, 180% sales, 95% success rate, 50+ companies), 6 service cards, 4 "why choose us" features
- **SEO structure**: Proper H1/H2 hierarchy, meta description, bilingual title tags
- **Bilingual support**: Full English/Malay language switching for all content
- **Footer integration**: Link added to Service Locations section in footer
- **Multiple CTAs**: Strategic call-to-action buttons for consultation booking
- **End-to-end tested**: Complete workflow validated with Playwright including navigation, language switching, and all sections

## Interactive Service Catalogue
- **Comprehensive service showcase**: New /catalogue page displaying all services with transparent pricing
- **Interactive filtering**: 7 category filters (All Services, Packages, Web Design, SEO, Marketing, Ads, Content)
- **Service cards**: 18 total services with icons, descriptions, pricing, features, and optional add-ons
- **Package bundles**: 3 packages (Starter RM2,500/month, Professional RM5,000/month, Enterprise RM10,000/month)
- **Standalone services**: Web Design (3 tiers), SEO (3 tiers), Social Media (4 options), Google Ads, Email Marketing, Content Marketing (3 options)
- **Visual design**: Attractive cards with gradient accents, badges (POPULAR/RECOMMENDED), and feature checkmarks
- **Bilingual content**: Full English/Malay support for all service information
- **SEO optimized**: Unique title and meta description that update based on language
- **Navigation**: Added to header between Services and Pricing
- **CTA section**: Bottom call-to-action encouraging free consultation booking
- **End-to-end tested**: Complete workflow validated with Playwright including filtering, language switching, and navigation

## Company Tagline
- **Tagline integration**: "Alone we go faster, together we go further" (EN) / "Bersendirian kita lebih pantas, bersama kita lebih jauh" (BM)
- **Placement**: Header, Footer, About page hero, Team page hero
- **Brand alignment**: African proverb reinforcing collaborative philosophy and Japanese Yokan values

## About Page
- **Comprehensive About page**: New /about page with inspiring company story and founder background
- **Founder story**: Antoine's 10+ years of experience in France and Canada bringing global innovation to Malaysia
- **Brand meaning**: Explanation of "Yokan" (予感) meaning "premonition/omen" in Japanese
- **Japanese philosophy**: Four core values - Speed & Precision, Omotenashi Spirit, Kaizen Mindset, Monozukuri Excellence
- **Bilingual content**: Full English/Malay support with localized SEO metadata
- **SEO optimized**: Unique title, meta description, and Open Graph tags that update based on language
- **Navigation**: Added to header between Team and About links
- **End-to-end tested**: Complete workflow validated with Playwright

## Blog Management System
- **Full CRUD functionality**: Complete admin dashboard for managing blog posts
- **Database-driven**: Posts stored in PostgreSQL with hybrid approach (DB + original 12 hardcoded posts)
- **Admin UI**: Dedicated Blog tab in admin dashboard with form for create/edit/delete operations
- **Image uploads**: Support for featured images via multer (max 5MB, stored in attached_assets/blog-images)
- **Rich metadata**: Title, slug, excerpt, content (HTML), category, tags, read time, publish date, draft/published state
- **Bilingual support**: Language field for English/Malay content
- **Auto slug generation**: Slugs auto-generated from titles for clean URLs
- **Real-time updates**: React Query integration for instant UI updates after creating/editing posts
- **Public display**: Blog listing and detail pages fetch from database with fallback to hardcoded posts
- **Authentication**: Admin login at /admin/login (username: admin, password: admin123)
- **End-to-end tested**: Complete workflow validated with Playwright from creation to public display

## Blog Content
- Added 2 comprehensive blog posts focused on Labuan, Malaysia digital marketing:
  - "Why Every Labuan Business Needs a Professional Website in 2024" (12-min read)
  - "Complete Paid Advertising Guide for Labuan Businesses in 2024" (14-min read)
- Both posts are SEO-optimized with Labuan-specific keywords
- Content is informative yet commercial, designed to attract and convert prospects
- Sitemap updated with new blog URLs (now 62 total URLs)

## Team Presentation
- Team page created at /team with 3 team member profiles
- Homepage team section showcasing expertise
- Professional photos for all team members displayed correctly
- Team navigation link added to header

## Sales Resources
- Comprehensive sales guide created for Edward (Sales Master)
- Complete flexibility to sell services individually or bundled
- "Land and expand" strategy documented
- Standalone pricing for all services

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library and vibrant gradient design system
- **State Management**: TanStack Query for server state management and API caching
- **Internationalization**: Custom hook-based i18n system supporting English and Malay languages
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions

## Backend Architecture
- **Framework**: Express.js with TypeScript for API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: DatabaseStorage implementation using Neon PostgreSQL for data persistence
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Development**: Vite integration for hot module replacement in development mode

## Database Schema
The application uses six main entities:
- **Users**: Basic user authentication (username/password)
- **Contacts**: Contact form submissions with service selection
- **Consultations**: Consultation booking requests with scheduling
- **SEO Audits**: Website analysis results with scoring and recommendations
- **Speed Tests**: Website performance testing with load times and optimization suggestions
- **Blog Posts**: Full blog post data with metadata, content, images, and publishing state

## API Design
RESTful API endpoints:

**Public Endpoints:**
- `POST /api/contact` - Submit contact form
- `POST /api/consultation` - Book consultation
- `POST /api/seo-audit` - Request SEO analysis
- `POST /api/speed-test` - Run website speed test
- `GET /api/blog/posts/published` - Get all published blog posts
- `GET /api/blog/posts/slug/:slug` - Get individual blog post by slug

**Admin Endpoints:**
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/check` - Check admin authentication status
- `GET /api/blog/posts` - Get all blog posts (including drafts)
- `POST /api/blog/posts` - Create new blog post (with image upload)
- `GET /api/blog/posts/:id` - Get blog post by ID
- `PATCH /api/blog/posts/:id` - Update blog post (with image upload)
- `DELETE /api/blog/posts/:id` - Delete blog post

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