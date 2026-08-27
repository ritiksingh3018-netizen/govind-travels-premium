"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const isClickable = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const circle = cursor.querySelector(
      "[data-cursor-circle]"
    ) as HTMLDivElement | null;

    const dot = cursor.querySelector(
      "[data-cursor-dot]"
    ) as HTMLDivElement | null;

    if (!circle || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      /*
      =====================================
      EXACT MOUSE POSITION
      =====================================
      */

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      /*
      =====================================
      CHECK CLICKABLE ELEMENT
      =====================================
      */

      const target = e.target as HTMLElement;

      isClickable.current =
        target.closest(
          "a, button, input, textarea, select, [role='button'], [onclick]"
        ) !== null;

      /*
      =====================================
      HOVER EFFECT
      =====================================
      */

      if (isClickable.current) {
        circle.style.transform =
          "scale(1.45)";

        circle.style.opacity = "0.65";
      } else {
        circle.style.transform =
          "scale(1)";

        circle.style.opacity = "0.4";
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    /*
    =====================================
    EXACT CURSOR POSITION
    =====================================
    */

    let animationFrame: number;

    const animate = () => {
      cursor.style.transform =
        "translate3d(" +
        (mouse.current.x - 16) +
        "px, " +
        (mouse.current.y - 16) +
        "px, 0)";

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 md:block"
      aria-hidden="true"
    >
      {/* =================================
          OUTER PURPLE CIRCLE
      ================================== */}

      <div
        data-cursor-circle
        className="absolute inset-0 rounded-full border border-purple-500/50 bg-purple-500/10 opacity-40 transition-[transform,opacity] duration-200 ease-out"
      />

      {/* =================================
          CENTER PURPLE DOT
      ================================== */}

      <div
        data-cursor-dot
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_12px_3px_rgba(168,85,247,0.7)]"
      />
    </div>
  );
}