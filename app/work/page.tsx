import Link from "next/link";

const samples = [
  {
    number: "01",
    category: "Education Website",
    title: "PathToNEET",
    description:
      "A sample education-focused website designed around clear information architecture, content discovery, and a professional user experience.",
    tags: ["Website Development", "UI/UX", "SEO"],
  },
  {
    number: "02",
    category: "Travel Website",
    title: "Yorra Travels",
    description:
      "A premium travel website sample focused on destination discovery, package presentation, responsive design, and lead generation.",
    tags: ["Website Development", "UI/UX", "Lead Generation"],
  },
  {
    number: "03",
    category: "Business Website",
    title: "Business Website Sample",
    description:
      "A modern business website concept demonstrating how a company can present its services, build trust, and generate enquiries online.",
    tags: ["Business Website", "Responsive Design", "Conversion"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute right-[-150px] top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Website{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Samples.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Explore a selection of website samples created by Yorra Tech.
            These examples showcase our approach to modern design, responsive
            development, performance, and user experience.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-500">
            Sample projects · Design & Development Showcase
          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-8">
          {samples.map((sample, index) => (
            <article
              key={sample.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-cyan-400/30"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Website Preview */}
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/[0.10] to-blue-500/[0.03] p-6 sm:p-8 lg:min-h-[420px]">
                  <div className="absolute h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[100px] transition-all duration-700 group-hover:bg-cyan-400/[0.12]" />

                  <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#080c13] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400/70" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                        <span className="h-2 w-2 rounded-full bg-green-400/70" />
                      </div>

                      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
                        Website Sample
                      </span>
                    </div>

                    {/* Mock Website */}
                    <div className="p-6 sm:p-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                        {sample.category}
                      </p>

                      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                        {sample.title}
                      </h2>

                      <div className="mt-8 space-y-2">
                        <div className="h-2 w-3/4 rounded-full bg-white/10" />
                        <div className="h-2 w-1/2 rounded-full bg-white/5" />

                        <div className="mt-5 grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-lg border border-white/5 bg-white/[0.03]" />
                          <div className="h-16 rounded-lg border border-white/5 bg-white/[0.03]" />
                          <div className="h-16 rounded-lg border border-white/5 bg-white/[0.03]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                      {sample.number}
                    </span>

                    <span className="text-xl text-gray-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {sample.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    {sample.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                    {sample.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {sample.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      Website Sample
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-10 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Want your website here?
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s build your next website.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Tell us about your business and we&apos;ll create a digital
            experience designed around your goals.
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