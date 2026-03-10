"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const matchFilters = [
  { label: "All Matches", count: 6 },
  { label: "Game 1–4", count: 2 },
  { label: "Game 5–8", count: 2 },
  { label: "Game 9–12", count: 2 },
];

const timelineItems = [
  {
    date: "Mar 1",
    year: "2026",
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Game 3 — Set 2 Chaos",
    description:
      "Key rallies, momentum shifts, and the plays that decided the set.",
    meta: "Game 3 · 45 min",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 1–4"
  },
  {
    date: "Feb 15",
    year: "2026",
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "bg-[#16161d] text-white",
    title: "Marcus Cole — The Wall",
    description:
      "How one middle blocker shut down the league\u2019s top hitters in Game 2.",
    meta: "Game 2 · 38 min",
    image: "https://images.unsplash.com/photo-1593787406536-3696a152d0b6?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 1–4"
  },
  {
    date: "Jan 28",
    year: "2026",
    badge: "MATCH ANALYSIS",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Game 7 — The Comeback",
    description:
      "A deep dive into the strategic adjustments that led to an improbable victory.",
    meta: "Game 7 · 50 min",
    image: "https://images.unsplash.com/photo-1541534741688-60cab3c3dc17?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 5–8"
  },
  {
    date: "Jan 10",
    year: "2026",
    badge: "TACTICS BOARD",
    badgeClass: "bg-[#16161d] text-white",
    title: "Tactical Masterclass",
    description:
      "Unpacking the innovative plays that dominated Game 6.",
    meta: "Game 6 · 40 min",
    image: "https://images.unsplash.com/photo-1579952962646-993774640106?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 5–8"
  },
  {
    date: "Dec 20",
    year: "2025",
    badge: "HIGHLIGHT REEL",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Game 10 — Final Set Thriller",
    description:
      "The most electrifying moments from the nail-biting final set.",
    meta: "Game 10 · 30 min",
    image: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 9–12"
  },
  {
    date: "Dec 5",
    year: "2025",
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "border border-[#16161d] text-[#16161d]",
    title: "Rookie Sensation",
    description:
      "Meet the new talent who took Game 9 by storm with an unforgettable performance.",
    meta: "Game 9 · 35 min",
    image: "https://images.unsplash.com/photo-1582650074213-91117ecaf524?q=80&w=600&auto=format&fit=crop",
    link: "/stories",
    category: "Game 9–12"
  },
];

export default function Matches() {
  const [activeFilter, setActiveFilter] = useState("All Matches");

  const filteredItems = activeFilter === "All Matches"
    ? timelineItems
    : timelineItems.filter(i => i.category === activeFilter);

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Matches" />
      <PageHero
        subtitle="BROWSE BY MATCH · CONTENT TYPE · SEASON"
        title="Our Matches"
      />

      {/* Page Body */}
      <div className="bg-white flex items-start w-full flex-1">
        {/* Filter Sidebar */}
        <div className="bg-white border-r border-[#f0f0f0] flex flex-col gap-[32px] items-start px-[32px] py-[40px] w-[260px] shrink-0 self-stretch">
          {/* Match Filter */}
          <div className="flex flex-col gap-[12px] items-start w-full">
            <span className="text-[#888] text-[11px] tracking-[1px] font-medium">
              MATCH
            </span>
            {matchFilters.map((f) => {
              const isActive = activeFilter === f.label;
              return (
                <div
                  key={f.label}
                  onClick={() => setActiveFilter(f.label)}
                  className={`flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full cursor-pointer transition-colors duration-200 ${isActive ? "bg-[#16161d]" : "hover:bg-[#f7f7f7]"
                    }`}
                >
                  <div className="flex gap-[8px] items-center">
                    {!isActive && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#1b4fd8" />
                      </svg>
                    )}
                    <span
                      className={`text-[13px] ${isActive
                          ? "font-medium text-white"
                          : "text-[#666]"
                        }`}
                    >
                      {f.label}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] ${isActive ? "text-[#888]" : "text-[#888]"
                      }`}
                  >
                    {f.count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Content Type Filter */}
          <div className="flex flex-col gap-[12px] items-start w-full mt-2">
            <span className="text-[#888] text-[11px] tracking-[1px] font-medium">
              CONTENT TYPE
            </span>
            <div className="border border-[#f0f0f0] flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full cursor-pointer hover:bg-[#f7f7f7] transition-colors duration-200">
              <span className="text-[#16161d] text-[13px]">
                Rally Breakdowns
              </span>
              <span className="text-[#888] text-[11px]">6</span>
            </div>
          </div>
        </div>

        {/* Timeline Main */}
        <div className="flex flex-1 flex-col items-start min-w-0 px-[48px] py-[40px]">
          {/* Timeline Header */}
          <div className="border-b border-[#f0f0f0] flex items-center justify-between pb-[24px] w-full">
            <span className="text-[#888] text-[11px] tracking-[1px] font-medium">
              TIMELINE — 2026 SEASON
            </span>
            <div className="flex gap-[8px] items-center cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-[#16161d] text-[11px] font-medium">Newest first</span>
              <ChevronDown size={14} className="text-[#16161d]" />
            </div>
          </div>

          {/* Timeline Items */}
          {filteredItems.length === 0 ? (
            <div className="flex w-full items-center justify-center py-20 text-[#888] text-[14px]">
              No matches found for this category.
            </div>
          ) : (
            filteredItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-[24px] items-start py-[28px] w-full ${i > 0 ? "border-t border-[#f0f0f0]" : ""
                  }`}
              >
                {/* Date */}
                <div className="flex flex-col gap-[2px] items-end w-[72px] shrink-0">
                  <span className="text-[#888] text-[11px] tracking-[0.5px]">
                    {item.date}
                  </span>
                  <span className="text-[#ccc] text-[10px] font-medium">{item.year}</span>
                </div>

                {/* Timeline Dot & Line */}
                <div className="flex flex-col items-center w-[20px] shrink-0 self-stretch">
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
                  <div className="bg-[#f0f0f0] flex-1 w-px -mt-[2px]" />
                </div>

                {/* Card */}
                <Link
                  href={item.link}
                  className="border border-[#e0e0e0] flex flex-1 items-start min-w-0 rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
                >
                  <div
                    className="bg-[#ccc] h-[140px] w-[200px] shrink-0 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex flex-1 flex-col h-[140px] items-start justify-between min-w-0 p-[20px] bg-white z-10">
                    <div className="flex flex-col gap-[8px] items-start w-full">
                      <div
                        className={`flex items-center justify-center px-[8px] py-[3px] rounded-[2px] ${item.badgeClass}`}
                      >
                        <span className="font-medium text-[9px] text-center tracking-[1.5px]">
                          {item.badge}
                        </span>
                      </div>
                      <p className="font-medium text-[#16161d] text-[15px] tracking-[-0.3px] line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-[#666] text-[13px] w-full line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-2 pt-3 border-t border-[#f0f0f0]">
                      <span className="text-[#888] font-medium uppercase tracking-[1px] text-[10px]">{item.meta}</span>
                      <div className="flex gap-[6px] items-center">
                        <span className="text-[#1b4fd8] font-medium text-[12px]">Watch</span>
                        <ArrowRight size={14} className="text-[#1b4fd8] transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
