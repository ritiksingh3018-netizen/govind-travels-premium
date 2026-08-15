import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Education Platform",
    title: "PathToNEET",
    description:
      "A digital platform designed to help students navigate NEET counselling and discover relevant college information.",
    tags: ["Web Development", "SEO", "Content"],
  },
  {
    number: "02",
    category: "Travel Business",
    title: "Yorra Travels",
    description:
      "A premium travel website concept focused on domestic travel experiences, packages, inquiries, and lead generation.",
    tags: ["Website", "Lead Generation", "UI/UX"],
  },
  {
    number: "03",
    category: "Coming Soon",
    title: "Your Business",
    description:
      "Your next digital project could be here. Let's build something useful, scalable, and designed around your business.",
    tags: ["Strategy", "Development", "Growth"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#070a10] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Work that{" "}
              <span className="text-gray-500">speaks for itself.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              We focus on building digital experiences that look good,
              perform well, and solve real business problems.
            </p>
          </div>

          <Link
            href="/work"
            className="w-fit rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            View All Work →
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#05070b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-8"
            >
              {/* Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
                <div className="absolute h-32 w-32 rounded-full bg-cyan-400/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.16]" />

                <div className="relative text-center">
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                    {project.number}
                  </span>

                  <span className="text-xl text-gray-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}