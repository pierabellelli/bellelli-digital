# Bellelli Digital

Landing page for bellelli-digital.it — Vite + React + TanStack Router + Supabase.

## Setup

```bash
npm install
cp .env.example .env   # then fill in VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
npm run dev
```

## Supabase

Run `supabase/migrations/0001_create_leads.sql` in the Supabase SQL Editor to create
the `leads` table (id, nome, email, messaggio, created_at) with an RLS policy
allowing anonymous inserts from the contact form.

## Deploy

Connect the repo to Netlify. `netlify.toml` is already configured for the build
command and SPA redirects. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
as environment variables in the Netlify site settings.

## Notes

- The OmbrellOne link in the Products section (`src/components/Products.tsx`) uses
  a placeholder URL — update `OMBRELLONE_URL` with the real one.
- The Calendly URL is set in `src/lib/constants.ts` — update with the real scheduling link.
