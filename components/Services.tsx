import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performance websites and digital products designed to make your business look credible and convert visitors into customers.",
    tags: ["Business Websites", "Landing Pages", "E-commerce", "Web Apps"],
  },
  {
    number: "02",
    title: "Digital Growth",
    description:
      "Data-driven strategies that help your business get discovered, attract qualified visitors, and turn attention into measurable growth.",
    tags: ["SEO", "Local SEO", "Lead Generation", "Analytics"],
  },
  {
    number: "03",
    title: "Business Automation",
    description:
      "Smart systems that connect your tools, automate repetitive work, and give your team more time to focus on the business.",
    tags: ["AI Solutions", "CRM", "WhatsApp", "Workflows"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#05070b] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Everything your business needs to{" "}
            <span className="text-gray-500">move forward.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            From building your digital presence to growing your reach and
            automating your operations, we create solutions around your
            business goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-cyan-400">
                  {service.number}
                </span>

                <span className="text-2xl text-gray-700 transition-all duration-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-px w-12 bg-cyan-400/50 transition-all duration-500 group-hover:w-24" />

              {/* Content */}
              <h3 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/15 group-hover:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom glow */}
              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.12]" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-semibold text-white">
              Have a specific business challenge?
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Tell us what you are trying to achieve. We&apos;ll figure out
              the right digital solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:bg-cyan-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}