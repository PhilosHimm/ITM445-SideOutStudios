"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const gearItems = [
  {
    badge: "GEAR TOUR",
    badgeClass: "bg-primary text-white",
    title: "Game-Day Gear & Setup Tour",
    description:
      "Quick walkthrough of our actual game gear — shoes, knee pads, and more — paired with honest opinions.",
    meta: "All levels · Video",
    image: "/images/gear-warmup.png",
    link: "/coming-soon",
    level: "All Levels"
  },
  {
    badge: "GEAR TOUR",
    badgeClass: "bg-primary text-white",
    title: "Essential Gear by Level",
    description:
      "From beginner knee pads to advanced libero shoes — our honest picks from what we actually use at intramurals and leagues.",
    meta: "All levels · Video + Photo",
    image: "/images/gear-passes.png",
    link: "/coming-soon",
    level: "Beginner"
  },
  {
    badge: "RULES & STRATEGY",
    badgeClass: "bg-dark text-white",
    title: "Rotation, Positioning & Scoring Explained",
    description:
      "Screen-recorded and graphic-based explainers covering volleyball concepts — produced entirely in Figma + ClipChamp.",
    meta: "All levels · Figma + Video",
    image: "https://images.unsplash.com/photo-1593787406536-3696a152d0b6?q=80&w=600&auto=format&fit=crop",
    link: "/coming-soon",
    level: "Intermediate"
  },
  {
    badge: "STRATEGY EXPLAINER",
    badgeClass: "bg-dark text-white",
    title: "Advanced Serving Techniques",
    description:
      "Master the jump float and top spin serve — graphic-based breakdown produced without needing court access.",
    meta: "Advanced · Figma + Video",
    image: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=600&auto=format&fit=crop",
    link: "/coming-soon",
    level: "Advanced"
  },
];

const filters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Gear() {
  const [activeFilter, setActiveFilter] = useState("All Levels");

  const filteredItems = activeFilter === "All Levels"
    ? gearItems
    : gearItems.filter(item => item.level === activeFilter || item.level === "All Levels");

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Gear" />
      <PageHero
        subtitle="GEAR TOURS · RULES & STRATEGY · EXPLAINERS"
        title="Gear & Guides"
        bgImage="/images/gear-hero-bg.jpg"
      />

      {/* Page Body */}
      <main className="bg-white flex flex-col gap-8 md:gap-10 items-start px-6 md:px-12 lg:px-20 py-8 md:py-12 w-full flex-1">
        {/* Level Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-primary text-[11px] tracking-[2px] font-medium">
              LIGHTWEIGHT NON-GAME CONTENT
            </span>
            <h2 className="text-dark font-medium text-[28px] md:text-[32px] tracking-[-0.5px]">
              Explore by Level
            </h2>
          </div>
          <div className="flex gap-2 items-center flex-wrap" role="radiogroup" aria-label="Filter by player level">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  role="radio"
                  aria-checked={isActive}
                  className={`flex h-10 items-center justify-center px-5 rounded-[2px] text-[13px] text-center cursor-pointer transition-all duration-200 ${isActive
                      ? "bg-dark font-medium text-white hover:bg-black hover:scale-105 active:scale-95"
                      : "border border-border-light text-dark/60 hover:bg-dark/5 hover:border-border hover:-translate-y-[1px] active:translate-y-0"
                    }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gear Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full" role="list" aria-label="Gear and routines">
          {filteredItems.map((item, i) => (
            <ScrollSection
              key={item.title}
              animation="fade-up"
              delay={i * 100}
              className="border border-border flex flex-col items-start rounded-[4px] cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg bg-white overflow-hidden"
            >
            <Link
              href={item.link}
              className="flex flex-col items-start w-full h-full"
            >
              <div
                className="bg-dark/20 h-[160px] w-full rounded-t-[4px] group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                role="img"
                aria-label={item.title}
              />
              <div className="flex flex-col gap-[10px] items-start p-5 w-full bg-white z-10 flex-1">
                <div
                  className={`flex items-center justify-center px-2 py-[3px] rounded-[2px] ${item.badgeClass}`}
                >
                  <span className="font-medium text-[9px] text-center tracking-[1.5px]">
                    {item.badge}
                  </span>
                </div>
                <p className="font-medium text-dark text-[15px] tracking-[-0.3px] line-clamp-1">
                  {item.title}
                </p>
                <p className="text-dark/60 text-[13px] w-full line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-border-light">
                  <span className="text-muted font-medium text-[10px] uppercase tracking-[1px]">{item.meta}</span>
                  <div className="flex gap-[6px] items-center">
                    <span className="text-primary font-medium text-[12px]">Read</span>
                    <ArrowRight size={14} className="text-primary transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
            </ScrollSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
