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
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[45%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Portfolio
              </span>

            </div>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Selected
              <br />
              <span className="text-gray-600">
                work.
              </span>
            </h2>

          </div>


          <div className="max-w-md">

            <p className="text-sm leading-6 text-gray-500 sm:text-base">
              Explore a selection of original digital concepts created
              to show what Yorra Tech can build across different industries.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              Concept Projects

            </div>

          </div>

        </div>


        {/* =====================================================
            FEATURED PROJECTS

            Desktop → 2
            Tablet → 2
            Mobile → 1
        ===================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20">

          {projects.map((project) => (

            <article
              key={project.name}
              className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#090d14] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative aspect-[16/9] overflow-hidden bg-[#0b1018]">

                <img
                  src={project.image}
                  alt={`${project.name} website prototype`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                />

                {/* Dark Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />


                {/* Project Number */}

                <span className="absolute left-5 top-5 z-10 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  {project.number}
                </span>


                {/* Concept Badge */}

                <span className="absolute bottom-5 left-5 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/65 backdrop-blur-xl">
                  Concept Project
                </span>


                {/* Arrow */}

                <Link
                  href={project.href}
                  aria-label={`View ${project.name} prototype`}
                  className="absolute bottom-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:text-black"
                >
                  ↗
                </Link>


                {/* Hover Overlay */}

                <Link
                  href={project.href}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >

                  <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">

                    View Prototype

                    <span className="text-cyan-400">
                      ↗
                    </span>

                  </span>

                </Link>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="p-5 sm:p-6">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Concept Project
                </p>


                <div className="mt-2 flex items-start justify-between gap-5">

                  <div>

                    <h3 className="text-2xl font-bold tracking-tight">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-600">
                      {project.category}
                    </p>

                  </div>


                  <Link
                    href={project.href}
                    aria-label={`View ${project.name} prototype`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    ↗
                  </Link>

                </div>


                <p className="mt-4 text-xs leading-5 text-gray-500">
                  {project.description}
                </p>


                <Link
                  href={project.href}
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-cyan-400"
                >
                  View Prototype

                  <span>
                    ↗
                  </span>

                </Link>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/Portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-white hover:text-black"
          >

            View All Projects

            <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>


        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            Selected Concepts
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            2 Featured / 10 Total
          </span>

        </div>

      </div>

    </section>
  );
}