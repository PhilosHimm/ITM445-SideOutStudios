import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Trophy } from "lucide-react";
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

  const resultColor =
    game.result === "Win"
      ? "bg-emerald-500/10 text-emerald-600 border-emerald-200"
      : game.result === "Loss"
      ? "bg-red-500/10 text-red-600 border-red-200"
      : "bg-primary/10 text-primary border-primary/20";

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />

      {/* Hero */}
      <section
        aria-label={game.title}
        className="bg-dark h-[300px] md:h-[380px] overflow-clip relative flex flex-col w-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${game.heroImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

        {/* Back breadcrumb */}
        <div className="absolute top-0 left-0 px-6 md:px-16 pt-6 z-10">
          <Link
            href="/matches"
            className="flex gap-2 items-center text-white/60 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="text-[12px] font-medium tracking-[1px]">ALL MATCHES</span>
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 flex flex-col gap-3 items-start px-6 md:px-16 pb-10 z-10">
          <div className="flex gap-2 items-center flex-wrap">
            <div className={`flex items-center justify-center px-2 py-[3px] rounded-[2px] ${game.badgeClass}`}>
              <span className="font-medium text-[9px] tracking-[1.5px]">{game.badge}</span>
            </div>
            <span className="text-white/50 text-[11px] font-medium tracking-[1px]">
              GAME {game.number} · {game.date} {game.year}
            </span>
          </div>
          <h1 className="font-light text-[36px] md:text-[56px] text-white tracking-[-2px] leading-[1]">
            {game.title}
          </h1>
          <p className="text-white/70 text-[14px] max-w-[560px]">{game.description}</p>
        </div>
      </section>

      {/* Game Metadata Bar */}
      <div className="bg-dark/5 border-b border-border-light flex flex-wrap gap-6 items-center px-6 md:px-16 py-4 w-full">
        <div className="flex gap-2 items-center">
          <Trophy size={14} className="text-primary" aria-hidden="true" />
          <span className="text-dark/60 text-[12px]">vs. {game.opponent}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span
            className={`border px-3 py-[3px] rounded-full text-[11px] font-medium ${resultColor}`}
          >
            {game.result} {game.score}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Calendar size={14} className="text-muted" aria-hidden="true" />
          <span className="text-dark/60 text-[12px]">{game.date}, {game.year}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={14} className="text-muted" aria-hidden="true" />
          <span className="text-dark/60 text-[12px]">{game.duration}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start w-full flex-1">

        {/* Left: Highlights */}
        <main className="flex flex-col gap-10 flex-1 min-w-0 px-6 md:px-16 py-10">

          {/* Placeholder Video Thumbnail */}
          <ScrollSection animation="fade-up">
            <div
              className="relative w-full rounded-[4px] overflow-hidden bg-dark/10"
              style={{ aspectRatio: "16/9" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${game.heroImage}')` }}
                role="img"
                aria-label={`${game.title} video thumbnail`}
              />
              <div className="absolute inset-0 bg-dark/50" aria-hidden="true" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 hover:bg-primary transition-colors duration-200 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center shadow-xl group">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1 group-hover:scale-110 transition-transform duration-200"
                  >
                    <path d="M2 2L18 11L2 20V2Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-dark/70 text-white text-[11px] font-medium px-2 py-1 rounded">
                  Game Recap · {game.duration}
                </span>
              </div>
            </div>
          </ScrollSection>

          {/* Key Moments */}
          <ScrollSection animation="fade-up" delay={80}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">RALLY BREAKDOWN</span>
                <h2 className="font-light text-dark text-[28px] tracking-[-1px]">Key Rallies & Highlights</h2>
              </div>

              <div className="flex flex-col gap-5">
                {game.highlights.map((h, i) => (
                  <ScrollSection
                    key={h.title}
                    as="article"
                    animation="fade-up"
                    delay={i * 80}
                    className="border border-border flex flex-col sm:flex-row items-start rounded-[4px] overflow-hidden group hover:border-[#aaa] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="bg-dark/10 h-[160px] sm:h-[120px] w-full sm:w-[180px] shrink-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${h.image}')` }}
                      role="img"
                      aria-label={h.title}
                    />
                    <div className="flex flex-col gap-2 items-start justify-center p-5 flex-1">
                      <div className="flex gap-3 items-center">
                        <span className="bg-dark text-white text-[9px] font-medium tracking-[1px] px-2 py-[3px] rounded-[2px]">
                          {h.timestamp}
                        </span>
                        <p className="font-medium text-dark text-[14px] tracking-[-0.3px]">{h.title}</p>
                      </div>
                      <p className="text-dark/60 text-[13px]">{h.description}</p>
                    </div>
                  </ScrollSection>
                ))}
              </div>
            </div>
          </ScrollSection>
        </main>

        {/* Sidebar: Stats + Players */}
        <ScrollSection
          as="aside"
          animation="fade-left"
          className="border-t md:border-t-0 md:border-l border-border-light flex flex-col gap-8 px-6 md:px-8 py-10 w-full md:w-[280px] shrink-0"
        >
          {/* Stats */}
          <div className="flex flex-col gap-4">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">MATCH STATS</span>
            <div className="grid grid-cols-2 gap-3">
              {game.stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-border-light flex flex-col gap-1 items-center justify-center py-4 rounded-[4px] hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                >
                  <span className="font-light text-dark text-[32px] tracking-[-1px]">{s.value}</span>
                  <span className="text-muted text-[9px] font-medium tracking-[1.5px] uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Players */}
          <div className="flex flex-col gap-4">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">KEY PLAYERS</span>
            <div className="flex flex-col gap-2">
              {game.keyPlayers.map((player) => (
                <div
                  key={player}
                  className="border border-border-light flex gap-3 items-center px-4 py-3 rounded-[4px]"
                >
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full shrink-0">
                    <span className="text-primary font-medium text-[12px]">
                      {player.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-dark font-medium text-[13px]">{player}</span>
                    <span className="text-muted text-[10px]">OUTSIDE HITTER</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Season Progress */}
          <div className="flex flex-col gap-4">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">SEASON</span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-dark/60 text-[12px]">Game {game.number} of 12</span>
                <span className="text-dark text-[12px] font-medium">{Math.round((game.number / 12) * 100)}%</span>
              </div>
              <div className="bg-border-light h-1.5 w-full rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${(game.number / 12) * 100}%` }}
                  aria-label={`Game ${game.number} of 12`}
                />
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>

      {/* Prev / Next Navigation */}
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
