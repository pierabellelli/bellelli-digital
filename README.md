# Bellelli Digital

Bilingual portfolio and services site for https://bellelli-digital.com/ — Vite + React + TanStack Router + Supabase.

## Setup

```bash
npm install
cp .env.example .env   # optional: configure the contact form
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

- Italian is the default. The IT/EN switch remembers the visitor's preference;
  `/?lang=it` and `/?lang=en` provide explicit, shareable language links.
- All interface copy is in `src/lib/copy.ts`. Keep both languages in sync.
- The profile features Piera's participation in Lovable SheBuilds and describes
  WorkflowDoctor as in development. OmbrellOne remains in the portfolio.
- Without Supabase configuration, the site loads normally and offers email contact.
  With configuration, the form inserts into the existing `leads` table and shows a
  success or error message without navigating away or claiming an email was sent.
- Contact details are in `src/lib/constants.ts`. Call requests currently use email;
  replace with a verified scheduling URL when one is available.
- There are no public product/demo links until their destinations are confirmed.
