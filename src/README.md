# SimplyMaid - Professional Cleaning Service Platform

A modern, full-featured cleaning service platform built with Next.js 15, TypeScript, and Supabase.

## 🏗 Architecture

### Rendering Strategy
- **Static Content (SEO-Optimized)**
  - Marketing pages
  - Content clusters
  - City/Location pages
  - Service listings
  - Revalidation every hour
  
- **Dynamic Client-Side Features**
  - Booking flow
  - User dashboard
  - Admin interface
  - Real-time updates

### CMS Integration (Supabase)
- **Content Types**
  ```typescript
  - Marketing (Hero, Features, CTA)
  - Services
  - Cities/Locations
  - Testimonials
  - Guides
  ```

- **Content Delivery**
  - Static Generation with ISR
  - Parallel data fetching
  - Type-safe content models
  - Real-time updates where needed

## 🌟 Features

### Core Technology Stack
- ✅ Next.js 15 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS + shadcn/ui
- ✅ Supabase (Headless CMS + Data Store)
- ✅ OpenAI Integration

### Key Routes
```
src/app/
├── (marketing)      # Static, SEO-optimized
│   ├── page.tsx     # Homepage
│   ├── services/    # Service listings
│   ├── cities/      # City-specific pages
│   └── guides/      # Cleaning guides
├── (booking)        # Dynamic, client-side
│   └── booking/     # Multi-step flow
├── (dashboard)      # Dynamic, protected
│   └── content/     # CMS interface
└── (auth)          # Dynamic, client-side
```

### Component Architecture
```
src/components/
├── marketing/       # Static components
│   ├── hero.tsx    # Props-driven
│   ├── features.tsx
│   └── cta.tsx
├── booking/        # Client components
│   ├── service-selection.tsx
│   └── location-details.tsx
└── ui/            # Shared components
    └── shadcn/ui  # Base components
```

### Data Flow
```
├── lib/
│   ├── cms/        # CMS integration
│   │   └── supabase.ts
│   ├── store/      # State management
│   │   └── booking-store.ts
│   └── utils/      # Shared utilities
```

### Type System
```
src/types/
└── cms.ts         # CMS type definitions
    ├── HeroContent
    ├── ServiceContent
    ├── CityContent
    └── TestimonialContent
```

## 🚀 Features
- ✅ Multi-step booking with state management
- ✅ Mobile-first responsive design
- ✅ Dynamic service/location pages
- ✅ SEO-optimized content system
- ⚠️ Authentication & user profiles
- ✅ AI content generation
- ✅ Location-based pricing
- ⚠️ Automated cleaner profiles

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

## 🔑 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
OPENAI_API_KEY=your-openai-api-key
```

## 🎯 Performance Optimizations

### Static Generation
- Marketing pages pre-rendered at build time
- Incremental Static Regeneration (ISR)
- Automatic static optimization
- Dynamic imports for client components

### Data Fetching
- Parallel data fetching
- Type-safe Supabase queries
- Optimistic updates
- Real-time subscriptions

### SEO
- Static metadata
- Dynamic OG images
- Structured data
- XML sitemaps

### Performance
- Code splitting
- Image optimization
- Font optimization
- Bundle analysis

## 🔒 Security
- ⚠️ Authentication flow
- ⚠️ Role-based access
- ✅ Input validation
- ⚠️ Rate limiting

## 📱 Mobile Optimization
- ✅ Responsive design
- ✅ Touch-friendly
- ✅ Progressive loading
- ✅ Optimized images

## 🧪 Testing (To Be Implemented)
- Unit tests
- Integration tests
- E2E tests
- Performance testing

## 📈 Monitoring (To Be Implemented)
- Error tracking
- Performance monitoring
- User analytics
- SEO tracking

## 🔄 CI/CD (To Be Implemented)
- Automated testing
- Preview deployments
- Production deployments
- Environment management