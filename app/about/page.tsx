import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Build",
    description:
      "We create modern websites and digital products that give businesses a strong online foundation.",
  },
  {
    number: "02",
    title: "Grow",
    description:
      "We use digital growth strategies to help businesses become more visible, attract the right audience, and generate opportunities.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "We connect tools, workflows, and automation to reduce repetitive work and make everyday operations more efficient.",
  },
];

const values = [
  {
    title: "Business First",
    description:
      "Technology should solve a business problem, not create unnecessary complexity.",
  },
  {
    title: "Keep It Simple",
    description:
      "We believe powerful digital solutions should still be easy to understand and use.",
  },
  {
    title: "Build for Growth",
    description:
      "We think beyond launch and create systems that can evolve with the business.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We aim to build lasting partnerships instead of treating every project as a one-time transaction.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Yorra Tech
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            We build digital solutions for businesses ready to{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              move forward.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Yorra Tech is a digital solutions company focused on three things:
            building strong digital experiences, helping businesses grow
            online, and automating repetitive work.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              One partner.
              <br />
              <span className="text-gray-500">Three capabilities.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              Many businesses need more than just a website. They need a
              digital presence that builds trust, a strategy that brings
              customers, and systems that make their operations easier.
            </p>

            <p>
              That is why Yorra Tech brings website development, digital
              growth, and business automation together under one roof.
            </p>

            <p>
              We work closely with businesses to understand what they are
              trying to achieve and then build practical technology around
              those goals.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-[#070a10] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Believe
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Build. Grow.{" "}
              <span className="text-gray-500">Automate.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                  {pillar.number}
                </span>

                <h3 className="mt-8 text-3xl font-black">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              How we{" "}
              <span className="text-gray-500">work.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="bg-[#05070b] p-7 sm:p-9 lg:p-10"
              >
                <h3 className="text-xl font-bold sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-10 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Ready to build what&apos;s next?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Tell us about your business, your idea, or the problem you want
            to solve.
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