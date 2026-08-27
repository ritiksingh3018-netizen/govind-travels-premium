"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    const updateTarget = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        targetProgress.current = 0;
        return;
      }

      targetProgress.current = Math.min(
        100,
        Math.max(
          0,
          (scrollTop / documentHeight) * 100
        )
      );
    };

    const animate = () => {
      // Smooth animated progress
      currentProgress.current +=
        (targetProgress.current -
          currentProgress.current) *
        0.12;

      if (progressRef.current) {
        progressRef.current.style.width =
          `${currentProgress.current}%`;
      }

      requestAnimationFrame(animate);
    };

    updateTarget();

    window.addEventListener(
      "scroll",
      updateTarget,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateTarget
    );

    const animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "scroll",
        updateTarget
      );

      window.removeEventListener(
        "resize",
        updateTarget
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[10000]
        h-[3px]
        bg-purple-500
        shadow-[0_0_12px_rgba(168,85,247,0.85)]
      "
      style={{ width: "0%" }}
      aria-hidden="true"
    />
  );
}