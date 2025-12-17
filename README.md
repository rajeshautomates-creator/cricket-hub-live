# Cricket Score SaaS

A real-time cricket scoring platform built with Next.js 14 App Router.

## Features

- **Live Score Updates**: Real-time ball-by-ball scoring
- **Tournament Management**: Create and manage cricket tournaments
- **Team & Player Management**: Organize teams and player rosters
- **Role-based Access**:
  - Super Admin: Platform management
  - Admin: Tournament/match management (subscription required)
  - User: View live scores

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State**: React Query + localStorage (demo mode)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@demo.com | demo123 |
| Admin | demo@admin.com | demo123 |
| Viewer | demo@viewer.com | demo123 |

## Docker Deployment (Dokploy)

### Build & Run

```bash
docker build -t cricket-score-app .
docker run -p 3000:3000 cricket-score-app
```

### Docker Compose

```bash
docker-compose up -d
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## Project Structure

```
/app
├── layout.tsx              # Root layout with providers
├── page.tsx                # Landing page
├── globals.css             # Global styles
├── (auth)/
│   ├── login/page.tsx
│   └── signup/page.tsx
├── (public)/
│   ├── matches/page.tsx
│   ├── tournaments/page.tsx
│   └── subscribe/page.tsx
└── (dashboard)/
    ├── dashboard/page.tsx
    ├── teams/page.tsx
    ├── schedule-match/page.tsx
    ├── live-scoring/[matchId]/page.tsx
    └── superadmin/...
```

## License

MIT
