# DC Music Love

A music company web app and admin dashboard for artists, releases, events, media, and culture-driven storytelling.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL (works with Supabase or Neon)

## Getting started

1. Install dependencies:
   npm install
2. Create a PostgreSQL database and add your connection string to `.env.local`:
   DATABASE_URL=postgresql://user:password@localhost:5432/dc_music_love
3. Push the Prisma schema:
   npx prisma db push
4. Seed demo data:
   npm run db:seed
5. Start the app:
   npm run dev

## Admin access

The seed script creates an example admin account:
- admin@dcmusiclove.com

Add a real auth provider later if you want production login.

## Project structure

- `app/` - public pages and admin dashboard pages
- `components/` - reusable UI elements
- `data/` - example content and mock data
- `lib/` - shared database utilities
- `prisma/` - Prisma schema and seed script
