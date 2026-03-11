"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  /** Intersection threshold (0–1). Default 0.15 */
  threshold?: number;
  /** Root margin for earlier/later triggering. Default "0px 0px -40px 0px" */
  rootMargin?: string;
  /** If true, animate only once (default true) */
  once?: boolean;
}

/**
 * Returns a ref to attach to any element and a boolean `isVisible`
 * that flips to `true` when the element enters the viewport.
 *
 * Respects `prefers-reduced-motion` — if the user wants reduced motion
 * the hook immediately returns `isVisible: true` so the element renders
 * without animation.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
