"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const stats = [
  { value: "250+", label: "Projects Completed", icon: "⌂" },
  { value: "200+", label: "Happy Clients", icon: "◉" },
  { value: "10+", label: "Years of Experience", icon: "▥" },
  { value: "20+", label: "Awards Won", icon: "♜" },
];

const services = [
  {
    number: "01",
    title: "Architecture Design",
    text: "Thoughtful architectural solutions combining functionality, proportion and timeless visual character.",
  },
  {
    number: "02",
    title: "Interior Design",
    text: "Sophisticated interiors designed around comfort, personality, materials and everyday living.",
  },
  {
    number: "03",
    title: "Space Planning",
    text: "Intelligent planning that transforms every square foot into a practical and beautiful experience.",
  },
  {
    number: "04",
    title: "Project Management",
    text: "From concept to completion, we coordinate every detail to deliver projects with precision.",
  },
];

const projects = [
  {
    number: "01",
    title: "Modern Villa",
    location: "New Delhi",
    image: "/images/Portfolio/urbannest/property-1.jpg",
  },
  {
    number: "02",
    title: "Urban Residence",
    location: "Mumbai",
    image: "/images/Portfolio/urbannest/property-2.jpg",
  },
  {
    number: "03",
    title: "Luxury Retreat",
    location: "Gurugram",
    image: "/images/Portfolio/urbannest/property-3.jpg",
  },
];

const principles = [
  {
    number: "01",
    title: "Custom Design",
    text: "Every project is designed around the people who live in it.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Interior Excellence",
    text: "Materials, lighting and details are selected with intention.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Sustainable Spaces",
    text: "Responsible design choices create spaces built for the future.",
    icon: "♧",
  },
  {
    number: "04",
    title: "Quality Assurance",
    text: "We maintain a high standard from first sketch to final handover.",
    icon: "✦",
  },
];

export default function UrbanNestPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-260px] top-[15%] h-[600px] w-[600px] rounded-full bg-[#c99a4b]/[0.035] blur-[170px]" />
        <div className="absolute right-[-260px] bottom-[10%] h-[650px] w-[650px] rounded-full bg-[#b98535]/[0.025] blur-[180px]" />
      </div>

      {/* =========================================================
          NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">

          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.09] bg-[#080a09]/90 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-10 w-9 items-center justify-center">
                <span className="absolute -top-1 font-serif text-[24px] text-[#d0a65b]">
                  ◇
                </span>

                <span className="absolute bottom-0 text-[12px] font-bold text-[#d0a65b]">
                  10
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-medium tracking-[0.02em]">
                  Urban<span className="text-[#d0a65b]">Nest</span>
                </div>

                <div className="mt-1 text-[6px] uppercase tracking-[0.17em] text-white/35">
                  Design. Build. Inspire.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/55 transition hover:text-[#d0a65b]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Contact */}
            <div className="hidden items-center gap-4 sm:flex">

              <div className="text-right">
                <div className="text-[8px] text-white/65">
                  ☎ +91 98765 43210
                </div>

                <div className="mt-1 text-[7px] text-white/30">
                  Mon - Sat · 10AM - 7PM
                </div>
              </div>

              <Link
                href="#contact"
                className="flex items-center gap-3 rounded-md border border-[#c69b4d] px-4 py-2.5 text-[9px] font-semibold text-white transition hover:bg-[#c69b4d] hover:text-[#080a09]"
              >
                Get a Quote
                <span>→</span>
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:hidden"
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
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#080a09]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:hidden ${
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
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-[#d0a65b]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-[#c69b4d] px-4 py-3 text-sm font-medium text-[#080a09]"
                >
                  Get a Quote
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
        className="relative min-h-[790px] overflow-hidden border-b border-white/[0.08] pt-[76px]"
      >

        <Image
          src="/images/Portfolio/urbannest/hero.jpg"
          alt="UrbanNest luxury modern residence"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/10" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[714px] max-w-[1440px] items-end px-6 pb-28 pt-36 sm:px-10 lg:px-16">

          <div className="max-w-[660px]">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#d0a65b]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#d0a65b]">
                Architecture & Interior Design
              </span>

            </div>

            <h1 className="font-serif text-[49px] font-medium leading-[0.94] tracking-[-0.05em] sm:text-[64px] lg:text-[76px]">
              Beautiful Spaces.
              <br />
              Better{" "}
              <span className="text-[#d0a65b]">
                Living.
              </span>
            </h1>

            <p className="mt-7 max-w-[480px] text-sm leading-7 text-white/50">
              UrbanNest creates functional, aesthetic and timeless spaces that
              reflect your personality and elevate everyday living.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="#projects"
                className="flex items-center gap-5 rounded-md bg-[#c9a05a] px-5 py-3.5 text-[10px] font-semibold text-[#0b0c0b] transition hover:bg-[#d9b570]"
              >
                Explore Our Projects
                <span>→</span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 rounded-md border border-white/20 bg-black/20 px-5 py-3.5 text-[10px] font-medium text-white/70 backdrop-blur-sm transition hover:border-[#c9a05a] hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[8px]">
                  ▶
                </span>
                Watch Our Work
              </Link>

            </div>

          </div>

          {/* Right Quality Card */}
          <div className="absolute right-[5%] top-[34%] hidden w-[185px] rounded-2xl border border-white/10 bg-[#080a09]/80 p-4 backdrop-blur-md xl:block">

            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`${index !== 0 ? "border-t border-white/[0.08] pt-4" : ""} ${
                  index !== principles.length - 1 ? "pb-4" : ""
                }`}
              >

                <div className="flex items-start gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c69b4d]/30 text-[#d0a65b]">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-[9px] font-semibold text-white/80">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[7px] leading-4 text-white/30">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#080a09]/70 text-xl text-white/60 backdrop-blur-md transition hover:border-[#c69b4d] hover:text-[#d0a65b] lg:flex">
            ↗
          </div>

        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[105px] left-8 hidden rounded-full border border-white/15 bg-[#080a09]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-md lg:block">
          Concept Project
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#080a09]/90 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c69b4d]/30 text-[#d0a65b]">
                    {stat.icon}
                  </div>

                  <div>

                    <div className="text-sm font-semibold">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[7px] text-white/35">
                      {stat.label}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT / PORTFOLIO CARD SECTION
      ========================================================= */}
      <section
        id="about"
        className="border-b border-white/[0.07] bg-[#080a09]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Real Estate
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  UrbanNest
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  10 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A premium real-estate concept designed to showcase properties
                through a clean digital experience.
              </p>

              <Link
                href="#projects"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d0a65b]"
              >
                View Prototype
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="border-b border-white/[0.07] bg-[#050607]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9a05a]">
                Our Services
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Spaces designed around the way you live.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                From architectural concepts to complete interiors, UrbanNest
                brings design, planning and execution together.
              </p>

            </div>

            <div className="border-t border-white/[0.09]">

              {services.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className="group block w-full border-b border-white/[0.09] py-7 text-left"
                >

                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/20">
                      {service.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3
                          className={`font-serif text-xl font-medium transition sm:text-2xl ${
                            activeService === index
                              ? "text-[#d0a65b]"
                              : "text-white/65 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeService === index
                              ? "rotate-45 text-[#d0a65b]"
                              : "text-white/20"
                          }`}
                        >
                          ↗
                        </span>

                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeService === index
                            ? "mt-5 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >

                        <div className="overflow-hidden">

                          <p className="max-w-xl text-sm leading-7 text-white/35">
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
          FEATURED PROJECT
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[720px]">

            <Image
              src="/images/Portfolio/urbannest/property-1.jpg"
              alt="UrbanNest modern luxury villa"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/15 bg-[#080a09]/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0a65b] backdrop-blur-md">
                01 — Modern Villa
              </span>

            </div>

          </div>

          <div className="flex items-center bg-[#f0eee7] px-6 py-20 text-[#111815] sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#967238]">
                Featured Project
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Architecture that feels like home.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#111815]/50">
                A contemporary residence designed to connect indoor and outdoor
                living through expansive glass, natural materials and carefully
                framed views.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-8 border-t border-[#111815]/10 pt-8">

                <div>
                  <div className="font-serif text-3xl text-[#967238]">
                    4,800
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#111815]/35">
                    Sq. Ft.
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl text-[#967238]">
                    2026
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#111815]/35">
                    Completed
                  </div>
                </div>

              </div>

              <Link
                href="#projects"
                className="mt-9 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#111815]/60 transition hover:text-[#967238]"
              >
                View Project
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section
        id="projects"
        className="border-b border-white/[0.07] bg-[#080a09]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c9a05a]">
                Selected Projects
              </p>

              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Spaces that speak for themselves.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              10 / 10
            </span>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative aspect-[0.82] overflow-hidden rounded-2xl border border-white/[0.08]"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[8px] text-white/60 backdrop-blur-md">
                  {project.number}
                </div>

                <div className="absolute bottom-6 left-6 right-6">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#d0a65b]">
                    {project.location}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {project.title}
                  </h3>

                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white"
                  >
                    View Project
                    <span>↗</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          INTERIOR SECTION
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          <div className="order-2 flex items-center bg-[#080a09] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c9a05a]">
                Interior Architecture
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Interiors with character.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                We create interiors where material, light, proportion and
                furniture work together to create a calm and distinctive
                atmosphere.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Material-led design",
                  "Custom furniture",
                  "Architectural lighting",
                  "Personalized styling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/55"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c69b4d]/30 text-[10px] text-[#d0a65b]">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          <div className="relative order-1 min-h-[560px] overflow-hidden lg:order-2 lg:min-h-[740px]">

            <Image
              src="/images/Portfolio/urbannest/property-2.jpg"
              alt="UrbanNest luxury interior design"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">

              <span className="rounded-full border border-white/15 bg-[#080a09]/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0a65b] backdrop-blur-md">
                02 — Interior Design
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          DESIGN PRINCIPLES
      ========================================================= */}
      <section className="border-b border-white/[0.07] bg-[#f0eee7] text-[#111815]">

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#967238]">
                Our Philosophy
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Design that lasts beyond the first impression.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#111815]/50">
                Good design is not only beautiful. It should feel natural,
                function effortlessly and continue to feel relevant for years.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-[#111815]/10 bg-white/50 p-6"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#967238]/30 text-[#967238]">
                    {principle.icon}
                  </div>

                  <div className="mt-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#111815]/25">
                    {principle.number}
                  </div>

                  <h3 className="mt-2 font-serif text-xl">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#111815]/45">
                    {principle.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BEDROOM / LIFESTYLE
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[700px]">

            <Image
              src="/images/Portfolio/urbannest/property-3.jpg"
              alt="UrbanNest luxury bedroom"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/70 via-transparent to-transparent" />

          </div>

          <div className="flex items-center bg-[#050607] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c9a05a]">
                Better Living
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Every room should tell your story.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                From quiet bedrooms to social living spaces, we design homes
                that reflect how you actually live — not simply how a space
                looks in a photograph.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 rounded-md border border-white/15 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:border-[#c9a05a] hover:text-[#d0a65b]"
              >
                Start Your Project
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BLOG
      ========================================================= */}
      <section
        id="blog"
        className="border-b border-white/[0.07] bg-[#080a09]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c9a05a]">
                Journal
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Ideas for better spaces.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/35">
                Explore our thoughts on architecture, interiors, materials and
                the evolving idea of modern living.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition hover:text-[#d0a65b]"
              >
                Read The Journal
                <span>↗</span>
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-[#c9a05a]">
                  01 — Architecture
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  Designing homes that age beautifully
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/30">
                  Why timeless proportions and honest materials create spaces
                  that remain relevant for generations.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-white/20">
                  5 min read ↗
                </div>

              </article>

              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-[#c9a05a]">
                  02 — Interiors
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  The quiet luxury of good lighting
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/30">
                  How layered lighting can completely transform the atmosphere
                  and function of a home.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-white/20">
                  4 min read ↗
                </div>

              </article>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#c49a52]"
      >

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.08] blur-[160px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/60">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-[#080a09] sm:text-6xl lg:text-8xl">
            Let&apos;s create a space worth coming home to.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black/55">
            Tell us about your vision and our team will help turn it into a
            thoughtful, beautiful and functional space.
          </p>

          <a
            href="mailto:hello@urbannest.com"
            className="mt-10 inline-flex items-center gap-5 rounded-md bg-[#080a09] px-7 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#171917]"
          >
            Get a Quote
            <span>↗</span>
          </a>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#040506]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center font-serif text-[#d0a65b]">
              ◇
            </div>

            <div>

              <div className="text-sm font-medium">
                Urban<span className="text-[#d0a65b]">Nest</span>
              </div>

              <div className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                Design. Build. Inspire.
              </div>

            </div>

          </div>

          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">

            <Link
              href="#home"
              className="transition hover:text-[#d0a65b]"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="transition hover:text-[#d0a65b]"
            >
              About
            </Link>

            <Link
              href="#services"
              className="transition hover:text-[#d0a65b]"
            >
              Services
            </Link>

            <Link
              href="#projects"
              className="transition hover:text-[#d0a65b]"
            >
              Projects
            </Link>

            <Link
              href="#blog"
              className="transition hover:text-[#d0a65b]"
            >
              Blog
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-[#d0a65b]"
            >
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} UrbanNest. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}