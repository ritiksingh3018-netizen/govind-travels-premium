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
      {/* Background */}
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            How We Work
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            From idea to{" "}
            <span className="text-gray-500">impact.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            A simple, transparent process designed to keep your project moving
            without unnecessary complexity.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <article key={step.number} className="group relative">
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#05070b] text-sm font-bold text-cyan-400 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-black">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet connector */}
                <div className="absolute left-7 top-14 hidden h-full w-px bg-white/10 sm:block lg:hidden" />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                Clear process. Better outcomes.
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                You always know what we are working on, why we are doing it,
                and what comes next.
              </p>
            </div>

            <div className="shrink-0 text-sm font-semibold text-cyan-400">
              Discover → Build → Grow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}