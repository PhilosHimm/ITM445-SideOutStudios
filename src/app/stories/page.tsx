import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function Stories() {
  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Stories" />
      <PageHero subtitle="MULTI-ANGLE · POLLS · AUDIO" title="Side-Out Stories" />

      {/* Page Body */}
      <div className="bg-white flex gap-[24px] items-start px-[80px] py-[48px] w-full">
        {/* Main Column */}
        <div className="flex flex-1 flex-col gap-[24px] items-start min-w-0">
          {/* Episode Nav */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-[4px] items-start">
              <span className="text-[#1b4fd8] text-[11px] tracking-[1px]">
                NOW WATCHING
              </span>
              <h2 className="font-medium text-[#16161d] text-[22px] tracking-[-0.5px]">
                Game 3 — Rally Breakdown
              </h2>
            </div>
            <div className="bg-[#1b4fd8] flex gap-[8px] h-[36px] items-center px-[16px] rounded-[2px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 2L12 7L4 12V2Z" fill="white" />
              </svg>
              <span className="text-[12px] text-white">5 min</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-[#16161d] h-[480px] overflow-clip relative rounded-[2px] w-full">
            <div className="absolute bg-[#ccc] h-[480px] left-0 top-0 w-full" />
            <div className="absolute bg-[rgba(22,22,29,0.33)] h-[480px] left-0 top-0 w-full" />

            {/* Top Bar */}
            <div className="absolute bg-[rgba(22,22,29,0.6)] flex h-[52px] items-center justify-between left-0 px-[20px] top-0 w-full">
              {/* Angle Switcher */}
              <div className="flex gap-[4px] items-center">
                <button className="bg-white flex h-[28px] items-center justify-center px-[12px] rounded-[2px]">
                  <span className="text-[#16161d] text-[12px] text-center">Wide</span>
                </button>
                <button className="flex h-[28px] items-center px-[12px] rounded-[2px]">
                  <span className="text-[#888] text-[12px]">Close-up</span>
                </button>
                <button className="flex h-[28px] items-center px-[12px] rounded-[2px]">
                  <span className="text-[#888] text-[12px]">POV</span>
                </button>
              </div>

              {/* Play Button */}
              <div className="bg-[#1b4fd8] flex items-center justify-center rounded-[2px] size-[40px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6 3L15 9L6 15V3Z" fill="white" />
                </svg>
              </div>

              {/* POV Switcher */}
              <div className="flex gap-[6px] items-center">
                <span className="font-medium text-[#aaa] text-[10px] tracking-[2px]">POV</span>
                <button className="bg-[#1b4fd8] flex h-[28px] items-center justify-center px-[12px] rounded-[2px]">
                  <span className="font-medium text-[12px] text-center text-white">Person A</span>
                </button>
                <button className="bg-[rgba(255,255,255,0.1)] flex h-[28px] items-center justify-center px-[12px] rounded-[2px]">
                  <span className="text-[#888] text-[12px] text-center">Person B</span>
                </button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bg-[rgba(22,22,29,0.6)] flex flex-col gap-[8px] items-start left-0 px-[20px] py-[12px] bottom-0 w-full">
              {/* Progress Bar */}
              <div className="bg-[#666] flex h-[3px] items-start rounded-[2px] w-full">
                <div className="bg-[#1b4fd8] h-full rounded-[2px] w-[38%]" />
                <div className="bg-white rounded-full size-[10px] -mt-[3.5px]" />
              </div>
              <div className="flex items-start justify-between text-[#888] text-[11px] w-full">
                <span>18:22</span>
                <span>45:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-[20px] items-start w-[280px] shrink-0">
          {/* Viewer Poll Card */}
          <div className="border border-[#f0f0f0] flex flex-col gap-[14px] items-start p-[20px] rounded-[2px] w-full">
            <span className="text-[#1b4fd8] text-[10px] tracking-[1px]">VIEWER POLL</span>
            <p className="font-medium text-[#16161d] text-[14px] w-full">
              What was the turning point of Game 3?
            </p>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="bg-[#16161d] flex h-[36px] items-center justify-between px-[12px] rounded-[2px] text-white w-full">
                <span className="text-[13px]">Set 2 timeout</span>
                <span className="text-[12px]">54%</span>
              </div>
              <div className="border border-[#f0f0f0] flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full">
                <span className="text-[#666] text-[13px]">Final rally</span>
                <span className="text-[#888] text-[12px]">31%</span>
              </div>
              <div className="border border-[#f0f0f0] flex h-[36px] items-center justify-between px-[12px] rounded-[2px] w-full">
                <span className="text-[#666] text-[13px]">Rotation switch</span>
                <span className="text-[#888] text-[12px]">15%</span>
              </div>
            </div>
          </div>

          {/* Audio Only Card */}
          <div className="border border-[#f0f0f0] flex flex-col gap-[16px] items-start p-[20px] rounded-[2px] w-full">
            <span className="text-[#888] text-[10px] tracking-[1px]">AUDIO ONLY</span>
            <p className="font-medium text-[#16161d] text-[14px]">
              Game 3 — Rally Breakdown
            </p>
            {/* Audio Progress */}
            <div className="bg-[#f0f0f0] h-[3px] relative rounded-[2px] w-full">
              <div className="absolute bg-[#16161d] h-[3px] left-0 rounded-[2px] top-0 w-[90px]" />
            </div>
            {/* Audio Controls */}
            <div className="flex gap-[12px] items-center w-full">
              <button className="border border-[#f0f0f0] rounded-[2px] size-[32px] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10 3L4 7L10 11V3Z" fill="#666" />
                  <line x1="3" y1="3" x2="3" y2="11" stroke="#666" strokeWidth="1.5" />
                </svg>
              </button>
              <button className="bg-[#16161d] flex items-center justify-center rounded-[2px] size-[32px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2L12 7L4 12V2Z" fill="white" />
                </svg>
              </button>
              <button className="border border-[#f0f0f0] rounded-[2px] size-[32px] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 3L10 7L4 11V3Z" fill="#666" />
                  <line x1="11" y1="3" x2="11" y2="11" stroke="#666" strokeWidth="1.5" />
                </svg>
              </button>
              <span className="text-[#888] text-[11px]">18:22 / 45:00</span>
            </div>
          </div>

          {/* Comment Card */}
          <div className="border border-[#f0f0f0] flex flex-col gap-[12px] items-start overflow-clip p-[20px] rounded-[2px] w-full">
            <span className="font-medium text-[#1b4fd8] text-[10px] w-full">YOUR TAKE</span>
            <p className="font-medium text-[#17171c] text-[14px] w-full">
              What would you have done on this play?
            </p>
            <textarea
              className="bg-[#f7f7f7] border border-[#e0e0e0] flex flex-col h-[72px] items-start overflow-clip px-[12px] py-[10px] rounded-[4px] w-full text-[12px] placeholder:text-[#999] resize-none"
              placeholder="Type your response…"
            />
            <button className="bg-[#1b4fd8] flex h-[32px] items-center justify-center overflow-clip rounded-[4px] w-full">
              <span className="font-medium text-[12px] text-white">Submit</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
