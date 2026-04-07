"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { ChevronDown, ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { games } from "@/lib/games";

const timelineItems = games.map((g) => ({
  date: g.date,
  year: g.year,
  badge: g.badge,
  badgeClass: g.badgeClass,
  title: g.title,
  description: g.description,
  image: g.heroImage,
  link: `/matches/${g.slug}`,
  category: g.category,
  result: g.result,
  score: g.score,
  opponent: g.opponent,
  recapLine: g.recapLine,
  number: g.number,
  player: g.player,
}));

const playerMeta = {
  kevin: {
    initials: "KL",
    name: "Kevin Lin",
    role: "Outside Hitter · Editor",
    league: "Intramural + Rec League",
  },
  philos: {
    initials: "PH",
    name: "Philos Himm",
    role: "Outside Hitter · Camera Op",
    league: "Intramural + Rec League",
  },
} as const;

export default function Matches() {
  const [activePlayer, setActivePlayer] = useState<"kevin" | "philos">("kevin");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const playerGames = timelineItems.filter((i) => i.player === activePlayer);
  const filteredItems = [...playerGames].sort((a, b) =>
    sortOrder === "newest" ? b.number - a.number : a.number - b.number
  );

  const wins = playerGames.filter((i) => i.result === "Win").length;
  const losses = playerGames.filter((i) => i.result === "Loss").length;
  const ties = playerGames.filter((i) => i.result === "Tie").length;
  const meta = playerMeta[activePlayer];

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />
      <PageHero
        subtitle="BROWSE BY GAME · COMPARE RESULTS · VIEW RECAPS"
        title="Our Matches"
        bgImage="/images/matches-hero-bg.jpg"
      />

      {/* Page Body */}
      <main className="bg-white flex flex-col items-start w-full flex-1 px-6 md:px-12 lg:px-20 py-8 md:py-10">

          {/* ── Player Tabs ─────────────────────────────────────────────── */}
          <div className="border border-border-light rounded-[4px] p-1 flex w-full max-w-[380px] mb-6">
            {(["kevin", "philos"] as const).map((p) => {
              const isActive = activePlayer === p;
              const m = playerMeta[p];
              return (
                <button
                  key={p}
                  onClick={() => setActivePlayer(p)}
                  className={`flex-1 flex items-center justify-center gap-2 h-9 rounded-[2px] transition-all duration-200 cursor-pointer ${
                    isActive ? "bg-dark" : "hover:bg-dark/5"
                  }`}
                >
                  {p === "philos" ? (
                    <div className="size-5 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light/80">
                      <Image
                        src="/images/philos-pfp.JPG"
                        alt="Philos Himm"
                        width={20}
                        height={20}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`size-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
                        isActive ? "bg-primary text-white" : "bg-dark/10 text-dark/40"
                      }`}
                    >
                      {m.initials}
                    </div>
                  )}
                  <span
                    className={`text-[13px] font-medium ${
                      isActive ? "text-white" : "text-dark/60"
                    }`}
                  >
                    {m.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Player Header Card ──────────────────────────────────────── */}
          <div className="border border-border-light rounded-[4px] px-5 py-4 w-full mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {activePlayer === "philos" ? (
                <div className="size-12 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
                  <Image
                    src="/images/philos-pfp.JPG"
                    alt="Philos Himm"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white text-[14px] font-bold shrink-0">
                  {meta.initials}
                </div>
              )}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-dark text-[15px] font-medium leading-tight">
                  {meta.name}
                </span>
                <span className="text-muted text-[11px]">{meta.role}</span>
                <span className="text-muted text-[10px] tracking-[0.5px]">
                  {meta.league}
                </span>
              </div>
            </div>
            <div className="flex gap-6 shrink-0 pl-1">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-dark text-[26px] font-light tracking-[-1px] leading-none">
                  {wins}
                </span>
                <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                  WINS
                </span>
              </div>
              <div className="w-px bg-border-light self-stretch" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-dark text-[26px] font-light tracking-[-1px] leading-none">
                  {losses}
                </span>
                <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                  LOSSES
                </span>
              </div>
              {ties > 0 && (
                <>
                  <div className="w-px bg-border-light self-stretch" />
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-dark text-[26px] font-light tracking-[-1px] leading-none">
                      {ties}
                    </span>
                    <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                      TIES
                    </span>
                  </div>
                </>
              )}
              <div className="w-px bg-border-light self-stretch" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-dark text-[26px] font-light tracking-[-1px] leading-none">
                  {playerGames.length}
                </span>
                <span className="text-muted text-[10px] tracking-[1px] font-medium mt-1">
                  GAMES
                </span>
              </div>
            </div>
          </div>

          {/* ── Timeline Header ─────────────────────────────────────────── */}
          <div className="border-b border-border-light flex items-center justify-between pb-6 w-full">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">
              {meta.name.toUpperCase()} — 2025/2026 SEASON
            </span>
            <button
              onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
              className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="text-dark text-[11px] font-medium">
                {sortOrder === "newest" ? "Newest first" : "Oldest first"}
              </span>
              <ChevronDown
                size={14}
                className={`text-dark transition-transform duration-200 ${sortOrder === "oldest" ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* ── Timeline Items ──────────────────────────────────────────── */}
          {filteredItems.length === 0 ? (
            <div
              className="flex w-full items-center justify-center py-20 text-muted text-[14px]"
              role="status"
            >
              No matches found for this range.
            </div>
          ) : (
            <div role="list" aria-label="Match timeline" className="w-full">
              {filteredItems.map((item, i) => (
                <ScrollSection
                  key={item.title}
                  as="article"
                  animation="fade-up"
                  delay={i * 80}
                  className={`flex gap-4 md:gap-6 items-start py-7 w-full ${
                    i > 0 ? "border-t border-border-light" : ""
                  }`}
                >
                  {/* Date */}
                  <div className="hidden md:flex flex-col gap-[2px] items-end w-[72px] shrink-0">
                    <time className="text-muted text-[11px] tracking-[0.5px]">
                      {item.date}
                    </time>
                    <span className="text-dark/20 text-[10px] font-medium">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline dot & line */}
                  <div
                    className="hidden md:flex flex-col items-center w-5 shrink-0 self-stretch"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="mt-[2px] shrink-0 z-10 bg-white"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4"
                        stroke="#1b4fd8"
                        strokeWidth="2"
                        fill="white"
                      />
                    </svg>
                    <div className="bg-border-light flex-1 w-px -mt-[2px]" />
                  </div>

                  {/* Recap Card */}
                  <Link
                    href={item.link}
                    className="border border-border flex flex-col w-full md:w-1/2 lg:w-[50%] items-start min-w-0 rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
                  >
                    {/* Hero image */}
                    <div className="relative w-full">
                      <div
                        className="aspect-video w-full group-hover:scale-[1.02] transition-transform duration-500 bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                        role="img"
                        aria-label={item.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Score overlay */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[22px] font-bold tracking-tight ${
                              item.result === "Win"
                                ? "text-emerald-400"
                                : item.result === "Loss"
                                ? "text-red-400"
                                : item.result === "Tie"
                                ? "text-amber-400"
                                : "text-white"
                            }`}
                          >
                            {item.score}
                          </span>
                          <span
                            className={`text-[11px] font-medium px-2 py-[3px] rounded-[2px] ${
                              item.result === "Win"
                                ? "bg-emerald-500/90 text-white"
                                : item.result === "Loss"
                                ? "bg-red-500/90 text-white"
                                : item.result === "Tie"
                                ? "bg-amber-500/90 text-white"
                                : "bg-primary/90 text-white"
                            }`}
                          >
                            {item.result.toUpperCase()}
                          </span>
                        </div>
                        <div
                          className={`flex items-center justify-center px-2 py-[3px] rounded-[2px] ${item.badgeClass}`}
                        >
                          <span className="font-medium text-[9px] text-center tracking-[1.5px]">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col items-start justify-between min-w-0 p-5 bg-white w-full gap-3">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" />
                          {item.date}, {item.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={12} aria-hidden="true" />
                          vs {item.opponent}
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy size={12} aria-hidden="true" />
                          Game {item.number}
                        </span>
                      </div>

                      <p className="font-medium text-dark text-[16px] tracking-[-0.3px] line-clamp-1">
                        {item.title}
                      </p>

                      <p className="text-dark/60 text-[13px] w-full line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between w-full pt-3 border-t border-border-light">
                        <span className="text-primary/80 font-medium text-[11px] tracking-[0.5px]">
                          {item.recapLine}
                        </span>
                        <div className="flex gap-[6px] items-center">
                          <span className="text-primary font-medium text-[12px]">
                            View recap
                          </span>
                          <ArrowRight
                            size={14}
                            className="text-primary transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollSection>
              ))}
            </div>
          )}
      </main>

      <Footer />
    </div>
  );
}
