const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, challenges, and goals before deciding what needs to be built.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We turn your goals into a clear digital strategy, project roadmap, and execution plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team designs and develops the solution with performance, usability, and scalability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test everything, optimize the final experience, and get your digital product ready for the real world.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "After launch, we help you improve, attract more customers, and automate the processes that matter.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute right-[-180px] top-[10%] h-[380px] w-[380px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              How We Work
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            From idea to{" "}
            <span className="text-gray-500">impact.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            A simple, transparent process designed to turn ambitious ideas
            into digital products that actually move your business forward.
          </p>
        </div>

        {/* =========================================================
            PROCESS TIMELINE
        ========================================================== */}

        <div className="relative mt-16 sm:mt-20">
          {/* Desktop timeline base */}
          <div className="absolute left-[5%] right-[5%] top-[31px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {/* Desktop animated-looking cyan progress */}
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[31px] hidden lg:block">
            <div className="h-px w-full bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent opacity-70" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative lg:min-w-0"
              >
                {/* =====================================================
                    MOBILE / TABLET CONNECTOR
                ====================================================== */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-[27px] top-[64px] hidden h-[calc(100%+20px)] w-px bg-gradient-to-b from-white/15 to-transparent sm:block lg:hidden" />
                )}

                {/* =====================================================
                    STEP CARD
                ====================================================== */}

                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-7 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:hover:border-transparent lg:hover:bg-transparent lg:hover:shadow-none">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.08] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:-right-8 lg:-top-8" />

                  {/* ===================================================
                      NUMBER
                  ==================================================== */}

                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                        {/* Outer glow */}
                        <div className="absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Circle */}
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#05070b] text-sm font-bold text-cyan-400 shadow-[0_0_0_6px_rgba(255,255,255,0.015)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:bg-cyan-400 group-hover:text-black group-hover:shadow-[0_0_0_6px_rgba(34,211,238,0.06)]">
                          {step.number}
                        </div>
                      </div>

                      {/* Small label */}
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600 lg:hidden">
                        Step {index + 1}
                      </span>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="mt-6 lg:mt-7">
                      <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom step indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-px w-5 bg-white/10 transition-all duration-500 group-hover:w-9 group-hover:bg-cyan-400/50" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-700 transition-colors duration-300 group-hover:text-cyan-400/70">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] via-white/[0.02] to-cyan-400/[0.025] p-7 sm:mt-20 sm:p-9 lg:p-10">
          {/* CTA glow */}
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.06] blur-[100px]" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Our approach
                </p>
              </div>

              <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
                Clear process. Better outcomes.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                You always know what we are working on, why we are doing it,
                and what comes next.
              </p>
            </div>

            {/* Process flow */}
            <div className="shrink-0">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold sm:text-sm">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 text-cyan-300">
                  Discover
                </span>

                <span className="text-gray-700">→</span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-gray-400">
                  Strategy
                </span>

                <span className="text-gray-700">→</span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-gray-400">
                  Build
                </span>

                <span className="text-gray-700">→</span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-gray-400">
                  Grow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small closing line */}
        <div className="mt-8 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-white/10" />

          <span className="text-xs text-gray-600">
            Built with clarity. Delivered with purpose.
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
}