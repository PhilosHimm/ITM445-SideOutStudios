import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { Play, SkipBack, SkipForward, Check } from "lucide-react";

export default function Stories() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Stories" />
      <PageHero subtitle="MULTI-ANGLE · POLLS · AUDIO" title="Side-Out Stories" />

      {/* Page Body */}
      <div className="bg-white flex flex-col lg:flex-row gap-6 items-start px-6 md:px-16 lg:px-20 py-10 md:py-12 w-full">
        {/* Main Column */}
        <ScrollSection as="section" animation="fade-up" className="flex flex-1 flex-col gap-6 items-start min-w-0">
          {/* Episode Nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[#1b4fd8] text-[11px] tracking-[1px] font-medium">
                NOW WATCHING
              </span>
              <h2 className="font-medium text-[#16161d] text-[22px] tracking-[-0.5px]">
                Game 3 — Rally Breakdown
              </h2>
            </div>
            <div className="bg-[#1b4fd8] flex gap-2 h-9 items-center px-4 rounded-[2px]">
              <Play size={14} className="text-white fill-white" aria-hidden="true" />
              <span className="font-medium text-[12px] text-white">5 min</span>
            </div>
          </div>

          {/* Video Player */}
          <div
            className="bg-[#16161d] h-[280px] sm:h-[380px] md:h-[480px] overflow-clip relative rounded-[2px] w-full shadow-lg group cursor-pointer"
            role="region"
            aria-label="Video player: Game 3 Rally Breakdown"
          >
            <div
              className="absolute bg-cover bg-center h-full left-0 top-0 w-full group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop')" }}
              role="img"
              aria-label="Game 3 rally action"
            />
            <div className="absolute bg-[rgba(22,22,29,0.33)] h-full left-0 top-0 w-full" aria-hidden="true" />

            {/* Top Bar */}
            <div className="absolute bg-[rgba(22,22,29,0.6)] flex h-[52px] items-center justify-between left-0 px-5 top-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Angle Switcher */}
              <div className="flex gap-1 items-center" role="tablist" aria-label="Camera angle">
                <button role="tab" aria-selected="true" className="bg-white flex h-7 items-center justify-center px-3 rounded-[2px] hover:bg-gray-100 transition-colors duration-200">
                  <span className="font-medium text-[#16161d] text-[12px]">Wide</span>
                </button>
                <button role="tab" aria-selected="false" className="flex h-7 items-center px-3 rounded-[2px] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200">
                  <span className="text-[#eee] text-[12px]">Close-up</span>
                </button>
                <button role="tab" aria-selected="false" className="flex h-7 items-center px-3 rounded-[2px] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200">
                  <span className="text-[#eee] text-[12px]">POV</span>
                </button>
              </div>

              {/* Play Button */}
              <button aria-label="Play video" className="bg-[#1b4fd8] flex items-center justify-center rounded-[2px] size-10 hover:bg-[#1546b3] transition-colors duration-200 hover:scale-105 active:scale-95">
                <Play size={18} className="text-white fill-white ml-1" />
              </button>

              {/* POV Switcher */}
              <div className="hidden sm:flex gap-[6px] items-center" role="tablist" aria-label="Player POV">
                <span className="font-medium text-[#aaa] text-[10px] tracking-[2px]">POV</span>
                <button role="tab" aria-selected="true" className="bg-[#1b4fd8] flex h-7 items-center justify-center px-3 rounded-[2px] hover:bg-[#1546b3] transition-colors duration-200">
                  <span className="font-medium text-[12px] text-white">Person A</span>
                </button>
                <button role="tab" aria-selected="false" className="bg-[rgba(255,255,255,0.1)] flex h-7 items-center justify-center px-3 rounded-[2px] hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
                  <span className="text-[#eee] text-[12px]">Person B</span>
                </button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bg-gradient-to-t from-[rgba(22,22,29,0.8)] to-transparent flex flex-col justify-end left-0 px-5 pb-4 h-20 bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-2 w-full">
                {/* Progress Bar */}
                <div
                  className="bg-[rgba(255,255,255,0.3)] flex h-1 items-center rounded-full w-full cursor-pointer hover:h-[6px] transition-all duration-200"
                  role="slider"
                  aria-label="Video progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={38}
                  tabIndex={0}
                >
                  <div className="bg-[#1b4fd8] h-full rounded-l-full w-[38%] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full size-3 shadow shadow-black/50" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[#ccc] font-medium text-[11px] w-full">
                  <span>18:22</span>
                  <span>45:00</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Sidebar */}
        <ScrollSection as="aside" animation="fade-left" className="flex flex-col gap-5 items-start w-full lg:w-[280px] shrink-0">
          {/* Viewer Poll Card */}
          <div className="border border-[#f0f0f0] flex flex-col gap-[14px] items-start p-5 rounded-[2px] w-full bg-white shadow-sm" role="group" aria-labelledby="poll-heading">
            <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[1px]" id="poll-heading">VIEWER POLL</span>
            <p className="font-medium text-[#16161d] text-[14px] w-full">
              What was the turning point of Game 3?
            </p>
            <div className="flex flex-col gap-2 items-start w-full" role="group" aria-label="Poll options">
              <button className="bg-[#16161d] flex h-9 items-center justify-between px-3 rounded-[2px] text-white w-full transition-transform duration-200 hover:-translate-y-px shadow-sm">
                <span className="font-medium text-[13px] flex items-center gap-2">
                  <Check size={14} className="text-white" aria-hidden="true" />
                  Set 2 timeout
                </span>
                <span className="text-[12px]">54%</span>
              </button>
              <button className="border border-[#f0f0f0] flex h-9 items-center justify-between px-3 rounded-[2px] w-full hover:border-[#16161d] hover:bg-[#f7f7f7] transition-all duration-200 group">
                <span className="text-[#666] group-hover:text-[#16161d] text-[13px] font-medium transition-colors">Final rally</span>
                <span className="text-[#888] text-[12px]">31%</span>
              </button>
              <button className="border border-[#f0f0f0] flex h-9 items-center justify-between px-3 rounded-[2px] w-full hover:border-[#16161d] hover:bg-[#f7f7f7] transition-all duration-200 group">
                <span className="text-[#666] group-hover:text-[#16161d] text-[13px] font-medium transition-colors">Rotation switch</span>
                <span className="text-[#888] text-[12px]">15%</span>
              </button>
            </div>
          </div>

          {/* Audio Only Card */}
          <div className="border border-[#f0f0f0] flex flex-col gap-4 items-start p-5 rounded-[2px] w-full bg-white shadow-sm" role="region" aria-label="Audio player">
            <span className="font-medium text-[#888] text-[10px] tracking-[1px]">AUDIO ONLY</span>
            <p className="font-medium text-[#16161d] text-[14px]">
              Game 3 — Rally Breakdown
            </p>
            {/* Audio Progress */}
            <div
              className="bg-[#f0f0f0] h-1 relative rounded-full w-full cursor-pointer hover:h-[6px] transition-all duration-200"
              role="slider"
              aria-label="Audio progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={40}
              tabIndex={0}
            >
              <div className="absolute bg-[#16161d] h-full left-0 rounded-full top-0 w-[40%]" />
            </div>
            {/* Audio Controls */}
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <button aria-label="Previous track" className="border border-[#f0f0f0] rounded-[2px] size-8 flex items-center justify-center hover:bg-[#f7f7f7] transition-colors duration-200 text-[#666]">
                  <SkipBack size={14} className="fill-current" />
                </button>
                <button aria-label="Play audio" className="bg-[#16161d] flex items-center justify-center rounded-[2px] size-8 hover:bg-black transition-transform duration-200 hover:scale-105 active:scale-95 text-white">
                  <Play size={14} className="fill-white" />
                </button>
                <button aria-label="Next track" className="border border-[#f0f0f0] rounded-[2px] size-8 flex items-center justify-center hover:bg-[#f7f7f7] transition-colors duration-200 text-[#666]">
                  <SkipForward size={14} className="fill-current" />
                </button>
              </div>
              <span className="font-medium text-[#888] text-[11px]">18:22 / 45:00</span>
            </div>
          </div>

          {/* Comment Card */}
          <div className="border border-[#e0e0e0] flex flex-col gap-3 items-start overflow-clip p-5 rounded-[2px] w-full bg-[#fafafa]">
            <span className="font-medium text-[#1b4fd8] text-[10px] tracking-[1px] w-full">YOUR TAKE</span>
            <p className="font-medium text-[#17171c] text-[14px] w-full">
              What would you have done on this play?
            </p>
            <label htmlFor="user-comment" className="sr-only">Your response</label>
            <textarea
              id="user-comment"
              className="bg-white border border-[#d0d0d0] flex flex-col h-20 items-start px-3 py-[10px] rounded-[4px] w-full text-[13px] text-[#16161d] placeholder:text-[#999] resize-none focus:outline-none focus:border-[#1b4fd8] focus:ring-1 focus:ring-[#1b4fd8] transition-all duration-200"
              placeholder="Type your response…"
            />
            <button className="bg-[#1b4fd8] flex h-9 items-center justify-center rounded-[4px] w-full hover:bg-[#1546b3] transition-all duration-200 hover:shadow-md active:scale-[0.98]">
              <span className="font-medium text-[13px] text-white">Submit</span>
            </button>
          </div>
        </ScrollSection>
      </div>

      <Footer />
    </div>
  );
}
