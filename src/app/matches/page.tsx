"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { ChevronDown, ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const gameRangeFilters = ["All Matches", "Game 1–4", "Game 5–8", "Game 9–12"] as const;

export default function Matches() {
  const [activePlayer, setActivePlayer] = useState<"kevin" | "philos">("kevin");
  const [activeFilter, setActiveFilter] = useState<string>("All Matches");

  // Reset range filter when switching players so no empty state appears
  useEffect(() => {
    setActiveFilter("All Matches");
  }, [activePlayer]);

  const playerGames = timelineItems.filter((i) => i.player === activePlayer);

  const matchFilters = gameRangeFilters.map((label) => ({
    label,
    count:
      label === "All Matches"
        ? playerGames.length
        : playerGames.filter((i) => i.category === label).length,
  }));

  const filteredItems =
    activeFilter === "All Matches"
      ? playerGames
      : playerGames.filter((i) => i.category === activeFilter);

  const wins = playerGames.filter((i) => i.result === "Win").length;
  const losses = playerGames.filter((i) => i.result === "Loss").length;
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
      <div className="bg-white flex flex-col md:flex-row items-start w-full flex-1">

        {/* Filter Sidebar */}
        <ScrollSection
          as="aside"
          animation="fade-right"
          className="bg-white border-b md:border-b-0 md:border-r border-border-light flex flex-col gap-8 items-start px-6 md:px-8 py-8 md:py-10 w-full md:w-[260px] shrink-0 md:self-stretch"
        >
          {/* Match range filter */}
          <div
            className="flex flex-col gap-3 items-start w-full"
            role="radiogroup"
            aria-label="Filter by match range"
          >
            <span className="text-muted text-[11px] tracking-[1px] font-medium">
              MATCH
            </span>
            {matchFilters.map((f) => {
              const isActive = activeFilter === f.label;
              return (
                <button
                  key={f.label}
                  onClick={() => setActiveFilter(f.label)}
                  role="radio"
                  aria-checked={isActive}
                  className={`flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer transition-colors duration-200 ${
                    isActive ? "bg-dark" : "hover:bg-dark/5"
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    {!isActive && (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="4" cy="4" r="4" fill="#1b4fd8" />
                      </svg>
                    )}
                    <span
                      className={`text-[13px] ${
                        isActive ? "font-medium text-white" : "text-dark/60"
                      }`}
                    >
                      {f.label}
                    </span>
                  </div>
                  <span className="text-muted text-[11px]">{f.count}</span>
                </button>
              );
            })}
          </div>

          {/* Content Format filter */}
          <div className="flex flex-col gap-3 items-start w-full mt-2">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">
              CONTENT FORMAT
            </span>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">Game Recaps</span>
              <span className="text-muted text-[11px]">2</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">Rally Breakdowns</span>
              <span className="text-muted text-[11px]">1</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">Tactical Films</span>
              <span className="text-muted text-[11px]">1</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">Season Finales</span>
              <span className="text-muted text-[11px]">1</span>
            </div>
          </div>
        </ScrollSection>

        {/* Timeline Main */}
        <main className="flex flex-1 flex-col items-start min-w-0 px-6 md:px-12 py-8 md:py-10">

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
                  <div
                    className={`size-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
                      isActive ? "bg-primary text-white" : "bg-dark/10 text-dark/40"
                    }`}
                  >
                    {m.initials}
                  </div>
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
              <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white text-[14px] font-bold shrink-0">
                {meta.initials}
              </div>
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
            <div className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-dark text-[11px] font-medium">Newest first</span>
              <ChevronDown size={14} className="text-dark" aria-hidden="true" />
            </div>
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
            <div role="list" aria-label="Match timeline">
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
                    className="border border-border flex flex-col flex-1 items-start min-w-0 rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
                  >
                    {/* Hero image */}
                    <div className="relative w-full">
                      <div
                        className="h-[200px] sm:h-[220px] w-full group-hover:scale-[1.02] transition-transform duration-500 bg-cover bg-center"
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
      </div>

      <Footer />
    </div>
  );
}
