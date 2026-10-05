# sistrings

Presentation website for **Sistrings** — a duo of two sisters on violin & viola, available for
weddings, corporate events, galas and private celebrations.

Built with **Next.js 16 (App Router)**, **next-intl** (RO at `/`, EN at `/en`), **Tailwind CSS v4** and **daisyUI v5**.
It's a single-page site with a smooth-scroll layout: Hero → The Duo → Events → Repertoire →
Gallery → Videos → Booking.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Filling in the real details

Almost everything is placeholder-free except a handful of values marked `// TODO`.

1. **`src/config/site.ts`** — the single source of truth for:
   - `email` — the booking inbox (the "Book us" button opens a pre-filled email to it)
   - `phone` / `location` — optional; leave `''` to hide
   - `address` / `areaServed` — home base and service area, used in Google's structured data
   - `social.instagram` / `social.tiktok` / `social.youtube` — leave `''` to hide an icon
   - `sisters` — each sister's name and instrument (`'violin'` or `'viola'`)
2. **`src/messages/en.json`** and **`src/messages/ro.json`** — all on-page copy (bio, taglines,
   event descriptions, repertoire genres). Edit both to keep the two languages in sync.
3. **Photos & videos** live in `public/`. The mapping of which file appears where is in
   **`src/config/media.ts`** — swap filenames there to rearrange the gallery, hero, etc.

## Media notes

- Images are served through `next/image` and optimized automatically (AVIF/WebP, responsive sizes).
- The two videos are **click-to-play** and are never preloaded, so the page stays light. They are
  large (~32 MB and ~60 MB) and vertical (720×1080); compressing them (e.g. with HandBrake/ffmpeg)
  will speed up playback for visitors.
- The favicon is `src/app/icon.png` (the brand logo).

## SEO

The page title and description Google shows come from `meta` in the message files, and the hero
`<h1>` text from `hero.eyebrow`.

- `/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
- Structured data (schema.org `MusicGroup` JSON-LD) is in `src/components/StructuredData.tsx`.
- Canonical / hreflang URLs come from `src/lib/seo.ts`.
- Social share cards are static images in `public/og/og-ro.jpg` and `og-en.jpg` (1200×630).

## Deploying to Vercel

Push to the connected GitHub repo — Vercel auto-detects Next.js and builds it. No environment
variables are required. Point the `sistrings.com` domain at the Vercel project when ready, and set
`url` in `src/config/site.ts` if the final domain differs (used for SEO / social share metadata).

## License

The source code of this website is licensed under the MIT License. All music, lyrics, images,
videos, and other creative assets belong to Sistrings and may not be reproduced without permission.
