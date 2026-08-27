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
        bg-[#F8F3E8]
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
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/[0.10]
            blur-[100px]
            animate-pulse
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.16]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.28) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      {/* =========================================
          LOGO + BRAND NAME
      ========================================= */}

      <div
        className={`
          relative
          z-10
          flex
          flex-col
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
        {/* Logo Glow */}

        <div
          className="
            absolute
            h-[170px]
            w-[170px]
            rounded-full
            bg-purple-500/[0.12]
            blur-[55px]
            animate-logoGlow
          "
        />

        {/* Logo Icon */}

        <Image
          src="/yorra-tech-logo.png"
          alt="Yorra Tech Logo"
          width={180}
          height={180}
          loading="eager"
          className="
            relative
            z-10
            h-auto
            w-[120px]
            object-contain
            drop-shadow-[0_0_35px_rgba(67,58,143,0.25)]
            sm:w-[145px]
          "
        />

        {/* Yorra Tech */}

        <div
          className="
            relative
            z-10
            mt-4
            text-2xl
            font-black
            tracking-tight
            sm:text-3xl
          "
        >
          <span className="text-[#111827]">
            Yorra
          </span>{" "}
          <span className="text-purple-600">
            Tech
          </span>
        </div>
      </div>

      {/* =========================================
          LOADING LINE
      ========================================= */}

      <div
        className={`
          absolute
          bottom-[18%]
          left-1/2
          z-10
          h-[1px]
          w-32
          -translate-x-1/2
          overflow-hidden
          bg-[#0F172A]/10
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
            bg-purple-500
            animate-loadingLine
          "
        />
      </div>
    </div>
  );
}