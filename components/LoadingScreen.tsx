"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
  setClosing(true);
}, 650);

const removeTimer = setTimeout(() => {
  setVisible(false);
}, 1000);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#05070b]
        transition-opacity
        duration-600
        ease-out
        ${
          closing
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }
      `}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.08]
          blur-[90px]
          animate-pulse
        "
      />

      {/* =========================================
          LOGO WRAPPER
      ========================================= */}

      <div
        className={`
          relative
          flex
          items-center
          justify-center
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            closing
              ? "scale-[1.18] opacity-0 blur-[3px]"
              : "animate-logoEntrance"
          }
        `}
      >
        {/* Outer glow */}

        <div
          className="
            absolute
            h-[170px]
            w-[170px]
            rounded-full
            bg-cyan-400/[0.12]
            blur-[55px]
            animate-logoGlow
          "
        />

        {/* Logo */}

        <Image
          src="/logo.png"
          alt="Yorra Tech"
          width={180}
          height={180}
          priority
          className="
            relative
            z-10
            h-auto
            w-[145px]
            object-contain
            drop-shadow-[0_0_35px_rgba(0,200,255,0.25)]
            sm:w-[180px]
          "
        />
      </div>

      {/* =========================================
          LOADING LINE
      ========================================= */}

      <div
        className={`
          absolute
          bottom-[18%]
          left-1/2
          h-[1px]
          w-32
          -translate-x-1/2
          overflow-hidden
          bg-white/[0.08]
          transition-opacity
          duration-300
          ${
            closing
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        <div
          className="
            h-full
            w-full
            origin-left
            bg-cyan-400
            animate-loadingLine
          "
        />
      </div>
    </div>
  );
}