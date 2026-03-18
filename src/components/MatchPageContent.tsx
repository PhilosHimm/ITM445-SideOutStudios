"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import type { Game } from "@/lib/games";
import type { Story } from "@/lib/stories";

interface Props {
  game: Game;
  story: Story | undefined;
  prev: Game | null;
  next: Game | null;
  resultAccent: string;
}

export default function MatchPageContent({ game, story, prev, next, resultAccent }: Props) {
  const [perspective, setPerspective] = useState<"kevin" | "philos">("kevin");

  const perspectiveData = game.perspectives?.[perspective];
  const activeSummary = perspectiveData?.summary ?? game.matchSummary;
  const activeStats = perspectiveData?.stats ?? game.stats;

  return (
    <>
      {/* ── PERSPECTIVE TOGGLE ──────────────────────────────────────────── */}
      <div className="border-b border-border-light bg-white w-full sticky top-[56px] z-20">
        <div className="px-6 md:px-16 py-3 flex items-center gap-4 flex-wrap">
          <span className="text-dark/35 text-[10px] font-medium tracking-[2px] shrink-0">
            VIEWING FROM
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPerspective("kevin")}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[3px] border transition-all duration-200 ${
                perspective === "kevin"
                  ? "border-primary bg-primary/5"
                  : "border-border-light bg-white hover:border-dark/20"
              }`}
            >
              <div
                className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                  perspective === "kevin" ? "bg-primary text-white" : "bg-dark/10 text-dark/40"
                }`}
              >
                KL
              </div>
              <div className="flex flex-col items-start">
                <span
                  className={`text-[12px] font-medium leading-tight ${
                    perspective === "kevin" ? "text-primary" : "text-dark/60"
                  }`}
                >
                  Kevin Lin
                </span>
                <span className="text-[10px] text-dark/35 leading-tight">
                  Outside Hitter · Editor
                </span>
              </div>
            </button>

            <button
              onClick={() => setPerspective("philos")}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[3px] border transition-all duration-200 ${
                perspective === "philos"
                  ? "border-primary bg-primary/5"
                  : "border-border-light bg-white hover:border-dark/20"
              }`}
            >
              <div
                className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                  perspective === "philos" ? "bg-primary text-white" : "bg-dark/10 text-dark/40"
                }`}
              >
                PH
              </div>
              <div className="flex flex-col items-start">
                <span
                  className={`text-[12px] font-medium leading-tight ${
                    perspective === "philos" ? "text-primary" : "text-dark/60"
                  }`}
                >
                  Philos Himm
                </span>
                <span className="text-[10px] text-dark/35 leading-tight">
                  Outside Hitter · Camera Op
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="w-full flex-1">
        <main className="flex flex-col gap-12 px-6 md:px-16 py-10 w-full">

          {/* ── 2. HERO IMAGE COLLAGE ───────────────────────────────────── */}
          <ScrollSection animation="fade-up">
            <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-[4px] overflow-hidden h-[260px] md:h-[340px]">
              <div
                className="col-span-2 row-span-2 bg-cover bg-center bg-dark/20"
                style={{ backgroundImage: `url('${game.heroImage}')` }}
                role="img"
                aria-label={`${game.title} — hero image`}
              />
              {game.highlights.slice(0, 2).map((h, i) => (
                <div
                  key={i}
                  className="relative bg-cover bg-center bg-dark/20 overflow-hidden group"
                  style={{ backgroundImage: `url('${h.image}')` }}
                  role="img"
                  aria-label={h.title}
                >
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-2">
                    <span className="text-white/80 text-[9px] font-medium leading-tight line-clamp-1">
                      {h.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollSection>

          {/* ── 3. MATCH SUMMARY ────────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={60}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">MATCH SUMMARY</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Game Overview</h2>
              </div>

              <p className="text-dark/70 text-[15px] leading-relaxed max-w-[780px]">
                {activeSummary}
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                {activeStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border rounded-[4px] flex flex-col items-center justify-center py-4 px-3 gap-1"
                  >
                    <span className="text-[28px] font-bold text-dark tracking-[-1.5px] leading-none tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium text-dark/40 tracking-[1.5px]">
                      {stat.label.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Perspective Note */}
              {perspectiveData && (
                <div className="border-l-2 border-primary bg-primary/[0.03] rounded-r-[4px] px-5 py-4 flex gap-3.5 items-start">
                  <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
                    {perspective === "kevin" ? "KL" : "PH"}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-dark/70 text-[13px] leading-relaxed italic">
                      &ldquo;{perspectiveData.note}&rdquo;
                    </p>
                    <span className="text-dark/40 text-[11px]">
                      {perspective === "kevin"
                        ? "— Kevin Lin, Outside Hitter · Editor"
                        : "— Philos Himm, Outside Hitter · Camera Op"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ScrollSection>

          {/* ── 4. SET-BY-SET BREAKDOWN ─────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={80}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">SET BREAKDOWN</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Set-by-Set Analysis</h2>
              </div>

              <div className="flex flex-col gap-3">
                {game.sets.map((set, i) => {
                  const pSet = perspectiveData?.sets?.[i];
                  const ourScore = pSet?.ourScore ?? set.ourScore;
                  const theirScore = pSet?.theirScore ?? set.theirScore;
                  const result = pSet?.result ?? set.result;
                  const setWon = result === "Won";
                  return (
                    <ScrollSection key={set.setNumber} animation="fade-up" delay={i * 70} as="div">
                      <div
                        className={`rounded-[4px] overflow-hidden border ${
                          setWon ? "border-emerald-200" : "border-red-200"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between px-5 py-3 ${
                            setWon ? "bg-emerald-50" : "bg-red-50"
                          }`}
                        >
                          <span className="font-semibold text-dark text-[13px] tracking-[-0.3px]">
                            Set {set.setNumber}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-[22px] font-bold text-dark tracking-[-1.2px] leading-none tabular-nums">
                              {ourScore}–{theirScore}
                            </span>
                            <span
                              className={`text-[9px] font-bold tracking-[1.5px] px-2 py-[3px] rounded-[2px] ${
                                setWon ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                              }`}
                            >
                              {setWon ? "WON" : "LOST"}
                            </span>
                          </div>
                        </div>

                        <div className="h-1.5 w-full bg-dark/5">
                          <div
                            className={`h-full ${
                              setWon ? "bg-emerald-400" : "bg-red-400"
                            } transition-all`}
                            style={{
                              width: `${Math.round(
                                (ourScore / (ourScore + theirScore)) * 100
                              )}%`,
                            }}
                          />
                        </div>

                        <ul className="flex flex-col gap-2 px-5 py-4">
                          {(perspectiveData?.setBullets?.[i] ?? set.bullets).map((bullet, bi) => (
                            <li
                              key={bi}
                              className="flex items-start gap-2.5 text-[13px] text-dark/65 leading-snug"
                            >
                              <span
                                className={`mt-[3px] text-[8px] ${
                                  setWon ? "text-emerald-500" : "text-red-400"
                                }`}
                              >
                                ●
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollSection>
                  );
                })}
              </div>
            </div>
          </ScrollSection>

          {/* ── 5. ACTION GALLERY ───────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={60}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">ACTION GALLERY</span>
                <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Freeze Frames</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {game.highlights.map((h, i) => (
                  <ScrollSection key={h.title} animation="fade-up" delay={i * 60} as="article">
                    <div
                      className="relative rounded-[4px] overflow-hidden group"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${h.image}')` }}
                        role="img"
                        aria-label={h.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="bg-dark/70 text-white/80 text-[9px] font-medium tracking-[0.5px] px-2 py-[3px] rounded-[2px]">
                          {h.timestamp}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-[12px] font-medium leading-tight">{h.title}</p>
                        <p className="text-white/65 text-[11px] mt-0.5 leading-tight line-clamp-2">
                          {perspectiveData?.highlightNotes?.[i] ?? h.description}
                        </p>
                      </div>
                    </div>
                  </ScrollSection>
                ))}
              </div>
            </div>
          </ScrollSection>

          {/* ── 6. STORY CTA ────────────────────────────────────────────── */}
          <ScrollSection animation="fade-up" delay={40}>
            <div
              className={`relative rounded-[4px] overflow-hidden border-l-4 ${resultAccent} bg-dark/[0.03] px-6 py-7 flex flex-col sm:flex-row sm:items-center gap-5 justify-between`}
            >
              <div className="flex flex-col gap-1.5 max-w-[420px]">
                <span className="text-primary font-medium text-[10px] tracking-[3px]">SIDE-OUT STORY</span>
                <p className="text-dark text-[16px] font-medium leading-snug tracking-[-0.3px]">
                  Relive the drama — watch the Side-Out Story for this match
                </p>
                <p className="text-dark/50 text-[13px]">
                  The full narrative vlog: behind-the-scenes moments, player reactions, and the story the score doesn&apos;t tell.
                </p>
              </div>
              <Link
                href={game.storyLink}
                className="inline-flex items-center gap-2 bg-dark text-white px-5 py-3 rounded-[3px] text-[13px] font-medium hover:bg-dark/80 transition-colors duration-200 shrink-0 group"
              >
                <span>Watch the Story</span>
                <ExternalLink
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </ScrollSection>

        </main>
      </div>

      {/* ── PREV / NEXT NAVIGATION ──────────────────────────────────────── */}
      <ScrollSection
        animation="fade-up"
        className="border-t border-border-light flex flex-col sm:flex-row items-stretch w-full"
      >
        {prev ? (
          <Link
            href={`/matches/${prev.slug}`}
            className="border-b sm:border-b-0 sm:border-r border-border-light flex flex-1 gap-4 items-center px-6 md:px-16 py-6 hover:bg-dark/5 transition-colors duration-200 group"
          >
            <ArrowLeft
              size={16}
              className="text-muted shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
            />
            <div className="flex flex-col gap-1 items-start">
              <span className="text-muted text-[10px] font-medium tracking-[1px]">PREVIOUS</span>
              <span className="text-dark font-medium text-[14px] tracking-[-0.3px]">{prev.title}</span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/matches/${next.slug}`}
            className="flex flex-1 gap-4 items-center justify-end px-6 md:px-16 py-6 hover:bg-dark/5 transition-colors duration-200 group text-right"
          >
            <div className="flex flex-col gap-1 items-end">
              <span className="text-muted text-[10px] font-medium tracking-[1px]">NEXT</span>
              <span className="text-dark font-medium text-[14px] tracking-[-0.3px]">{next.title}</span>
            </div>
            <ArrowRight
              size={16}
              className="text-muted shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <div className="flex-1 flex items-center justify-end px-6 md:px-16 py-6">
            <Link
              href="/matches"
              className="flex gap-2 items-center text-primary hover:text-primary-hover transition-colors duration-200 group"
            >
              <span className="text-[13px] font-medium">Back to all matches</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </ScrollSection>
    </>
  );
}
