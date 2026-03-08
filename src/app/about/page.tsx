import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const creators = [
  {
    name: "Kevin Lin",
    role: "OUTSIDE HITTER · EDITOR",
    bio: "Club level since 15. Obsessed with passing mechanics and hand positioning.",
    gear: [
      { label: "Shoes", value: "Mizuno Wave Lightning Z7" },
      { label: "Knee Pads", value: "Mizuno LR6" },
      { label: "Ball", value: "Mikasa V200W" },
    ],
  },
  {
    name: "Philos Himm",
    role: "OUTSIDE HITTER · CAMERA OPERATOR",
    bio: "7 years rec and semi-competitive. Serves chaos, edits the footage, and has a 3 inch vert",
    gear: [
      { label: "Shoes", value: "Way of Wade Shadow 6s" },
      { label: "Knee Pads", value: "Jumplete Atakk Performance Knee" },
      { label: "Camera", value: "Sony a6700 + 18-135mm Kit Lens" },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="About" />
      <PageHero
        subtitle="TWO PLAYERS · ONE CAMERA · INTRAMURAL GAMES"
        title="About"
      />

      {/* Page Body */}
      <div className="bg-white flex flex-col gap-[48px] items-start px-[80px] py-[56px] w-full">
        {/* Mission Row */}
        <div className="flex gap-[80px] items-start w-full">
          {/* Left */}
          <div className="flex flex-1 flex-col gap-[16px] items-start min-w-0">
            <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
              THE STORY
            </span>
            <div className="font-light text-[#16161d] text-[44px] tracking-[-2px] w-full">
              <p className="mb-0">Volleyball,</p>
              <p>Clips and content.</p>
            </div>
            <p className="text-[#666] text-[14px] leading-[1.7] w-full">
              We&apos;re not coaches. We&apos;re not pros. We&apos;re two players who love the
              game and hitting balls. Side-Out is what happens when you point a
              camera at a volleyball court and just hit record.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-[20px] items-start w-[280px] shrink-0">
            {[
              { value: "12", label: "MATCHES COVERED" },
              { value: "20+", label: "POINTS SCORED" },
              { value: "2019", label: "PLAYING SINCE" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-[4px] items-start py-[20px] w-full ${
                  i < 2 ? "border-b border-[#f0f0f0]" : ""
                }`}
              >
                <span className="font-light text-[#16161d] text-[44px] tracking-[-2px]">
                  {stat.value}
                </span>
                <span className="font-medium text-[#888] text-[9px] tracking-[2px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Creators Header */}
        <div className="flex items-center w-full">
          <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
            THE CREATORS
          </span>
        </div>

        {/* Creators Row */}
        <div className="flex gap-[24px] items-start w-full">
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="border border-[#f0f0f0] flex flex-1 flex-col items-start min-w-0"
            >
              <div className="bg-[#ccc] h-[240px] w-full" />
              <div className="flex flex-col gap-[16px] items-start p-[28px] w-full">
                {/* Name + Badge */}
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-[4px] items-start">
                    <h3 className="font-medium text-[#16161d] text-[22px] tracking-[-0.5px]">
                      {creator.name}
                    </h3>
                    <span className="text-[#888] text-[10px] tracking-[1px]">
                      {creator.role}
                    </span>
                  </div>
                  <div className="bg-[#16161d] flex items-center justify-center px-[10px] py-[4px] rounded-[2px]">
                    <span className="text-[11px] text-center text-white">
                      Since 2019
                    </span>
                  </div>
                </div>

                <p className="text-[#666] text-[13px] leading-[1.6] w-full">
                  {creator.bio}
                </p>

                <span className="text-[#888] text-[10px] tracking-[1px]">
                  PERSONAL GEAR
                </span>

                {/* Gear Grid */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {creator.gear.map((g, i) => (
                    <div
                      key={g.label}
                      className={`flex items-start justify-between py-[10px] w-full ${
                        i < creator.gear.length - 1
                          ? "border-b border-[#f0f0f0]"
                          : ""
                      }`}
                    >
                      <span className="text-[#666] text-[13px]">{g.label}</span>
                      <span className="text-[#16161d] text-[12px]">
                        {g.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Banner */}
        <div className="bg-[#16161d] flex items-center justify-between px-[64px] py-[48px] w-full">
          <div className="flex flex-col gap-[8px] items-start">
            <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[3px]">
              NEW MATCH COVERAGE
            </span>
            <h3 className="font-light text-[30px] text-white tracking-[-1px]">
              Join the Side-Out community
            </h3>
            <p className="text-[#888] text-[14px]">
              Match recaps, gear updates and behind-the-scenes — straight to your
              inbox.
            </p>
          </div>
          <button className="bg-[#1b4fd8] flex gap-[10px] h-[44px] items-center px-[28px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4L8 9L14 4M2 4V12H14V4M2 4H14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-[14px] text-white">Subscribe</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
