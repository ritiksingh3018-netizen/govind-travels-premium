import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Build",
    description:
      "We create modern websites and digital products that give businesses a strong, credible, and scalable digital foundation.",
  },
  {
    number: "02",
    title: "Grow",
    description:
      "We help businesses improve their online visibility, attract the right audience, and turn digital attention into meaningful opportunities.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "We connect tools, workflows, and automation to reduce repetitive work and help businesses operate more efficiently.",
  },
];

const values = [
  {
    number: "01",
    title: "Business First",
    description:
      "Technology should solve a real business problem and create measurable value instead of adding unnecessary complexity.",
  },
  {
    number: "02",
    title: "Keep It Simple",
    description:
      "Powerful digital solutions should still be easy for businesses and their customers to understand and use.",
  },
  {
    number: "03",
    title: "Build for Growth",
    description:
      "We think beyond launch and build digital systems that can evolve as the business grows.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description:
      "We want to build lasting partnerships and continuously improve the digital systems behind a business.",
  },
];

const stats = [
  {
    number: "01",
    title: "Digital First",
    subtitle: "Approach",
  },
  {
    number: "03",
    title: "Core",
    subtitle: "Capabilities",
  },
  {
    number: "∞",
    title: "Growth",
    subtitle: "Mindset",
  },
  {
    number: "24/7",
    title: "Ideas",
    subtitle: "Never Stop",
  },
];

const journey = [
  {
    number: "01",
    title: "The Idea",
    text: "Yorra Tech started with a simple observation: businesses often need more than a website. They need technology that actually supports the way they work and grow.",
  },
  {
    number: "02",
    title: "The Problem",
    text: "A digital presence, marketing, customer follow-ups, and repetitive business tasks are often handled separately. That can create unnecessary complexity and slow businesses down.",
  },
  {
    number: "03",
    title: "The Approach",
    text: "We brought website development, digital growth, and business automation together so businesses can work with one digital partner instead of trying to solve every problem separately.",
  },
  {
    number: "04",
    title: "The Vision",
    text: "The goal is simple: build practical digital solutions that help businesses look better online, reach more customers, and operate more efficiently.",
  },
];

const capabilities = [
  "Website Development",
  "Landing Pages",
  "E-commerce",
  "SEO & Digital Growth",
  "Lead Generation",
  "Business Automation",
  "AI-powered Workflows",
  "CRM Automation",
];

export const metadata = {
  title: "About Yorra Tech | Digital Solutions, Web Development & Automation",
  description:
    "Learn about Yorra Tech, a digital solutions company helping businesses build modern websites, grow online, generate opportunities, and automate repetitive business processes.",
  keywords: [
    "Yorra Tech",
    "Yorra Tech India",
    "digital solutions company",
    "web development company",
    "website development",
    "digital growth",
    "business automation",
    "AI automation",
    "SEO services",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Yorra Tech | Digital Solutions & Business Automation",
    description:
      "Discover Yorra Tech and our approach to website development, digital growth, and business automation.",
    url: "/about",
    siteName: "Yorra Tech",
    type: "website",
  },
};

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yorra Tech",
    url: "https://yorra.in",
    description:
      "Yorra Tech is a digital solutions company focused on website development, digital growth, and business automation.",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =========================================================
          ORGANIZATION SCHEMA
      ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 sm:px-8 lg:px-10 lg:pb-32 lg:pt-44">
        {/* Main glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/[0.065] blur-[150px] animate-pulse" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
          }}
        />

        {/* Floating particles */}
        <div className="pointer-events-none absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] animate-ping" />

        <div className="pointer-events-none absolute right-[15%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse" />

        <div className="relative mx-auto max-w-7xl">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              About Yorra Tech
            </p>
          </div>

          {/* H1 */}
          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            We build digital
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              solutions that move
            </span>

            <br />

            businesses forward.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Yorra Tech is a digital solutions company focused on website
            development, digital growth, and business automation. We help
            businesses build a stronger digital presence and create systems
            that make growth easier.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Start a Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#story"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-gray-500 transition-colors hover:text-white"
            >
              Our story

              <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070b] to-transparent" />
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.06] sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="group px-5 py-8 transition-colors duration-500 hover:bg-white/[0.025] sm:px-8 sm:py-10"
            >
              <p className="text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400 sm:text-3xl">
                {stat.number}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-300">
                {stat.title}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gray-600">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section
        id="story"
        className="relative px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
                Our Story
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Built around a
              <br />
              <span className="text-gray-600">simple idea.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
              Yorra Tech was built around a simple belief: technology should
              make business better, not more complicated.
            </p>
          </div>

          {/* Journey */}
          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent sm:block" />

            <div className="space-y-5">
              {journey.map((item) => (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] sm:p-9 lg:p-10"
                >
                  <div className="grid gap-7 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start">
                    {/* Number */}
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-[#05070b] text-[10px] font-bold text-cyan-400 transition-all duration-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                      {item.number}
                    </div>

                    {/* Title */}
                    <div>
                      <p className="text-xl font-bold sm:text-2xl">
                        {item.title}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-7 text-gray-500 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-7 sm:p-10">
            <div className="absolute right-[-50px] top-[-60px] h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <p className="relative max-w-4xl text-lg font-semibold leading-8 text-white sm:text-2xl sm:leading-10">
              “We believe the best technology is not the technology that
              looks complicated — it is the technology that makes the
              business work better.”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          THREE PILLARS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#070a10] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
                What We Do
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Build. Grow.
              <span className="text-gray-600"> Automate.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              Three connected capabilities designed to help businesses build
              a stronger digital foundation, attract opportunities, and work
              more efficiently.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#090d14] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                    {pillar.number}
                  </span>

                  <span className="text-3xl font-light text-white/[0.08] transition-colors duration-500 group-hover:text-cyan-400/30">
                    ↗
                  </span>
                </div>

                <div className="mt-8 h-px w-10 bg-cyan-400 transition-all duration-500 group-hover:w-24" />

                <h3 className="mt-7 text-3xl font-black tracking-tight">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                  {pillar.description}
                </p>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE HELP BUSINESSES WITH
      ========================================================= */}
      <section className="relative px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
                Our Capabilities
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              More than
              <br />
              <span className="text-gray-600">just websites.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              From your first digital presence to growth systems and
              automation, we help businesses solve practical digital
              problems.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-cyan-400"
            >
              Explore our services

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                    {capability}
                  </span>
                </div>

                <span className="text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="relative bg-[#070a10] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
                  Our Values
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                How we
                <span className="text-gray-600"> work.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              The principles behind the decisions we make, the products we
              build, and the partnerships we create.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-white/[0.08] sm:grid-cols-2">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`group relative overflow-hidden bg-[#05070b] p-7 transition-all duration-500 hover:bg-white/[0.025] sm:p-9 lg:p-11 ${
                  index < 2 ? "border-b border-white/[0.07]" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-white/[0.07]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {value.number}
                  </span>

                  <span className="text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400/50">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION
      ========================================================= */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              Where We&apos;re Going
            </p>

            <span className="h-px w-8 bg-cyan-400" />
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Building the digital
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              future of business.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
            We want Yorra Tech to become a long-term digital partner for
            businesses that want to use technology not just to look better
            online, but to operate smarter and grow with confidence.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute left-8 top-8 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.8)]" />

          <div className="pointer-events-none absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Ready to build
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              what&apos;s next?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            Tell us about your business, your idea, or the problem you want
            to solve. We&apos;ll help you find the right digital approach.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Start a Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-gray-700">
            Build · Grow · Automate
          </p>
        </div>
      </section>
    </main>
  );
}