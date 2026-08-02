# Side-Out Studios

A volleyball coverage site for two intramural players — 24 games filmed, 21 clips published, two separate season records built from the same footage.

**[View the live site →](https://itm-445-side-out-studios.vercel.app)**

<!-- Replace these with real captures — see docs/screenshots/README.md -->
![Home page hero](docs/screenshots/home.png)

| Match record | Highlight player |
|---|---|
| ![Matches index](docs/screenshots/matches.png) | ![Highlight detail with audio reflection](docs/screenshots/highlight.png) |

---

## The problem

Two teammates filmed each other's games across a full intramural season and ended up with a folder of unlabeled clips. Neither a highlight reel nor a stats page fits: a reel loses the context of *which game, which set, what was at stake*, and a stats table loses the footage.

The harder constraint is that both players appear in the same matches. A single shared match page would flatten two genuinely different seasons into one — Kevin finished 6–4, Philos 5–8, from the same camera.

## Design decisions

**Two perspectives on one match, not one shared record.** The domain model in [`src/lib/games.ts`](src/lib/games.ts) treats a `Game` as belonging to a player, with a `GamePerspective` carrying that player's summary, stats, set-by-set notes, and scores. The same night on the court produces two entries, each with its own narrative. Navigation reflects this: you enter through a player, not through a date.

**Motion that actually disappears.** The scroll system is five animations — fade-up, fade-in, slide-left, slide-right, scale-in — with staggering through a `--stagger` custom property. All of it lives inside `@media (prefers-reduced-motion: no-preference)`, and [`useScrollAnimation`](src/hooks/useScrollAnimation.ts) *also* checks `matchMedia` and short-circuits straight to visible. Enforcing it in both the stylesheet and the hook means a reduced-motion user never hits the `opacity: 0` starting state, even for a frame.

**A custom audio player that keeps native behavior.** Each player recorded a spoken season reflection. [`AudioPlayer`](src/components/AudioPlayer.tsx) renders a styled progress bar with a transparent `<input type="range">` layered over it, so the visual design is fully custom while keyboard seeking, screen-reader announcements, and drag behavior come from the platform rather than being reimplemented.

**One accent, near-black over pure black.** Tokens are declared once in [`globals.css`](src/app/globals.css) as Tailwind v4 `@theme` variables: a single blue accent (`#1b4fd8`) against `#16161d` rather than `#000`, which keeps the dark hero sections from crushing against black video footage. Components reference tokens; there are no hardcoded hex values in the component layer.

**Focus that shows up only when earned.** `:focus-visible` draws a 2px accent outline; `:focus:not(:focus-visible)` clears it. Keyboard users get a clear ring, mouse users don't get one on click.

## Structure

```
src/
  app/          routes — home, matches, highlights, gear, about
    api/        poll + comments endpoints (Supabase-backed)
  components/   PageHero, Navbar, Footer, ScrollSection, AudioPlayer, MatchPageContent
  hooks/        useScrollAnimation — IntersectionObserver, unobserves after first fire
  lib/          typed domain model + content for games, highlights, stories
  utils/        Supabase browser / server / middleware clients
```

`ScrollSection` is the piece I'd reuse first — a declarative wrapper that takes an animation name, a delay, a threshold, and a polymorphic `as` tag, so a page section opts into motion with one prop instead of wiring an observer.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Supabase (Postgres) · lucide-react · deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

The poll and comment features need a Supabase project. Copy the two publishable values into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=
```

Everything else — matches, highlights, audio, motion — runs without them.

## What I'd change

- **The comments endpoint has no rate limiting or moderation.** `POST /api/comments` validates length and trims the name, then writes. It needs a rate limit and a moderation path before it deserves to stay open.
- **The hero video is a 95 MB MP4 committed to the repo.** It should be a poster image with a streamed source, which would also stop every clone from pulling the whole file.
- **`games.ts` is hand-maintained.** 27 entries in a TypeScript file was the right call for a fixed season, but the several one-off codemod scripts I wrote to bulk-edit it are the tell — that content belongs in a CMS the moment a third player shows up.
- **`ScrollSection` maps `fade-down` to the fade-up animation.** A declared variant that silently does something else is worse than not offering it.

## Notes on authorship

Built with heavy AI assistance for the implementation. What I owned: the information architecture, the two-perspective match model, the design tokens and type scale, the motion system and its reduced-motion behavior, and the interaction design of the audio player and match pages.

Originally built for ITM 445. Match footage, photography, and audio are of the two players and are not licensed for reuse.
