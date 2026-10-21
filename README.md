# Bellelli Digital

Bilingual portfolio and services site for https://bellelli-digital.com/ — Vite + React + TanStack Router + Netlify Forms.

## Setup

```bash
npm install
npm run dev
```

## Contact form (Netlify Forms)

The website contact form uses **Netlify Forms**, not the legacy Supabase lead
insertion. React sends a URL-encoded POST to `/__forms.html`. The static
`public/__forms.html` blueprint is required for Netlify's build-time scanner:
keep the form name (`contact`) and field names (`nome`, `email`,
`messaggio`, `bot-field`) in sync with `ContactForm.tsx`.

### Enable and verify after deployment

1. In Netlify, open the **bellelli-digital** site → **Forms** → **Form detection**;
   turn on detection if it is disabled, then redeploy the current commit.
2. Under **Forms**, confirm that a form named `contact` appears.
3. Submit a realistic test enquiry from the live website and verify it appears
   in **Forms → contact → Verified submissions**. Also check **Spam**.
4. Configure an email alert in Netlify's form notifications settings if
   desired. Notification emails are **not** enabled by this code.
5. Review the privacy notice and retention policy for storing contact data
   with Netlify before collecting production enquiries.

A successful front-end HTTP response alone does not confirm form detection is
enabled: verify the submission in the Netlify dashboard. If the Netlify form
service is unavailable, the user is shown a fallback mailto link and the
input is preserved.

## Deploy

Connect the repo to Netlify. `netlify.toml` provides the build command and
SPA redirects. No Supabase credentials are required for the contact form.
The prior Supabase migration and example environment variables are legacy
and are no longer used by the contact form.

## Notes

- Italian is the default. The IT/EN switch remembers the visitor's preference;
  `/?lang=it` and `/?lang=en` provide explicit, shareable language links.
- All interface copy is in `src/lib/copy.ts`. Keep both languages in sync.
- The profile features Piera's participation in Lovable SheBuilds and describes
  WorkflowDoctor as in development. OmbrellOne remains in the portfolio.
- The contact form submits to Netlify Forms and shows a success or error message
  without navigating away. Netlify stores the lead; email notifications require
  separate configuration.
- Contact details are in `src/lib/constants.ts`. Call requests currently use email;
  replace with a verified scheduling URL when one is available.
- There are no public product/demo links until their destinations are confirmed.
