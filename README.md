# SimplyMaid - Modern Cleaning Service Platform

A modern, full-featured cleaning service platform built with Next.js 15, TypeScript, and Supabase.

## 🏗 Architecture Overview

### Core Technologies
- ✨ Next.js 15 (App Router)
- 🔷 TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 🔥 Supabase (Headless CMS + Auth)
- 🤖 OpenAI Integration

### Rendering Strategy
- **Static Content (SEO-Optimized)**
  ```typescript
  // Marketing pages with ISR
  export const dynamic = 'force-static';
  export const revalidate = 3600;
  ```
  - Marketing pages
  - Service listings
  - Location pages
  - Blog/Guides
  
- **Dynamic Features**
  ```typescript
  "use client"; // Interactive components
  ```
  - Booking system
  - User dashboard
  - Admin interface

### Project Structure
```
src/
├── app/                    # Next.js 15 App Router
│   ├── (marketing)/       # Static, SEO-optimized routes
│   ├── (booking)/         # Dynamic booking flow
│   ├── (dashboard)/       # Admin interface
│   └── (auth)/           # Authentication
├── components/
│   ├── shared/           # Common components
│   │   ├── navigation.tsx
│   │   └── theme-provider.tsx
│   ├── marketing/        # Marketing components
│   ├── booking/          # Booking components
│   ├── dashboard/        # Admin components
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── cms/             # Supabase integration
│   ├── store/           # State management
│   └── utils/           # Utilities
├── styles/
│   ├── globals.css      # Global styles
│   └── themes/          # Theme configuration
└── types/
    └── cms.ts           # Type definitions
```

### Component Architecture
- **Prop-Driven Components**
  ```typescript
  interface HeroProps {
    content: HeroContent;
  }
  ```
  - Type-safe props
  - CMS integration
  - Reusable design

### Data Flow
- **Parallel Data Fetching**
  ```typescript
  const [hero, features, testimonials] = await Promise.all([
    getHeroContent(),
    getFeatures(),
    getTestimonials(),
  ]);
  ```

- **Type-Safe CMS**
  ```typescript
  interface ServiceContent {
    name: string;
    description: string;
    price: string;
    features: string[];
    popular: boolean;
  }
  ```

### Theme System
- **Global Styles**
  - CSS Variables
  - Dark/Light modes
  - Consistent design tokens

- **Tailwind Configuration**
  - Custom colors
  - Typography scale
  - Spacing system

## 🚀 Features

### Marketing
- ✅ SEO-optimized pages
- ✅ Dynamic service listings
- ✅ Location-based content
- ✅ Testimonials system

### Booking System
- ✅ Multi-step booking flow
- ✅ Location detection
- ✅ Service customization
- ✅ Price calculation

### Admin Dashboard
- ✅ Content management
- ✅ Booking overview
- ✅ Customer management
- ✅ Analytics

### Technical Features
- ✅ Type safety
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Responsive design

## 💻 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔑 Environment Setup

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key
```

## 🎯 Performance Optimizations

### Static Generation
- Pre-rendered marketing pages
- Incremental Static Regeneration
- Dynamic imports
- Route groups

### Data Management
- Parallel data fetching
- Type-safe queries
- Real-time subscriptions
- Optimistic updates

### Asset Optimization
- Image optimization
- Font optimization
- CSS optimization
- Code splitting

## 📱 Mobile Optimization
- ✅ Responsive design
- ✅ Touch-friendly interfaces
- ✅ Progressive loading
- ✅ Mobile navigation

## 🔒 Security
- ✅ Type safety
- ✅ Input validation
- ✅ Authentication
- ✅ Role-based access

## 📈 SEO
- ✅ Static generation
- ✅ Meta tags
- ✅ Structured data
- ✅ Sitemap generation

## 🎨 Design System
- ✅ Consistent components
- ✅ Theme customization
- ✅ Dark/Light modes
- ✅ Accessibility

## 📚 Documentation
- Component usage
- Type definitions
- API integration
- Deployment guides

## 🔄 CI/CD (Planned)
- Automated testing
- Preview deployments
- Production deployments
- Environment management