import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const creators = [
  {
    name: "Kevin Lin",
    role: "OUTSIDE HITTER · EDITOR",
    bio: "Playing since 16. Obsessed with passing mechanics and ball placement.",
    badge: "Since 2017",
    image: "/images/about-kevin.png",
    gear: [
      { label: "Shoes", value: "Asics Men's Metarise 2 'Paris" },
      { label: "Knee Pads", value: "HEX Leg Sleeves/Pair" },
      { label: "Ball", value: "Molten NCAA Volleyball" },
    ],
  },
  {
    name: "Philos Himm",
    role: "OUTSIDE HITTER · CAMERA OPERATOR",
    bio: "7 years rec and semi-competitive. Loves the energy of a good rally and the sound of a clean hit.",
    badge: "Since 2019",
    image: "/images/about-philos.png",
    gear: [
      { label: "Shoes", value: "Way of Wade Shadow 6s" },
      { label: "Knee Pads", value: "Jumplete Atakk Performance Knee" },
      { label: "Camera", value: "Sony a6700" },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="About" />
      <PageHero
        subtitle="TWO PLAYERS · ONE CAMERA · INTRAMURALS · LEAGUES · TOURNAMENTS"
        title="About"
        bgImage="/images/about-hero-bg.jpg"
      />

      {/* Page Body */}
      <main className="bg-white flex flex-col gap-10 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-10 md:py-14 w-full">
        {/* Mission Row */}
        <ScrollSection animation="fade-up" className="flex flex-col md:flex-row gap-10 md:gap-20 items-start w-full">
          {/* Left */}
          <div className="flex flex-1 flex-col gap-4 items-start min-w-0">
            <span className="font-medium text-primary text-[10px] tracking-[3px]" id="the-story">
              THE STORY
            </span>
            <div className="font-light text-dark text-[32px] md:text-[44px] tracking-[-2px] w-full line-clamp-2">
              <p className="mb-0">Real players.</p>
              <p>Real highlights.</p>
            </div>
            <p className="text-dark/60 text-[14px] leading-[1.7] w-full">
              We&apos;re not coaches. We&apos;re not pros. We&apos;re two players who love the
              game and show up to every intramural, league, and tournament match with a camera.
              All footage is recorded at real games and published as part of a collection —
              hitting highlights, game recaps, and clips from the court.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-5 items-start w-full md:w-[280px] shrink-0" role="list" aria-label="Key statistics">
            {[
              { value: "12", label: "GAMES FILMED" },
              { value: "9", label: "CONTENT FORMATS" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                className={`flex flex-col gap-1 items-start py-5 w-full ${i < 1 ? "border-b border-border-light" : ""
                  }`}
              >
                <span className="font-light text-dark text-[36px] md:text-[44px] tracking-[-2px]">
                  {stat.value}
                </span>
                <span className="font-medium text-muted text-[9px] tracking-[2px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollSection>

        {/* Creators Header */}
        <div className="flex items-center w-full">
          <span className="font-medium text-primary text-[10px] tracking-[3px]" id="the-creators">
            THE CREATORS
          </span>
        </div>

        {/* Creators Row */}
        <ScrollSection animation="fade-up" delay={150} className="flex flex-col md:flex-row gap-6 items-start w-full">
          {creators.map((creator, index) => (
            <article
              key={creator.name}
              className="border border-border flex flex-1 flex-col items-start min-w-0 rounded-[2px] w-full"
            >
              <div
                className="bg-dark/20 h-[320px] md:h-[400px] w-full bg-contain bg-center bg-no-repeat rounded-t-[2px]"
                style={{ backgroundImage: `url('${creator.image}')` }}
                role="img"
                aria-label={`Photo of ${creator.name}`}
              />
              <div className="flex flex-col gap-4 items-start p-5 md:p-7 w-full bg-white z-10">
                {/* Name + Badge */}
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="font-medium text-dark text-[20px] md:text-[22px] tracking-[-0.5px]">
                      {creator.name}
                    </h3>
                    <span className="text-muted text-[10px] tracking-[1px]">
                      {creator.role}
                    </span>
                  </div>
                  <div className="bg-dark flex items-center justify-center px-[10px] py-[4px] rounded-[2px]">
                    <span className="text-[11px] text-center text-white">
                      {creator.badge}
                    </span>
                  </div>
                </div>

                <p className="text-dark/60 text-[13px] leading-[1.6] w-full">
                  {creator.bio}
                </p>

                <span className="text-muted text-[10px] tracking-[1px]">
                  PERSONAL GEAR
                </span>

                {/* Gear Grid */}
                <dl className="flex flex-col gap-2 items-start w-full">
                  {creator.gear.map((g, i) => (
                    <div
                      key={g.label}
                      className={`flex items-start justify-between py-[10px] w-full ${i < creator.gear.length - 1
                        ? "border-b border-border-light"
                        : ""
                        }`}
                    >
                      <dt className="text-dark/60 text-[13px]">{g.label}</dt>
                      <dd className="text-dark text-[12px] font-medium">
                        {g.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </ScrollSection>

        {/* Gallery CTA */}
        <ScrollSection animation="fade-up" delay={200} className="bg-dark flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-12 w-full rounded-[2px] gap-6">
          <div className="flex flex-col gap-2 items-start">
            <span className="font-medium text-primary text-[10px] tracking-[3px]">
              NEW COLLECTION DROPS
            </span>
            <h3 className="font-light text-[26px] md:text-[30px] text-white tracking-[-1px]">
              Join the Side-Out community
            </h3>
            <p className="text-white/60 text-[14px]">
              Game-day highlights, gear used, and match history — straight to your inbox.
            </p>
          </div>
          <Link href="/coming-soon" className="bg-primary flex gap-[10px] h-[44px] items-center px-7 rounded-[4px] cursor-pointer hover:bg-primary-hover transition-all duration-200 hover:shadow-lg active:scale-95 shrink-0">
            <span className="font-medium text-[14px] text-white">Subscribe</span>
            <ArrowRight size={16} className="text-white" aria-hidden="true" />
          </Link>
        </ScrollSection>
      </main>

      <Footer />
    </div>
  );
}
