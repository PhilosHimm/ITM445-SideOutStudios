import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const matchFilters = [
  { label: "All Matches", count: 12, active: true },
  { label: "Game 1–4", count: 4 },
  { label: "Game 5–8", count: 4 },
  { label: "Game 9–12", count: 4 },
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
  },
];

export default function Matches() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Matches" />
      <PageHero
        subtitle="BROWSE BY MATCH · CONTENT TYPE · SEASON"
        title="Our Matches"
      />

      {/* Page Body */}
      <div className="bg-white flex items-start w-full">
        {/* Filter Sidebar */}
        <div className="bg-white border-r border-[#f0f0f0] flex flex-col gap-[32px] items-start px-[32px] py-[40px] w-[260px] shrink-0">
          {/* Match Filter */}
          <div className="flex flex-col gap-[12px] items-start w-full">
            <span className="text-[#888] text-[11px] tracking-[1px]">
              MATCH
            </span>
            {matchFilters.map((f) => (
              <div
                key={f.label}
                className={`flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full ${
                  f.active ? "bg-[#16161d]" : ""
                }`}
              >
                <div className="flex gap-[8px] items-center">
                  {!f.active && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="4" fill="#1b4fd8" />
                    </svg>
                  )}
                  <span
                    className={`text-[13px] ${
                      f.active
                        ? "font-medium text-white"
                        : "text-[#666]"
                    }`}
                  >
                    {f.label}
                  </span>
                </div>
                <span
                  className={`text-[11px] ${
                    f.active ? "text-[#888]" : "text-[#888]"
                  }`}
                >
                  {f.count}
                </span>
              </div>
            ))}
          </div>

          {/* Content Type Filter */}
          <div className="flex flex-col gap-[12px] items-start w-full">
            <span className="text-[#888] text-[11px] tracking-[1px]">
              CONTENT TYPE
            </span>
            <div className="border border-[#f0f0f0] flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full">
              <span className="text-[#16161d] text-[13px]">
                Rally Breakdowns
              </span>
              <span className="text-[#888] text-[11px]">4</span>
            </div>
          </div>
        </div>

        {/* Timeline Main */}
        <div className="flex flex-1 flex-col items-start min-w-0 px-[48px] py-[40px]">
          {/* Timeline Header */}
          <div className="border-b border-[#f0f0f0] flex items-center justify-between pb-[24px] w-full">
            <span className="text-[#888] text-[11px] tracking-[1px]">
              TIMELINE — 2026 SEASON
            </span>
            <div className="flex gap-[8px] items-center">
              <span className="text-[#16161d] text-[11px]">Newest first</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 2V10M6 10L2 6M6 10L10 6"
                  stroke="#16161d"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Timeline Items */}
          {timelineItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-[24px] items-start py-[28px] w-full ${
                i > 0 ? "border-t border-[#f0f0f0]" : ""
              }`}
            >
              {/* Date */}
              <div className="flex flex-col gap-[2px] items-end w-[72px] shrink-0">
                <span className="text-[#888] text-[11px] tracking-[0.5px]">
                  {item.date}
                </span>
                <span className="text-[#ccc] text-[10px]">{item.year}</span>
              </div>

              {/* Timeline Dot & Line */}
              <div className="flex flex-col items-center w-[20px] shrink-0">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="mt-[2px]"
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
                <div className="bg-[#f0f0f0] flex-1 w-px" />
              </div>

              {/* Card */}
              <div className="border border-[#f0f0f0] flex flex-1 items-start min-w-0 rounded-[2px]">
                <div className="bg-[#ccc] h-[140px] w-[200px] shrink-0" />
                <div className="flex flex-1 flex-col h-[140px] items-start justify-between min-w-0 p-[20px]">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <div
                      className={`flex items-center justify-center px-[8px] py-[3px] rounded-[2px] ${item.badgeClass}`}
                    >
                      <span className="text-[10px] text-center tracking-[0.5px]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="font-medium text-[#16161d] text-[15px]">
                      {item.title}
                    </p>
                    <p className="text-[#666] text-[12px] w-full">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#888] text-[11px]">{item.meta}</span>
                    <div className="flex gap-[6px] items-center">
                      <span className="text-[#1b4fd8] text-[12px]">Watch</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M1 6H11M11 6L6 1M11 6L6 11"
                          stroke="#1b4fd8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
