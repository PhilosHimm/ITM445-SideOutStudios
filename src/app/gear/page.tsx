"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const gearItems = [
  {
    badge: "WARMUP",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Dynamic Warmup Routine",
    description:
      "10-min hip openers, ankle mobility, and shoulder circles before every game.",
    meta: "All levels · 10 min",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    link: "/about",
    level: "All Levels"
  },
  {
    badge: "GEAR",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Essential Gear by Level",
    description:
      "From beginner knee pads to advanced libero shoes — our honest picks.",
    meta: "All levels · guide",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop",
    link: "/about",
    level: "Beginner"
  },
  {
    badge: "RULES & STRATEGY",
    badgeClass: "bg-[#16161d] text-white",
    title: "Intramural Rules Explained",
    description:
      "Rotation rules, scoring formats, and key strategies for intramural play.",
    meta: "All levels · guide",
    image: "https://images.unsplash.com/photo-1593787406536-3696a152d0b6?q=80&w=600&auto=format&fit=crop",
    link: "/about",
    level: "Intermediate"
  },
  {
    badge: "TRAINING",
    badgeClass: "bg-[#16161d] text-white",
    title: "Advanced Serving Techniques",
    description:
      "Master the jump float and top spin serve with our detailed breakdown.",
    meta: "Advanced · 15 min",
    image: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=600&auto=format&fit=crop",
    link: "/about",
    level: "Advanced"
  },
];

const filters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Gear() {
  const [activeFilter, setActiveFilter] = useState("All Levels");

  // If the filter is "All Levels", show everything.
  // Otherwise, optionally show "All Levels" items + the specific level items.
  // We'll just strictly filter based on the 'level' property for simplicity, unless it's the catchall.
  const filteredItems = activeFilter === "All Levels"
    ? gearItems
    : gearItems.filter(item => item.level === activeFilter || item.level === "All Levels");

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Gear" />
      <PageHero
        subtitle="WARMUPS · GEAR PICKS · RULES & STRATEGY"
        title="Gear & Routines"
      />

      {/* Page Body */}
      <div className="bg-white flex flex-col gap-[40px] items-start px-[80px] py-[48px] w-full flex-1">
        {/* Level Filter Bar */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px] items-start">
            <span className="text-[#1b4fd8] text-[11px] tracking-[2px] font-medium">
              PLAYER LEVEL
            </span>
            <h2 className="text-[#16161d] font-medium text-[32px] tracking-[-0.5px]">
              Gear &amp; Routines
            </h2>
          </div>
          <div className="flex gap-[8px] items-center">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex h-[40px] items-center justify-center px-[20px] rounded-[2px] text-[13px] text-center cursor-pointer transition-all duration-200 ${isActive
                      ? "bg-[#16161d] font-medium text-white hover:bg-black hover:scale-105 active:scale-95"
                      : "border border-[#f0f0f0] text-[#666] hover:bg-[#f7f7f7] hover:border-[#e0e0e0] hover:-translate-y-[1px] active:translate-y-0"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gear Cards Grid */}
        <div className="flex gap-[20px] items-start w-full flex-wrap">
          {filteredItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="border border-[#e0e0e0] flex flex-col items-start min-w-[300px] w-[calc(33.333%-14px)] rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
            >
              <div
                className="bg-[#ccc] h-[160px] w-full rounded-t-[4px] group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="flex flex-col gap-[10px] items-start p-[20px] w-full bg-white z-10 flex-1">
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
                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-[#f0f0f0]">
                  <span className="text-[#888] font-medium text-[10px] uppercase tracking-[1px]">{item.meta}</span>
                  <div className="flex gap-[6px] items-center">
                    <span className="text-[#1b4fd8] font-medium text-[12px]">Read</span>
                    <ArrowRight size={14} className="text-[#1b4fd8] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
