import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const episodes = [
  {
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-primary text-white",
    title: "Best Rallies — Game 2 Round Robin",
    description: "Top 5 rallies with slow-mo replays, freeze-frame annotations, and positioning breakdowns.",
    meta: "Game 2 · Highlights",
    image: "/images/home-ep1-blocks.png",
    link: "/stories"
  },
  {
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "bg-dark text-white",
    title: "Kevin — The Ace Machine",
    description: "Best moments from intramural and league play, plus a quick post-game interview.",
    meta: "Game 2 · Spotlight",
    image: "/images/home-ep2-spike.png",
    link: "/stories"
  },
  {
    badge: "GAME RECAP",
    badgeClass: "border border-primary text-primary",
    title: "Game 1 — Season Opener Recap",
    description: "60-second match summary: score, key plays, and MVP moment from the first intramural game.",
    meta: "Game 1 · 90 sec",
    image: "/images/home-ep3-game.png",
    link: "/matches"
  },
  {
    badge: "SIDE-BY-SIDE",
    badgeClass: "bg-dark text-white",
    title: "The Iron Wall — Perspective Matchup",
    description: "Compare two players' approaches to the same block using the perspective toggle feature.",
    meta: "Playoff · Comparison",
    image: "/images/home-ep4-ironwall.jpg",
    link: "/matches"
  },
];

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Home" />

      {/* Hero Section */}
      <section
        aria-label="Featured match"
        className="h-[560px] overflow-clip relative w-full group"
      >
        <div
          className="absolute bg-cover bg-center h-[560px] left-0 top-0 w-full transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/images/home-hero-bg.jpg')" }}
          role="img"
          aria-label="Volleyball match action shot"
        />
        <div className="absolute bg-dark/80 h-[560px] left-0 top-0 w-full" aria-hidden="true" />

        {/* Hero Content */}
        <ScrollSection animation="fade-up" className="absolute flex flex-col gap-5 h-[560px] items-start justify-end left-0 pb-[80px] top-0 w-full px-6 md:px-16 max-w-[900px]">
          <div className="bg-primary flex gap-2 items-center px-[14px] py-[5px]">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="animate-pulse" aria-hidden="true">
              <circle cx="3" cy="3" r="3" fill="white" />
            </svg>
            <span className="font-medium text-[10px] text-white tracking-[2px]">
              LATEST COLLECTION — GAME 3
            </span>
          </div>

          <h1 className="font-light leading-[0.88] text-[64px] md:text-[96px] text-white tracking-[-3px] max-w-[750px]">
            Rally<br />
            Breakdown.
          </h1>

          <p className="font-light text-white/80 text-[16px] max-w-[520px]">
            Game-day highlights, player spotlights, and rally breakdowns — published as a complete collection from every intramural match.
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <Link href="/stories" className="bg-primary flex gap-[10px] h-[44px] items-center px-6 hover:bg-primary-hover transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-95">
              <Play size={16} className="text-white fill-white" />
              <span className="font-medium text-[14px] text-white">Watch Recap</span>
            </Link>
            <Link href="/matches" className="border border-white flex h-[44px] items-center px-6 hover:bg-white/10 transition-colors duration-200 cursor-pointer active:scale-95">
              <span className="text-[14px] text-white">Browse Matches</span>
            </Link>
          </div>
        </ScrollSection>


      </section>

      {/* Episodes Section */}
      <ScrollSection as="section" animation="fade-up" className="bg-white flex flex-col gap-10 items-start px-6 md:px-16 py-16 w-full">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 w-full">
          <div className="flex flex-col gap-1 items-start">
            <span className="font-medium text-primary text-[10px] tracking-[3px]">
              LATEST COLLECTION
            </span>
            <h2
              id="latest-coverage-heading"
              className="font-light text-dark text-[36px] tracking-[-1px]"
            >
              Fresh from game day
            </h2>
          </div>
          <Link href="/matches" className="border border-dark flex gap-2 h-9 items-center px-4 hover:bg-dark/5 transition-all duration-200 hover:shadow-sm cursor-pointer group rounded-[2px] active:scale-95">
            <span className="font-medium text-dark text-[11px] tracking-[1px]">
              View All
            </span>
            <ArrowRight size={14} className="text-dark transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Episode Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {episodes.map((ep) => (
            <Link
              key={ep.title}
              href={ep.link}
              className="border border-border flex flex-col items-start cursor-pointer hover:border-[#aaa] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg rounded-[4px] bg-white overflow-hidden"
            >
              <div
                className="bg-dark/20 h-[180px] w-full group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${ep.image})` }}
                role="img"
                aria-label={ep.title}
              />
              <div className="flex flex-col gap-[10px] items-start pb-6 pt-5 px-5 w-full bg-white z-10 flex-1">
                <div className={`flex items-center px-2 py-[3px] rounded-[2px] ${ep.badgeClass}`}>
                  <span className="font-medium text-[9px] tracking-[1.5px]">
                    {ep.badge}
                  </span>
                </div>
                <p className="font-medium text-dark text-[15px] tracking-[-0.3px]">
                  {ep.title}
                </p>
                <p className="text-dark/60 text-[13px] w-full line-clamp-2">
                  {ep.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-border-light">
                  <span className="text-muted font-medium text-[10px] uppercase tracking-[1px]">{ep.meta}</span>
                  <ArrowRight size={14} className="text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollSection>

      {/* CTA Banner */}
      <ScrollSection as="section" animation="fade-up" className="bg-dark flex flex-col md:flex-row gap-6 items-center px-6 md:px-16 py-14 w-full relative overflow-hidden">

        <div className="flex flex-1 flex-col gap-2 items-start justify-center px-3 py-2 relative z-10">
          <span className="font-medium text-primary text-[10px] tracking-[3px]">
            NEW COLLECTION DROP
          </span>
          <h2 className="font-light text-[32px] text-white tracking-[-1px]">
            Game 4 — Rivalry Night
          </h2>
          <p className="text-white/60 text-[14px]">
            Full collection: rally breakdowns, recaps, spotlights, and audio clips — all from one game
          </p>
        </div>
        <Link href="/stories" className="bg-primary flex gap-[10px] h-[44px] items-center justify-center px-7 py-2 hover:bg-primary-hover transition-colors duration-200 cursor-pointer shrink-0 shadow-lg hover:shadow-xl active:scale-95 relative z-10 rounded-[2px]">
          <Play size={16} className="text-white fill-white" />
          <span className="font-medium text-[14px] text-white">Get Notified</span>
        </Link>
      </ScrollSection>

      <Footer />
    </div>
  );
}
