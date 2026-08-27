"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticleFootball from "./ParticleFootball";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#F8F3E8] text-[#0F172A]"
      aria-labelledby="hero-heading"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple glow */}

        <div className="absolute left-[35%] top-[-180px] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />

        {/* Green glow */}

        <div className="absolute right-[-150px] top-1/3 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[110px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
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

          <div className="relative max-w-4xl">

            {/* Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-white/50 px-4 py-2 text-xs font-medium text-[#0F172A] backdrop-blur-md sm:text-sm">

              <Sparkles className="h-4 w-4 text-purple-600" />

              Digital Solutions for Modern Businesses

            </div>

            {/* Heading */}

            <h1
              id="hero-heading"
              className="text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            >

              <span className="block font-extrabold text-[#433A8F]">
                Build.
              </span>

              <span className="block font-extrabold text-[#075C4D]">
                Grow.
              </span>

              <span className="block font-extrabold text-[#7D3014]">
                Automate.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-base font-medium leading-8 tracking-[-0.01em] text-[#475569] sm:text-lg lg:text-xl">

              Yorra Tech is a digital solutions company helping businesses
              build high-performance websites, strengthen their online
              presence, and automate business operations with modern,
              scalable technology.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              {/* Start a Project */}

              <Link
                href="/contact"
                aria-label="Start a digital project with Yorra Tech"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#433A8F] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#342D72] hover:shadow-[0_10px_40px_rgba(67,58,143,0.30)] sm:px-7 sm:py-4"
              >

                Start a Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

              {/* Explore Services */}

              <Link
                href="/services"
                aria-label="Explore Yorra Tech digital services"
                className="inline-flex items-center justify-center rounded-xl border border-[#0F172A]/15 bg-white/40 px-6 py-3.5 text-sm font-bold text-[#0F172A] transition duration-300 hover:-translate-y-1 hover:border-[#075C4D]/40 hover:bg-white/70 sm:px-7 sm:py-4"
              >

                Explore Services

              </Link>

            </div>

            {/* Trust Points */}

            <div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#64748B] sm:text-sm"
              aria-label="Yorra Tech core services"
            >

              <span>Website Development</span>

              <span aria-hidden="true">•</span>

              <span>Digital Growth</span>

              <span aria-hidden="true">•</span>

              <span>Business Automation</span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-28 bg-gradient-to-t from-[#F8F3E8] to-transparent" />

    </section>
  );
}