# Akshat Daruka Portfolio - Full Stack Application

## Overview

This is a modern full-stack portfolio website built for Akshat Daruka, a Product Manager & Engineer. The application showcases a professional portfolio with an interactive frontend and a backend API for handling contact form submissions. It follows a clean architecture with clear separation between client, server, and shared components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Currently uses in-memory storage, designed for easy PostgreSQL integration

### Design System
- **Component Library**: Custom components built on Radix UI
- **Theme**: Dark mode support with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typography**: Inter font family for consistent typography

## Key Components

### Frontend Components
- **Hero Section**: Animated landing section with typing effect
- **About Section**: Personal introduction with skill highlights
- **Experience Timeline**: Professional experience with timeline visualization
- **Skills Section**: Technical and soft skills categorized display
- **Projects Section**: Featured projects with technology tags
- **Contact Form**: Interactive contact form with validation

### Backend Services
- **Contact API**: RESTful endpoint for contact form submissions
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database persistence
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

### Shared Components
- **Schema Definitions**: Drizzle ORM schemas with Zod validation
- **Type Definitions**: Shared TypeScript interfaces and types
- **Validation**: Input validation using Zod schemas

## Data Flow

1. **User Interaction**: User interacts with the React frontend
2. **Form Submission**: Contact form data validated client-side using Zod
3. **API Request**: Data sent to Express backend via fetch API
4. **Server Validation**: Server validates data using shared Zod schemas
5. **Storage**: Data persisted using storage abstraction layer
6. **Response**: Success/error response sent back to client
7. **UI Update**: Frontend updates using TanStack Query cache invalidation

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured but not yet implemented)
- **Neon Database**: Serverless PostgreSQL provider for cloud hosting
- **Drizzle ORM**: Type-safe database operations with migrations

### UI/UX Libraries
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library
- **Lucide React**: Icon library with consistent design

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Vite**: Development server with HMR support
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Client assets served from build directory
4. **Environment Variables**: Database URL and other configs via env vars

### Production Setup
- **Server**: Express server serves both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Sessions**: PostgreSQL-backed sessions for scalability
- **Caching**: Query caching with TanStack Query

### Development Workflow
- **Dev Server**: Vite dev server with HMR for frontend development
- **API Development**: tsx for TypeScript execution in development
- **Database Migrations**: Drizzle Kit for schema management
- **Type Checking**: Strict TypeScript configuration

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 07, 2025: Major portfolio expansion with education, certifications, personal projects, and hobbies
  - Added comprehensive education timeline with 4 educational milestones
  - Split projects into Professional (HighRadius) and Personal sections with GitHub links
  - Added certifications section with 5 professional certifications from Pendo, Udemy, Coursera
  - Added hobbies section featuring Guitar, Tennis, Swimming, Poetry, and Astrophysics
  - Implemented working resume download functionality
  - Enhanced contact form with server-side logging for message reception (using in-memory storage)
  - Updated navigation with new sections: Education, Personal Projects, Certifications, Hobbies
  - Improved responsive design and Apple-inspired UX consistency

## Changelog

- July 07, 2025: Initial portfolio setup with dark theme and core sections
- July 07, 2025: Portfolio expansion with education, certifications, and enhanced functionality