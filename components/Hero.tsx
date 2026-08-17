"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticleFootball from "./ParticleFootball";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan glow */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />

        {/* Blue glow */}
        <div className="absolute right-[-150px] top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[110px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* =========================
          PARTICLE FIELD
          FULL HERO
      ========================== */}

      <ParticleFootball />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-10">

        <div className="grid w-full items-center lg:grid-cols-2">

          {/* =========================
              LEFT
          ========================== */}

          <div className="relative max-w-3xl">

            {/* Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-md sm:text-sm">

              <Sparkles className="h-4 w-4 text-cyan-400" />

              Digital Solutions for Modern Businesses

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">

              Build.

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                Grow.
              </span>

              <br />

              Automate.

            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:text-xl">

              We help businesses build powerful digital experiences, grow
              their online presence, and automate the work that slows them
              down.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.18)] sm:px-7 sm:py-4"
              >

                Start a Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:px-7 sm:py-4"
              >

                Explore Services

              </Link>

            </div>

            {/* Trust points */}

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500 sm:text-sm">

              <span>Custom Solutions</span>

              <span>•</span>

              <span>Modern Technology</span>

              <span>•</span>

              <span>Business Focused</span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-28 bg-gradient-to-t from-[#05070b] to-transparent" />

    </section>
  );
}