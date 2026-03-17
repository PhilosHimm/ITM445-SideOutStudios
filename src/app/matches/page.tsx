"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { games } from "@/lib/games";

const matchFilters = [
  { label: "All Matches", count: 12 },
  { label: "Game 1–4", count: 4 },
  { label: "Game 5–8", count: 4 },
  { label: "Game 9–12", count: 4 },
];

const timelineItems = games.map((g) => ({
  date: g.date,
  year: g.year,
  badge: g.badge,
  badgeClass: g.badgeClass,
  title: g.title,
  description: g.description,
  meta: `Game ${g.number} · ${g.duration}`,
  image: g.heroImage,
  link: `/matches/${g.slug}`,
  category: g.category,
  result: g.result,
  score: g.score,
}));

export default function Matches() {
  const [activeFilter, setActiveFilter] = useState("All Matches");

  const filteredItems = activeFilter === "All Matches"
    ? timelineItems
    : timelineItems.filter(i => i.category === activeFilter);

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />
      <PageHero
        subtitle="BROWSE BY GAME · CONTENT FORMAT · COLLECTION"
        title="Our Matches"
        bgImage="/images/matches-hero-bg.jpg"
      />

      {/* Page Body */}
      <div className="bg-white flex flex-col md:flex-row items-start w-full flex-1">
        {/* Filter Sidebar */}
        <ScrollSection as="aside" animation="fade-right"
          className="bg-white border-b md:border-b-0 md:border-r border-border-light flex flex-col gap-8 items-start px-6 md:px-8 py-8 md:py-10 w-full md:w-[260px] shrink-0 md:self-stretch"
        >
          {/* Match Filter */}
          <div className="flex flex-col gap-3 items-start w-full" role="radiogroup" aria-label="Filter by match range">
            <span className="text-muted text-[11px] tracking-[1px] font-medium" id="match-filter-label">
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
                  className={`flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer transition-colors duration-200 ${isActive ? "bg-dark" : "hover:bg-dark/5"
                    }`}
                >
                  <div className="flex gap-2 items-center">
                    {!isActive && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <circle cx="4" cy="4" r="4" fill="#1b4fd8" />
                      </svg>
                    )}
                    <span
                      className={`text-[13px] ${isActive
                          ? "font-medium text-white"
                          : "text-dark/60"
                        }`}
                    >
                      {f.label}
                    </span>
                  </div>
                  <span className="text-muted text-[11px]">
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Format Filter */}
          <div className="flex flex-col gap-3 items-start w-full mt-2">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">
              CONTENT FORMAT
            </span>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">
                Rally Breakdowns
              </span>
              <span className="text-muted text-[11px]">4</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">
                Game Recaps
              </span>
              <span className="text-muted text-[11px]">5</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">
                Player Spotlights
              </span>
              <span className="text-muted text-[11px]">1</span>
            </div>
            <div className="border border-border-light flex h-9 items-center justify-between px-3 rounded-[2px] w-full cursor-pointer hover:bg-dark/5 transition-colors duration-200">
              <span className="text-dark text-[13px]">
                Side-by-Side Matchups
              </span>
              <span className="text-muted text-[11px]">2</span>
            </div>
          </div>
        </ScrollSection>

        {/* Timeline Main */}
        <main className="flex flex-1 flex-col items-start min-w-0 px-6 md:px-12 py-8 md:py-10">
          {/* Timeline Header */}
          <div className="border-b border-border-light flex items-center justify-between pb-6 w-full">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">
              ALL COLLECTIONS — 2025/2026 SEASON
            </span>
            <div className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-dark text-[11px] font-medium">Newest first</span>
              <ChevronDown size={14} className="text-dark" aria-hidden="true" />
            </div>
          </div>

          {/* Timeline Items */}
          {filteredItems.length === 0 ? (
            <div className="flex w-full items-center justify-center py-20 text-muted text-[14px]" role="status">
              No matches found for this category.
            </div>
          ) : (
            <div role="list" aria-label="Match timeline">
              {filteredItems.map((item, i) => (
                <ScrollSection
                  key={item.title}
                  as="article"
                  animation="fade-up"
                  delay={i * 80}
                  className={`flex gap-4 md:gap-6 items-start py-7 w-full ${i > 0 ? "border-t border-border-light" : ""
                    }`}
                >
                  {/* Date */}
                  <div className="hidden md:flex flex-col gap-[2px] items-end w-[72px] shrink-0">
                    <time className="text-muted text-[11px] tracking-[0.5px]">
                      {item.date}
                    </time>
                    <span className="text-dark/20 text-[10px] font-medium">{item.year}</span>
                  </div>

                  {/* Timeline Dot & Line */}
                  <div className="hidden md:flex flex-col items-center w-5 shrink-0 self-stretch" aria-hidden="true">
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

                  {/* Card */}
                  <Link
                    href={item.link}
                    className="border border-border flex flex-col sm:flex-row flex-1 items-start min-w-0 rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
                  >
                    <div
                      className="bg-dark/20 h-[180px] sm:h-[140px] w-full sm:w-[200px] shrink-0 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.image}')` }}
                      role="img"
                      aria-label={item.title}
                    />
                    <div className="flex flex-1 flex-col sm:h-[140px] items-start justify-between min-w-0 p-5 bg-white z-10">
                      <div className="flex flex-col gap-2 items-start w-full">
                        <div className="flex gap-2 items-center">
                          <div
                            className={`flex items-center justify-center px-2 py-[3px] rounded-[2px] ${item.badgeClass}`}
                          >
                            <span className="font-medium text-[9px] text-center tracking-[1.5px]">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-muted text-[10px] md:hidden">{item.date} {item.year}</span>
                        </div>
                        <p className="font-medium text-dark text-[15px] tracking-[-0.3px] line-clamp-1">
                          {item.title}
                        </p>
                        <p className="text-dark/60 text-[13px] w-full line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full mt-2 pt-3 border-t border-border-light">
                        <div className="flex gap-3 items-center flex-wrap">
                          <span className="text-muted font-medium uppercase tracking-[1px] text-[10px]">{item.meta}</span>
                          <span className={`text-[9px] font-medium px-2 py-[2px] rounded-full border ${
                            item.result === "Win"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-200"
                              : item.result === "Loss"
                              ? "bg-red-500/10 text-red-600 border-red-200"
                              : "bg-primary/10 text-primary border-primary/20"
                          }`}>
                            {item.result} {item.score}
                          </span>
                        </div>
                        <div className="flex gap-[6px] items-center">
                          <span className="text-primary font-medium text-[12px]">Watch</span>
                          <ArrowRight size={14} className="text-primary transition-transform duration-200 group-hover:translate-x-1" />
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
