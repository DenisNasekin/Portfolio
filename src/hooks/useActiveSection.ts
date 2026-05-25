"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view. Uses IntersectionObserver with
 * a wider active band than the typical "-40% 0px -50% 0px" rootMargin —
 * Lenis-driven scrolling can suppress fine-grained intersection updates,
 * so a 25% band is the sweet spot between accuracy and reliability.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Active band: 30% from the top to 55% from the bottom — i.e. the
      // upper-middle of the viewport, where the reader's focus usually sits.
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
