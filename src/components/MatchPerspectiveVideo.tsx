"use client";

import { useState } from "react";
import Image from "next/image";

interface Perspectives {
  kevin: { videoSrc: string; videoTitle: string; annotation: string };
  philos: { videoSrc: string; videoTitle: string; annotation: string };
}

interface Props {
  perspectives: Perspectives;
  activePerspective?: "kevin" | "philos";
  onPerspectiveChange?: (p: "kevin" | "philos") => void;
}

export default function MatchPerspectiveVideo({ perspectives, activePerspective: controlled, onPerspectiveChange }: Props) {
  const [internal, setInternal] = useState<"kevin" | "philos">("kevin");
  const perspective = controlled ?? internal;
  const setPerspective = (p: "kevin" | "philos") => {
    setInternal(p);
    onPerspectiveChange?.(p);
  };
  const activePerspective = perspectives[perspective];

  return (
    <div className="flex flex-col gap-6 w-full max-w-[900px] mt-8">
      {/* Video Player */}
      <section className="flex flex-col gap-0">
        <div
          className="bg-dark overflow-hidden relative rounded-t-[4px] w-full shadow-lg aspect-video"
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
        {/* Annotation bar under video */}
        <div className="bg-dark/5 border border-t-0 border-border-light rounded-b-[4px] px-5 py-3">
          <p className="text-dark/70 text-[13px] leading-relaxed italic">
            {activePerspective.annotation}
          </p>
        </div>
      </section>

      {/* Perspective Toggle */}
      <section className="flex flex-col gap-3">
        <span className="text-muted text-[11px] tracking-[1px] font-medium">
          PERSPECTIVE
        </span>
        <div
          className="flex gap-3"
          role="radiogroup"
          aria-label="Choose perspective"
        >
          <button
            role="radio"
            aria-checked={perspective === "kevin"}
            onClick={() => setPerspective("kevin")}
            className={`flex-1 flex flex-col items-center gap-2 px-5 py-4 rounded-[4px] border-2 transition-all duration-200 cursor-pointer ${
              perspective === "kevin"
                ? "border-primary bg-primary/5"
                : "border-border-light hover:border-dark/20 bg-white"
            }`}
          >
            <div className="size-10 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
              <Image
                src="/images/kevin-pfp.png"
                alt="Kevin Lin"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              className={`text-[13px] font-medium ${
                perspective === "kevin" ? "text-primary" : "text-dark/60"
              }`}
            >
              Kevin Lin
            </span>
            <span className="text-[11px] text-muted">
              Outside Hitter · Editor
            </span>
          </button>
          <button
            role="radio"
            aria-checked={perspective === "philos"}
            onClick={() => setPerspective("philos")}
            className={`flex-1 flex flex-col items-center gap-2 px-5 py-4 rounded-[4px] border-2 transition-all duration-200 cursor-pointer ${
              perspective === "philos"
                ? "border-primary bg-primary/5"
                : "border-border-light hover:border-dark/20 bg-white"
            }`}
          >
            <div className="size-10 rounded-full overflow-hidden shrink-0 ring-1 ring-border-light">
              <Image
                src="/images/philos-pfp.JPG"
                alt="Philos Himm"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              className={`text-[13px] font-medium ${
                perspective === "philos" ? "text-primary" : "text-dark/60"
              }`}
            >
              Philos Himm
            </span>
            <span className="text-[11px] text-muted">
              Outside Hitter · Camera Op
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
