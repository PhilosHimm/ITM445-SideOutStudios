import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { Play, ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { games } from "@/lib/games";
import { highlights } from "@/lib/highlights";

// Compute player records from live data
const kevinGames = games.filter((g) => g.player === "kevin");
const philosGames = games.filter((g) => g.player === "philos");
const kevinRecord = {
  wins: kevinGames.filter((g) => g.result === "Win").length,
  losses: kevinGames.filter((g) => g.result === "Loss").length,
};
const philosRecord = {
  wins: philosGames.filter((g) => g.result === "Win").length,
  losses: philosGames.filter((g) => g.result === "Loss").length,
};

// Sitewide stats — derived, no new data
const totalClips = highlights.length;
const totalGames = games.length;

// Highlight preview cards — use real clip thumbnails from highlights.ts
const highlightCards = [
  {
    badge: "HIT",
    badgeClass: "bg-primary text-white",
    title: "Left side big swing",
    description:
      "Full approach, high contact — Philos unloads a big left side cut that drops into the deep cross-court corner.",
    meta: "Philos Himm · Scoop tournament",
    image: "https://img.youtube.com/vi/wlpiO8lLaA8/mqdefault.jpg",
    link: "/highlights?clip=philos-hit-6",
  },
  {
    badge: "HIT",
    badgeClass: "bg-primary text-white",
    title: "Back-row cross kill",
    description:
      "Kevin loads from zone 1 and cuts cross-court at a sharp angle — block commits left, seam opens right.",
    meta: "Kevin Lin · Intramural S1",
    image: "/images/clips/kevin-hit-1.jpg",
    link: "/highlights?clip=kevin-hit-1",
  },
  {
    badge: "BLOCK",
    badgeClass: "border border-dark/40 text-dark/80 bg-white",
    title: "Stuff block at the net",
    description:
      "Philos reads the outside hitter's shoulder angle, closes hard from the right side, and stuffs cleanly back into the attacker's court.",
    meta: "Philos Himm · Rec League",
    image: "/images/clips/philos-block-1.jpg",
    link: "/highlights?clip=philos-block-1",
  },
];

// Match recap preview cards — attributed to the correct player
const matchCards = [
  {
    badge: "GAME RECAP",
    badgeClass: "border border-primary text-primary",
    title: "Kevin Lin · Game 3 Recap",
    description:
      "Score, key plays, and set-by-set breakdown from a heartbreaker. One point from a win in the final set.",
    meta: "Kevin Lin · Game 3",
    image: "/images/home-ep1-blocks.png",
    link: "/matches/game-3",
  },
  {
    badge: "TACTICAL FILM",
    badgeClass: "border border-dark text-dark",
    title: "Philos Himm · The Iron Wall",
    description:
      "How do you attack when the block is unbeatable? Tip shots, roll shots, and the missed serve that ended it all.",
    meta: "Philos Himm · Game 11",
    image: "/images/home-ep4-ironwall.jpg",
    link: "/matches/game-11",
  },
];

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Home" />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Site introduction"
        className="h-[560px] overflow-clip relative w-full"
      >
        {/* Autoplay muted background clip — dark overlay keeps text legible */}
        <video
          src="/videos/kevin-hit-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Fallback static image if video hasn't loaded */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/images/home-hero-bg.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-dark/80"
          aria-hidden="true"
        />

        <ScrollSection
          animation="fade-up"
          className="absolute flex flex-col gap-5 h-[560px] items-start justify-end left-0 pb-[80px] top-0 w-full px-6 md:px-16 max-w-[900px]"
        >
          <div className="bg-primary flex gap-2 items-center px-[14px] py-[5px]">
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              className="animate-pulse"
              aria-hidden="true"
            >
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
            <span className="font-medium text-[10px] text-white tracking-[2px]">
              HIGHLIGHTS · KEVIN LIN &amp; PHILOS HIMM
            </span>
          </div>

          <h1 className="font-light leading-[0.88] text-[64px] md:text-[96px] text-white tracking-[-3px] max-w-[750px]">
            Real games.<br />
            Real highlights.
          </h1>

          <p className="font-light text-white/80 text-[16px] max-w-[520px]">
            Game-day highlights from intramural, league, and tournament play —
            two players, two records, one camera.
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <Link
              href="/highlights"
              className="bg-primary flex gap-[10px] h-[44px] items-center px-6 hover:bg-primary-hover transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-95"
            >
              <Play size={16} className="text-white fill-white" />
              <span className="font-medium text-[14px] text-white">
                Watch Highlights
              </span>
            </Link>
            <Link
              href="/matches"
              className="border border-white flex h-[44px] items-center px-6 hover:bg-white/10 transition-colors duration-200 cursor-pointer active:scale-95"
            >
              <span className="text-[14px] text-white">Browse Matches</span>
            </Link>
          </div>
        </ScrollSection>
      </section>

      {/* ── Content Grid ─────────────────────────────────────────────────── */}
      <ScrollSection
        as="section"
        animation="fade-up"
        className="bg-white flex flex-col gap-12 items-start px-6 md:px-16 py-16 w-full"
      >
        {/* Row 1 — Latest Highlights */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex flex-col gap-1 items-start">
              <span className="font-medium text-primary text-[10px] tracking-[3px]">
                LATEST HIGHLIGHTS
              </span>
              <h2 className="font-light text-dark text-[32px] tracking-[-1px]">
                Latest Highlights
              </h2>
              <p className="text-dark/50 text-[13px]">
                Clips from Kevin and Philos across every game.
              </p>
            </div>
            <Link
              href="/highlights"
              className="border border-dark flex gap-2 h-9 items-center px-4 hover:bg-dark/5 transition-all duration-200 hover:shadow-sm cursor-pointer group rounded-[2px] active:scale-95 shrink-0 mt-1"
            >
              <span className="font-medium text-dark text-[11px] tracking-[1px]">
                View All
              </span>
              <ArrowRight
                size={14}
                className="text-dark transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {highlightCards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="border border-border flex flex-col items-start cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg rounded-[4px] bg-white overflow-hidden"
              >
                <div
                  className="bg-dark/20 aspect-video w-full group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                  role="img"
                  aria-label={card.title}
                />
                <div className="flex flex-col gap-[10px] items-start pb-6 pt-5 px-5 w-full bg-white z-10 flex-1">
                  <div
                    className={`flex items-center px-2 py-[3px] rounded-[2px] ${card.badgeClass}`}
                  >
                    <span className="font-medium text-[9px] tracking-[1.5px]">
                      {card.badge}
                    </span>
                  </div>
                  <p className="font-medium text-dark text-[15px] tracking-[-0.3px]">
                    {card.title}
                  </p>
                  <p className="text-dark/60 text-[13px] w-full line-clamp-2">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-border-light">
                    <div className="flex items-center gap-[6px]">
                      <Play size={10} className="text-primary fill-primary" />
                      <span className="font-medium text-[10px] uppercase tracking-[1px] text-primary">
                        Watch Clip
                      </span>
                    </div>
                    <span className="text-muted text-[10px]">{card.meta}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2 — Match Records */}
        <div className="flex flex-col gap-6 w-full border-t border-border-light pt-10">
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex flex-col gap-1 items-start">
              <span className="font-medium text-muted text-[10px] tracking-[3px]">
                MATCH RECORDS
              </span>
              <h2 className="font-light text-dark text-[28px] tracking-[-1px]">
                Game Recaps
              </h2>
            </div>
            <Link
              href="/matches"
              className="border border-dark flex gap-2 h-9 items-center px-4 hover:bg-dark/5 transition-all duration-200 hover:shadow-sm cursor-pointer group rounded-[2px] active:scale-95 shrink-0 mt-1"
            >
              <span className="font-medium text-dark text-[11px] tracking-[1px]">
                All Matches
              </span>
              <ArrowRight
                size={14}
                className="text-dark transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {matchCards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="border border-border flex flex-col items-start cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg rounded-[4px] bg-white overflow-hidden"
              >
                <div
                  className="bg-dark/20 aspect-video w-full group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                  role="img"
                  aria-label={card.title}
                />
                <div className="flex flex-col gap-[10px] items-start pb-6 pt-5 px-5 w-full bg-white z-10 flex-1">
                  <div
                    className={`flex items-center px-2 py-[3px] rounded-[2px] ${card.badgeClass}`}
                  >
                    <span className="font-medium text-[9px] tracking-[1.5px]">
                      {card.badge}
                    </span>
                  </div>
                  <p className="font-medium text-dark text-[15px] tracking-[-0.3px]">
                    {card.title}
                  </p>
                  <p className="text-dark/60 text-[13px] w-full line-clamp-2">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-border-light">
                    <div className="flex items-center gap-[6px]">
                      <BarChart2 size={10} className="text-muted" />
                      <span className="font-medium text-[10px] uppercase tracking-[1px] text-muted">
                        Match Recap
                      </span>
                    </div>
                    <span className="text-muted text-[10px]">{card.meta}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ── Stat Strip ───────────────────────────────────────────────────── */}
      <ScrollSection
        as="section"
        animation="fade-up"
        className="border-t border-b border-border-light bg-white px-6 md:px-16 py-10 w-full"
        aria-label="Season statistics"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: totalClips, label: "CLIPS PUBLISHED" },
            { value: totalGames, label: "GAMES FILMED" },
            { value: 2, label: "PLAYERS" },
            { value: 2, label: "SEASONS COVERED" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 items-start">
              <span className="text-dark text-[44px] font-light tracking-[-2px] leading-none tabular-nums">
                {stat.value}
              </span>
              <span className="text-muted text-[10px] tracking-[2px] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </ScrollSection>

      {/* ── Meet the Players ─────────────────────────────────────────────── */}
      <ScrollSection
        as="section"
        animation="fade-up"
        className="bg-white px-6 md:px-16 py-16 w-full"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-primary text-[10px] tracking-[3px]">
              TWO PLAYERS · TWO LEAGUES
            </span>
            <h2 className="font-light text-dark text-[32px] tracking-[-1px]">
              Meet the Players
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Kevin */}
            <Link
              href="/matches?player=kevin"
              className="border border-border-light rounded-[4px] p-6 flex flex-col gap-5 hover:border-[#aaa] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-primary flex items-center justify-center text-white text-[16px] font-bold shrink-0">
                  KL
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[16px] font-medium leading-tight">
                    Kevin Lin
                  </span>
                  <span className="text-muted text-[12px]">
                    Outside Hitter · Editor
                  </span>
                  <span className="text-muted text-[11px]">
                    Intramural + Rec League
                  </span>
                </div>
              </div>
              <div className="flex gap-8 border-t border-border-light pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {kevinRecord.wins}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    WINS
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {kevinRecord.losses}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    LOSSES
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {kevinGames.length}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    GAMES
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <span className="text-[12px] font-medium">
                  View Kevin&apos;s record
                </span>
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>

            {/* Philos */}
            <Link
              href="/matches?player=philos"
              className="border border-border-light rounded-[4px] p-6 flex flex-col gap-5 hover:border-[#aaa] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
                  <Image
                    src="/images/philos-pfp.JPG"
                    alt="Philos Himm"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[16px] font-medium leading-tight">
                    Philos Himm
                  </span>
                  <span className="text-muted text-[12px]">
                    Outside Hitter · Camera Op
                  </span>
                  <span className="text-muted text-[11px]">
                    Intramural + Rec League
                  </span>
                </div>
              </div>
              <div className="flex gap-8 border-t border-border-light pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {philosRecord.wins}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    WINS
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {philosRecord.losses}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    LOSSES
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-dark text-[28px] font-light tracking-[-1px] leading-none tabular-nums">
                    {philosGames.length}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                    GAMES
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-primary">
                <span className="text-[12px] font-medium">
                  View Philos&apos; record
                </span>
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </ScrollSection>

      <Footer />
    </div>
  );
}
