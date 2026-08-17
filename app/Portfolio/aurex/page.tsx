"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    text: "We define positioning, purpose and strategic direction that gives ambitious brands a clear path forward.",
  },
  {
    number: "02",
    title: "Digital Growth",
    text: "We build digital experiences and growth systems designed to turn attention into meaningful business results.",
  },
  {
    number: "03",
    title: "Business Transformation",
    text: "We help organizations evolve their models, operations and customer experiences for long-term relevance.",
  },
];

const industries = [
  "Technology",
  "Financial Services",
  "Consumer",
  "Healthcare",
  "Real Estate",
  "Professional Services",
];

export default function AurexPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050a11] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="absolute bottom-[-250px] right-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
      </div>

      {/* =========================================================
          AUREX NAVBAR
          Positioned BELOW YORRA TECH main navbar
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.08] bg-[#07101a]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-7">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute inset-0 rotate-45 rounded-[7px] border border-[#315bff] opacity-70" />

                <span className="relative text-[18px] font-bold text-[#315bff]">
                  A
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-semibold tracking-[0.24em]">
                  AUREX
                </div>

                <div className="mt-1 text-[11px] font-semibold tracking-[0.28em] text-cyan-400">
                  02
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[10px] font-medium tracking-wide text-white/70 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden items-center gap-3 rounded-lg border border-blue-400/50 bg-blue-500/[0.04] px-4 py-2.5 text-[10px] font-medium tracking-wide text-white transition hover:border-blue-300 hover:bg-blue-500/10 sm:flex"
            >
              Let's Talk
              <span className="text-sm">→</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>

            {/* Mobile Navigation */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#07101a]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-3 opacity-0"
              }`}
            >
              <div className="flex flex-col p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/[0.06] px-4 py-4 text-sm text-white/70 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium"
                >
                  Let's Talk
                  <span>→</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative min-h-[780px] overflow-hidden border-b border-white/[0.06] pt-[76px]"
      >
        <Image
          src="/images/Portfolio/aurex/hero.jpg"
          alt="Aurex modern corporate headquarters"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#020711]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050a11] via-transparent to-[#020711]/20" />

        {/* Cyan Accent */}
        <div className="absolute right-[11%] top-[47%] hidden h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_35px_8px_rgba(34,211,238,0.25)] md:block" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-end px-6 pb-20 pt-36 sm:px-10 lg:px-16">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-300">
                Strategy. Growth. Impact.
              </span>
            </div>

            <h1 className="max-w-[650px] text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[68px] lg:text-[82px]">
              Building Brands
              <br />
              <span className="text-white/90">That Matter</span>
            </h1>

            <p className="mt-7 max-w-[430px] text-sm leading-7 text-white/55">
              Aurex is a global consulting firm helping businesses grow with
              purpose, clarity and a sharper digital presence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#about"
                className="group flex items-center gap-5 rounded-md bg-blue-600 px-5 py-3 text-[10px] font-medium tracking-wide transition hover:bg-blue-500"
              >
                Discover More

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-black/20 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm transition hover:border-white/30 hover:text-white"
              >
                Concept Project
              </Link>
            </div>
          </div>

          {/* Hero Arrow */}
          <div className="absolute bottom-20 right-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xl text-white/60 backdrop-blur-md transition hover:border-cyan-400/50 hover:text-cyan-300 lg:flex">
            ↗
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-[#030811]/70 backdrop-blur-md">
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-8 overflow-hidden px-6 sm:px-10 lg:px-16">
            <span className="hidden shrink-0 text-[8px] uppercase tracking-[0.25em] text-white/25 sm:block">
              Trusted by forward-thinking companies
            </span>

            <div className="flex min-w-max items-center gap-9 text-sm font-semibold tracking-tight text-white/20">
              <span>overly</span>
              <span>Cloudly</span>
              <span>finora</span>
              <span>brighton</span>
              <span>Vertex</span>
              <span>linq</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS / ABOUT
      ========================================================= */}
      <section id="about" className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Business
              </p>

              <div className="mt-5 flex items-end justify-between">
                <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Aurex
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/25">
                  02 / 10
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-[720px] text-xl leading-9 text-white/50 sm:text-2xl">
                A premium corporate concept focused on trust, clarity and a
                strong digital presence.
              </p>

              <Link
                href="#services"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                View Prototype
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE STORY
      ========================================================= */}
      <section className="border-b border-white/[0.06]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]">
            <Image
              src="/images/Portfolio/aurex/office-1.jpg"
              alt="Aurex premium office interior"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050a11] via-transparent to-transparent opacity-70" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                01 — Environment
              </p>

              <p className="mt-2 text-sm text-white/70">
                Spaces built around clarity.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-[#070d15] px-6 py-20 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="text-[9px] uppercase tracking-[0.28em] text-blue-400">
                The Aurex Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Strategy with a point of view.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/45">
                We believe great businesses are built where sharp strategy,
                meaningful design and measurable growth meet. Aurex brings
                these disciplines together to create brands that remain
                relevant in a changing world.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-semibold">12+</div>

                  <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Markets
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold">80+</div>

                  <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section id="services" className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                What We Do
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Built for businesses ready to move forward.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                From defining your position to creating digital experiences,
                we turn ambitious ideas into focused business outcomes.
              </p>
            </div>

            <div className="border-t border-white/10">
              {services.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className="group block w-full border-b border-white/10 py-7 text-left"
                >
                  <div className="flex items-start gap-6">
                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/25">
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-xl font-medium transition sm:text-2xl ${
                            activeService === index
                              ? "text-white"
                              : "text-white/55 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeService === index
                              ? "rotate-45 text-cyan-400"
                              : "text-white/25"
                          }`}
                        >
                          ↗
                        </span>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeService === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-sm leading-7 text-white/40">
                            {service.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section id="industries" className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
                Industries
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Experience across sectors.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/35">
              Deep business understanding combined with a modern digital
              perspective.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group relative min-h-[170px] border-b border-r border-white/10 p-7 transition hover:bg-white/[0.025] sm:p-9"
              >
                <span className="text-[9px] tracking-[0.2em] text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-xl font-medium text-white/70 transition group-hover:text-white">
                  {industry}
                </h3>

                <span className="absolute bottom-8 right-8 text-white/15 transition group-hover:-translate-y-1 group-hover:text-cyan-400">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHTS
      ========================================================= */}
      <section id="insights" className="border-b border-white/[0.06]">
        <div className="grid lg:grid-cols-2">
          <div className="order-2 flex items-center bg-[#070d15] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">
            <div className="max-w-xl">
              <p className="text-[9px] uppercase tracking-[0.28em] text-cyan-400">
                Insights
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                The future belongs to brands that adapt.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/45">
                Markets change. Customers change. Technology changes. We help
                leaders understand what comes next and turn change into
                opportunity.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 transition hover:border-cyan-400 hover:text-white"
              >
                Explore Insights
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="relative order-1 min-h-[480px] overflow-hidden lg:order-2 lg:min-h-[650px]">
            <Image
              src="/images/Portfolio/aurex/office-3.jpg"
              alt="Aurex city business environment"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#020711]/20" />

            <div className="absolute bottom-8 right-8">
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                03 — Perspective
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROJECT
      ========================================================= */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-blue-400">
                Featured Concept
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                One room. One direction. One vision.
              </h2>
            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              04 / 10
            </span>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/Portfolio/aurex/office-2.jpg"
              alt="Aurex strategy meeting"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                  Aurex Strategy
                </p>

                <h3 className="mt-2 text-2xl font-medium sm:text-4xl">
                  Turning complexity into clarity.
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-lg backdrop-blur-md">
                ↗
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">
          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
            Start a conversation
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Ready to build something that matters?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Tell us where you want to go. We will help you find the clearest
            path to get there.
          </p>

          <Link
            href="mailto:hello@aurex.example"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-white px-7 py-4 text-xs font-semibold text-[#050a11] transition hover:scale-[1.02]"
          >
            Let's Talk
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em]">
              AUREX
            </div>

            <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-cyan-400">
              Strategy. Growth. Impact.
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-[9px] uppercase tracking-[0.15em] text-white/30">
            <Link href="#home" className="transition hover:text-white">
              Home
            </Link>

            <Link href="#about" className="transition hover:text-white">
              About
            </Link>

            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>

          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} Aurex. Concept Project.
          </p>
        </div>
      </footer>
    </main>
  );
}