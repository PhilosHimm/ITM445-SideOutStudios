import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const gearItems = [
  {
    badge: "WARMUP",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Dynamic Warmup Routine",
    description:
      "10-min hip openers, ankle mobility, and shoulder circles before every game.",
    meta: "All levels · 10 min",
  },
  {
    badge: "GEAR",
    badgeClass: "bg-[#1b4fd8] text-white",
    title: "Essential Gear by Level",
    description:
      "From beginner knee pads to advanced libero shoes — our honest picks.",
    meta: "All levels · guide",
  },
  {
    badge: "RULES & STRATEGY",
    badgeClass: "bg-[#16161d] text-white",
    title: "Intramural Rules Explained",
    description:
      "Rotation rules, scoring formats, and key strategies for intramural play.",
    meta: "All levels · guide",
  },
];

const filters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Gear() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Gear" />
      <PageHero
        subtitle="WARMUPS · GEAR PICKS · RULES & STRATEGY"
        title="Gear & Routines"
      />

      {/* Page Body */}
      <div className="bg-white flex flex-col gap-[40px] items-start px-[80px] py-[48px] w-full">
        {/* Level Filter Bar */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-[4px] items-start">
            <span className="text-[#1b4fd8] text-[11px] tracking-[2px]">
              PLAYER LEVEL
            </span>
            <h2 className="text-[#16161d] text-[32px] tracking-[-0.5px]">
              Gear &amp; Routines
            </h2>
          </div>
          <div className="flex gap-[8px] items-center">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`flex h-[40px] items-center justify-center px-[20px] rounded-[2px] text-[13px] text-center ${
                  i === 0
                    ? "bg-[#16161d] font-medium text-white"
                    : "border border-[#f0f0f0] text-[#666]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Gear Cards Grid */}
        <div className="flex gap-[20px] items-start w-full">
          {gearItems.map((item) => (
            <div
              key={item.title}
              className="border border-[#f0f0f0] flex flex-1 flex-col items-start min-w-0"
            >
              <div className="bg-[#ccc] h-[160px] w-full" />
              <div className="flex flex-col gap-[10px] items-start p-[20px] w-full">
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
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#888] text-[11px]">{item.meta}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="#1b4fd8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
