import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";

const kevinGear = [
  { item: "Mizuno Wave Lightning Z7", note: "Primary match shoe — lightweight, low-profile sole" },
  { item: "Mizuno LR6 Knee Pads", note: "Worn every session, low-profile cut for backcourt movement" },
  { item: "ASO Ankle Brace", note: "Right ankle support, lace-up, worn under sock" },
  { item: "Nike Dri-FIT Compression Shorts", note: "Base layer under athletic shorts" },
  { item: "Swiftwick Aspire Zero Socks", note: "No-show, snug fit, prevents heel slip in court shoes" },
  { item: "Mikasa MVA200 Ball", note: "Personal training ball — used for serve practice" },
 ];

const philosGear = [
  { item: "Way of Wade Shadow 6s", note: "Everyday match shoe — reliable grip on gym floors" },
  { item: "Jumplete Atakk Knee brace", note: "Full-coverage knee brace, Assistive knee flexion support" },
  { item: "Costco Champion Crew Socks", note: "Cushioned sole, keeps feet comfortable during play" },
  { item: "Molten V5M5000", note: "Used for regular drop ins and games" },
  { item: "Resistance Band (loop)", note: "Pre-game shoulder warm-up and rotator cuff activation" },

];

export default function Gear() {
  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Gear" />
      <PageHero
        subtitle="VOLLEYBALL GEAR · KEVIN LIN & PHILOS HIMM"
        title="Gear"
        bgImage="/images/gear-hero-bg.jpg"
      />

      <main className="flex-1 w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-0 w-full max-w-[1100px]">

          {/* Kevin column */}
          <div className="flex-1 min-w-0 lg:pr-12 pb-12 lg:pb-0">
            {/* Player header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
                <Image
                  src="/images/kevin-pfp.png"
                  alt="Kevin Lin"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-dark text-[15px] font-medium leading-tight">Kevin Lin</span>
                <span className="text-muted text-[11px]">Outside Hitter · Editor</span>
              </div>
            </div>

            {/* Gear list */}
            <div className="flex flex-col">
              {kevinGear.map((g, i) => (
                <div
                  key={g.item}
                  className={`flex flex-col gap-0.5 py-4 ${i > 0 ? "border-t border-border-light" : ""}`}
                >
                  <span className="text-dark text-[14px] font-medium">{g.item}</span>
                  <span className="text-muted text-[12px] leading-snug">{g.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-border-light self-stretch" />
          <div className="lg:hidden h-px w-full bg-border-light mb-12" />

          {/* Philos column */}
          <div className="flex-1 min-w-0 lg:pl-12">
            {/* Player header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
                <Image
                  src="/images/philos-pfp.JPG"
                  alt="Philos Himm"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-dark text-[15px] font-medium leading-tight">Philos Himm</span>
                <span className="text-muted text-[11px]">Outside Hitter · Camera Op</span>
              </div>
            </div>

            {/* Gear list */}
            <div className="flex flex-col">
              {philosGear.map((g, i) => (
                <div
                  key={g.item}
                  className={`flex flex-col gap-0.5 py-4 ${i > 0 ? "border-t border-border-light" : ""}`}
                >
                  <span className="text-dark text-[14px] font-medium">{g.item}</span>
                  <span className="text-muted text-[12px] leading-snug">{g.note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
