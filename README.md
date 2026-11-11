# History IAS Academy

The digital campus of **History IAS Academy** — teaching since **April 2007** from the Durgakund (Bhelupur) and Lanka BHU Road campuses in Varanasi (Uttar Pradesh, India) — for UPSC CSE (IAS/IPS), UPPSC / State PCS, PCS Judiciary, CLAT, UGC NET/JRF, CUET, CTET, CHS entrance, NDA, CDS, SSC, Banking, Railways and foundation courses (Classes 9–12).

> Crest motto: **Become an IAS** · Tagline: **Your Pathway to IAS, PCS, and UPSC Success**

![Stack](https://img.shields.io/badge/Next.js%2016-App%20Router-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind%204-css-teal) ![Deploy](https://img.shields.io/badge/Vercel-ready-purple)

---

## What is inside

### AI Assistant (fully local, zero answer-API calls)
A floating chat assistant — its icon is the academy crest — that answers questions **entirely on-device** from a 20-intent local bank (`src/data/chatbot.ts`): courses, fee enquiry, campuses, timings, defence coaching, the academy app, test series, mentoring, facilities, ratings and faculty. When a visitor needs the human desk (admissions, fees), the assistant hands off with a pre-filled **WhatsApp deep link to +91 81880 10990** that quotes the visitor's question.

### Current Affairs Briefings (local memory, zero API calls)
A daily editorial briefing for **11, 10 and 9 November 2026**, compiled by the academy and stored entirely in local data files:

- **PIB analysis items** marked with a badge, alongside The Hindu / Business Standard / Indian Express / Down To Earth sourcing
- Every article is structured for fast revision: **memory hook, overview, Prelims points, Mains points, Additional points, key terms**, and **practice questions** (interactive Prelims MCQs with instant feedback, plus Mains questions with answer structures)
- Category filters, date tabs (Today / Yesterday / 9 Nov), GS tags and syllabus tags

### 3D AI Geo Maps: the full world atlas
A real interactive 3D globe (globe.gl + three.js, textures served locally) with **168 UPSC-curated locations across 8 toggleable layers**:

| Layer | Count | Layer | Count |
| --- | --- | --- | --- |
| Places in News | 36 | Ports (incl. Vizhinjam, Chabahar, Gwadar) | 22 |
| Rivers (real polylines: Ganga, Brahmaputra, Indus + world) | 30 | Dams & Projects (Polavaram, Ken-Betwa, GERD...) | 12 |
| Mountain Ranges | 16 | UNESCO Heritage (Charaideo 2024, Maratha Forts 2025) | 17 |
| Straits & Chokepoints (Hormuz, Malacca, Bab el-Mandeb...) | 18 | Ecology (parks, Ramsar, hotspots) | 17 |

- Every location carries **why in the news + exam facts + syllabus tags**
- Search with fly-to, explore list, prev/next navigation
- **AI Map Quiz** (`/api/ai/geo-quiz`): LLM-generated questions answered by clicking the globe, haversine-distance scoring (bullseye / close / warm / off target), streaks, a "Show on map" reveal, and a local fallback question bank when the AI is busy, so the quiz always works offline

### The academy platform
- Home page with the History IAS method (Guide · Blend · Test · Mentor), learn pillars, the ten reasons aspirants choose the academy, audience segments (UPSC CSE → foundation Classes 9–12), aspirant voices and the full FAQ
- **Courses & fee structure**: UPSC CSE Comprehensive Programme, UPPSC / State PCS Batches, PCS Judiciary & CLAT, Higher Education & Entrance (UGC NET/JRF, CUET UG/PG, CTET, CHS), NDA & CDS Defence Training (special guidance from **Brigadier Vijay Sagar Dheman**), SSC / Banking / Railways, Foundation (Classes 9–12) and the **GS SCORE Offline Test Series** — fees are programme-specific and shared transparently **on enquiry**
- Resources: a mains syllabus tracker with progress saved in local memory, flip-card Gyan Cards and the directive-word answer template
- About (managed under **Rudra Raj**, Delhi-based faculty team, air-conditioned classrooms, student seating area, free parking, quiet study environment near BHU, rated **4.8/5 by 100+ students**) and Contact (both campuses with **embedded Google Maps**, helplines +91 81880 10990 / +91 95592 45904 / +91 96166 89110, Instagram and Facebook, 8 AM–9 PM all days)

---

## Tech stack

- **Next.js 16 (App Router) + TypeScript 5**, single-route SPA with hash-based views so navigation, refresh and deep links behave
- **Tailwind CSS 4** with a full light/dark token system (crest navy ink + crest red accent on warm paper, Source Serif 4 + IBM Plex Sans/Mono)
- **shadcn/ui** components, Lucide icons
- **globe.gl + three.js** for the atlas; textures self-hosted in `public/globe/` (no CDN dependency); `three/webgpu` is stubbed out in `next.config.ts` for Turbopack compatibility
- **zustand** for view/cart state, **sonner** for toasts, **next-themes** for dark mode
- Current affairs, atlas and chatbot data are plain TypeScript modules under `src/data` (no database, no external API at runtime)
- The AI quiz route uses the `z-ai-web-dev-sdk` server-side and degrades gracefully to a deterministic local question bank

## Getting started

```bash
bun install          # or npm install
bun run dev          # http://localhost:3000
bun run lint         # eslint check
bun run build        # production build
```

## Project structure

```
src/
  app/
    api/ai/geo-quiz/route.ts   # AI map quiz (LLM + offline fallback)
    layout.tsx                 # fonts, metadata, providers
    page.tsx                   # single route shell
  components/
    custom/                    # header, footer, globe canvas, quiz panel, cart, AI chatbot
    ui/                        # shadcn/ui primitives
  data/
    geo/                       # 168 atlas entries across 8 layer files
    news/                      # daily briefings (2026-11-09, -10, -11, index)
    chatbot.ts                 # local assistant intents + matcher
    site.ts, types.ts          # brand data, courses, testimonials, contracts
  lib/                         # store (zustand), haversine/score helpers
  views/                       # home, news, atlas, path, resources, about, contact
design.md                      # the design law (tokens, motion, anti-slop rules)
public/
  brand/                       # crest, classroom and study-hall imagery
  globe/                       # self-hosted earth textures
```

## Updating current affairs

Briefings are data files, so adding a day is a copy-paste-free code change:

1. Create `src/data/news/<YYYY-MM-DD>.ts` exporting `CaArticle[]` (see `src/data/types.ts` for the contract: hook, overview, prelimsPoints, mainsPoints, additionalPoints, keyTerms, practice).
2. Register it in `src/data/news/index.ts` (prepend to `NEWS_INDEX`, add an entry to `CA_DATES`).
3. Commit. Nothing else changes: no API, no database.

The same applies to the atlas: add entries to the relevant layer file in `src/data/geo/` with accurate coordinates (the quiz scores clicks by haversine distance).

## Deploying to Vercel

1. Push this repository to GitHub (already at `sanjucockroach/HistoryIAS`).
2. On [vercel.com](https://vercel.com), import the repo. The Next.js 16 preset is detected automatically; no environment variables are required (the quiz falls back to its local bank without the AI SDK).
3. Deploy. Optional: set the AI SDK credentials as environment variables to enable LLM-generated quiz questions in production.

## Design system

See [`design.md`](./design.md). Rules adopted from the design-taste / impeccable school: no AI-slop patterns (no gradient text, no side-stripe cards, no identical card grids), contrast >= 4.5:1, motion under 300 ms with ease-out and reduced-motion fallbacks, all eight interaction states, sticky footer, 44 px touch targets, and the brand palette pulled from the academy crest (crest navy `#13157E`, crest red `#C01111`, terracotta-gold `#C14E33` on warm paper `#FAF9F3`).

## Credits

- Brand identity, corporate details, academic programmes, facilities and contact information supplied by **History IAS Academy**, Varanasi
- Earth textures from the three-globe example assets (self-hosted here)
- Design guidance: emilkowalski/skill, pbakaus/impeccable and the merged design-taste synthesis
