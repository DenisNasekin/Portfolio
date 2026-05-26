"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view. Uses scroll-position math instead
 * of IntersectionObserver: IO only fires on threshold crossings, which Lenis's
 * interpolated smooth scroll can skip — especially between sections of unequal
 * height. Recomputing each rAF is cheap (a handful of getBoundingClientRect
 * calls) and stays in sync with whatever scroll position the user actually
 * sees on screen.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const compute = () => {
      // Reference line: 30% from the top of the viewport — where the reader's
      // focus usually sits, just below the fixed header.
      const line = window.innerHeight * 0.3;

      // Prefer the section that straddles the line. If two sections meet at
      // the line, the later one in source order wins (it's the one we're
      // entering, not leaving).
      let current: string | null = null;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) {
          current = el.id;
        }
      }

      // Fallbacks for gaps between sections and the top/bottom of the page.
      if (!current) {
        // The last section whose top has crossed the line (i.e., we've
        // scrolled past its start) is the one we're closest to.
        for (const el of elements) {
          if (el.getBoundingClientRect().top <= line) current = el.id;
        }
        // Still nothing → we're above the first section, so highlight it.
        if (!current) current = elements[0].id;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    compute();

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        compute();
      });
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}
