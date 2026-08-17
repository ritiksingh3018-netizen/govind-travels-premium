"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  { name: "Collections", href: "#collections" },
  { name: "About", href: "#about" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

const collections = [
  {
    number: "01",
    title: "The Essentials",
    text: "Refined everyday pieces designed with timeless silhouettes, premium fabrics and effortless versatility.",
  },
  {
    number: "02",
    title: "Modern Tailoring",
    text: "Sharp, sophisticated tailoring created for a confident contemporary wardrobe.",
  },
  {
    number: "03",
    title: "Evening Edit",
    text: "Statement pieces designed for evenings where understated elegance makes the strongest impression.",
  },
  {
    number: "04",
    title: "Signature Accessories",
    text: "A considered collection of bags, watches, eyewear and details that complete the Velora aesthetic.",
  },
];

const values = [
  {
    icon: "✦",
    title: "Premium Quality",
    text: "Handpicked materials crafted with attention to detail.",
  },
  {
    icon: "◇",
    title: "Timeless Design",
    text: "Pieces created to remain relevant beyond seasons.",
  },
  {
    icon: "↗",
    title: "Worldwide Shipping",
    text: "Fast, reliable and secure delivery around the world.",
  },
  {
    icon: "◉",
    title: "24/7 Support",
    text: "Our team is here whenever you need us.",
  },
];

export default function VeloraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-220px] top-[15%] h-[600px] w-[600px] rounded-full bg-[#b78948]/[0.035] blur-[170px]" />

        <div className="absolute right-[-200px] top-[50%] h-[600px] w-[600px] rounded-full bg-[#8c632d]/[0.025] blur-[170px]" />
      </div>

      {/* =========================================================
          VELORA NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.09] bg-[#080807]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute left-1 top-1 h-6 w-6 rotate-45 border border-[#c59a58]" />

                <span className="relative font-serif text-[20px] italic text-[#d0a267]">
                  V
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-medium tracking-[0.2em]">
                  VELORA
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.28em] text-[#a98a5c]">
                  Timeless Fashion
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/60 transition hover:text-[#d0a267]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Icons + CTA */}
            <div className="hidden items-center gap-4 sm:flex">
              <button
                type="button"
                aria-label="Search"
                className="text-sm text-white/50 transition hover:text-[#d0a267]"
              >
                ⌕
              </button>

              <button
                type="button"
                aria-label="Account"
                className="text-sm text-white/50 transition hover:text-[#d0a267]"
              >
                ♙
              </button>

              <button
                type="button"
                aria-label="Shopping bag"
                className="relative text-sm text-white/50 transition hover:text-[#d0a267]"
              >
                ♧

                <span className="absolute -right-2 -top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#b88a4b] text-[6px] text-black">
                  0
                </span>
              </button>

              <Link
                href="#shop"
                className="ml-1 flex items-center gap-3 border border-[#b88a4b]/60 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#b88a4b]/10"
              >
                Shop Now
                <span>→</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

            {/* Mobile Dropdown */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#080807]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:hidden ${
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
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-[#d0a267]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#shop"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between bg-[#b88a4b] px-4 py-3 text-sm font-medium text-black"
                >
                  Shop Now
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
          src="/images/Portfolio/velora/hero.jpg"
          alt="Velora luxury fashion collection"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#050505]/10" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-end px-6 pb-24 pt-36 sm:px-10 lg:px-16">

          <div className="max-w-[670px]">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c59a58]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#d0a267]">
                The New Season Collection
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] font-serif text-[50px] font-medium leading-[0.94] tracking-[-0.045em] sm:text-[66px] lg:text-[76px]">
              Timeless Style.
              <br />
              Modern{" "}
              <span className="text-[#c79b5c]">
                Elegance.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-7 text-white/55">
              Discover premium quality fashion crafted for those who value
              style, comfort and confidence.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="#collections"
                className="group flex items-center gap-5 bg-[#bd8d4b] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#11100d] transition hover:bg-[#d0a267]"
              >
                Explore Collection

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#journal"
                className="flex items-center gap-3 border border-white/20 bg-black/20 px-5 py-3.5 text-[10px] font-medium text-white/75 backdrop-blur-sm transition hover:border-[#c59a58] hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-[8px]">
                  ▶
                </span>

                Watch Lookbook
              </Link>

            </div>

          </div>

          {/* Hero Values Card */}
          <div className="absolute right-[6%] top-[38%] hidden w-[210px] border border-white/15 bg-[#090909]/75 p-5 backdrop-blur-md xl:block">

            {values.slice(0, 3).map((value, index) => (
              <div
                key={value.title}
                className={`${index !== 0 ? "border-t border-white/[0.08] pt-4" : ""} ${
                  index !== 2 ? "pb-4" : ""
                }`}
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b88a4b]/30 text-[#c99d60]">
                    {value.icon}
                  </div>

                  <div>
                    <h3 className="text-[9px] font-medium text-white/80">
                      {value.title}
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-white/35">
                      {value.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#080807]/65 text-xl text-white/60 backdrop-blur-md transition hover:border-[#c59a58] hover:text-[#d0a267] lg:flex">
            ↗
          </div>

        </div>

        {/* Feature Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#080807]/85 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {[
              {
                icon: "◇",
                title: "Trending Collections",
                text: "Stay ahead with our curated new arrivals.",
              },
              {
                icon: "♧",
                title: "Secure Payments",
                text: "Your payments are 100% safe and secure.",
              },
              {
                icon: "♢",
                title: "Worldwide Shipping",
                text: "Fast delivery to destinations worldwide.",
              },
              {
                icon: "◉",
                title: "24/7 Support",
                text: "Our team is here whenever you need us.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b88a4b]/25 bg-[#b88a4b]/[0.06] text-[#c99d60]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[9px] font-semibold text-white/75">
                      {item.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-white/30 sm:block">
                      {item.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[94px] left-8 hidden rounded-full border border-white/15 bg-[#090909]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-md lg:block">
          Concept Project
        </div>

      </section>

      {/* =========================================================
          ABOUT / BUSINESS
      ========================================================= */}
      <section
        id="about"
        className="border-b border-white/[0.07] bg-[#080807]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c59a58]">
                Fashion & E-Commerce
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="font-serif text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                  Velora
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  06 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A luxury fashion concept combining editorial visuals with a
                modern shopping experience.
              </p>

              <Link
                href="#collections"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d0a267]"
              >
                View Prototype
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FASHION STORY
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[700px]">

            <Image
              src="/images/Portfolio/velora/fashion-1.jpg"
              alt="Velora luxury fashion boutique"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/15 bg-[#080807]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0a267] backdrop-blur-md">
                01 — The Velora World
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="flex items-center bg-[#0a0a09] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a58]">
                The Velora Philosophy
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Fashion beyond seasons.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Velora is built around the belief that great fashion should
                feel effortless. Every collection balances modern silhouettes
                with timeless design so each piece can become part of a
                personal wardrobe for years to come.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/35">
                From the fabric we choose to the way every collection is
                presented, detail is never an afterthought.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-8">

                <div>
                  <div className="font-serif text-3xl text-[#d0a267]">
                    08+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Collections
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl text-[#d0a267]">
                    25+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    Countries
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          COLLECTIONS
      ========================================================= */}
      <section
        id="collections"
        className="border-b border-white/[0.07] bg-[#070707]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Intro */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c59a58]">
                Our Collections
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Designed for your signature style.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                Explore carefully curated collections designed to move
                effortlessly between everyday moments and extraordinary ones.
              </p>

            </div>

            {/* Collection Accordion */}
            <div className="border-t border-white/[0.09]">

              {collections.map((collection, index) => (
                <button
                  key={collection.number}
                  type="button"
                  onClick={() => setActiveCollection(index)}
                  className="group block w-full border-b border-white/[0.09] py-7 text-left"
                >

                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/20">
                      {collection.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3
                          className={`font-serif text-xl font-medium transition sm:text-2xl ${
                            activeCollection === index
                              ? "text-[#d0a267]"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {collection.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeCollection === index
                              ? "rotate-45 text-[#c59a58]"
                              : "text-white/20"
                          }`}
                        >
                          ↗
                        </span>

                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeCollection === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">

                          <p className="max-w-xl text-sm leading-7 text-white/35">
                            {collection.text}
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
          EDITORIAL
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Content */}
          <div className="order-2 flex items-center bg-[#0b0b0a] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a58]">
                Editorial Collection
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Effortless luxury.
                <br />
                Every day.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Discover pieces designed to make getting dressed feel
                effortless. Clean tailoring, rich textures and subtle details
                create a wardrobe that speaks without trying too hard.
              </p>

              <Link
                href="#shop"
                className="mt-9 inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-[#c59a58] hover:text-[#d0a267]"
              >
                Shop The Edit
                <span>↗</span>
              </Link>

            </div>

          </div>

          {/* Image */}
          <div className="relative order-1 min-h-[620px] overflow-hidden lg:order-2 lg:min-h-[760px]">

            <Image
              src="/images/Portfolio/velora/fashion-2.jpg"
              alt="Velora fashion editorial"
              fill
              className="object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/65 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">

              <span className="rounded-full border border-white/15 bg-[#080807]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0a267] backdrop-blur-md">
                02 — Editorial
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          SHOP
      ========================================================= */}
      <section
        id="shop"
        className="border-b border-white/[0.07] bg-[#070707]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c59a58]">
                Signature Edit
              </p>

              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                Details make the look.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              06 / 10
            </span>

          </div>

          {/* Product Visual */}
          <div className="relative aspect-[16/9] overflow-hidden border border-white/[0.09]">

            <Image
              src="/images/Portfolio/velora/fashion-3.jpg"
              alt="Velora luxury accessories"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-6 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d0a267]">
                  Accessories Collection
                </p>

                <h3 className="mt-2 max-w-2xl font-serif text-3xl font-medium sm:text-5xl">
                  The finishing touch.
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-white/45">
                  Complete your signature look with Velora&apos;s collection
                  of considered accessories.
                </p>

              </div>

              <Link
                href="#contact"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md transition hover:border-[#c59a58] hover:text-[#d0a267]"
              >
                ↗
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          JOURNAL
      ========================================================= */}
      <section
        id="journal"
        className="border-b border-white/[0.07] bg-[#0a0a09]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c59a58]">
                The Journal
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Stories behind the style.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/40">
                Explore the inspirations, craftsmanship and people behind
                every Velora collection.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-[#d0a267]"
              >
                Read The Journal
                <span>↗</span>
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <article className="border border-white/[0.08] bg-white/[0.02] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-[#c59a58]">
                  01 — Style
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  Building a timeless wardrobe
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/35">
                  The essential principles behind effortless everyday style.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-white/30">
                  6 min read ↗
                </div>

              </article>

              <article className="border border-white/[0.08] bg-white/[0.02] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-[#c59a58]">
                  02 — Craft
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  Why details matter
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/35">
                  A closer look at materials, finishing and modern
                  craftsmanship.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-white/30">
                  5 min read ↗
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
        className="relative overflow-hidden bg-[#080807]"
      >

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b88a4b]/[0.06] blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c59a58]">
            Discover Velora
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Find your signature style.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Explore timeless pieces designed for the modern wardrobe.
          </p>

          <Link
            href="#shop"
            className="mt-10 inline-flex items-center gap-5 bg-[#bd8d4b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#11100d] transition hover:bg-[#d0a267]"
          >
            Shop The Collection
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#050505]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-3">

            <div className="relative flex h-8 w-8 items-center justify-center">

              <div className="absolute left-1 top-1 h-6 w-6 rotate-45 border border-[#b88a4b]" />

              <span className="relative font-serif text-sm italic text-[#d0a267]">
                V
              </span>

            </div>

            <div>

              <div className="text-sm font-medium tracking-[0.18em]">
                VELORA
              </div>

              <div className="text-[7px] uppercase tracking-[0.2em] text-[#a08054]">
                Timeless Fashion
              </div>

            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">

            <Link href="#home" className="transition hover:text-[#d0a267]">
              Home
            </Link>

            <Link href="#shop" className="transition hover:text-[#d0a267]">
              Shop
            </Link>

            <Link href="#collections" className="transition hover:text-[#d0a267]">
              Collections
            </Link>

            <Link href="#about" className="transition hover:text-[#d0a267]">
              About
            </Link>

            <Link href="#journal" className="transition hover:text-[#d0a267]">
              Journal
            </Link>

            <Link href="#contact" className="transition hover:text-[#d0a267]">
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} Velora. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}