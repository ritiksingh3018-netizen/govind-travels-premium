import Link from "next/link";

const projects = [
  {
    name: "Nexa Studio",
    category: "Creative Agency",
    description:
      "A bold creative agency concept designed around strong visuals and a premium digital experience.",
    number: "01",
    image: "/Portfolio/nexa-studio.png",
    href: "/Portfolio/nexa-studio",
  },
  {
    name: "Aurex",
    category: "Business",
    description:
      "A premium corporate concept focused on trust, clarity and a strong digital presence.",
    number: "02",
    image: "/Portfolio/aurex.png",
    href: "/Portfolio/aurex",
  },
];

export default function HomePortfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#05070b] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[150px]" />

        <div className="absolute left-[-180px] top-[50%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute right-[-180px] top-[25%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.02] blur-[130px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Work that
              <br />
              <span className="text-gray-600">speaks for itself.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Explore a selection of original digital concepts created to
              demonstrate how Yorra Tech approaches design, technology, and
              digital experiences.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Featured Concepts
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            PROJECTS
        ========================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#090d14] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
            >
              {/* =====================================================
                  IMAGE
              ====================================================== */}

              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1018]">
                {/* Image */}
                <img
                  src={project.image}
                  alt={`${project.name} website prototype`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-black/20 opacity-90" />

                {/* Hover cyan light */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* =================================================
                    TOP META
                ================================================== */}

                <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-cyan-400">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur-xl">
                    Concept
                  </span>
                </div>

                {/* =================================================
                    IMAGE BOTTOM INFO
                ================================================== */}

                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      {project.category}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.name}
                    </h3>
                  </div>

                  {/* Circle arrow */}
                  <Link
                    href={project.href}
                    aria-label={`View ${project.name} prototype`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/35 text-lg text-white/70 backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-black"
                  >
                    ↗
                  </Link>
                </div>

                {/* =================================================
                    CENTER HOVER CTA
                ================================================== */}

                <Link
                  href={project.href}
                  aria-label={`View ${project.name} prototype`}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/[0.08] opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  <span className="flex translate-y-3 items-center gap-3 rounded-full border border-white/15 bg-black/55 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-0">
                    View Prototype

                    <span className="text-cyan-400">↗</span>
                  </span>
                </Link>
              </div>

              {/* =====================================================
                  CONTENT
              ====================================================== */}

              <div className="relative p-6 sm:p-7">
                {/* subtle top line */}
                <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>

                  <span className="text-[10px] font-medium tracking-[0.2em] text-gray-700">
                    {project.number}
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="group/link mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/50 transition-colors duration-300 hover:text-cyan-400"
                >
                  Explore Project

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            VIEW ALL CTA
        ========================================================== */}

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="/Portfolio"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/[0.1] bg-white/[0.025] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white hover:text-black"
          >
            <span>View All Projects</span>

            <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
              →
            </span>
          </Link>
        </div>

        {/* =========================================================
            FOOTER META
        ========================================================== */}

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            Yorra Tech / Selected Work
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            02 Featured Concepts
          </span>
        </div>
      </div>
    </section>
  );
}