import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const episodes = [
  {
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Game 3 — Set 2 Chaos",
    description: "Key rallies, momentum shifts, and the plays that decided the set.",
    meta: "Game 3 · 45 min",
  },
  {
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "bg-[#16161d] text-white",
    title: "Marcus Cole — The Wall",
    description: "How one middle blocker shut down the league\u2019s top hitters.",
    meta: "Game 2 · 38 min",
  },
  {
    badge: "GAME RECAP",
    badgeClass: "border border-[#1b4fd8] text-[#1b4fd8]",
    title: "Game 1 — Season Opener",
    description: "Full recap of our first intramural match of the season.",
    meta: "Game 1 · 29 min",
  },
  {
    badge: "GAME RECAP",
    badgeClass: "bg-[#16161d] text-white",
    title: "The Comeback — Game 2",
    description: "Down two sets, digging deep to finish strong in the rematch.",
    meta: "Game 2 · 51 min",
  },
];

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Home" />

      {/* Hero Section */}
      <div className="h-[560px] overflow-clip relative w-full">
        <div className="absolute bg-[#ccc] h-[560px] left-0 top-0 w-full" />
        <div className="absolute bg-[rgba(22,22,29,0.8)] h-[560px] left-0 top-0 w-full" />

        {/* Hero Content */}
        <div className="absolute flex flex-col gap-[20px] h-[560px] items-start justify-end left-[64px] pb-[80px] top-0 w-[800px]">
          <div className="bg-[#1b4fd8] flex gap-[8px] items-center px-[14px] py-[5px]">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
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
            <button className="bg-[#1b4fd8] flex gap-[10px] h-[44px] items-center px-[24px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3L13 8L5 13V3Z" fill="white" />
              </svg>
              <span className="font-medium text-[14px] text-white">Watch Recap</span>
            </button>
            <button className="border border-white flex h-[44px] items-center px-[24px]">
              <span className="text-[14px] text-white">Browse Matches</span>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bg-[rgba(22,22,29,0.73)] flex gap-[10px] h-[72px] items-center left-0 px-[80px] top-[488px] w-full">
          {[
            { value: "12", label: "MATCHES" },
            { value: "24K", label: "VIEWS" },
            { value: "4", label: "CONTENT TYPES" },
            { value: "2026", label: "SEASON" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-[10px]">
              {i > 0 && <div className="bg-[#666] h-[32px] w-px" />}
              <div className="flex flex-col gap-[2px] items-center">
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
          <button className="border border-[#16161d] flex gap-[8px] h-[36px] items-center px-[16px]">
            <span className="font-medium text-[#16161d] text-[11px] tracking-[1px]">
              View All
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#16161d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Episode Cards Grid */}
        <div className="flex gap-[20px] items-start w-full">
          {episodes.map((ep) => (
            <div
              key={ep.title}
              className="border border-[#e0e0e0] flex flex-1 flex-col items-start min-w-0"
            >
              <div className="bg-[#ccc] h-[180px] w-full" />
              <div className="flex flex-col gap-[10px] items-start pb-[24px] pt-[20px] px-[20px] w-full">
                <div className={`flex items-center px-[8px] py-[3px] rounded-[2px] ${ep.badgeClass}`}>
                  <span className="font-medium text-[9px] tracking-[1.5px]">
                    {ep.badge}
                  </span>
                </div>
                <p className="font-medium text-[#16161d] text-[15px] tracking-[-0.3px]">
                  {ep.title}
                </p>
                <p className="text-[#666] text-[13px] w-full">
                  {ep.description}
                </p>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#888] text-[11px]">{ep.meta}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#1b4fd8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#16161d] flex gap-[4px] items-center px-[80px] py-[56px] w-full">
        <div className="flex flex-1 flex-col gap-[8px] items-center justify-center px-[12px] py-[8px]">
          <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
            NEW MATCH COVERAGE
          </span>
          <h3 className="font-light text-[32px] text-white tracking-[-1px]">
            Game 4 — Rivalry Night
          </h3>
          <p className="text-[#888] text-[14px]">
            Side-Out Stories · full coverage dropping soon
          </p>
        </div>
        <button className="bg-[#1b4fd8] flex flex-1 gap-[10px] h-[44px] items-center justify-center px-[28px] py-[8px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V8M8 8V14M8 8H14M8 8H2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-medium text-[14px] text-white">Get Notified</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
