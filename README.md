# Side-Out Studios

A volleyball coverage site for two intramural players. 24 games filmed, 21 clips published, and two separate season records cut from the same footage.

**[View the live site](https://itm-445-side-out-studios.vercel.app)**

<!-- Replace these with real captures. See docs/screenshots/README.md -->
![Home page hero](docs/screenshots/home.png)

| Match record | Highlight player |
|---|---|
| ![Matches index](docs/screenshots/matches.png) | ![Highlight detail with audio reflection](docs/screenshots/highlight.png) |

---

## The problem

Two teammates filmed each other's games across intramural and league play, and ended up with a folder of unlabeled clips. Neither obvious format works on its own. A highlight reel drops the context of which game it was, which set, and what was at stake. A stats table drops the footage.

The constraint that shaped everything else: both players appear in the same matches. One shared match page would flatten two different seasons into one. Kevin finished 6-4. I finished 5-8, from the same camera.

## Design decisions

### Two perspectives on one match

The domain model in [`src/lib/games.ts`](src/lib/games.ts) gives every `Game` an owning player and a `GamePerspective` holding that player's summary, stats, set-by-set notes, and scores. One night on the court produces two entries with different narratives. Navigation follows the model, so you enter through a player rather than through a date.

### Motion that disappears under reduced motion

Five animations (fade-up, fade-in, slide-left, slide-right, scale-in), staggered through a `--stagger` custom property. All of it sits inside `@media (prefers-reduced-motion: no-preference)`, and [`useScrollAnimation`](src/hooks/useScrollAnimation.ts) checks `matchMedia` separately and short-circuits straight to visible. Because it's enforced in the stylesheet and in the hook, a reduced-motion user never lands on the `opacity: 0` starting state, not even for a frame.

### A custom audio player built on native controls

Each player recorded a spoken season reflection. [`AudioPlayer`](src/components/AudioPlayer.tsx) draws a styled progress bar and layers a transparent `<input type="range">` over it. The visuals are fully custom, while keyboard seeking, screen-reader announcements, and drag behavior stay with the platform instead of being rebuilt from scratch.

### One accent color, near-black instead of black

Tokens are declared once in [`globals.css`](src/app/globals.css) as Tailwind v4 `@theme` variables. A single blue accent (`#1b4fd8`) sits on `#16161d` rather than `#000`, which keeps the dark hero sections from crushing against black video footage. Components reference the tokens, so no hex values appear in the component layer.

### Focus rings only when they help

`:focus-visible` draws a 2px accent outline and `:focus:not(:focus-visible)` clears it. Keyboard users get a visible ring. Mouse users don't get one on click.

## Structure

```
src/
  app/          routes: home, matches, highlights, gear, about
    api/        poll + comments endpoints (Neon Postgres)
  components/   PageHero, Navbar, Footer, ScrollSection, AudioPlayer, MatchPageContent
  hooks/        useScrollAnimation, an IntersectionObserver that unobserves after first fire
  lib/          typed domain model + content, plus the Neon client in db.ts
db/
  schema.sql        poll_votes + highlight_comments
  apply-schema.mjs  applies the schema to DATABASE_URL
```

`ScrollSection` is the piece I'd reuse first: a declarative wrapper taking an animation name, a delay, a threshold, and a polymorphic `as` tag, so a section opts into motion with one prop instead of wiring up its own observer.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Neon (Postgres) · lucide-react · deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

The poll and comment features need a Neon Postgres database. Put its connection string in `.env.local`:

```
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
```

This is a full-privilege credential, so it stays server-side and is only ever read inside route handlers. Create the two tables with:

```bash
node db/apply-schema.mjs
```

The schema itself lives in [`db/schema.sql`](db/schema.sql) and is idempotent, so re-running it is safe.

Matches, highlights, audio, and motion all run without a database.

## What I'd change

- `POST /api/comments` validates length and trims the name, then writes. There's no rate limit and no moderation path, and it needs both.
- The hero video is a 95 MB MP4 committed to the repo. It should be a poster image with a streamed source, which would also stop every clone from pulling the whole file.
- `games.ts` is maintained by hand. 27 entries in a TypeScript file was the right call for a fixed season, but the one-off codemod scripts I wrote to bulk-edit it were a sign. Add a third player and this content belongs in a CMS.
- `ScrollSection` accepts a `fade-down` animation and quietly maps it to fade-up. Either implement it or take it out of the type.

## Notes on authorship

Built with heavy AI assistance on the implementation. What I owned: the information architecture, the two-perspective match model, the design tokens and type scale, the motion system and its reduced-motion behavior, and the interaction design of the audio player and match pages.

Originally built for ITM 445. The footage, photography, and audio are of the two players and aren't licensed for reuse.
