"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Thoughtful Design",
    text: "Every space begins with a clear idea, carefully translated into architecture that feels timeless and intentional.",
  },
  {
    number: "02",
    title: "Bespoke Interiors",
    text: "Interiors designed around the people who use them, balancing material, light, proportion and comfort.",
  },
  {
    number: "03",
    title: "Sustainable Approach",
    text: "Responsible materials, intelligent planning and enduring design choices create spaces built to last.",
  },
  {
    number: "04",
    title: "Quality Excellence",
    text: "From the first sketch to the final detail, we maintain a rigorous focus on craft and execution.",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Architecture",
    text: "Distinctive buildings shaped by context, proportion and purpose.",
  },
  {
    number: "02",
    title: "Interior Design",
    text: "Refined interiors where materials, light and furniture work together.",
  },
  {
    number: "03",
    title: "Landscape",
    text: "Outdoor environments designed as an extension of the architecture.",
  },
  {
    number: "04",
    title: "Turnkey Projects",
    text: "A complete design-to-delivery experience with one focused vision.",
  },
];

export default function CasaFormaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b78b5b]/[0.035] blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#8b5e32]/[0.025] blur-[170px]" />
      </div>

      {/* =========================================================
          CASAFORMA NAVBAR
          BELOW YORRA TECH MAIN NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.09] bg-[#0b0b0a]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-7">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute inset-[4px] rotate-45 border border-[#c59a68]" />

                <div className="relative text-[16px] font-serif text-[#d5ad7c]">
                  C
                </div>
              </div>

              <div className="leading-none">
                <div className="text-[14px] font-semibold tracking-[0.18em]">
                  CASAFORMA
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#b89367]">
                  Architecture & Interiors
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/60 transition hover:text-[#d5ad7c]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden items-center gap-3 border border-[#b89367]/60 bg-[#b89367]/[0.04] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b89367]/10 sm:flex"
            >
              Let's Talk
              <span>→</span>
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

            {/* Mobile Menu */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0a]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-3 opacity-0"
              }`}
            >
              <div className="p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-[#d5ad7c]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between bg-[#b89367] px-4 py-3 text-sm font-medium text-[#0b0b0a]"
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
        className="relative min-h-[780px] overflow-hidden border-b border-white/[0.08] pt-[76px]"
      >
        <Image
          src="/images/Portfolio/casaforma/hero.jpg"
          alt="CasaForma luxury modern architecture"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050504] via-[#050504]/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-[#050504]/20" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-end px-6 pb-24 pt-36 sm:px-10 lg:px-16">
          <div className="max-w-[650px]">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c59a68]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#d0a878]">
                Designing Spaces. Elevating Lifestyles.
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] font-serif text-[48px] font-medium leading-[0.93] tracking-[-0.045em] sm:text-[64px] lg:text-[76px]">
              Architecture
              <br />
              That Inspires.
              <br />
              <span className="text-[#cda77b]">
                Interiors That
              </span>
              <br />
              <span className="text-[#cda77b]">
                Define.
              </span>
            </h1>

            <p className="mt-7 max-w-[440px] text-sm leading-7 text-white/55">
              CasaForma creates timeless architecture and bespoke interiors
              that blend beauty, function and sophistication.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group flex items-center gap-5 bg-[#c49a6c] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#11100e] transition hover:bg-[#d2ad82]"
              >
                View Our Projects

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 border border-white/20 bg-black/20 px-5 py-3.5 text-[10px] font-medium text-white/75 backdrop-blur-sm transition hover:border-[#c49a6c] hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-[8px]">
                  ▶
                </span>

                Watch Video
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="absolute right-[7%] top-[34%] hidden border border-white/15 bg-[#0b0b0a]/75 px-6 py-5 text-center backdrop-blur-md lg:block">
            <div className="font-serif text-3xl text-[#d0aa7c]">
              250+
            </div>

            <div className="mt-2 text-[9px] text-white/60">
              Projects Completed
            </div>

            <div className="mx-auto my-4 h-px w-10 bg-[#c49a6c]/50" />

            <div className="text-[9px] text-white/50">
              Happy Clients
            </div>
          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#0b0b0a]/60 text-xl text-white/60 backdrop-blur-md transition hover:border-[#c49a6c] hover:text-[#d0aa7c] lg:flex">
            ↗
          </div>
        </div>

        {/* Feature Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#0a0a09]/80 backdrop-blur-xl">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b89367]/25 bg-[#b89367]/[0.07] text-[#caa174]">
                    ◇
                  </div>

                  <div>
                    <h3 className="text-[9px] font-semibold text-white/75">
                      {service.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-white/30 sm:block">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[94px] left-8 hidden rounded-full border border-white/15 bg-[#0a0a09]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-md lg:block">
          Concept Project
        </div>
      </section>

      {/* =========================================================
          ABOUT / BUSINESS
      ========================================================= */}
      <section id="about" className="border-b border-white/[0.07] bg-[#080807]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a06f]">
                Interior & Architecture
              </p>

              <div className="mt-5 flex items-end justify-between">
                <h2 className="font-serif text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                  CasaForma
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  05 / 10
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A sophisticated architecture concept with a clean editorial
                aesthetic and premium visual language.
              </p>

              <Link
                href="#services"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d0aa7c]"
              >
                View Prototype
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE STORY
      ========================================================= */}
      <section className="border-b border-white/[0.07]">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[680px]">
            <Image
              src="/images/Portfolio/casaforma/architecture-1.jpg"
              alt="CasaForma modern luxury residence"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full border border-white/15 bg-[#0b0b0a]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0aa7c] backdrop-blur-md">
                01 — Architecture
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center bg-[#0b0b0a] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">
            <div className="max-w-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a68]">
                Architectural Philosophy
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Form follows feeling.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                We believe architecture should create more than a beautiful
                structure. It should shape how people experience light,
                movement, privacy, connection and everyday life.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/35">
                Our approach combines strong architectural form with subtle
                material palettes and carefully considered details.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-8">
                <div>
                  <div className="font-serif text-3xl text-[#d0aa7c]">
                    250+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Projects
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl text-[#d0aa7c]">
                    18
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Awards
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
      <section
        id="services"
        className="border-b border-white/[0.07] bg-[#080807]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Intro */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c59a68]">
                What We Create
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Spaces designed to be remembered.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                From architecture to interiors and landscape, every discipline
                works together around one coherent design vision.
              </p>
            </div>

            {/* Accordion */}
            <div className="border-t border-white/[0.09]">
              {disciplines.map((discipline, index) => (
                <button
                  key={discipline.number}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className="group block w-full border-b border-white/[0.09] py-7 text-left"
                >
                  <div className="flex items-start gap-6">
                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/20">
                      {discipline.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-serif text-xl font-medium transition sm:text-2xl ${
                            activeService === index
                              ? "text-[#d0aa7c]"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {discipline.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeService === index
                              ? "rotate-45 text-[#c59a68]"
                              : "text-white/20"
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
                          <p className="max-w-xl text-sm leading-7 text-white/35">
                            {discipline.text}
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
          INTERIOR SHOWCASE
      ========================================================= */}
      <section className="border-b border-white/[0.07]">
        <div className="grid lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 flex items-center bg-[#0c0b09] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">
            <div className="max-w-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a68]">
                Interior Design
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Interiors with warmth and character.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                We create interiors that feel considered rather than
                over-designed. Natural materials, warm lighting and carefully
                selected furniture create spaces that are luxurious without
                losing their sense of comfort.
              </p>

              <Link
                href="#projects"
                className="mt-9 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-[#c59a68] hover:text-[#d0aa7c]"
              >
                Explore Interiors
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 min-h-[500px] overflow-hidden lg:order-2 lg:min-h-[680px]">
            <Image
              src="/images/Portfolio/casaforma/interior-2.jpg"
              alt="CasaForma luxury interior design"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">
              <span className="rounded-full border border-white/15 bg-[#0b0b0a]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0aa7c] backdrop-blur-md">
                02 — Interiors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section
        id="projects"
        className="border-b border-white/[0.07] bg-[#080807]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c59a68]">
                Selected Work
              </p>

              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                Projects with purpose.
              </h2>
            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              05 / 10
            </span>
          </div>

          {/* Featured Project */}
          <div className="relative aspect-[16/9] overflow-hidden border border-white/[0.09]">
            <Image
              src="/images/Portfolio/casaforma/architecture-3.jpg"
              alt="CasaForma architectural project"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-6 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d0aa7c]">
                  Residence No. 05
                </p>

                <h3 className="mt-2 max-w-2xl font-serif text-3xl font-medium sm:text-5xl">
                  A quiet expression of modern luxury.
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md">
                ↗
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESIGN DETAILS
      ========================================================= */}
      <section className="border-b border-white/[0.07] bg-[#0b0b0a]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a68]">
                Design Language
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Details are where architecture becomes personal.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/40">
                Stone, timber, glass, metal and light are brought together in
                carefully balanced compositions. The result is architecture
                that feels contemporary today while remaining relevant for
                years to come.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Natural Materials",
                  "Warm Lighting",
                  "Clean Forms",
                  "Timeless Detail",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-white/[0.08] bg-[#11100e] p-8 sm:p-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                CasaForma Principle
              </p>

              <div className="mt-8 font-serif text-4xl leading-tight text-[#d0aa7c]">
                “Good architecture
                <br />
                should feel inevitable.”
              </div>

              <div className="mt-8 h-px w-14 bg-[#c59a68]" />

              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/30">
                Form · Material · Light
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#080807]"
      >
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b89367]/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c59a68]">
            Start a Project
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Let&apos;s create a space worth remembering.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Tell us about your project, your vision and the feeling you want
            the finished space to create.
          </p>

          <Link
            href="mailto:hello@casaforma.example"
            className="mt-10 inline-flex items-center gap-5 bg-[#c49a6c] px-7 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#11100e] transition hover:bg-[#d4af85]"
          >
            Start a Conversation
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#050504]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-[4px] rotate-45 border border-[#c59a68]" />

              <span className="relative font-serif text-sm text-[#d0aa7c]">
                C
              </span>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-[0.18em]">
                CASAFORMA
              </div>

              <div className="text-[7px] uppercase tracking-[0.2em] text-[#a47b50]">
                Architecture & Interiors
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">
            <Link href="#home" className="transition hover:text-[#d0aa7c]">
              Home
            </Link>

            <Link href="#about" className="transition hover:text-[#d0aa7c]">
              About
            </Link>

            <Link href="#services" className="transition hover:text-[#d0aa7c]">
              Services
            </Link>

            <Link href="#projects" className="transition hover:text-[#d0aa7c]">
              Projects
            </Link>

            <Link href="#contact" className="transition hover:text-[#d0aa7c]">
              Contact
            </Link>
          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} CasaForma. Concept Project.
          </p>
        </div>
      </footer>
    </main>
  );
}