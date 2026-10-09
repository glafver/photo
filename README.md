# Glafira Veretennikova — Real Estate Photography Portfolio

Professional real estate photography website for Glafira Veretennikova, based in Skåne, Sweden.

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router)
- React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [react-photo-album](https://react-photo-album.com) — responsive photo grid
- [yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) — lightbox
- [react-awesome-reveal](https://github.com/morellodev/react-awesome-reveal) — scroll animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — pages and components (App Router)
  - `photos.ts` — photo data (categories, dimensions, URLs)
  - `layout.tsx` — root layout, global metadata and fonts
  - `portfolio/`, `about/`, `contacts/`, `staging_tips/`, `journey/` — routes
  - `components/` — shared components (Header, Footer, Hero, charts, form, etc.)
  - `robots.ts`, `sitemap.ts` — SEO files
  - `not-found.tsx` — custom 404 page
- `lib/site.ts` — site config (contacts, social links, production URL, navigation)
- `lib/stats.ts` — statistics data (bookings, property types, firms, locations)
- `lib/schema.ts` — JSON-LD structured data (SEO)
- `public/` — static assets (favicon, SE360 logo)

## Configuration

- `lib/site.ts` — contact details, social links and the production URL.
- `lib/stats.ts` — the statistics shown on the home and Journey pages.

## Forms

The contact form on the Contacts page uses [Netlify Forms](https://docs.netlify.com/forms/setup/)
(`data-netlify` attribute). Submissions appear in the Netlify dashboard under **Forms**.

## Build & deploy

```bash
npm run build
npm run start
```
