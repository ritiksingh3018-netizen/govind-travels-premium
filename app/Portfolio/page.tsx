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
  {
    name: "Mediva",
    category: "Healthcare",
    description:
      "A clean healthcare concept focused on accessibility, trust and simple information discovery.",
    number: "03",
    image: "/Portfolio/mediva.png",
    href: "/Portfolio/mediva",
  },
  {
    name: "Finora",
    category: "Finance",
    description:
      "A professional finance concept designed around clarity, trust and a modern digital experience.",
    number: "04",
    image: "/Portfolio/finora.png",
    href: "/Portfolio/finora",
  },
  {
    name: "CasaForma",
    category: "Interior & Architecture",
    description:
      "A sophisticated architecture concept with a clean editorial aesthetic and premium visual language.",
    number: "05",
    image: "/Portfolio/casaforma.png",
    href: "/Portfolio/casaforma",
  },
  {
    name: "Velora",
    category: "Fashion & E-Commerce",
    description:
      "A luxury fashion concept combining editorial visuals with a modern shopping experience.",
    number: "06",
    image: "/Portfolio/velora.png",
    href: "/Portfolio/velora",
  },
  {
    name: "Eduvia",
    category: "Education",
    description:
      "An education concept designed to make courses, programs and admissions easier to explore.",
    number: "07",
    image: "/Portfolio/eduvia.png",
    href: "/Portfolio/eduvia",
  },
  {
    name: "TerraStay",
    category: "Hospitality",
    description:
      "A premium hospitality concept built around destinations, stays and direct enquiries.",
    number: "08",
    image: "/Portfolio/terrastay.png",
    href: "/Portfolio/terrastay",
  },
  {
    name: "AutoZen",
    category: "Automobile",
    description:
      "A modern automotive concept focused on vehicles, services and a premium digital experience.",
    number: "09",
    image: "/Portfolio/autozen.png",
    href: "/Portfolio/autozen",
  },
  {
    name: "UrbanNest",
    category: "Real Estate",
    description:
      "A premium real-estate concept designed to showcase properties through a clean digital experience.",
    number: "10",
    image: "/Portfolio/urbannest.png",
    href: "/Portfolio/urbannest",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,7,11,0.42), rgba(5,7,11,0.68)), url('/images/Portfolio/portfolio-bg.jpg')",
        }}
      >

        {/* Glow */}

        <div className="pointer-events-none absolute left-[15%] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.045] blur-[140px]" />

        <div className="pointer-events-none absolute right-[-100px] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Our Work
                </span>

              </div>

              <h1 className="mt-7 text-[clamp(4rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.08em]">
                Projects
                <br />
                <span className="text-white/[0.18]">
                  That Matter.
                </span>
              </h1>

            </div>

            <div className="max-w-lg lg:pb-3">

              <p className="text-base leading-8 text-gray-400 sm:text-lg">
                Explore original digital concepts created to demonstrate
                how Yorra Tech approaches different industries, businesses
                and digital experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-500">
                  Original Concepts
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-gray-500">
                  Working Prototypes
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="mt-16 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#090d14]">

            <div className="grid grid-cols-2 sm:grid-cols-4">

              <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r sm:p-8">

                <p className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  10
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                  Concept Projects
                </p>

              </div>

              <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r sm:p-8">

                <p className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  10
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                  Industries
                </p>

              </div>

              <div className="border-r border-white/[0.07] p-6 sm:p-8">

                <p className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  100%
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                  Responsive Direction
                </p>

              </div>

              <div className="p-6 sm:p-8">

                <p className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  ∞
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                  Possibilities
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">

        <div className="mx-auto max-w-[1450px]">

          {/* Section Heading */}

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Concepts built to
                <br />
                <span className="text-white/[0.2]">
                  show what we can create.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Every project below is an original concept created by
              Yorra Tech. These designs are made to demonstrate possible
              digital experiences across different industries.
            </p>

          </div>


          {/* =================================================
              GRID
              Desktop = 3
              Tablet = 2
              Mobile = 1
          ================================================= */}

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.name}
                className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#090d14] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
              >

                {/* IMAGE */}

                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1018]">

                  <img
                    src={project.image}
                    alt={`${project.name} website concept`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Dark Gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Number */}

                  <span className="absolute left-5 top-5 z-10 text-[10px] font-semibold tracking-[0.2em] text-cyan-400">
                    {project.number}
                  </span>


                  {/* Concept Label */}

                  <span className="absolute bottom-5 left-5 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur-xl">
                    Concept Project
                  </span>


                  {/* Arrow */}

                  <Link
                    href={project.href}
                    aria-label={`Open ${project.name}`}
                    className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:text-black"
                  >
                    ↗
                  </Link>


                  {/* Hover Overlay */}

                  <Link
                    href={project.href}
                    className="absolute inset-0 z-[5] flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                      View Prototype
                      <span className="ml-2 text-cyan-400">
                        ↗
                      </span>
                    </span>
                  </Link>

                </div>


                {/* CONTENT */}

                <div className="p-5 sm:p-6">

                  <div className="flex items-center justify-between gap-4">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                      {project.category}
                    </p>

                    <span className="text-[8px] uppercase tracking-[0.16em] text-gray-700">
                      {project.number} / 10
                    </span>

                  </div>


                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">
                    {project.name}
                  </h3>


                  <p className="mt-4 text-xs leading-6 text-gray-500">
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

        </div>

      </section>


      {/* =====================================================
          WHY CONCEPTS
      ===================================================== */}

      <section className="border-y border-white/[0.07] bg-[#080b10] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Why Concepts?
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">
                We don&apos;t just
                <br />
                show ideas.
                <br />
                <span className="text-white/[0.18]">
                  We build them.
                </span>
              </h2>

            </div>


            <div className="grid gap-10 sm:grid-cols-2">

              <div>

                <span className="text-xs text-cyan-400">
                  01
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  See the Possibility
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Every concept gives potential clients a visual
                  direction for what their own digital experience
                  could become.
                </p>

              </div>


              <div>

                <span className="text-xs text-cyan-400">
                  02
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  Explore the Prototype
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We turn ideas into responsive digital experiences
                  rather than relying only on static screenshots.
                </p>

              </div>


              <div>

                <span className="text-xs text-cyan-400">
                  03
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  Different Industries
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  The collection demonstrates different business
                  models, visual directions and user experiences.
                </p>

              </div>


              <div>

                <span className="text-xs text-cyan-400">
                  04
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  Built for Real Work
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Each concept considers real-world requirements
                  such as responsive layouts, navigation and conversion.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090d14] px-6 py-20 text-center sm:px-10 lg:py-28">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[130px]" />

          <div className="relative">

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Your business could be
              <br />
              the next
              <span className="text-white/[0.18]">
                {" "}prototype.
              </span>
            </h2>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              Start Your Project

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER LINE
      ===================================================== */}

      <div className="px-5 pb-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1250px] flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            Original Concept Portfolio
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
            Yorra Tech
          </span>

        </div>

      </div>

    </main>
  );
}