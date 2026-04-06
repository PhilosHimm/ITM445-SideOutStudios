"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Props {
  src: string;
  playerName: string;
  initials: string;
}

export default function AudioPlayer({ src, playerName, initials }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
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

  return (
    <div className="border border-border-light rounded-[4px] p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-primary flex items-center justify-center text-[9px] font-bold text-white shrink-0">
          {initials}
        </div>
        <span className="text-dark text-[13px] font-medium">{playerName}</span>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex flex-col gap-2">
        <div className="bg-border-light h-1 w-full rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-150"
            style={{ width: `${audioProgress}%` }}
          />
        </div>
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
          <button
            onClick={() => {
              const next = volume === 0 ? 1 : 0;
              setVolume(next);
              if (audioRef.current) audioRef.current.volume = next;
            }}
            className="cursor-pointer"
            aria-label={volume === 0 ? "Unmute" : "Mute"}
          >
            {volume === 0 ? (
              <VolumeX size={14} className="text-muted" />
            ) : (
              <Volume2 size={14} className="text-muted" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 accent-primary cursor-pointer"
            aria-label="Volume"
          />
          <span className="text-muted text-[11px] ml-auto">
            {isPlaying ? "Playing..." : "Tap to play"}
          </span>
        </div>
      </div>
    </div>
  );
}
