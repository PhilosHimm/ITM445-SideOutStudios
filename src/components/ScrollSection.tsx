"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in";

interface ScrollSectionProps {
  children: ReactNode;
  /** Which animation to play. Default "fade-up" */
  animation?: AnimationType;
  /** Extra delay in ms (adds an inline transition-delay). Default 0 */
  delay?: number;
  /** Intersection threshold 0–1. Default 0.15 */
  threshold?: number;
  /** Wrapper element tag. Default "div" */
  as?: "div" | "section" | "article" | "aside" | "header" | "footer";
  /** Additional className to merge onto the wrapper */
  className?: string;
}

/**
 * Wraps children in a scroll-triggered animation container.
 *
 * Usage:
 * ```tsx
 * <ScrollSection animation="fade-up" delay={100}>
 *   <MyContent />
 * </ScrollSection>
 * ```
 */
export default function ScrollSection({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
  className = "",
}: ScrollSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  // Map animation prop to the CSS class names defined in globals.css
  const animClassMap: Record<AnimationType, string> = {
    "fade-up": "scroll-fade-up",
    "fade-down": "scroll-fade-up",     // reuse fade-up (could add dedicated later)
    "fade-left": "scroll-slide-left",
    "fade-right": "scroll-slide-right",
    "scale-in": "scroll-scale-in",
  };

  const animClass = animClassMap[animation];
  const visibleClass = isVisible ? "scroll-visible" : "";

  return (
    <Tag
      // The hook's ref needs a cast because Tag is dynamic, but the underlying
      // DOM node is always an HTMLElement so this is safe.
      ref={ref as React.Ref<any>}
      className={`scroll-animate ${animClass} ${visibleClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
