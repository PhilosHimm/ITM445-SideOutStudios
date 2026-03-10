import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

const episodes = [
  {
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Game 3 — Set 2 Chaos",
    description: "Key rallies, momentum shifts, and the plays that decided the set.",
    meta: "Game 3 · 45 min",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop",
    link: "/stories"
  },
  {
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "bg-[#16161d] text-white",
    title: "Marcus Cole — The Wall",
    description: "How one middle blocker shut down the league\u2019s top hitters.",
    meta: "Game 2 · 38 min",
    image: "https://images.unsplash.com/photo-1593787406536-3696a152d0b6?q=80&w=600&auto=format&fit=crop",
    link: "/stories"
  },
  {
    badge: "GAME RECAP",
    badgeClass: "border border-[#1b4fd8] text-[#1b4fd8]",
    title: "Game 1 — Season Opener",
    description: "Full recap of our first intramural match of the season.",
    meta: "Game 1 · 29 min",
    image: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=600&auto=format&fit=crop",
    link: "/matches"
  },
  {
    badge: "GAME RECAP",
    badgeClass: "bg-[#16161d] text-white",
    title: "The Comeback — Game 2",
    description: "Down two sets, digging deep to finish strong in the rematch.",
    meta: "Game 2 · 51 min",
    image: "https://images.unsplash.com/photo-1549429188-75172ecdb0fb?q=80&w=600&auto=format&fit=crop",
    link: "/matches"
  },
];

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Home" />

      {/* Hero Section */}
      <div className="h-[560px] overflow-clip relative w-full group">
        <div
          className="absolute bg-cover bg-center h-[560px] left-0 top-0 w-full transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582650074213-91117ecaf524?q=80&w=1600&auto=format&fit=crop')" }}
        />
        <div className="absolute bg-[rgba(22,22,29,0.8)] h-[560px] left-0 top-0 w-full" />

        {/* Hero Content */}
        <div className="absolute flex flex-col gap-[20px] h-[560px] items-start justify-end left-[64px] pb-[80px] top-0 w-[800px]">
          <div className="bg-[#1b4fd8] flex gap-[8px] items-center px-[14px] py-[5px]">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="animate-pulse">
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
            <span className="font-medium text-[10px] text-white tracking-[2px]">
              FEATURED MATCH — GAME 3
            </span>
          </div>

          <div className="font-light leading-[0.88] text-[96px] text-white tracking-[-3px] w-[750px]">
            <p className="mb-0">Rally</p>
            <p>Breakdown.</p>
          </div>

          <p className="font-light text-[#ccc] text-[16px] w-[520px]">
            Unfiltered volleyball. Real games, real stories, real obsession.
          </p>

          <div className="flex gap-[12px] items-center">
            <Link href="/stories" className="bg-[#1b4fd8] flex gap-[10px] h-[44px] items-center px-[24px] hover:bg-[#1546b3] transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-95">
              <Play size={16} className="text-white fill-white" />
              <span className="font-medium text-[14px] text-white">Watch Recap</span>
            </Link>
            <Link href="/matches" className="border border-white flex h-[44px] items-center px-[24px] hover:bg-white/10 transition-colors duration-200 cursor-pointer active:scale-95">
              <span className="text-[14px] text-white">Browse Matches</span>
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bg-[rgba(22,22,29,0.9)] backdrop-blur-sm flex gap-[10px] h-[72px] items-center left-0 px-[80px] top-[488px] w-full border-t border-white/10">
          {[
            { value: "12", label: "MATCHES" },
            { value: "24K", label: "VIEWS" },
            { value: "4", label: "CONTENT TYPES" },
            { value: "2026", label: "SEASON" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-[10px]">
              {i > 0 && <div className="bg-[#666] h-[32px] w-px" />}
              <div className="flex flex-col gap-[2px] items-center px-4 hover:scale-105 transition-transform duration-200">
                <span className="font-light text-[32px] text-white tracking-[-1px]">
                  {stat.value}
                </span>
                <span className="font-medium text-[#888] text-[9px] tracking-[2px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Episodes Section */}
      <div className="bg-white flex flex-col gap-[40px] items-start px-[80px] py-[64px] w-full">
        {/* Header */}
        <div className="flex items-center justify-between pb-[8px] w-full">
          <div className="flex flex-col gap-[4px] items-start">
            <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
              LATEST COVERAGE
            </span>
            <h2 className="font-light text-[#16161d] text-[36px] tracking-[-1px]">
              Fresh from the court
            </h2>
          </div>
          <Link href="/matches" className="border border-[#16161d] flex gap-[8px] h-[36px] items-center px-[16px] hover:bg-[#f7f7f7] transition-all duration-200 hover:shadow-sm cursor-pointer group rounded-[2px] active:scale-95">
            <span className="font-medium text-[#16161d] text-[11px] tracking-[1px]">
              View All
            </span>
            <ArrowRight size={14} className="text-[#16161d] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Episode Cards Grid */}
        <div className="flex gap-[20px] items-start w-full">
          {episodes.map((ep) => (
            <Link
              key={ep.title}
              href={ep.link}
              className="border border-[#e0e0e0] flex flex-1 flex-col items-start min-w-0 cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg rounded-[4px] bg-white overflow-hidden"
            >
              <div
                className="bg-[#ccc] h-[180px] w-full group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${ep.image})` }}
              />
              <div className="flex flex-col gap-[10px] items-start pb-[24px] pt-[20px] px-[20px] w-full bg-white z-10">
                <div className={`flex items-center px-[8px] py-[3px] rounded-[2px] ${ep.badgeClass}`}>
                  <span className="font-medium text-[9px] tracking-[1.5px]">
                    {ep.badge}
                  </span>
                </div>
                <p className="font-medium text-[#16161d] text-[15px] tracking-[-0.3px]">
                  {ep.title}
                </p>
                <p className="text-[#666] text-[13px] w-full line-clamp-2">
                  {ep.description}
                </p>
                <div className="flex items-center justify-between w-full mt-2 pt-4 border-t border-[#f0f0f0]">
                  <span className="text-[#888] font-medium text-[10px] uppercase tracking-[1px]">{ep.meta}</span>
                  <ArrowRight size={14} className="text-[#1b4fd8] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#16161d] flex gap-[4px] items-center px-[80px] py-[56px] w-full relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16161d] via-[#16161d]/80 to-transparent" />

        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative z-10">
          <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
            NEW MATCH COVERAGE
          </span>
          <h3 className="font-light text-[32px] text-white tracking-[-1px]">
            Game 4 — Rivalry Night
          </h3>
          <p className="text-[#aaa] text-[14px]">
            Side-Out Stories · full coverage dropping soon
          </p>
        </div>
        <button className="bg-[#1b4fd8] flex flex-1 gap-[10px] h-[44px] items-center justify-center px-[28px] py-[8px] hover:bg-[#1546b3] transition-colors duration-200 cursor-pointer grow-0 ml-auto mr-auto w-auto shrink-0 shadow-lg hover:shadow-xl active:scale-95 relative z-10 rounded-[2px]">
          <Bell size={16} className="text-white" />
          <span className="font-medium text-[14px] text-white">Get Notified</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
