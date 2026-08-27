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
    canonical: "https://yorra.in/about",
  },
  openGraph: {
    title: "About Yorra Tech | Digital Solutions & Business Automation",
    description:
      "Discover Yorra Tech and our approach to website development, digital growth, and business automation.",
    url: "https://yorra.in/about",
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

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Yorra Tech",
    url: "https://yorra.in/about",
    description:
      "Learn about Yorra Tech, a digital solutions company focused on website development, digital growth, and business automation.",
    isPartOf: {
      "@type": "WebSite",
      name: "Yorra Tech",
      url: "https://yorra.in",
    },
    about: {
      "@type": "Organization",
      name: "Yorra Tech",
      url: "https://yorra.in",
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F3E8] text-slate-900">

      {/* =========================================================
          GLOBAL GRID BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71,58,45,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(71,58,45,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft purple ambient glow */}

      <div className="pointer-events-none fixed left-1/2 top-[-260px] z-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.035] blur-[150px]" />

      <div className="pointer-events-none fixed right-[-250px] top-[35%] z-0 h-[500px] w-[500px] rounded-full bg-[#433A8F]/[0.025] blur-[150px]" />

      <div className="pointer-events-none fixed bottom-[-250px] left-[-220px] z-0 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/[0.025] blur-[150px]" />

      {/* =========================================================
          ORGANIZATION SCHEMA
      ========================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        aria-labelledby="about-page-heading"
        className="relative z-10 isolate overflow-hidden px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-32 lg:pt-44"
      >

        {/* Hero glow */}

        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.035] blur-[150px]" />

        {/* Hero grid overlay */}

        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(71,58,45,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(71,58,45,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
          }}
        />


        <div className="relative mx-auto max-w-7xl">

          {/* Label */}

          <div className="flex items-center gap-3">

            <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
              About Yorra Tech
            </p>

          </div>

          {/* Heading */}

          <h1 id="about-page-heading" className="mt-6 max-w-6xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-slate-900 sm:text-6xl lg:text-8xl">

            We build digital

            <br />

            <span className="bg-gradient-to-r from-[#433A8F] via-[#7C3AED] to-[#9B7BFF] bg-clip-text text-transparent">
              solutions that move
            </span>

            <br />

            businesses forward.

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Yorra Tech is a digital solutions company focused on website
            development, digital growth, and business automation. We help
            businesses build a stronger digital presence and create systems
            that make growth easier.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#7C3AED] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(124,58,237,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D28D9] hover:shadow-[0_15px_40px_rgba(124,58,237,0.24)]"
            >
              Start a Project

              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#story"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-[#7C3AED]"
            >
              Our story

              <span aria-hidden="true" className="text-[#7C3AED] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>

          </div>

        </div>

        {/* Bottom fade */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F3E8] to-transparent" />

      </section>

      {/* =========================================================
          STATS
      ========================================================== */}

      <section className="relative z-10 border-y border-slate-900/[0.08] bg-[#F8F3E8]/70 backdrop-blur-sm">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-900/[0.08] sm:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.number}
              className="group px-5 py-8 transition-colors duration-500 hover:bg-white/50 sm:px-8 sm:py-10"
            >

              <p className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#7C3AED] sm:text-3xl">
                {stat.number}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                {stat.title}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                {stat.subtitle}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================================
          OUR STORY
      ========================================================== */}

      <section
        id="story"
        aria-labelledby="story-heading"
        className="relative z-10 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >

        <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#433A8F]/[0.025] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}

          <div className="max-w-4xl">

            <div className="flex items-center gap-3">

              <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
                Our Story
              </p>

            </div>

            <h2 id="story-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Built around a
              <br />
              <span className="text-slate-400">simple idea.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
              Yorra Tech was built around a simple belief: technology should
              make business better, not more complicated.
            </p>

          </div>

          {/* Journey */}

          <div className="relative mt-16">

            {/* Connecting line */}

            <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-[#7C3AED]/50 via-slate-900/10 to-transparent sm:block" />

            <div className="space-y-5">

              {journey.map((item) => (

                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-900/[0.08] bg-white/[0.48] p-7 shadow-[0_10px_35px_rgba(45,35,30,0.035)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#7C3AED]/25 hover:bg-white/[0.68] hover:shadow-[0_18px_50px_rgba(124,58,237,0.08)] sm:p-9 lg:p-10"
                >

                  <div className="grid gap-7 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start">

                    {/* Number */}

                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#F8F3E8] text-[10px] font-bold text-[#7C3AED] transition-all duration-500 group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white">
                      {item.number}
                    </div>

                    {/* Title */}

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}

                    <p className="text-sm leading-7 text-slate-500 sm:text-base">
                      {item.text}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

          {/* Quote */}

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#7C3AED]/10 bg-gradient-to-br from-[#7C3AED]/[0.06] to-white/20 p-7 sm:p-10">

            <div className="absolute right-[-50px] top-[-60px] h-40 w-40 rounded-full bg-[#7C3AED]/[0.08] blur-3xl" />

            <p className="relative max-w-4xl text-lg font-semibold leading-8 text-slate-800 sm:text-2xl sm:leading-10">
              “We believe the best technology is not the technology that
              looks complicated — it is the technology that makes the
              business work better.”
            </p>

          </div>

        </div>

      </section>

      {/* =========================================================
          THREE PILLARS
      ========================================================== */}

      <section
        aria-labelledby="pillars-heading"
        className="relative z-10 overflow-hidden border-y border-slate-900/[0.06] bg-[#F2EBDD]/75 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.025] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
                What We Do
              </p>

            </div>

            <h2 id="pillars-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Build. Grow.
              <span className="text-slate-400"> Automate.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Three connected capabilities designed to help businesses build
              a stronger digital foundation, attract opportunities, and work
              more efficiently.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {pillars.map((pillar) => (

              <article
                key={pillar.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-900/[0.08] bg-white/[0.55] p-7 shadow-[0_10px_35px_rgba(45,35,30,0.035)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#7C3AED]/30 hover:bg-white/[0.75] hover:shadow-[0_20px_55px_rgba(124,58,237,0.09)] sm:p-9"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold tracking-[0.2em] text-[#7C3AED]">
                    {pillar.number}
                  </span>

                  <span className="text-3xl font-light text-slate-900/[0.08] transition-colors duration-500 group-hover:text-[#7C3AED]/30">
                    ↗
                  </span>

                </div>

                <div className="mt-8 h-px w-10 bg-[#7C3AED] transition-all duration-500 group-hover:w-24" />

                <h3 className="mt-7 text-3xl font-black tracking-tight text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  {pillar.description}
                </p>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#7C3AED]/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHAT WE HELP BUSINESSES WITH
      ========================================================== */}

      <section
        aria-labelledby="capabilities-heading"
        className="relative z-10 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
                Our Capabilities
              </p>

            </div>

            <h2 id="capabilities-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              More than
              <br />
              <span className="text-slate-400">just websites.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              From your first digital presence to growth systems and
              automation, we help businesses solve practical digital
              problems.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-[#7C3AED]"
            >
              Explore our services

              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* Right */}

          <div className="grid gap-3 sm:grid-cols-2">

            {capabilities.map((capability, index) => (

              <div
                key={capability}
                className="group flex items-center justify-between rounded-2xl border border-slate-900/[0.08] bg-white/[0.45] px-5 py-5 shadow-[0_6px_25px_rgba(45,35,30,0.025)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/25 hover:bg-white/[0.7]"
              >

                <div className="flex items-center gap-4">

                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#7C3AED]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                    {capability}
                  </span>

                </div>

                <span aria-hidden="true" className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7C3AED]">
                  →
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}

      <section
        aria-labelledby="values-heading"
        className="relative z-10 border-y border-slate-900/[0.06] bg-[#F2EBDD]/75 px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
                  Our Values
                </p>

              </div>

              <h2 id="values-heading" className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
                How we
                <span className="text-slate-400"> work.</span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              The principles behind the decisions we make, the products we
              build, and the partnerships we create.
            </p>

          </div>

          <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-slate-900/[0.08] sm:grid-cols-2">

            {values.map((value, index) => (

              <article
                key={value.title}
                className={`group relative overflow-hidden bg-white/[0.45] p-7 transition-all duration-500 hover:bg-white/[0.7] sm:p-9 lg:p-11 ${
                  index < 2 ? "border-b border-slate-900/[0.07]" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-slate-900/[0.07]"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="text-xs font-semibold tracking-[0.2em] text-[#7C3AED]">
                    {value.number}
                  </span>

                  <span className="text-slate-900/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7C3AED]/50">
                    ↗
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-0 bg-[#7C3AED] transition-all duration-500 group-hover:w-16" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          VISION
      ========================================================== */}

      <section
        aria-labelledby="vision-heading"
        className="relative z-10 overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/[0.035] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="flex items-center justify-center gap-3">

            <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7C3AED] sm:text-sm">
              Where We&apos;re Going
            </p>

            <span aria-hidden="true" className="h-px w-8 bg-[#7C3AED]" />

          </div>

          <h2 id="vision-heading" className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">

            Building the digital

            <br />

            <span className="bg-gradient-to-r from-[#433A8F] via-[#7C3AED] to-[#9B7BFF] bg-clip-text text-transparent">
              future of business.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            We want Yorra Tech to become a long-term digital partner for
            businesses that want to use technology not just to look better
            online, but to operate smarter and grow with confidence.
          </p>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section
        aria-labelledby="about-cta-heading"
        className="relative z-10 overflow-hidden px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/[0.04] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-900/[0.08] bg-white/[0.5] px-6 py-16 text-center shadow-[0_25px_80px_rgba(45,35,30,0.05)] backdrop-blur-sm sm:px-10 sm:py-20 lg:px-16 lg:py-24">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C3AED] sm:text-sm">
            Let&apos;s Work Together
          </p>

          <h2 id="about-cta-heading" className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">

            Ready to build

            <br />

            <span className="bg-gradient-to-r from-[#433A8F] via-[#7C3AED] to-[#9B7BFF] bg-clip-text text-transparent">
              what&apos;s next?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Tell us about your business, your idea, or the problem you want
            to solve. We&apos;ll help you find the right digital approach.
          </p>

          <Link
            href="/contact"
            aria-label="Start a project with Yorra Tech"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#7C3AED] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_35px_rgba(124,58,237,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D28D9] hover:shadow-[0_15px_45px_rgba(124,58,237,0.25)]"
          >
            Start a Project

            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

          <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-slate-400">
            Build · Grow · Automate
          </p>

        </div>

      </section>

    </main>
  );
}