import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { games, getGame, getPrevNext } from "@/lib/games";

export async function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return {
    title: `${game.title} — Side-Out Studios`,
    description: game.description,
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const { prev, next } = getPrevNext(slug);

  const isWin = game.result === "Win";
  const isLoss = game.result === "Loss";

  const resultBg = isWin
    ? "bg-emerald-500"
    : isLoss
    ? "bg-red-500"
    : "bg-primary";

  const resultAccent = isWin
    ? "border-emerald-500"
    : isLoss
    ? "border-red-500"
    : "border-primary";

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />

      {/* ── 1. SCOREBOARD HEADER ─────────────────────────────────────────── */}
      <section
        aria-label={`${game.title} scoreboard`}
        className={`relative w-full overflow-hidden border-b-4 ${resultAccent}`}
      >
        {/* Background texture: hero image at very low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${game.heroImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#080808]/90" aria-hidden="true" />

        {/* Breadcrumb */}
        <div className="relative z-10 px-6 md:px-16 pt-6">
          <Link
            href="/matches"
            className="inline-flex gap-2 items-center text-white/40 hover:text-white/80 transition-colors duration-200 group"
          >
            <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="text-[11px] font-medium tracking-[1.5px]">ALL MATCHES</span>
          </Link>
        </div>

        {/* Scoreboard content */}
        <div className="relative z-10 px-6 md:px-16 pt-6 pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* Left: game info */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center flex-wrap">
              <div className={`flex items-center justify-center px-2 py-[3px] rounded-[2px] ${game.badgeClass}`}>
                <span className="font-medium text-[9px] tracking-[1.5px]">{game.badge}</span>
              </div>
              <span className="text-white/30 text-[11px] font-medium tracking-[1px]">
                GAME {game.number}
              </span>
            </div>
            <h1 className="font-light text-[32px] md:text-[52px] text-white tracking-[-2px] leading-[1.05]">
              {game.title}
            </h1>
            <div className="flex gap-4 items-center flex-wrap mt-1">
              <div className="flex gap-1.5 items-center">
                <Calendar size={12} className="text-white/30" />
                <span className="text-white/50 text-[12px]">{game.date}, {game.year}</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <Clock size={12} className="text-white/30" />
                <span className="text-white/50 text-[12px]">{game.duration}</span>
              </div>
            </div>
          </div>

          {/* Right: scoreboard panel */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            {/* Win / Loss badge */}
            <div className={`${resultBg} px-4 py-1.5 rounded-[3px]`}>
              <span className="text-white text-[11px] font-bold tracking-[3px]">
                {game.result === "Win" ? "WIN" : game.result === "Loss" ? "LOSS" : "UPCOMING"}
              </span>
            </div>

            {/* Score */}
            <div className="flex flex-col items-start md:items-end gap-0.5">
              <span className="text-white text-[64px] md:text-[80px] font-bold tracking-[-4px] leading-none tabular-nums">
                {game.score}
              </span>
              <span className="text-white/40 text-[12px] tracking-[1px] font-medium">
                vs. {game.opponent.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div className="w-full flex-1">

        <main className="flex flex-col gap-12 px-6 md:px-16 py-10 w-full">

          {/* ── 2. HERO IMAGE COLLAGE ───────────────────────────────────── */}
          <ScrollSection animation="fade-up">
            <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-[4px] overflow-hidden h-[260px] md:h-[340px]">
              {/* Main image — spans 2 cols × 2 rows */}
              <div
                className="col-span-2 row-span-2 bg-cover bg-center bg-dark/20"
                style={{ backgroundImage: `url('${game.heroImage}')` }}
                role="img"
                aria-label={`${game.title} — hero image`}
              />
              {/* Side thumbnails */}
              {game.highlights.slice(0, 2).map((h, i) => (
                <div
                  key={i}
                  className="relative bg-cover bg-center bg-dark/20 overflow-hidden group"
                  style={{ backgroundImage: `url('${h.image}')` }}
                  role="img"
                  aria-label={h.title}
                >
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-2">
                    <span className="text-white/80 text-[9px] font-medium leading-tight line-clamp-1">{h.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollSection>

          {/* ── 3. MATCH SUMMARY ────────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={60}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">MATCH SUMMARY</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Game Overview</h2>
              </div>

              <p className="text-dark/70 text-[15px] leading-relaxed max-w-[780px]">
                {game.matchSummary}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                {game.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border rounded-[4px] flex flex-col items-center justify-center py-4 px-3 gap-1"
                  >
                    <span className="text-[28px] font-bold text-dark tracking-[-1.5px] leading-none tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium text-dark/40 tracking-[1.5px]">
                      {stat.label.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollSection>

          {/* ── 4. SET-BY-SET BREAKDOWN ─────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={80}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">SET BREAKDOWN</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Set-by-Set Analysis</h2>
              </div>

              <div className="flex flex-col gap-3">
                {game.sets.map((set, i) => {
                  const setWon = set.result === "Won";
                  return (
                    <ScrollSection key={set.setNumber} animation="fade-up" delay={i * 70} as="div">
                      <div className={`rounded-[4px] overflow-hidden border ${setWon ? "border-emerald-200" : "border-red-200"}`}>
                        {/* Set header */}
                        <div
                          className={`flex items-center justify-between px-5 py-3 ${
                            setWon ? "bg-emerald-50" : "bg-red-50"
                          }`}
                        >
                          <span className="font-semibold text-dark text-[13px] tracking-[-0.3px]">
                            Set {set.setNumber}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-[22px] font-bold text-dark tracking-[-1.2px] leading-none tabular-nums">
                              {set.ourScore}–{set.theirScore}
                            </span>
                            <span
                              className={`text-[9px] font-bold tracking-[1.5px] px-2 py-[3px] rounded-[2px] ${
                                setWon ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                              }`}
                            >
                              {set.result === "Won" ? "WON" : "LOST"}
                            </span>
                          </div>
                        </div>

                        {/* Score bar */}
                        <div className="h-1.5 w-full bg-dark/5">
                          <div
                            className={`h-full ${setWon ? "bg-emerald-400" : "bg-red-400"} transition-all`}
                            style={{
                              width: `${Math.round(
                                (set.ourScore / (set.ourScore + set.theirScore)) * 100
                              )}%`,
                            }}
                          />
                        </div>

                        {/* Bullets */}
                        <ul className="flex flex-col gap-2 px-5 py-4">
                          {set.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-[13px] text-dark/65 leading-snug">
                              <span className={`mt-[3px] text-[8px] ${setWon ? "text-emerald-500" : "text-red-400"}`}>
                                ●
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollSection>
                  );
                })}
              </div>
            </div>
          </ScrollSection>

          {/* ── 5. ACTION GALLERY ───────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={60}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">ACTION GALLERY</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Freeze Frames</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {game.highlights.map((h, i) => (
                  <ScrollSection key={h.title} animation="fade-up" delay={i * 60} as="article">
                    <div className="relative rounded-[4px] overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${h.image}')` }}
                        role="img"
                        aria-label={h.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

                      {/* Timestamp chip */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-dark/70 text-white/80 text-[9px] font-medium tracking-[0.5px] px-2 py-[3px] rounded-[2px]">
                          {h.timestamp}
                        </span>
                      </div>

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-[12px] font-medium leading-tight">{h.title}</p>
                        <p className="text-white/65 text-[11px] mt-0.5 leading-tight line-clamp-2">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  </ScrollSection>
                ))}
              </div>
            </div>
          </ScrollSection>

          {/* ── 6. STORY CTA ────────────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={40}>
            <div
              className={`relative rounded-[4px] overflow-hidden border-l-4 ${resultAccent} bg-dark/[0.03] px-6 py-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between`}
            >
              <div className="flex flex-col gap-1.5 max-w-[420px]">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">SIDE-OUT STORY</span>
                <p className="text-dark text-[16px] font-medium leading-snug tracking-[-0.3px]">
                  Relive the drama — watch the Side-Out Story for this match
                </p>
                <p className="text-dark/50 text-[13px]">
                  The full narrative vlog: behind-the-scenes moments, player reactions, and the story the score doesn't tell.
                </p>
              </div>
              <Link
                href={game.storyLink}
                className="inline-flex items-center gap-2 bg-dark text-white px-5 py-3 rounded-[3px] text-[13px] font-medium hover:bg-dark/80 transition-colors duration-200 shrink-0 group"
              >
                <span>Watch the Story</span>
                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </ScrollSection>

        </main>

      </div>

      {/* ── PREV / NEXT NAVIGATION ──────────────────────────────────────── */}
      <ScrollSection
        animation="fade-up"
        className="border-t border-border-light flex flex-col sm:flex-row items-stretch w-full"
      >
        {prev ? (
          <Link
            href={`/matches/${prev.slug}`}
            className="border-b sm:border-b-0 sm:border-r border-border-light flex flex-1 gap-4 items-center px-6 md:px-16 py-6 hover:bg-dark/5 transition-colors duration-200 group"
          >
            <ArrowLeft size={16} className="text-muted shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
            <div className="flex flex-col gap-1 items-start">
              <span className="text-muted text-[10px] font-medium tracking-[1px]">PREVIOUS</span>
              <span className="text-dark font-medium text-[14px] tracking-[-0.3px]">{prev.title}</span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/matches/${next.slug}`}
            className="flex flex-1 gap-4 items-center justify-end px-6 md:px-16 py-6 hover:bg-dark/5 transition-colors duration-200 group text-right"
          >
            <div className="flex flex-col gap-1 items-end">
              <span className="text-muted text-[10px] font-medium tracking-[1px]">NEXT</span>
              <span className="text-dark font-medium text-[14px] tracking-[-0.3px]">{next.title}</span>
            </div>
            <ArrowRight size={16} className="text-muted shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="flex-1 flex items-center justify-end px-6 md:px-16 py-6">
            <Link
              href="/matches"
              className="flex gap-2 items-center text-primary hover:text-primary-hover transition-colors duration-200 group"
            >
              <span className="text-[13px] font-medium">Back to all matches</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </ScrollSection>

      <Footer />
    </div>
  );
}
