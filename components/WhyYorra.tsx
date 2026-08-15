const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We don't build technology just for the sake of it. Every solution starts with your business goal, audience, and desired outcome.",
  },
  {
    number: "02",
    title: "Built to Scale",
    description:
      "Our digital solutions are designed with growth in mind, so your website and systems can evolve as your business grows.",
  },
  {
    number: "03",
    title: "One Digital Partner",
    description:
      "Website development, digital growth, and automation under one roof means less complexity and better coordination.",
  },
  {
    number: "04",
    title: "Modern Technology",
    description:
      "We use modern tools and development practices to create fast, reliable, responsive, and maintainable digital experiences.",
  },
];

export default function WhyYorra() {
  return (
    <section className="relative overflow-hidden bg-[#070a10] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Why Yorra Tech
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Technology that works for your{" "}
              <span className="text-gray-500">business.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:ml-auto">
            We combine strategy, design, development, growth, and automation
            to create digital solutions that are useful today and ready for
            tomorrow.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative bg-[#070a10] p-7 transition-all duration-500 hover:bg-[#0b1019] sm:p-9 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  {reason.number}
                </span>

                <span className="text-2xl text-gray-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">
                {reason.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                {reason.description}
              </p>

              <div className="mt-8 h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400/50" />
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-gray-300 sm:text-3xl lg:text-4xl">
            <span className="text-white">Build something useful.</span>{" "}
            <span className="text-gray-500">
              Grow it with confidence. Automate what slows you down.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}