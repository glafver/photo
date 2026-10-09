# Glafira Veretennikova — Real Estate Photography Portfolio

Professional real estate photography website for Glafira Veretennikova, based in Malmö & Lund, Sweden.

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
  - `portfolio/`, `about/`, `contacts/`, `staging_tips/` — routes
  - `components/` — shared components (Header, Footer, Hero, etc.)
  - `robots.ts`, `sitemap.ts` — SEO files
- `lib/site.ts` — single source of truth for site config (contacts, socials, URL)
- `public/` — static assets

## Configuration

Update `lib/site.ts` to change contact details, social links and the production URL
(used by SEO metadata, sitemap and robots.txt).

## Build & deploy

```bash
npm run build
npm run start
```
