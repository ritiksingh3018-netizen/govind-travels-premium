import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    short:
      "High-performance digital experiences built around your business goals.",
    description:
      "We design and develop modern websites that communicate your value clearly, build trust, and turn visitors into customers.",
    features: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Custom web applications",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "Digital Growth",
    short:
      "Strategies that help your business get discovered and generate better opportunities.",
    description:
      "A great website is only the beginning. We help businesses improve visibility, attract relevant traffic, and create a stronger path from visitor to customer.",
    features: [
      "Search Engine Optimization",
      "Local SEO",
      "Google Business optimization",
      "Lead generation",
      "Conversion optimization",
      "Analytics & tracking",
    ],
  },
  {
    number: "03",
    title: "Business Automation",
    short:
      "Smart systems that reduce repetitive work and help your business operate better.",
    description:
      "We connect tools and workflows to automate repetitive tasks, improve follow-ups, and give your team more time to focus on important work.",
    features: [
      "AI-powered workflows",
      "CRM automation",
      "WhatsApp workflows",
      "Email automation",
      "Lead follow-ups",
      "Custom business workflows",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Services
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Digital solutions built to{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            From your first website to advanced growth systems and business
            automation, Yorra Tech helps you build, grow, and operate better.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-5">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-9 lg:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                {/* Left */}
                <div>
                  <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                    {service.number}
                  </span>

                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
                    {service.short}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p className="text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
                      >
                        <span className="text-cyan-400">✓</span>
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Have a project in mind?
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s build something that matters.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Tell us what you want to build, grow, or automate and we&apos;ll
            help you figure out the right approach.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-cyan-300"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  );
}