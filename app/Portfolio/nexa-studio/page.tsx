import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Sparkles,
  Monitor,
  PenTool,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "A distinctive visual language designed to make a brand recognizable, confident and memorable.",
    image: "/images/Portfolio/nexa-studio/nexa-brand-identity.jpg",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Digital Experience",
    description:
      "Modern digital experiences built around clarity, usability, emotion and strong visual direction.",
    image: "/images/Portfolio/nexa-studio/nexa-digital-experience.jpg",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "A focused creative direction that connects strategy, design, technology and storytelling.",
    image: "/images/Portfolio/nexa-studio/nexa-creative-direction.jpg",
    icon: PenTool,
  },
];

const projects = [
  {
    number: "01",
    title: "Future Forms",
    category: "Digital Experience",
    description:
      "An experimental digital concept exploring futuristic interfaces, visual systems and immersive interaction.",
    image: "/images/Portfolio/nexa-studio/nexa-project-future-forms.jpg",
  },
  {
    number: "02",
    title: "New Perspective",
    category: "Brand Identity",
    description:
      "A visual identity concept built around simplicity, contrast and a strong contemporary personality.",
    image: "/images/Portfolio/nexa-studio/nexa-project-new-perspective.jpg",
  },
  {
    number: "03",
    title: "Motion / Matter",
    category: "Creative Direction",
    description:
      "A cinematic creative direction concept combining movement, form, atmosphere and digital storytelling.",
    image: "/images/Portfolio/nexa-studio/nexa-project-motion-matter.jpg",
  },
];

export default function NexaStudioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">

      {/* =====================================================
          CONCEPT BAR
      ===================================================== */}

      <div className="border-b border-white/[0.07] bg-[#05070b]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Concept Sample
            </span>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.2em] text-gray-700 sm:block">
            Yorra Tech / Portfolio Concept
          </span>

        </div>
      </div>


      {/* =====================================================
          NEXA WEBSITE FRAME
      ===================================================== */}

      <section className="px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">

        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#080b10] shadow-2xl shadow-black/40 sm:rounded-[2rem]">


          {/* =================================================
              NAVBAR
          ================================================= */}

          <header className="relative z-50 flex h-[72px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-12">

            {/* LOGO */}

            <div className="text-xl font-black tracking-[-0.08em] sm:text-2xl">
              NEXA<span className="text-cyan-400">.</span>
            </div>


            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-8 md:flex">

              <span className="relative text-[9px] font-semibold uppercase tracking-[0.16em] text-white">

                Home

                <span className="absolute -bottom-4 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400" />

              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                Services
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                Work
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                Studio
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                Contact
              </span>

            </nav>


            {/* CTA */}

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black md:flex"
            >
              Let&apos;s Talk
              <ArrowUpRight size={12} />
            </Link>


            {/* MOBILE MENU */}

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden">
              <Menu size={15} />
            </span>

          </header>


          {/* =================================================
              HERO
          ================================================= */}

          <section className="relative min-h-[650px] overflow-hidden lg:min-h-[760px]">

            {/* LOCAL GENERATED IMAGE */}

            <div className="absolute inset-0">

              <img
                src="/images/Portfolio/nexa-studio/nexa-hero-bg.jpg"
                alt="Nexa Studio creative concept"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#05070b] via-[#05070b]/80 to-[#05070b]/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-[#05070b]/20" />

            </div>


            {/* GLOW */}

            <div className="pointer-events-none absolute right-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[140px]" />


            {/* CONTENT */}

            <div className="relative flex min-h-[650px] items-center px-6 py-24 sm:px-10 lg:min-h-[760px] lg:px-16">

              <div className="max-w-[850px]">

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-cyan-400" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Independent Creative Studio
                  </p>

                </div>


                <h1 className="mt-8 text-[4.8rem] font-black leading-[0.78] tracking-[-0.085em] sm:text-[6.5rem] lg:text-[9rem]">

                  Ideas

                  <br />

                  <span className="text-white/[0.20]">
                    made
                  </span>

                  <br />

                  visible
                  <span className="text-cyan-400">.</span>

                </h1>


                <p className="mt-9 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                  Nexa Studio is a fictional creative studio concept
                  designed to explore bold branding, digital experiences
                  and thoughtful visual direction.
                </p>


                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.13em] text-black transition-transform duration-300 hover:scale-105"
                  >
                    Explore Work
                    <ArrowUpRight size={14} />
                  </a>


                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/90 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30"
                  >
                    Our Approach
                    <ArrowRight size={14} />
                  </a>

                </div>

              </div>

            </div>


            {/* HERO META */}

            <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between border-t border-white/[0.08] pt-5 sm:left-10 sm:right-10 lg:left-16 lg:right-16">

              <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500">
                Strategy / Design / Digital
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500">
                Scroll to explore ↓
              </span>

            </div>

          </section>


          {/* =================================================
              THE STUDIO
          ================================================= */}

          <section
            id="studio"
            className="border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
          >

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

              {/* CONTENT */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-cyan-400" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                    The Studio
                  </p>

                </div>


                <h2 className="mt-6 text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">

                  We turn

                  <br />

                  ideas into

                  <br />

                  <span className="text-white/[0.18]">
                    experiences.
                  </span>

                </h2>


                <p className="mt-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  Nexa Studio imagines a creative team working at the
                  intersection of strategy, identity and technology.
                </p>


                <p className="mt-5 max-w-xl text-xs leading-6 text-gray-600 sm:text-sm">
                  The concept focuses on creating digital experiences
                  that feel expressive without sacrificing clarity.
                  Every element is designed to have a purpose.
                </p>


                {/* TAGS */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {[
                    "Strategy",
                    "Identity",
                    "Digital",
                    "Direction",
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[8px] uppercase tracking-[0.17em] text-gray-500 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>


              {/* IMAGE */}

              <div className="group relative">

                <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-cyan-400/[0.035] blur-3xl" />


                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#090d14]">

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src="/images/Portfolio/nexa-studio/nexa-intro-studio.jpg"
                      alt="Nexa Studio interior concept"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/80 via-transparent to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/20 via-transparent to-cyan-400/[0.03]" />


                    {/* LABEL */}

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">

                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Nexa Studio
                      </span>

                    </div>


                    {/* BOTTOM INFO */}

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">

                      <div>

                        <p className="text-[8px] uppercase tracking-[0.2em] text-cyan-400">
                          Creative Environment
                        </p>

                        <p className="mt-2 text-sm font-medium text-white/80">
                          Where ideas take shape.
                        </p>

                      </div>


                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl">

                        <ArrowUpRight size={15} />

                      </span>

                    </div>

                  </div>

                </div>


                {/* FLOATING CARD */}

                <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#0b1017]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

                  <p className="text-[8px] uppercase tracking-[0.18em] text-gray-600">
                    Approach
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Think · Design · Create
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              SERVICES
          ================================================= */}

          <section
            id="services"
            className="border-t border-white/[0.07]"
          >

            <div className="grid md:grid-cols-3">

              {services.map((service, index) => {

                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className={`group ${
                      index !== services.length - 1
                        ? "border-b border-white/[0.07] md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >

                    {/* SERVICE IMAGE */}

                    <div className="relative aspect-[16/10] overflow-hidden">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-transparent" />


                      <span className="absolute left-6 top-6 text-[9px] font-semibold text-cyan-400">
                        {service.number}
                      </span>


                      <span className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-xl">
                        <Icon size={15} strokeWidth={1.5} />
                      </span>

                    </div>


                    {/* SERVICE CONTENT */}

                    <div className="p-7 sm:p-9">

                      <h3 className="text-xl font-bold tracking-[-0.03em]">
                        {service.title}
                      </h3>


                      <p className="mt-4 text-xs leading-6 text-gray-600">
                        {service.description}
                      </p>


                      <div className="mt-7 flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-gray-700 transition-colors group-hover:text-cyan-400">

                        Explore

                        <ArrowRight size={11} />

                      </div>

                    </div>

                  </div>
                );

              })}

            </div>

          </section>


          {/* =================================================
              SELECTED WORK
          ================================================= */}

          <section
            id="work"
            className="border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
          >

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                  Selected Work
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">

                  Selected

                  <span className="text-white/[0.18]">
                    {" "}ideas.
                  </span>

                </h2>

              </div>


              <span className="text-[8px] uppercase tracking-[0.2em] text-gray-700">
                03 / Concepts
              </span>

            </div>


            {/* PROJECT GRID */}

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {projects.slice(0, 2).map((project) => (

                <article
                  key={project.number}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0e15]"
                >

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />


                    {/* NUMBER */}

                    <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.2em] text-cyan-400">
                      {project.number}
                    </span>


                    {/* INFO */}

                    <div className="absolute bottom-6 left-6 right-6">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em]">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-md text-[10px] leading-5 text-white/50">
                        {project.description}
                      </p>

                    </div>


                    {/* ARROW */}

                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:text-black">

                      <ArrowUpRight size={16} />

                    </span>

                  </div>

                </article>

              ))}

            </div>


            {/* FEATURE PROJECT */}

            <div className="mt-5">

              <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0e15]">

                <div className="relative h-[300px] overflow-hidden sm:h-[400px]">

                  <img
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-transparent" />


                  <span className="absolute left-6 top-6 text-[9px] font-semibold tracking-[0.2em] text-cyan-400">
                    {projects[2].number}
                  </span>


                  <div className="absolute bottom-7 left-7 max-w-xl sm:left-10">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {projects[2].category}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                      {projects[2].title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/50">
                      {projects[2].description}
                    </p>

                  </div>


                  <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 group-hover:bg-white group-hover:text-black">

                    <ArrowUpRight size={17} />

                  </span>

                </div>

              </article>

            </div>

          </section>


          {/* =================================================
              PROCESS
          ================================================= */}

          <section
            id="process"
            className="border-t border-white/[0.07] bg-[#070a0f] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
          >

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                  Our Process
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">

                  Simple

                  <br />

                  thinking.

                  <br />

                  <span className="text-white/[0.18]">
                    Strong output.
                  </span>

                </h2>

              </div>


              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">

                <div className="bg-[#070a0f] p-6 sm:p-7">

                  <span className="text-[9px] text-cyan-400">
                    01
                  </span>

                  <h3 className="mt-5 text-lg font-bold">
                    Discover
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-600">
                    Understand the business, audience and opportunity.
                  </p>

                </div>


                <div className="bg-[#070a0f] p-6 sm:p-7">

                  <span className="text-[9px] text-cyan-400">
                    02
                  </span>

                  <h3 className="mt-5 text-lg font-bold">
                    Define
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-600">
                    Establish the visual direction and experience.
                  </p>

                </div>


                <div className="bg-[#070a0f] p-6 sm:p-7">

                  <span className="text-[9px] text-cyan-400">
                    03
                  </span>

                  <h3 className="mt-5 text-lg font-bold">
                    Create
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-600">
                    Turn the direction into a polished digital product.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              CASE STUDY
          ================================================= */}

          <section
            id="case-study"
            className="border-t border-white/[0.07] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
          >

            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-cyan-400" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                    Case Study
                  </span>

                </div>


                <h2 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-6xl">

                  Nexa

                  <br />

                  <span className="text-white/[0.18]">
                    Studio.
                  </span>

                </h2>

              </div>


              <div>

                <p className="text-base leading-8 text-gray-400 sm:text-lg">
                  A fictional creative studio concept exploring how
                  bold visual identity and focused digital experience
                  can communicate creativity and confidence.
                </p>

                <p className="mt-5 text-xs leading-7 text-gray-600">
                  This is an original Yorra Tech concept project.
                  It is not presented as an existing client project
                  and contains no fabricated business performance claims.
                </p>

              </div>

            </div>


            {/* CASE STUDY GRID */}

            <div className="mt-14 grid gap-5 md:grid-cols-2">


              {/* IDEA */}

              <div className="group rounded-[1.5rem] border border-white/[0.07] bg-[#05070b] p-7 transition-colors duration-300 hover:border-cyan-400/20 sm:p-9">

                <span className="text-[9px] text-cyan-400">
                  01 / THE IDEA
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  Make creativity visible.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Nexa was imagined as a modern creative studio that
                  needed a digital presence capable of feeling expressive,
                  premium and confident.
                </p>

              </div>


              {/* CHALLENGE */}

              <div className="group rounded-[1.5rem] border border-white/[0.07] bg-[#05070b] p-7 transition-colors duration-300 hover:border-cyan-400/20 sm:p-9">

                <span className="text-[9px] text-cyan-400">
                  02 / THE CHALLENGE
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  Expression without confusion.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  The experience needed a strong creative personality
                  while keeping services, work and contact paths simple.
                </p>

              </div>


              {/* APPROACH */}

              <div className="group rounded-[1.5rem] border border-white/[0.07] bg-[#05070b] p-7 transition-colors duration-300 hover:border-cyan-400/20 sm:p-9">

                <span className="text-[9px] text-cyan-400">
                  03 / OUR APPROACH
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  Bold type. Quiet interface.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Oversized typography, dark surfaces, subtle borders
                  and cyan accents establish a premium creative language.
                </p>

              </div>


              {/* OUTCOME */}

              <div className="group rounded-[1.5rem] border border-white/[0.07] bg-[#05070b] p-7 transition-colors duration-300 hover:border-cyan-400/20 sm:p-9">

                <span className="text-[9px] text-cyan-400">
                  04 / EXPECTED OUTCOME
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  A stronger digital presence.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  The concept demonstrates how a creative business
                  could communicate its personality, capabilities
                  and work through a focused digital experience.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              FINAL CTA
          ================================================= */}

          <section className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32">

            <div className="pointer-events-none absolute left-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[120px]" />

            <div className="pointer-events-none absolute right-[10%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-[120px]" />


            <div className="relative">

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Start Something New
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl">

                Let&apos;s create something

                <br />

                <span className="text-white/[0.18]">
                  worth remembering.
                </span>

              </h2>


              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.14em] text-black transition-transform duration-300 hover:scale-105"
              >
                Start a Project
                <ArrowUpRight size={14} />
              </Link>

            </div>

          </section>


          {/* =================================================
              NEXA FOOTER
          ================================================= */}

          <footer className="border-t border-white/[0.07] px-6 py-8 sm:px-10 lg:px-16">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {/* BRAND */}

              <div className="lg:col-span-2">

                <div className="text-2xl font-black tracking-[-0.08em]">
                  NEXA<span className="text-cyan-400">.</span>
                </div>

                <p className="mt-4 max-w-sm text-[10px] leading-6 text-gray-700">
                  A fictional creative studio concept created as a
                  visual demonstration for the Yorra Tech portfolio.
                </p>

              </div>


              {/* EXPLORE */}

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Explore
                </p>

                <div className="mt-4 space-y-2 text-[9px] text-gray-700">

                  <a
                    href="#studio"
                    className="block transition-colors hover:text-cyan-400"
                  >
                    Studio
                  </a>

                  <a
                    href="#services"
                    className="block transition-colors hover:text-cyan-400"
                  >
                    Services
                  </a>

                  <a
                    href="#work"
                    className="block transition-colors hover:text-cyan-400"
                  >
                    Selected Work
                  </a>

                  <a
                    href="#process"
                    className="block transition-colors hover:text-cyan-400"
                  >
                    Approach
                  </a>

                </div>

              </div>


              {/* CONTACT */}

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Contact
                </p>

                <div className="mt-4 space-y-2 text-[9px] text-gray-700">

                  <p>hello@nexa.studio</p>

                  <p>Creative Studio Concept</p>

                  <p>Available Worldwide</p>

                </div>

              </div>

            </div>


            {/* BOTTOM */}

            <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-5 sm:flex-row">

              <span className="text-[8px] uppercase tracking-[0.18em] text-gray-800">
                Nexa Studio / Concept Sample
              </span>

              <span className="text-[8px] uppercase tracking-[0.18em] text-gray-800">
                Created by Yorra Tech
              </span>

            </div>

          </footer>

        </div>

      </section>


      {/* =====================================================
          YORRA TECH FINAL CTA
      ===================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090d14] px-6 py-20 text-center sm:px-10 lg:py-28">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]" />


          <div className="relative">

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
              Build Your Own
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl">

              Your business could be

              <br />

              our next

              <span className="text-white/[0.18]">
                {" "}concept.
              </span>

            </h2>


            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}