import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] px-6 py-16 text-center shadow-2xl sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          
          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Start Something New
          </p>

          {/* Heading */}
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Tell us what you&apos;re trying to build, grow, or automate.
            We&apos;ll help you turn the idea into a practical digital
            solution.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Start a Project →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              Explore Services
            </Link>
          </div>

          {/* Bottom line */}
          <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gray-600">
            Build · Grow · Automate
          </p>
        </div>
      </div>
    </section>
  );
}