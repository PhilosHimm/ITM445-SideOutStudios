"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Play, Pause, Volume2, Check } from "lucide-react";
import { highlights, clipTypeMeta } from "@/lib/highlights";
import type { Highlight } from "@/lib/highlights";

export default function Stories() {
  const [activeFilter, setActiveFilter] = useState<"all" | Highlight["clipType"]>("all");
  const [activePlayer, setActivePlayer] = useState<"all" | "kevin" | "philos">("all");
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [pollVoted, setPollVoted] = useState(false);
  const [pollOption, setPollOption] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const filtered = highlights.filter(
    (h) =>
      (activeFilter === "all" || h.clipType === activeFilter) &&
      (activePlayer === "all" || h.player === activePlayer)
  );

  const defaultClip =
    highlights.find((h) => h.featured) ?? highlights[0];
  const focusedClip = focusedId
    ? highlights.find((h) => h.id === focusedId) ?? defaultClip
    : defaultClip;

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const filterButtonBase =
    "text-[11px] font-medium px-3 h-8 rounded-[2px] transition-all duration-150 cursor-pointer";
  const filterButtonRest =
    "border border-border-light text-dark hover:border-dark/40";

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar activePage="Highlights" />

      <PageHero
        subtitle="CAREER HIGHLIGHTS · KILLS · DIGS · SERVE RECEIVE"
        title="Highlights"
        bgImage="/images/stories-hero-bg.jpg"
      />

      {/* Filter bar */}
      <div className="border-b border-border-light px-6 md:px-16 py-4">
        <div className="flex flex-wrap gap-6 items-center">
          {/* Clip type pills */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-muted text-[10px] tracking-[2px] font-medium mr-1">
              TYPE
            </span>
            {(
              [
                { key: "all", display: "All" },
                { key: "hit", display: "HIT" },
                { key: "pass", display: "PASS" },
                { key: "serve-receive", display: "SERVE RX" },
                { key: "block", display: "BLOCK" },
              ] as const
            ).map(({ key, display }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`${filterButtonBase} ${
                  activeFilter === key
                    ? "bg-dark text-white border-transparent"
                    : filterButtonRest
                }`}
              >
                {display}
              </button>
            ))}
          </div>

          {/* Player pills */}
          <div className="flex items-center flex-wrap gap-2 ml-auto">
            <span className="text-muted text-[10px] tracking-[2px] font-medium mr-1">
              PLAYER
            </span>
            {(
              [
                { key: "all", display: "Both" },
                { key: "kevin", display: "Kevin" },
                { key: "philos", display: "Philos" },
              ] as const
            ).map(({ key, display }) => (
              <button
                key={key}
                onClick={() => setActivePlayer(key)}
                className={`${filterButtonBase} ${
                  activePlayer === key
                    ? "bg-primary text-white border-transparent"
                    : filterButtonRest
                }`}
              >
                {display}
              </button>
            ))}
          </div>

          {/* Result count */}
          {(activeFilter !== "all" || activePlayer !== "all") && (
            <span className="text-muted text-[12px] w-full mt-1">
              {filtered.length} clips
              {activeFilter !== "all" && ` · ${activeFilter.toUpperCase()}`}
              {activePlayer !== "all" &&
                ` · ${activePlayer === "kevin" ? "Kevin Lin" : "Philos Himm"}`}
            </span>
          )}
        </div>
      </div>

      {/* Page body */}
      <div className="flex flex-col lg:flex-row flex-1 items-start w-full">
        {/* Left — hero player + clip grid */}
        <div className="flex-1 min-w-0 px-6 md:px-10 lg:px-12 py-8 flex flex-col gap-8">
          {/* A. Hero player */}
          <section className="flex flex-col gap-0">
            <div className="relative">
              <video
                key={focusedClip.videoSrc}
                src={focusedClip.videoSrc}
                poster={focusedClip.thumbnail}
                controls
                playsInline
                className="w-full bg-dark aspect-video rounded-t-[4px] shadow-lg"
              />
              {/* Player attribution badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-dark/70 px-3 py-1.5 rounded-[3px]">
                <div className="size-5 rounded-full bg-primary flex items-center justify-center text-[9px] font-bold text-white">
                  {focusedClip.player === "kevin" ? "KL" : "PH"}
                </div>
                <span className="text-white text-[11px] font-medium">
                  {focusedClip.player === "kevin" ? "Kevin Lin" : "Philos Himm"}
                </span>
              </div>
            </div>
            {/* Annotation bar */}
            <div className="bg-dark/5 border border-t-0 border-border-light rounded-b-[4px] px-5 py-3 flex items-start gap-3">
              <span
                className={`text-[9px] font-medium px-2 py-[2px] rounded-[2px] shrink-0 mt-[1px] ${
                  clipTypeMeta[focusedClip.clipType].badgeClass
                }`}
              >
                {focusedClip.label}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-dark text-[13px] font-medium">
                  {focusedClip.title}
                </span>
                <span className="text-dark/60 text-[12px] italic leading-snug">
                  {focusedClip.annotation}
                </span>
              </div>
              <span className="ml-auto text-muted text-[11px] shrink-0">
                {focusedClip.gameContext}
              </span>
            </div>
          </section>

          {/* B. Clip grid */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-muted text-[11px] tracking-[3px] font-medium">
                ALL CLIPS
              </span>
              <span className="text-muted text-[11px]">
                {filtered.length} results
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.length === 0 ? (
                <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center">
                  <span className="text-muted text-[13px]">
                    No clips match this filter combination.
                  </span>
                  <button
                    onClick={() => {
                      setActiveFilter("all");
                      setActivePlayer("all");
                    }}
                    className="text-primary text-[12px] underline cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((clip) => (
                  <button
                    key={clip.id}
                    onClick={() => setFocusedId(clip.id)}
                    className={`flex flex-col items-start border rounded-[4px] overflow-hidden text-left w-full transition-all duration-200 group cursor-pointer ${
                      focusedId === clip.id ||
                      (!focusedId && clip.id === defaultClip.id)
                        ? "border-primary border-[1.5px] shadow-md"
                        : "border-border-light hover:border-[#aaa] hover:-translate-y-0.5 hover:shadow-sm"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-video bg-dark overflow-hidden">
                      <img
                        src={clip.thumbnail}
                        alt={clip.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-200"
                      />
                      {/* Play / active overlay */}
                      {focusedId === clip.id ||
                      (!focusedId && clip.id === defaultClip.id) ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                            <Play
                              size={14}
                              className="text-white fill-white ml-0.5"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full border-[1.5px] border-white/60 bg-black/30 flex items-center justify-center">
                            <Play
                              size={14}
                              className="text-white fill-white ml-0.5"
                            />
                          </div>
                        </div>
                      )}
                      {/* Type badge */}
                      <span
                        className={`absolute top-2 left-2 text-[9px] font-medium px-[6px] py-[2px] rounded-[2px] ${
                          clipTypeMeta[clip.clipType].badgeClass
                        }`}
                      >
                        {clip.label}
                      </span>
                      {/* Duration */}
                      <span className="absolute bottom-2 right-2 text-[9px] bg-black/70 text-white px-1.5 py-[1px] rounded-[2px]">
                        {clip.duration}
                      </span>
                    </div>
                    {/* Card info */}
                    <div className="px-3 py-2.5 flex flex-col gap-0.5 w-full">
                      <span className="text-[12px] font-medium text-dark truncate">
                        {clip.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted">
                          {clip.player === "kevin" ? "Kevin Lin" : "Philos Himm"}
                        </span>
                        <span className="text-border-light">·</span>
                        <span className="text-[10px] text-muted">
                          {clip.gameContext}
                        </span>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Right — sidebar panel */}
        <aside className="w-full lg:w-[300px] shrink-0 border-t lg:border-t-0 lg:border-l border-border-light px-6 py-8 flex flex-col gap-8">
          {/* A. Career stats */}
          <section className="flex flex-col gap-3">
            <span className="text-muted text-[11px] tracking-[3px] font-medium">
              CAREER STATS
            </span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Total Clips", value: highlights.length },
                {
                  label: "Kevin Clips",
                  value: highlights.filter((h) => h.player === "kevin").length,
                },
                {
                  label: "Philos Clips",
                  value: highlights.filter((h) => h.player === "philos").length,
                },
                { label: "Clip Types", value: 4 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-border-light rounded-[4px] p-3 flex flex-col gap-0.5"
                >
                  <span className="text-dark text-[22px] font-light tracking-[-0.5px]">
                    {stat.value}
                  </span>
                  <span className="text-muted text-[10px] tracking-[1px] font-medium">
                    {stat.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            {/* Clip type breakdown bar */}
            <div className="flex flex-col gap-1.5 mt-1">
              <span className="text-muted text-[10px] tracking-[1px] font-medium">
                BREAKDOWN
              </span>
              {(
                ["hit", "pass", "serve-receive", "block"] as const
              ).map((type) => {
                const count = highlights.filter(
                  (h) => h.clipType === type
                ).length;
                const pct = Math.round((count / highlights.length) * 100);
                return (
                  <div key={type} className="flex items-center gap-2">
                    <span className="text-[10px] text-muted w-[58px] shrink-0">
                      {clipTypeMeta[type].label}
                    </span>
                    <div className="flex-1 bg-border-light h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted w-6 text-right">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* B. Audio player */}
          <section className="flex flex-col gap-3">
            <span className="text-muted text-[11px] tracking-[3px] font-medium">
              POST-GAME AUDIO
            </span>
            <div className="border border-border-light rounded-[4px] p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-dark text-[13px] font-medium">
                  Season Debrief
                </span>
                <span className="text-muted text-[11px]">
                  Kevin &amp; Philos · Recorded post-match
                </span>
              </div>
              <audio
                ref={audioRef}
                src="/audio/season-debrief.mp3"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="flex flex-col gap-2">
                {/* Progress bar */}
                <div className="bg-border-light h-1 w-full rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-150"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>
                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleAudio}
                    className="w-9 h-9 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause size={14} className="text-white" />
                    ) : (
                      <Play size={14} className="text-white fill-white ml-0.5" />
                    )}
                  </button>
                  <Volume2 size={14} className="text-muted" />
                  <span className="text-muted text-[11px] ml-auto">
                    {isPlaying ? "Playing..." : "Tap to play"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* C. Viewer poll */}
          <section className="flex flex-col gap-3">
            <span className="text-muted text-[11px] tracking-[3px] font-medium">
              VIEWER POLL
            </span>
            <div className="border border-border-light rounded-[4px] p-4 flex flex-col gap-3">
              <p className="text-dark text-[13px] font-medium leading-snug">
                Which clip type do you want to see more of?
              </p>
              {[
                { id: 1, text: "More kills / hitting clips" },
                { id: 2, text: "More defensive digs" },
                { id: 3, text: "Serve receive breakdowns" },
                { id: 4, text: "Full rally sequences" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (!pollVoted) {
                      setPollOption(opt.id);
                      setPollVoted(true);
                    }
                  }}
                  className={`border flex h-9 items-center px-3 rounded-[2px] w-full text-[12px] transition-all duration-200 text-left cursor-pointer ${
                    pollVoted
                      ? pollOption === opt.id
                        ? "bg-dark text-white border-dark font-medium"
                        : "bg-dark/5 border-transparent text-dark/50"
                      : "border-border-light hover:border-dark hover:bg-dark/5 text-dark"
                  }`}
                >
                  {pollVoted && pollOption === opt.id && (
                    <Check size={12} className="text-white mr-2 shrink-0" />
                  )}
                  {opt.text}
                </button>
              ))}
              {pollVoted && (
                <p className="text-muted text-[11px]">
                  Thanks for voting — we&apos;ll prioritize those clips next season.
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
