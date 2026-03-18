"use client";

import { Play, Pause, SkipBack, SkipForward, Check, MessageSquare } from "lucide-react";
import { useState, useRef } from "react";

interface GameSidebarProps {
  pollQuestion: string;
  pollOptionLabels: string[];
  pollVotes: number[];
  audioTitle: string;
  commentPrompt: string;
  sampleComment: { text: string; author: string };
  gameNumber: number;
  totalGames: number;
}

export default function GameSidebar({
  pollQuestion,
  pollOptionLabels,
  pollVotes,
  audioTitle,
  commentPrompt,
  sampleComment,
  gameNumber,
  totalGames,
}: GameSidebarProps) {
  // Poll
  const [pollVoted, setPollVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState(
    pollOptionLabels.map((text, i) => ({ id: i + 1, text, votes: pollVotes[i] }))
  );
  const totalVotes = pollOptions.reduce((acc, opt) => acc + opt.votes, 0);

  const handleVote = (id: number) => {
    if (pollVoted) return;
    setPollOptions((opts) =>
      opts.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o))
    );
    setPollVoted(true);
  };

  // Audio
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioProgress, setAudioProgress] = useState(0);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  // Comments
  const [comments, setComments] = useState([
    { id: 1, text: sampleComment.text, author: sampleComment.author, time: "2m ago" },
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
    <aside className="border-t md:border-t-0 md:border-l border-border-light flex flex-col gap-5 px-6 md:px-8 py-10 w-full md:w-[280px] shrink-0 items-start">
      {/* Viewer Poll Card */}
      <div
        className="border border-border-light flex flex-col gap-[14px] items-start p-5 rounded-[2px] w-full bg-white shadow-sm"
        role="group"
        aria-labelledby="poll-heading"
      >
        <span
          className="font-medium text-primary text-[10px] tracking-[1px]"
          id="poll-heading"
        >
          VIEWER POLL
        </span>
        <p className="font-medium text-dark text-[14px] w-full">{pollQuestion}</p>
        <div
          className="flex flex-col gap-2 items-start w-full"
          role="group"
          aria-label="Poll options"
        >
          {pollOptions.map((opt) => {
            const percentage = Math.round((opt.votes / totalVotes) * 100);
            const isWinner =
              pollVoted &&
              opt.votes === Math.max(...pollOptions.map((o) => o.votes));

            return (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                className={`border flex h-9 items-center justify-between px-3 rounded-[2px] w-full transition-all duration-200 group relative overflow-hidden ${
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
                      ? isWinner
                        ? "text-white"
                        : "text-dark/60"
                      : "text-dark/60 group-hover:text-dark"
                  }`}
                >
                  {pollVoted && isWinner && <Check size={14} className="text-white" />}
                  {opt.text}
                </span>
                <span
                  className={`text-[12px] ${
                    pollVoted && isWinner ? "text-white/80" : "text-muted"
                  }`}
                >
                  {pollVoted ? `${percentage}%` : " Vote "}
                </span>
              </button>
            );
          })}
        </div>
        {pollVoted && (
          <span className="text-[11px] text-muted w-full text-center mt-1">
            {totalVotes} votes
          </span>
        )}
      </div>

      {/* Audio Card */}
      <div
        className="border border-border-light flex flex-col gap-4 items-start p-5 rounded-[2px] w-full bg-white shadow-sm"
        role="region"
        aria-label="Audio player"
      >
        <span className="font-medium text-muted text-[10px] tracking-[1px]">
          POST-GAME AUDIO
        </span>
        <p className="font-medium text-dark text-[14px]">{audioTitle}</p>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />
        <div
          className="bg-border-light h-1 relative rounded-full w-full cursor-pointer hover:scale-y-150 origin-left transition-transform duration-200"
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
                  audioRef.current.currentTime = Math.max(
                    0,
                    audioRef.current.currentTime - 10
                  );
              }}
              aria-label="Skip back 10 seconds"
              className="border border-border-light rounded-[2px] size-8 flex items-center justify-center hover:bg-dark/5 transition-colors duration-200 text-dark/60"
            >
              <SkipBack size={14} className="fill-current" />
            </button>
            <button
              onClick={toggleAudio}
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
              className="bg-dark flex items-center justify-center rounded-[2px] size-8 hover:bg-black transition-transform duration-200 hover:scale-105 active:scale-95 text-white"
            >
              {isPlaying ? (
                <Pause size={14} className="fill-white" />
              ) : (
                <Play size={14} className="fill-white" />
              )}
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

      {/* Comment Card */}
      <div className="border border-border flex flex-col gap-3 items-start overflow-clip p-5 rounded-[2px] w-full bg-dark/5 max-h-[400px]">
        <span className="font-medium text-primary text-[10px] tracking-[1px] w-full flex items-center gap-1">
          <MessageSquare size={12} />
          YOUR TAKE
        </span>
        <p className="font-medium text-[#17171c] text-[14px] w-full">
          {commentPrompt}
        </p>

        <div className="flex flex-col gap-3 w-full overflow-y-auto pr-1 flex-1 min-h-[100px]">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-white p-3 rounded-[4px] shadow-sm border border-border-light/50"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-[12px] text-dark">{c.author}</span>
                <span className="text-[10px] text-muted">{c.time}</span>
              </div>
              <p className="text-[13px] text-dark/80 leading-snug">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex gap-2 flex-col pt-2 border-t border-border mt-2">
          <label htmlFor="user-comment" className="sr-only">
            Your response
          </label>
          <textarea
            id="user-comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="bg-white border border-[#d0d0d0] flex flex-col h-16 items-start px-3 py-[10px] rounded-[4px] w-full text-[13px] text-dark placeholder:text-dark/40 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            placeholder="Armchair coach? Let's hear it..."
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-primary flex h-9 items-center justify-center rounded-[4px] w-full hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 hover-glow active:scale-[0.98] group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="font-medium text-[13px] text-white relative z-10">
              Send to Press Box
            </span>
          </button>
        </div>
      </div>

      {/* Season Progress */}
      <div className="flex flex-col gap-4 w-full">
        <span className="text-muted text-[11px] tracking-[1px] font-medium">SEASON</span>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-dark/60 text-[12px]">
              Game {gameNumber} of {totalGames}
            </span>
            <span className="text-dark text-[12px] font-medium">
              {Math.round((gameNumber / totalGames) * 100)}%
            </span>
          </div>
          <div className="bg-border-light h-1.5 w-full rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${(gameNumber / totalGames) * 100}%` }}
              aria-label={`Game ${gameNumber} of ${totalGames}`}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
