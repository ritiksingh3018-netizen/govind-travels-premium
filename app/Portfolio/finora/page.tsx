"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

const features = [
  {
    icon: "◈",
    title: "Secure & Reliable",
    text: "Your money, always protected.",
  },
  {
    icon: "↗",
    title: "Grow Your Wealth",
    text: "Smarter investment options.",
  },
  {
    icon: "ϟ",
    title: "Fast & Easy",
    text: "Banking made simple.",
  },
  {
    icon: "◉",
    title: "24/7 Support",
    text: "We're here whenever you need us.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Digital Banking",
    text: "A simple, powerful banking experience designed around the way modern customers manage their money.",
  },
  {
    number: "02",
    title: "Wealth Management",
    text: "Smarter tools and insights to help customers understand, grow and protect their wealth.",
  },
  {
    number: "03",
    title: "Business Finance",
    text: "Connected financial solutions that help ambitious businesses manage cash flow and plan for growth.",
  },
  {
    number: "04",
    title: "Secure Payments",
    text: "Fast and reliable payment experiences backed by modern security and intelligent fraud protection.",
  },
];

export default function FinoraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030812] text-white">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[15%] top-[-250px] h-[650px] w-[650px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

        <div className="absolute right-[-200px] top-[35%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.04] blur-[160px]" />
      </div>

      {/* =========================================================
          FINORA NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.08] bg-[#050c17]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute left-1 top-1 h-3 w-5 rounded-tl-md rounded-br-md bg-blue-500" />

                <div className="absolute bottom-1 right-1 h-3 w-5 rounded-tr-md rounded-bl-md bg-cyan-400" />

                <span className="relative text-[17px] font-black italic text-white">
                  F
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-semibold tracking-[0.18em]">
                  FINORA
                </div>

                <div className="mt-1 text-[11px] font-bold tracking-[0.28em] text-cyan-400">
                  04
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/65 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="hidden items-center gap-3 rounded-lg border border-blue-500/60 bg-blue-500/[0.06] px-4 py-2.5 text-[9px] font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10 sm:flex"
            >
              Get Started
              <span>→</span>
            </Link>

            {/* Mobile Menu */}
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

            {/* Mobile Dropdown */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#050c17]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
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
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium"
                >
                  Get Started
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
        className="relative min-h-[780px] overflow-hidden border-b border-white/[0.07] pt-[76px]"
      >
        <Image
          src="/images/Portfolio/finora/hero.jpg"
          alt="Finora digital banking platform"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#020711]/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/80 to-[#020711]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">

          <div className="max-w-[610px]">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                Smarter Finance. Stronger Future.
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[50px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[66px] lg:text-[76px]">
              Financial
              <br />
              Solutions for a
              <br />
              <span className="text-blue-500">
                Better Tomorrow
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-7 text-white/50">
              Finora helps individuals and businesses manage, grow and secure
              their finances with confidence.
            </p>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="#solutions"
                className="group flex items-center gap-5 rounded-md bg-blue-600 px-5 py-3.5 text-[10px] font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:bg-blue-500"
              >
                Explore Solutions

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 text-[10px] font-medium text-white/65 transition hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/70 text-blue-400">
                  ▶
                </span>

                Watch Overview
              </Link>

            </div>
          </div>

          {/* Hero floating arrow */}
          <div className="absolute bottom-20 right-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white/60 backdrop-blur-md transition hover:border-blue-500/60 hover:text-blue-400 lg:flex">
            ↗
          </div>

        </div>

        {/* =========================================================
            HERO FEATURES
        ========================================================= */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07] bg-[#030812]/80 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/[0.08] text-blue-400">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-[9px] font-semibold text-white/80">
                      {feature.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-white/30 sm:block">
                      {feature.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[92px] left-6 hidden rounded-full border border-white/15 bg-[#07101a]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md lg:block">
          Concept Project
        </div>

      </section>

      {/* =========================================================
          ABOUT / BUSINESS
      ========================================================= */}
      <section id="about" className="border-b border-white/[0.07] bg-[#050b13]">

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Finance
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Finora
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  04 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A professional finance concept designed around clarity, trust
                and a modern digital experience.
              </p>

              <Link
                href="#solutions"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
              >
                View Prototype
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINANCE STORY
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

            <Image
              src="/images/Portfolio/finora/finance-1.jpg"
              alt="Finora modern financial office"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/15 bg-[#050b13]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 backdrop-blur-md">
                01 — Digital Finance
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="flex items-center bg-[#07101a] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-400">
                The Finora Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Finance made clearer.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Financial decisions should feel empowering, not complicated.
                Finora combines intelligent tools, transparent information and
                a refined digital experience to help people feel more
                confident about their money.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-8">

                <div>
                  <div className="text-3xl font-semibold">
                    10K+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Customers
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold">
                    99.9%
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Platform Uptime
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section
        id="solutions"
        className="border-b border-white/[0.07] bg-[#030812]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Intro */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Our Solutions
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Built for the way money moves today.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                From everyday banking to wealth creation, Finora brings
                financial tools together in one connected experience.
              </p>

            </div>

            {/* Accordion */}
            <div className="border-t border-white/[0.09]">

              {solutions.map((solution, index) => (
                <button
                  key={solution.number}
                  type="button"
                  onClick={() => setActiveSolution(index)}
                  className="group block w-full border-b border-white/[0.09] py-7 text-left"
                >

                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/20">
                      {solution.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3
                          className={`text-xl font-medium transition sm:text-2xl ${
                            activeSolution === index
                              ? "text-white"
                              : "text-white/55 group-hover:text-white"
                          }`}
                        >
                          {solution.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeSolution === index
                              ? "rotate-45 text-blue-400"
                              : "text-white/20"
                          }`}
                        >
                          ↗
                        </span>

                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeSolution === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">

                          <p className="max-w-xl text-sm leading-7 text-white/35">
                            {solution.text}
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
          CONSULTATION
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          <div className="order-2 flex items-center bg-[#07101a] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-400">
                Wealth & Advisory
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Your money deserves a smarter strategy.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Get a clearer view of your finances with intelligent insights,
                personalized guidance and powerful tools designed to help you
                make better decisions.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 rounded-full border border-blue-500/50 bg-blue-500/[0.07] px-6 py-3.5 text-[10px] font-semibold text-white transition hover:bg-blue-500/15"
              >
                Explore Wealth Management
                <span>↗</span>
              </Link>

            </div>

          </div>

          <div className="relative order-1 min-h-[500px] overflow-hidden lg:order-2 lg:min-h-[650px]">

            <Image
              src="/images/Portfolio/finora/finance-2.jpg"
              alt="Finora financial consultation"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">

              <span className="rounded-full border border-white/15 bg-[#050b13]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 backdrop-blur-md">
                02 — Advisory
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section
        id="resources"
        className="border-b border-white/[0.07] bg-[#050b13]"
      >

        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

            <Image
              src="/images/Portfolio/finora/finance-3.jpg"
              alt="Finora futuristic digital finance technology"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#020711]/20" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/15 bg-[#050b13]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400 backdrop-blur-md">
                03 — Future Finance
              </span>

            </div>

          </div>

          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-400">
                Future of Finance
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Technology that moves with you.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Connected accounts, intelligent insights and secure digital
                experiences give customers a complete view of their financial
                world — wherever they are.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="text-2xl font-semibold text-blue-400">
                    24/7
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Access
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="text-2xl font-semibold text-cyan-400">
                    256-bit
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Security
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURED DASHBOARD
      ========================================================= */}
      <section className="border-b border-white/[0.07] bg-[#030812]">

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-blue-400">
                Featured Experience
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Everything important, at a glance.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              04 / 10
            </span>

          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.09]">

            <Image
              src="/images/Portfolio/finora/hero.jpg"
              alt="Finora featured digital finance experience"
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020711]/85 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-5 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Finora Digital Platform
                </p>

                <h3 className="mt-2 max-w-2xl text-2xl font-medium sm:text-4xl">
                  A financial experience built for confidence.
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
          CTA
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#041021]"
      >

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Start Your Financial Journey
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Build a better financial tomorrow.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Experience a smarter way to manage, grow and secure your finances.
          </p>

          <Link
            href="#home"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-blue-600 px-7 py-4 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.2)] transition hover:bg-blue-500 hover:scale-[1.02]"
          >
            Get Started
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#02060d]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-2">

            <div className="relative flex h-8 w-8 items-center justify-center">

              <div className="absolute left-1 top-1 h-3 w-5 rounded-tl-md rounded-br-md bg-blue-500" />

              <div className="absolute bottom-1 right-1 h-3 w-5 rounded-tr-md rounded-bl-md bg-cyan-400" />

              <span className="relative text-[14px] font-black italic text-white">
                F
              </span>

            </div>

            <div>

              <div className="text-sm font-semibold tracking-[0.18em]">
                FINORA
              </div>

              <div className="text-[7px] uppercase tracking-[0.2em] text-blue-400">
                Smarter Finance
              </div>

            </div>

          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">

            <Link href="#home" className="transition hover:text-white">
              Home
            </Link>

            <Link href="#about" className="transition hover:text-white">
              About
            </Link>

            <Link href="#solutions" className="transition hover:text-white">
              Solutions
            </Link>

            <Link href="#resources" className="transition hover:text-white">
              Resources
            </Link>

            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} Finora. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}