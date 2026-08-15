"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute right-[-150px] top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Digital Solutions for Modern Businesses
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Build.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                Grow.
              </span>
              <br />
              Automate.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:text-xl">
              We help businesses build powerful digital experiences, grow
              their online presence, and automate the work that slows them
              down.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-cyan-300 sm:px-7 sm:py-4"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.07] sm:px-7 sm:py-4"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500 sm:text-sm">
              <span>Custom Solutions</span>
              <span>•</span>
              <span>Modern Technology</span>
              <span>•</span>
              <span>Business Focused</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl backdrop-blur-xl sm:p-6">

              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  Yorra Tech
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080c13] p-5 sm:p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Digital Growth System
                </p>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Your business,
                  <br />
                  built for what&apos;s next.
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="text-xl">🌐</div>
                    <p className="mt-4 text-xs font-semibold text-white">
                      Website Development
                    </p>
                    <p className="mt-2 hidden text-[10px] leading-4 text-gray-500 sm:block">
                      Modern websites built for your business.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="text-xl">📈</div>
                    <p className="mt-4 text-xs font-semibold text-white">
                      Digital Growth
                    </p>
                    <p className="mt-2 hidden text-[10px] leading-4 text-gray-500 sm:block">
                      Strategies designed to bring more customers.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="text-xl">⚙️</div>
                    <p className="mt-4 text-xs font-semibold text-white">
                      Business Automation
                    </p>
                    <p className="mt-2 hidden text-[10px] leading-4 text-gray-500 sm:block">
                      Smart systems that save time and reduce work.
                    </p>
                  </div>

                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">
                      Digital Transformation
                    </span>

                    <span className="font-semibold text-cyan-400">
                      3 / 3
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-[#0a0f18]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8">
              <p className="text-[10px] uppercase tracking-wider text-gray-500">
                Our Approach
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Strategy → Build → Growth
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}