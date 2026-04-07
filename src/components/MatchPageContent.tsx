"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import { games } from "@/lib/games";
import type { Game } from "@/lib/games";
import type { Story } from "@/lib/stories";

interface Props {
  game: Game;
  story: Story | undefined;
  prev: Game | null;
  next: Game | null;
  resultAccent: string;
}

// ── Shared simplified sections ──────────────────────────────────────────────

function SetScoresSection({ game }: { game: Game }) {
  if (game.sets.length === 0) return null;
  return (
    <ScrollSection animation="fade-up" delay={60}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-medium text-[10px] tracking-[3px]">SET SCORES</span>
          <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Score by Set</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {game.sets.map((set) => {
            const won = set.result === "Won";
            return (
              <div
                key={set.setNumber}
                className={`border rounded-[4px] px-5 py-5 flex flex-col gap-3 ${
                  won ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"
                }`}
              >
                <span className="text-[10px] font-medium text-dark/50 tracking-[1.5px]">
                  SET {set.setNumber}
                </span>
                <span
                  className={`text-[36px] font-bold tracking-[-2px] leading-none tabular-nums ${
                    won ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {set.ourScore ?? "?"}&ndash;{set.theirScore ?? "?"}
                </span>
                <span
                  className={`text-[9px] font-bold tracking-[1.5px] px-2 py-[3px] rounded-[2px] self-start ${
                    won ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {won ? "WON" : "LOST"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollSection>
  );
}

function SeasonContextSection({ game }: { game: Game }) {
  const playerGames = games.filter((g) => g.player === game.player);
  const totalGames = playerGames.length;
  const gamesUpToNow = playerGames.filter((g) => g.number <= game.number);
  const w = gamesUpToNow.filter((g) => g.result === "Win").length;
  const l = gamesUpToNow.filter((g) => g.result === "Loss").length;
  const t = gamesUpToNow.filter((g) => g.result === "Tie").length;
  const recordStr = `${w}W – ${l}L${t > 0 ? ` – ${t}T` : ""}`;
  const combinedPts = game.sets.reduce(
    (acc, s) => acc + (s.ourScore ?? 0) + (s.theirScore ?? 0),
    0
  );

  const tiles = [
    { label: "GAME OF SEASON", value: `${game.number} of ${totalGames}` },
    { label: "RECORD THROUGH THIS GAME", value: recordStr },
    ...(combinedPts > 0 ? [{ label: "COMBINED PTS THIS GAME", value: String(combinedPts) }] : []),
  ];

  return (
    <ScrollSection animation="fade-up" delay={80}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-medium text-[10px] tracking-[3px]">SEASON CONTEXT</span>
          <h2 className="font-light text-dark text-[26px] tracking-[-1px]">Where This Game Fits</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className="border border-border rounded-[4px] flex flex-col items-center justify-center py-5 px-4 gap-1.5 text-center"
            >
              <span className="text-[22px] font-bold text-dark tracking-[-1px] leading-none tabular-nums">
                {tile.value}
              </span>
              <span className="text-[9px] font-medium text-dark/40 tracking-[1.5px]">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

function OpponentHistorySection({ game }: { game: Game }) {
  const playerGames = games.filter((g) => g.player === game.player);
  const opponentGames = playerGames
    .filter((g) => g.opponent === game.opponent)
    .sort((a, b) => a.number - b.number);

  if (opponentGames.length <= 1) return null;

  const vsW = opponentGames.filter((g) => g.result === "Win").length;
  const vsL = opponentGames.filter((g) => g.result === "Loss").length;
  const vsT = opponentGames.filter((g) => g.result === "Tie").length;
  const currentResult = game.result === "Win" ? "W" : game.result === "Loss" ? "L" : "T";

  return (
    <ScrollSection animation="fade-up" delay={100}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-medium text-[10px] tracking-[3px]">OPPONENT HISTORY</span>
          <h2 className="font-light text-dark text-[26px] tracking-[-1px]">
            vs {game.opponent}
          </h2>
        </div>

        <div className="border border-border-light rounded-[4px] px-5 py-5 flex flex-col gap-4">
          <div className="flex items-end gap-3 flex-wrap">
            {opponentGames.map((g) => {
              const isCurrent = g.slug === game.slug;
              const dotColor =
                g.result === "Win"
                  ? "bg-emerald-500"
                  : g.result === "Loss"
                  ? "bg-red-500"
                  : "bg-amber-400";
              return (
                <div key={g.slug} className="flex flex-col items-center gap-1">
                  <div
                    className={`size-5 rounded-full ${dotColor} ${
                      isCurrent ? "ring-2 ring-offset-2 ring-dark" : ""
                    }`}
                  />
                  <span className="text-[9px] text-dark/40 font-medium">G{g.number}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-1 pt-1 border-t border-border-light">
            <span className="text-dark/60 text-[12px]">
              Season record vs{" "}
              <span className="text-dark font-medium">{game.opponent}</span>:{" "}
              <span className="text-emerald-600 font-medium">{vsW}W</span>
              {" – "}
              <span className="text-red-500 font-medium">{vsL}L</span>
              {vsT > 0 && (
                <>
                  {" – "}
                  <span className="text-amber-500 font-medium">{vsT}T</span>
                </>
              )}
            </span>
            <span className="text-dark/40 text-[11px]">
              You are here:{" "}
              <span
                className={`font-medium ${
                  currentResult === "W"
                    ? "text-emerald-600"
                    : currentResult === "L"
                    ? "text-red-500"
                    : "text-amber-500"
                }`}
              >
                {currentResult === "W" ? "Win" : currentResult === "L" ? "Loss" : "Tie"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

// ── Main component ──────────────────────────────────────────────────────────

export default function MatchPageContent({ game, prev, next, resultAccent }: Omit<Props, "story">) {
  return (
    <>
      {/* ── PLAYER CREDIT ───────────────────────────────────────────────── */}
      <div className="border-b border-border-light bg-white w-full">
        <div className="px-6 md:px-16 py-3 flex items-center gap-3">
          {game.player === "philos" ? (
            <div className="size-7 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
              <Image
                src="/images/philos-pfp.JPG"
                alt="Philos Himm"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="size-7 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white shrink-0">
              KL
            </div>
          )}
          <div className="flex flex-col gap-0">
            <span className="text-dark text-[12px] font-medium leading-tight">
              {game.player === "kevin" ? "Kevin Lin" : "Philos Himm"}
            </span>
            <span className="text-dark/40 text-[10px] tracking-[1px]">
              {game.player === "kevin"
                ? "OUTSIDE HITTER · EDITOR"
                : "OUTSIDE HITTER · CAMERA OP"}
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="w-full flex-1">
        <main className="flex flex-col gap-12 px-6 md:px-16 py-10 w-full">
          <SetScoresSection game={game} />
          <SeasonContextSection game={game} />
          <OpponentHistorySection game={game} />
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
