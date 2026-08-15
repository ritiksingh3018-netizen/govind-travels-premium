"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const dotRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      // Smooth follow / trailing effect
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.12;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.12;

      dot.style.transform = `translate3d(
        ${position.current.x - 5}px,
        ${position.current.y - 5}px,
        0
      )`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_4px_rgba(34,211,238,0.7)] md:block"
      aria-hidden="true"
    />
  );
}