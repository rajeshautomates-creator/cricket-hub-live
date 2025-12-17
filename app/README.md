# Next.js 14 Migration Files

These files are prepared for migrating this project to Next.js 14 App Router.

## Important

These files will NOT work in the current Vite environment. They are meant to be used after:

1. Exporting this project via GitHub
2. Creating a new Next.js 14 project
3. Copying `src/` components to the new project
4. Using these `/app` route files

## Migration Steps

```bash
# 1. Create new Next.js project
npx create-next-app@14 cricket-score-nextjs --typescript --tailwind --eslint --app

# 2. Copy from this exported repo:
cp -r src/components new-project/src/
cp -r src/hooks new-project/src/
cp -r src/lib new-project/src/
cp -r src/pages new-project/src/
cp -r app/* new-project/app/
cp tailwind.config.ts new-project/
cp next.config.js new-project/
cp Dockerfile new-project/
cp docker-compose.yml new-project/

# 3. Install dependencies
npm install @tanstack/react-query framer-motion lucide-react
npm install @radix-ui/react-* # all shadcn dependencies

# 4. Update imports in page components to use next/navigation
```

## Files Included

- `/app/layout.tsx` - Root layout with providers
- `/app/page.tsx` - Landing page
- `/app/globals.css` - Global styles (copy of index.css)
- `/app/(auth)/` - Login, Signup pages
- `/app/(public)/` - Matches, Tournaments, Subscribe
- `/app/(dashboard)/` - Admin dashboard routes
- `/app/api/health/route.ts` - Health check endpoint
