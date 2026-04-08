"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Story } from "@/lib/stories";

interface Props {
  highlights: Story["highlights"];
  perspective: "kevin" | "philos";
}

export default function HighlightsReel({ highlights, perspective }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const filtered = highlights.filter((h) => h.player === perspective);
    if (filtered.length > 0) setActiveId(filtered[0].id);
  }, [perspective, highlights]);

  const filtered = highlights.filter((h) => h.player === perspective);
  const activeClip = filtered.find((h) => h.id === activeId) ?? filtered[0];

  const otherPlayer = perspective === "kevin" ? "philos" : "kevin";
  const otherHasClips = highlights.some((h) => h.player === otherPlayer);

  if (!activeClip) return null;

  const badgeClasses = (clipType: string) => {
    if (clipType === "hit") return "bg-primary text-white";
    if (clipType === "pass" || clipType === "serve-receive") return "bg-dark text-white";
    return "border border-dark/40 text-dark bg-white";
  };

  const playerName = perspective === "kevin" ? "Kevin Lin" : "Philos Himm";

  return (
    <div className="flex flex-col gap-4">
      {/* A. Active player label */}
      <div className="flex items-center gap-2">
        {perspective === "philos" ? (
          <div className="size-6 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
            <Image
              src="/images/philos-pfp.JPG"
              alt="Philos Himm"
              width={24}
              height={24}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="size-6 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
            <Image
              src="/images/kevin-pfp.png"
              alt="Kevin Lin"
              width={24}
              height={24}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <span className="text-[11px] text-muted tracking-[1px] font-medium">
          {playerName}&rsquo;s clips &middot; {filtered.length} clip{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* B. Active video player */}
      <div>
        {activeClip.videoSrc.includes("youtube.com/embed") ? (
          <div className="relative w-full bg-dark aspect-video rounded-t-[4px] overflow-hidden">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={activeClip.videoSrc}
              title={activeClip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            key={activeClip.videoSrc}
            src={activeClip.videoSrc}
            poster={activeClip.thumbnail}
            controls
            playsInline
            className="w-full bg-dark aspect-video rounded-t-[4px]"
          />
        )}
        <div className="bg-dark/5 border border-t-0 border-border-light rounded-b-[4px] px-5 py-3">
          <p className="text-dark/70 text-[13px] leading-relaxed italic">
            <span className="not-italic text-[9px] font-medium border border-dark/30 text-dark/60 px-2 py-[1px] rounded-[2px] mr-2 inline-block align-middle uppercase">
              {activeClip.gameRef}
            </span>
            {activeClip.annotation}
          </p>
        </div>
      </div>

      {/* C. Scrollable thumbnail strip */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3" style={{ minWidth: "max-content" }}>
          {filtered.map((clip) => {
            const isActive = clip.id === activeId;
            return (
              <button
                key={clip.id}
                onClick={() => setActiveId(clip.id)}
                className={`w-[176px] flex-shrink-0 border rounded-[4px] overflow-hidden cursor-pointer text-left transition-all duration-200 ${
                  isActive
                    ? "border-primary border-[1.5px]"
                    : "border-border-light hover:border-[#aaa]"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-[99px] bg-dark overflow-hidden">
                  <img
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Badges overlay */}
                  <div className="absolute top-1.5 left-1.5">
                    <span
                      className={`text-[9px] font-medium px-1.5 py-[2px] rounded-[2px] ${badgeClasses(clip.clipType)}`}
                    >
                      {clip.label}
                    </span>
                  </div>
                  <div className="absolute top-1.5 right-1.5">
                    <span className="text-[9px] font-medium bg-black/50 text-white px-1.5 py-[2px] rounded-[2px]">
                      {clip.gameRef}
                    </span>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5">
                    <span className="text-[9px] font-medium bg-black/60 text-white px-1.5 py-[2px] rounded-[2px]">
                      {clip.duration}
                    </span>
                  </div>
                  {/* Play overlay (only when not active) */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-8 h-8 rounded-full border border-white/50 bg-white/10 flex items-center justify-center">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                          <path d="M0 0L10 6L0 12V0Z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                {/* Card text */}
                <div className="px-2.5 py-2 bg-white flex flex-col gap-0.5">
                  <span className="text-[12px] font-medium text-dark truncate block">
                    {clip.title}
                  </span>
                  <span className="text-[11px] text-muted line-clamp-2 leading-snug">
                    {clip.annotation}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* D. Clip count footer */}
      <div className="text-right">
        <span className="text-[11px] text-muted">
          {filtered.length} of {highlights.length} clips shown
          {otherHasClips && (
            <> &middot; Switch perspective to see {otherPlayer === "kevin" ? "Kevin" : "Philos"}&apos;s clips</>
          )}
        </span>
      </div>
    </div>
  );
}
