# Overview

This is a full-stack web application for **Yokan Digital**, a high-end **Revenue Architecture & AI Systems** firm. The application is built with a React frontend and Express.js backend, featuring a bilingual (English/French) single-page marketing website with a dark, technical aesthetic. The messaging is designed to speak to B2B clients looking for data-driven revenue systems and AI automation. The app uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, Framer Motion animations, and Drizzle ORM for database operations.

# Target Audience
- B2B companies seeking data-driven growth systems
- Founders and revenue leaders who want to replace "marketing magic" with "mathematical truth"
- Focus: Companies ready to invest in autonomous acquisition ecosystems

# User Preferences

Preferred communication style: Technical but accessible. Use terms like "Revenue Architecture", "Autonomous Acquisition Ecosystems", "Data-First Truth".

# Recent Updates (December 2025)

## Major Pivot: Revenue Architecture & AI Systems (Latest)
- **Complete rebrand**: Pivoted from interior design marketing agency to high-end Revenue Architecture firm
- **Ultra-dark theme**: Nearly black backgrounds (#050505, #0A0A0A) with electric green (#00ff88) accents
- **Bilingual EN/FR**: Switched from English/Malay to English/French
- **New typography**: Inter for headings, JetBrains Mono for data/metrics (monospace aesthetic)
- **Framer Motion animations**: Scroll reveals, stagger animations, pulsing data visualization
- **Single-page scroll layout**: All sections on one page with anchor navigation

## New Landing Page Sections
1. **Navbar**: Fixed header with logo, anchor links (Methodology, The System, About, Contact), EN/FR toggle, glitch-effect CTA button
2. **Hero**: "Stop Guessing. Start Engineering Revenue." headline with animated data grid visualization
3. **Problem Section (The Chaos)**: Comparison cards showing Vanity Metrics vs P&L Reality, Manual Work vs AI Automation
4. **Solution Section (The Machine)**: Three pillars - Data-First Truth, AI Autonomy, Scalable Infrastructure
5. **Tech Stack**: Marquee showcase of Python, OpenAI, Google Cloud, n8n, BigQuery, Looker Studio
6. **Founder Section**: Antoine's bio as "The Architect" with signature quote
7. **Contact/CTA**: Form with availability indicator and glowing border effects
8. **Footer**: Minimal footer with logo, links, LinkedIn

## Design Features
- **Glowing borders**: CSS box-shadow effects with electric green accent
- **Grid patterns**: Subtle grid overlays on dark backgrounds
- **Data flow animation**: Gradient animation flowing across elements
- **Glitch effect**: CTA button with glitch animation on hover
- **Pulse glow**: Animated glowing effect on key elements

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite
- **Routing**: Wouter (simplified - just home, blog, admin routes)
- **Styling**: Tailwind CSS with ultra-dark theme
- **Animations**: Framer Motion for scroll reveals and element animations
- **State Management**: TanStack Query for server state
- **Internationalization**: Custom hook-based i18n for EN/FR

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: DatabaseStorage using Neon PostgreSQL

## Database Schema
- **Users**: Basic authentication
- **Contacts**: Contact form submissions
- **Consultations**: Consultation booking requests
- **Blog Posts**: Full blog with metadata and content

## API Design
RESTful API endpoints:
- `POST /api/contact` - Submit contact form
- `POST /api/consultation` - Book consultation
- `GET /api/blog/posts/published` - Get published blog posts
- `GET /api/blog/posts/slug/:slug` - Get blog post by slug
- `POST /api/auth/login` - Admin login
- Blog CRUD endpoints for admin

# External Dependencies

## Core
- **Neon Database**: Serverless PostgreSQL
- **Drizzle ORM**: Type-safe database operations
- **Framer Motion**: Animation library

## UI Components
- **Radix UI**: Headless UI primitives
- **Lucide React**: Icon library
- **react-icons**: Company logos (SiPython, SiOpenai, etc.)

## Styling
- **Tailwind CSS**: Utility-first CSS
- **shadcn/ui**: Component library
- **Google Fonts**: Inter + JetBrains Mono

# File Structure (Key Files)

- `client/src/pages/home.tsx` - Main landing page with all sections
- `client/src/lib/i18n.ts` - EN/FR translations
- `client/src/hooks/use-language.tsx` - Language context provider
- `client/src/index.css` - Ultra-dark theme CSS with animations
- `client/src/App.tsx` - Simplified routing (home, blog, admin)
- `design_guidelines.md` - Complete design system documentation
