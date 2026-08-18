import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[150px]" />

        {/* Side glows */}
        <div className="absolute left-[-180px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[130px]" />

        <div className="absolute right-[-180px] top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.025] blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* =========================================================
            MAIN CTA CARD
        ========================================================== */}

        <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-cyan-400/[0.025] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* =====================================================
              CARD GLOW
          ====================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[100px] transition-all duration-700 group-hover:bg-cyan-400/[0.1]" />

          {/* Top highlight */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* =====================================================
              LABEL
          ====================================================== */}

          <div className="relative flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-cyan-400/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
              Start Something New
            </p>

            <span className="h-px w-7 bg-cyan-400/60" />
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <h2 className="relative mx-auto mt-6 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Have an idea?
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p className="relative mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 lg:text-lg">
            Tell us what you&apos;re trying to build, grow, or automate.
            We&apos;ll help you turn the idea into a practical digital
            solution that moves your business forward.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            {/* Primary */}
            <Link
              href="/contact"
              className="group/button inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)]"
            >
              <span>Start a Project</span>

              <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href="/services"
              className="group/button inline-flex items-center justify-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.025] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06]"
            >
              <span>Explore Services</span>

              <span className="text-gray-500 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:text-cyan-400">
                ↗
              </span>
            </Link>
          </div>

          {/* =====================================================
              PROCESS INDICATORS
          ====================================================== */}

          <div className="relative mx-auto mt-14 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                Strategy
              </span>
            </div>

            <span className="text-gray-800">/</span>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                Design
              </span>
            </div>

            <span className="text-gray-800">/</span>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                Build
              </span>
            </div>

            <span className="text-gray-800">/</span>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                Grow
              </span>
            </div>
          </div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}

          <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* =====================================================
              FOOTER LINE
          ====================================================== */}

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-700">
              Build
            </span>

            <span className="text-gray-800">·</span>

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-700">
              Grow
            </span>

            <span className="text-gray-800">·</span>

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-700">
              Automate
            </span>
          </div>
        </div>

        {/* =========================================================
            BOTTOM MICRO COPY
        ========================================================== */}

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/[0.06]" />

          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            Let&apos;s create something meaningful
          </p>

          <span className="h-px w-8 bg-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}