# Next.js 14 Migration Package

This folder contains all files needed to migrate the Cricket Score SaaS to Next.js 14 App Router.

## Quick Start

```bash
# 1. Create new Next.js 14 project
npx create-next-app@14 cricket-score-nextjs --typescript --tailwind --eslint --app --src-dir

# 2. Navigate to new project
cd cricket-score-nextjs

# 3. Copy source files from this repo
cp -r ../cricket-score-lovable/src/* ./src/
cp -r ../cricket-score-lovable/nextjs-migration/app/* ./app/

# 4. Copy config files
cp ../cricket-score-lovable/tailwind.config.ts ./
cp ../cricket-score-lovable/next.config.js ./
cp ../cricket-score-lovable/Dockerfile ./
cp ../cricket-score-lovable/docker-compose.yml ./
cp ../cricket-score-lovable/.env.example ./

# 5. Install dependencies
npm install @tanstack/react-query framer-motion lucide-react sonner
npm install @fontsource/bebas-neue @fontsource/inter
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar
npm install @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress
npm install @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select
npm install @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot
npm install @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast
npm install @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
npm install cmdk date-fns embla-carousel-react input-otp react-day-picker
npm install react-hook-form @hookform/resolvers zod recharts vaul

# 6. Start development server
npm run dev
```

## Post-Migration Updates

After copying files, update these imports in page components that use navigation:

```typescript
// Before (React Router - in src/pages/*.tsx)
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

// After (Next.js)
import Link from 'next/link';
import { useRouter, useParams, usePathname } from 'next/navigation';

// Replace usage:
// navigate('/path') → router.push('/path')
// location.pathname → pathname
```

## File Structure

```
nextjs-migration/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page (wraps Index)
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── api/health/route.ts # Health check API
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (public)/
│   │   ├── matches/page.tsx
│   │   ├── tournaments/page.tsx
│   │   └── subscribe/page.tsx
│   └── (dashboard)/
│       ├── dashboard/page.tsx
│       ├── teams/page.tsx
│       ├── teams/[teamId]/players/page.tsx
│       ├── schedule-match/page.tsx
│       ├── live-scoring/page.tsx
│       ├── live-scoring/[matchId]/page.tsx
│       └── superadmin/...
```

## Deployment with Dokploy

```bash
# Build Docker image
docker build -t cricket-score-app .

# Run container
docker run -p 3000:3000 cricket-score-app

# Or use docker-compose
docker-compose up -d
```

## Environment Variables

The `.env.example` contains placeholder variables for future integrations:
- Payment (Razorpay)
- Database (PostgreSQL)
- Authentication (NextAuth.js)

## UI Preservation

All original UI is preserved. The migration only:
- Wraps existing page components in App Router pages
- Updates navigation imports
- Adds "use client" directives where needed

No visual changes were made.
