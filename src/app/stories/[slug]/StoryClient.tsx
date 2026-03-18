"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Check,
  MessageSquare,
  Volume2,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import type { Story } from "@/lib/stories";

interface Props {
  story: Story;
  prev: Story | null;
  next: Story | null;
}

export default function StoryClient({ story, prev, next }: Props) {
  const [perspective, setPerspective] = useState<"kevin" | "philos">("kevin");
  const activePerspective = story.perspectives[perspective];

  const [pollVoted, setPollVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState(story.pollOptions);
  const totalVotes = pollOptions.reduce((acc, opt) => acc + opt.votes, 0);

  const handleVote = (id: number) => {
    if (pollVoted) return;
    setPollOptions((opts) =>
      opts.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o))
    );
    setPollVoted(true);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioProgress, setAudioProgress] = useState(0);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  const [comments, setComments] = useState([
    { id: 1, text: story.sampleComment.text, author: story.sampleComment.author, time: "2m ago" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    setComments([
      { id: Date.now(), text: newComment, author: "You", time: "Just now" },
      ...comments,
    ]);
    setNewComment("");
  };

  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <Navbar activePage="Stories" />

      {/* Back nav */}
      <div className="border-b border-border-light flex items-center justify-between px-6 md:px-16 py-3 w-full">
        <Link
          href="/stories"
          className="flex items-center gap-2 text-muted text-[12px] hover:text-dark transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          All Stories
        </Link>
        <div className="flex items-center gap-4">
          {prev && (
            <Link
              href={`/stories/${prev.id}`}
              className="flex items-center gap-1 text-muted text-[12px] hover:text-dark transition-colors duration-200"
            >
              <ArrowLeft size={13} />
              EP {prev.episode}
            </Link>
          )}
          {next && (
            <Link
              href={`/stories/${next.id}`}
              className="flex items-center gap-1 text-muted text-[12px] hover:text-dark transition-colors duration-200"
            >
              EP {next.episode}
              <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </div>

      <main className="flex flex-col items-center w-full px-6 md:px-16 py-10 md:py-14">
        <div className="w-full max-w-[960px] flex flex-col gap-10">

          {/* 1. Episode Header */}
          <ScrollSection as="section" animation="fade-up" className="flex flex-col gap-3">
            <span className="text-primary text-[11px] tracking-[1px] font-medium">
              SIDE-OUT STORY · EPISODE {story.episode}
            </span>
            <h1 className="font-medium text-dark text-[28px] md:text-[36px] tracking-[-1px]">
              {story.title}
            </h1>
            <div className="flex items-center gap-3 text-[12px] text-muted">
              <span className="flex items-center gap-1">
                <Calendar size={12} aria-hidden="true" />
                {story.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} aria-hidden="true" />
                {story.duration}
              </span>
              <span className={`text-[9px] px-2 py-[2px] rounded-[2px] font-medium ${story.badgeClass}`}>
                {story.badge}
              </span>
            </div>
            <p className="text-dark/60 text-[14px] leading-relaxed max-w-[680px]">
              {story.description}
            </p>
          </ScrollSection>

          {/* 2. Hero Video Player */}
          <ScrollSection as="section" animation="fade-up" className="flex flex-col gap-0">
            <div
              className="bg-dark overflow-hidden relative rounded-t-[4px] w-full shadow-xl aspect-video"
              role="region"
              aria-label={`Video player: ${activePerspective.videoTitle}`}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src={activePerspective.videoSrc}
                title={activePerspective.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {/* Annotation bar */}
            <div className="bg-dark/5 border border-t-0 border-border-light rounded-b-[4px] px-5 py-3">
              <p className="text-dark/70 text-[13px] leading-relaxed italic">
                {activePerspective.annotation}
              </p>
            </div>
          </ScrollSection>

          {/* 3. Perspective Toggle */}
          <ScrollSection as="section" animation="fade-up" className="flex flex-col gap-3">
            <span className="text-muted text-[11px] tracking-[1px] font-medium">PERSPECTIVE</span>
            <div className="flex gap-3" role="radiogroup" aria-label="Choose perspective">
              {(["kevin", "philos"] as const).map((p) => {
                const isActive = perspective === p;
                const initials = p === "kevin" ? "KL" : "PH";
                const name = p === "kevin" ? "Kevin Lin" : "Philos Himm";
                const role = p === "kevin" ? "Outside Hitter · Editor" : "Outside Hitter · Camera Op";
                return (
                  <button
                    key={p}
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setPerspective(p)}
                    className={`flex-1 flex flex-col items-center gap-2 px-5 py-4 rounded-[4px] border-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border-light hover:border-dark/20 bg-white"
                    }`}
                  >
                    <div
                      className={`size-10 rounded-full flex items-center justify-center text-[14px] font-bold ${
                        isActive ? "bg-primary text-white" : "bg-dark/10 text-dark/50"
                      }`}
                    >
                      {initials}
                    </div>
                    <span className={`text-[13px] font-medium ${isActive ? "text-primary" : "text-dark/60"}`}>
                      {name}
                    </span>
                    <span className="text-[11px] text-muted">{role}</span>
                  </button>
                );
              })}
            </div>
          </ScrollSection>

          {/* 4. Poll + Audio side by side */}
          <ScrollSection as="div" animation="fade-up" className="flex flex-col md:flex-row gap-6">
            {/* Poll */}
            <section className="flex-1">
              <div
                className="border border-border-light flex flex-col gap-[14px] items-start p-6 rounded-[4px] w-full bg-white shadow-sm h-full"
                role="group"
                aria-labelledby="poll-heading"
              >
                <span className="font-medium text-primary text-[10px] tracking-[1px]" id="poll-heading">
                  VIEWER POLL
                </span>
                <p className="font-medium text-dark text-[15px] w-full">{story.pollQuestion}</p>
                <div className="flex flex-col gap-2 items-start w-full" role="group" aria-label="Poll options">
                  {pollOptions.map((opt) => {
                    const percentage = Math.round((opt.votes / totalVotes) * 100);
                    const isWinner =
                      pollVoted && opt.votes === Math.max(...pollOptions.map((o) => o.votes));
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleVote(opt.id)}
                        className={`border flex h-10 items-center justify-between px-3 rounded-[2px] w-full transition-all duration-200 group relative overflow-hidden ${
                          pollVoted
                            ? isWinner
                              ? "bg-dark text-white border-dark"
                              : "bg-dark/5 border-transparent text-dark/60"
                            : "border-border-light hover:border-dark hover:bg-dark/5"
                        }`}
                      >
                        {pollVoted && (
                          <div
                            className="absolute left-0 top-0 h-full bg-primary/10 -z-10 transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        )}
                        <span
                          className={`text-[13px] font-medium transition-colors flex items-center gap-2 ${
                            pollVoted
                              ? isWinner ? "text-white" : "text-dark/60"
                              : "text-dark/60 group-hover:text-dark"
                          }`}
                        >
                          {pollVoted && isWinner && <Check size={14} className="text-white" />}
                          {opt.text}
                        </span>
                        <span className={`text-[12px] ${pollVoted && isWinner ? "text-white/80" : "text-muted"}`}>
                          {pollVoted ? `${percentage}%` : " Vote "}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {pollVoted && (
                  <span className="text-[11px] text-muted w-full text-center mt-1">{totalVotes} votes</span>
                )}
              </div>
            </section>

            {/* Audio Player */}
            <section className="flex-1">
              <div
                className="border border-border-light flex flex-col gap-4 items-start p-6 rounded-[4px] w-full bg-white shadow-sm h-full"
                role="region"
                aria-label="Audio player"
              >
                <span className="font-medium text-muted text-[10px] tracking-[1px] flex items-center gap-1">
                  <Volume2 size={12} aria-hidden="true" />
                  POST-GAME AUDIO
                </span>
                <p className="font-medium text-dark text-[15px]">{story.audioTitle}</p>
                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  src={story.audioSrc}
                />
                <div
                  className="bg-border-light h-1.5 relative rounded-full w-full cursor-pointer hover:scale-y-150 origin-left transition-transform duration-200"
                  role="slider"
                  aria-label="Audio progress"
                >
                  <div
                    className="absolute bg-dark h-full left-0 rounded-full top-0 transition-all duration-100"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => {
                        if (audioRef.current)
                          audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
                      }}
                      aria-label="Skip back 10 seconds"
                      className="border border-border-light rounded-[2px] size-8 flex items-center justify-center hover:bg-dark/5 transition-colors duration-200 text-dark/60"
                    >
                      <SkipBack size={14} className="fill-current" />
                    </button>
                    <button
                      onClick={toggleAudio}
                      aria-label={isPlaying ? "Pause audio" : "Play audio"}
                      className="bg-dark flex items-center justify-center rounded-[2px] size-9 hover:bg-black transition-transform duration-200 hover:scale-105 active:scale-95 text-white"
                    >
                      {isPlaying ? <Pause size={14} className="fill-white" /> : <Play size={14} className="fill-white" />}
                    </button>
                    <button
                      onClick={() => {
                        if (audioRef.current) audioRef.current.currentTime += 10;
                      }}
                      aria-label="Skip forward 10 seconds"
                      className="border border-border-light rounded-[2px] size-8 flex items-center justify-center hover:bg-dark/5 transition-colors duration-200 text-dark/60"
                    >
                      <SkipForward size={14} className="fill-current" />
                    </button>
                  </div>
                  <span className="font-medium text-muted text-[11px]">
                    {audioRef.current?.currentTime
                      ? `${Math.floor(audioRef.current.currentTime / 60)}:${String(
                          Math.floor(audioRef.current.currentTime % 60)
                        ).padStart(2, "0")}`
                      : "0:00"}
                  </span>
                </div>
              </div>
            </section>
          </ScrollSection>

          {/* 5. Community Engagement */}
          <ScrollSection as="section" animation="fade-up">
            <div className="border border-border flex flex-col gap-4 items-start p-6 rounded-[4px] w-full bg-dark/5">
              <span className="font-medium text-primary text-[10px] tracking-[1px] w-full flex items-center gap-1">
                <MessageSquare size={12} />
                YOUR TAKE
              </span>
              <p className="font-medium text-[#17171c] text-[15px] w-full">{story.commentPrompt}</p>
              <div className="w-full flex gap-3 items-start">
                <label htmlFor="user-comment" className="sr-only">Your response</label>
                <textarea
                  id="user-comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="bg-white border border-[#d0d0d0] flex-1 h-16 px-3 py-[10px] rounded-[4px] text-[13px] text-dark placeholder:text-dark/40 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  placeholder="Armchair coach? Let's hear it..."
                />
                <button
                  onClick={handleCommentSubmit}
                  className="bg-primary flex h-16 w-[100px] items-center justify-center rounded-[4px] hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] group overflow-hidden relative shrink-0"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="font-medium text-[12px] text-white relative z-10 text-center px-2 leading-tight">
                    Send to Press Box
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-3 w-full">
                {comments.map((c) => (
                  <div key={c.id} className="bg-white p-3 rounded-[4px] shadow-sm border border-border-light/50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-[12px] text-dark">{c.author}</span>
                      <span className="text-[10px] text-muted">{c.time}</span>
                    </div>
                    <p className="text-[13px] text-dark/80 leading-snug">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollSection>

          {/* Prev / Next story nav */}
          {(prev || next) && (
            <div className="flex items-center justify-between border-t border-border-light pt-8">
              {prev ? (
                <Link
                  href={`/stories/${prev.id}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="border border-border-light flex h-9 w-9 items-center justify-center rounded-[2px] group-hover:bg-dark/5 transition-colors duration-200">
                    <ArrowLeft size={16} className="text-dark/60" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-muted text-[10px] tracking-[1px]">PREVIOUS</span>
                    <span className="text-dark text-[13px] font-medium">{prev.title}</span>
                  </div>
                </Link>
              ) : <div />}
              {next && (
                <Link
                  href={`/stories/${next.id}`}
                  className="flex items-center gap-3 group text-right"
                >
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-muted text-[10px] tracking-[1px]">NEXT</span>
                    <span className="text-dark text-[13px] font-medium">{next.title}</span>
                  </div>
                  <div className="border border-border-light flex h-9 w-9 items-center justify-center rounded-[2px] group-hover:bg-dark/5 transition-colors duration-200">
                    <ArrowRight size={16} className="text-dark/60" />
                  </div>
                </Link>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
