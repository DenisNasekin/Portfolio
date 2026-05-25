"use client";

import { useEffect, useState } from "react";

/**
 * Animates an integer from 0 up to `target` over `duration` ms using a
 * cubic ease-out, but only once `start` flips to true. Returns the current
 * integer value — re-renders cheaply (60fps, single state).
 */
export function useCounter(target: number, duration = 1400, start = true): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || target === 0) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}
