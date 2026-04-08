import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatchPageContent from "@/components/MatchPageContent";
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
  const isTie = game.result === "Tie";

  const resultBg = isWin
    ? "bg-emerald-500"
    : isLoss
    ? "bg-red-500"
    : isTie
    ? "bg-amber-500"
    : "bg-primary";

  const resultAccent = isWin
    ? "border-emerald-500"
    : isLoss
    ? "border-red-500"
    : isTie
    ? "border-amber-500"
    : "border-primary";

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />

      {/* ── 1. SCOREBOARD HEADER ─────────────────────────────────────────── */}
      <section
        aria-label={`${game.title} scoreboard`}
        className={`relative w-full overflow-hidden border-b-4 ${resultAccent}`}
      >
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
              {game.duration && (
                <div className="flex gap-1.5 items-center">
                  <Clock size={12} className="text-white/30" />
                  <span className="text-white/50 text-[12px]">{game.duration}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className={`${resultBg} px-4 py-1.5 rounded-[3px]`}>
              <span className="text-white text-[11px] font-bold tracking-[3px]">
                {game.result === "Win" ? "WIN" : game.result === "Loss" ? "LOSS" : game.result === "Tie" ? "TIE" : "UPCOMING"}
              </span>
            </div>
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

      {/* ── PERSPECTIVE-AWARE CONTENT ────────────────────────────────────── */}
      <MatchPageContent
        game={game}
        prev={prev}
        next={next}
      />

      <Footer />
    </div>
  );
}
