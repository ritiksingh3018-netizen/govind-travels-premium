"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Stays", href: "#stays" },
  { name: "Offers", href: "#offers" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const reasons = [
  {
    icon: "◎",
    title: "Handpicked Properties",
    text: "Beautiful stays selected for quality and character.",
  },
  {
    icon: "◆",
    title: "Best Price Guarantee",
    text: "Competitive prices with no unnecessary surprises.",
  },
  {
    icon: "✓",
    title: "Safe & Secure",
    text: "Verified properties and secure booking experience.",
  },
  {
    icon: "◌",
    title: "24/7 Support",
    text: "Our team is available whenever you need assistance.",
  },
];

const destinations = [
  {
    name: "Himalayan Escapes",
    location: "Manali, Himachal Pradesh",
    image: "/images/Portfolio/terrastay/hotel-1.jpg",
  },
  {
    name: "Coastal Retreats",
    location: "Goa, India",
    image: "/images/Portfolio/terrastay/hotel-3.jpg",
  },
  {
    name: "Luxury Hideaways",
    location: "Udaipur, Rajasthan",
    image: "/images/Portfolio/terrastay/hotel-2.jpg",
  },
];

const stayTypes = [
  {
    number: "01",
    title: "Luxury Resorts",
    text: "Relax in beautifully designed resorts with thoughtful amenities, exceptional service and memorable surroundings.",
  },
  {
    number: "02",
    title: "Private Villas",
    text: "Enjoy privacy, space and personalized experiences in carefully selected villas across inspiring destinations.",
  },
  {
    number: "03",
    title: "Boutique Stays",
    text: "Discover smaller properties with distinctive design, local character and a more personal experience.",
  },
  {
    number: "04",
    title: "Nature Retreats",
    text: "Escape the everyday with peaceful stays surrounded by mountains, forests, beaches and open landscapes.",
  },
];

export default function TerraStayPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStay, setActiveStay] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#06100e] text-white">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-250px] top-[15%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.035] blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[10%] h-[650px] w-[650px] rounded-full bg-[#c29a54]/[0.025] blur-[180px]" />
      </div>

      {/* =========================================================
          TERRASTAY NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">

          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.09] bg-[#07100e]/85 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute h-7 w-5 border border-[#c6a15d]" />
                <span className="relative font-serif text-[19px] text-[#d0ac67]">
                  T
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[14px] font-semibold tracking-[0.18em]">
                  TERRASTAY
                </div>

                <div className="mt-1 text-[6px] uppercase tracking-[0.2em] text-[#9b8a67]">
                  Stay. Explore. Experience.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/60 transition hover:text-[#d0ac67]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="hidden items-center gap-4 sm:flex">
              <a
                href="tel:+919876543210"
                className="text-[8px] text-white/55 transition hover:text-[#d0ac67]"
              >
                ☎ +91 98765 43210
              </a>

              <Link
                href="#search"
                className="flex items-center gap-3 rounded-md bg-[#d2ad68] px-4 py-2.5 text-[9px] font-semibold text-[#10120f] transition hover:bg-[#e0bd7b]"
              >
                Book Now
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
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#07100e]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:hidden ${
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
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-[#d0ac67]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#search"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-[#d2ad68] px-4 py-3 text-sm font-medium text-[#10120f]"
                >
                  Book Now
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
          src="/images/Portfolio/terrastay/hero.jpg"
          alt="TerraStay luxury resort"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06100e] via-[#06100e]/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06100e] via-transparent to-[#06100e]/10" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[714px] max-w-[1440px] items-end px-6 pb-28 pt-36 sm:px-10 lg:px-16">

          <div className="max-w-[660px]">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a05b]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.23em] text-[#d0ac67]">
                Premium Stays. Memorable Experiences.
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[48px] font-medium leading-[0.95] tracking-[-0.045em] sm:text-[64px] lg:text-[76px]">
              Find Your Perfect
              <br />
              Stay,{" "}
              <span className="text-[#d0ac67]">
                Everywhere.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-7 text-white/55">
              From cozy getaways to luxury escapes, TerraStay brings you
              handpicked stays that feel like home.
            </p>

            {/* Search */}
            <div
              id="search"
              className="mt-8 max-w-[590px] rounded-xl border border-white/10 bg-[#0a1915]/85 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            >
              <div className="grid gap-1 sm:grid-cols-4">

                <div className="border-b border-white/[0.08] px-3 py-3 sm:border-b-0 sm:border-r">
                  <div className="text-[7px] uppercase tracking-[0.15em] text-[#c5a15f]">
                    Destination
                  </div>

                  <div className="mt-1 text-[9px] text-white/70">
                    Where are you going?
                  </div>
                </div>

                <div className="border-b border-white/[0.08] px-3 py-3 sm:border-b-0 sm:border-r">
                  <div className="text-[7px] uppercase tracking-[0.15em] text-[#c5a15f]">
                    Check In
                  </div>

                  <div className="mt-1 text-[9px] text-white/70">
                    Select date
                  </div>
                </div>

                <div className="border-b border-white/[0.08] px-3 py-3 sm:border-b-0 sm:border-r">
                  <div className="text-[7px] uppercase tracking-[0.15em] text-[#c5a15f]">
                    Check Out
                  </div>

                  <div className="mt-1 text-[9px] text-white/70">
                    Select date
                  </div>
                </div>

                <Link
                  href="#stays"
                  className="flex items-center justify-center rounded-lg bg-[#c6a15d] px-4 py-3 text-[9px] font-semibold text-[#10120f] transition hover:bg-[#d9b874]"
                >
                  Search
                  <span className="ml-2">⌕</span>
                </Link>

              </div>
            </div>

          </div>

          {/* Hero Stats */}
          <div className="absolute right-[6%] top-[38%] hidden w-[170px] rounded-2xl border border-white/15 bg-[#07100e]/80 p-4 backdrop-blur-md xl:block">

            {[
              ["▣", "2,500+", "Premium Stays"],
              ["◉", "150+", "Destinations"],
              ["♧", "50,000+", "Happy Guests"],
            ].map(([icon, value, label], index) => (
              <div
                key={label}
                className={`${index !== 0 ? "border-t border-white/[0.08] pt-4" : ""} ${
                  index !== 2 ? "pb-4" : ""
                }`}
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c6a15d]/25 text-[#d0ac67]">
                    {icon}
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      {value}
                    </div>

                    <div className="text-[7px] text-white/40">
                      {label}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#07100e]/70 text-xl text-white/60 backdrop-blur-md transition hover:border-[#c6a15d] hover:text-[#d0ac67] lg:flex">
            ↗
          </div>

        </div>

        {/* Concept */}
        <div className="absolute bottom-[102px] left-8 hidden rounded-full border border-white/15 bg-[#07100e]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-md lg:block">
          Concept Project
        </div>

        {/* Feature Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#081512]/90 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c6a15d]/25 bg-[#c6a15d]/[0.05] text-[#d0ac67]">
                    {reason.icon}
                  </div>

                  <div>
                    <h3 className="text-[9px] font-semibold text-white/80">
                      {reason.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-white/30 sm:block">
                      {reason.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="border-b border-white/[0.07] bg-[#07110f]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Hospitality
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="font-serif text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                  TerraStay
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  08 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A premium hospitality concept built around destinations, stays
                and direct enquiries.
              </p>

              <Link
                href="#stays"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#d0ac67]"
              >
                View Prototype
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          DESTINATIONS
      ========================================================= */}
      <section
        id="destinations"
        className="border-b border-white/[0.07] bg-[#07110f]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10">

            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c8a260]">
              Explore Destinations
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Places worth travelling for.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">
              From mountain escapes to tropical retreats, discover destinations
              that make every stay feel extraordinary.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {destinations.map((destination, index) => (
              <article
                key={destination.name}
                className="group relative aspect-[0.8] overflow-hidden rounded-2xl border border-white/[0.08]"
              >

                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[8px] text-white/60 backdrop-blur-md">
                  0{index + 1}
                </div>

                <div className="absolute bottom-6 left-6 right-6">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#d0ac67]">
                    {destination.location}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {destination.name}
                  </h3>

                  <Link
                    href="#stays"
                    className="mt-5 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65 transition hover:text-white"
                  >
                    Explore Destination
                    <span>↗</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          STAYS
      ========================================================= */}
      <section
        id="stays"
        className="border-b border-white/[0.07] bg-[#080f0d]"
      >

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">

            <Image
              src="/images/Portfolio/terrastay/hotel-1.jpg"
              alt="TerraStay luxury hotel"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06100e]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full border border-white/15 bg-[#07100e]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0ac67] backdrop-blur-md">
                01 — Luxury Stays
              </span>
            </div>

          </div>

          {/* Content */}
          <div className="flex items-center bg-[#f1f0e9] px-6 py-20 text-[#10201b] sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8b6c35]">
                Stay Your Way
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                A stay should be part of the journey.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#10201b]/55">
                We believe where you stay shapes how you experience a
                destination. That is why TerraStay focuses on properties that
                offer more than a room — they offer a feeling.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#10201b]/45">
                Every property is selected with comfort, design, location and
                service in mind.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#10201b]/10 pt-8">

                <div>
                  <div className="font-serif text-3xl text-[#8c6c35]">
                    2,500+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#10201b]/35">
                    Properties
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl text-[#8c6c35]">
                    150+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#10201b]/35">
                    Destinations
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          STAY TYPES
      ========================================================= */}
      <section
        id="offers"
        className="border-b border-white/[0.07] bg-[#06100e]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c6a15d]">
                Find Your Stay
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                The right place changes everything.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                Choose from a range of stay experiences designed around how you
                want to travel.
              </p>

            </div>

            {/* Accordion */}
            <div className="border-t border-white/[0.09]">

              {stayTypes.map((stay, index) => (
                <button
                  key={stay.number}
                  type="button"
                  onClick={() => setActiveStay(index)}
                  className="group block w-full border-b border-white/[0.09] py-7 text-left"
                >

                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-white/20">
                      {stay.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3
                          className={`font-serif text-xl font-medium transition sm:text-2xl ${
                            activeStay === index
                              ? "text-[#d0ac67]"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {stay.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeStay === index
                              ? "rotate-45 text-[#d0ac67]"
                              : "text-white/20"
                          }`}
                        >
                          ↗
                        </span>

                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeStay === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-sm leading-7 text-white/35">
                            {stay.text}
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
          ROOM EXPERIENCE
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Content */}
          <div className="order-2 flex items-center bg-[#07100e] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c6a15d]">
                The Details Matter
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Comfort designed around you.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                From the first welcome to the final morning, every detail is
                considered to make your stay comfortable, effortless and
                memorable.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Beautifully designed rooms",
                  "Thoughtful amenities",
                  "Verified hospitality partners",
                  "Easy direct enquiries",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/55"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c6a15d]/30 text-[10px] text-[#d0ac67]">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Image */}
          <div className="relative order-1 min-h-[560px] overflow-hidden lg:order-2 lg:min-h-[740px]">

            <Image
              src="/images/Portfolio/terrastay/hotel-2.jpg"
              alt="TerraStay luxury hotel room"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06100e]/65 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">
              <span className="rounded-full border border-white/15 bg-[#07100e]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d0ac67] backdrop-blur-md">
                02 — Room Experience
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURED EXPERIENCE
      ========================================================= */}
      <section className="border-b border-white/[0.07] bg-[#06100e]">

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c6a15d]">
                Featured Experience
              </p>

              <h2 className="mt-4 font-serif text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                Stay somewhere unforgettable.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              08 / 10
            </span>

          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.08]">

            <Image
              src="/images/Portfolio/terrastay/hotel-3.jpg"
              alt="TerraStay luxury destination resort"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-6 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d0ac67]">
                  Coastal Retreat
                </p>

                <h3 className="mt-2 max-w-2xl font-serif text-3xl font-medium sm:text-5xl">
                  Wake up somewhere extraordinary.
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-white/45">
                  Discover a slower rhythm, beautiful surroundings and a stay
                  designed around unforgettable moments.
                </p>

              </div>

              <Link
                href="#contact"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md transition hover:border-[#c6a15d] hover:text-[#d0ac67]"
              >
                ↗
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY TERRASTAY
      ========================================================= */}
      <section className="border-b border-white/[0.07] bg-[#f0efe8] text-[#12201b]">

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8a6b37]">
                Why TerraStay
              </p>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Comfort, convenience & care.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#12201b]/50">
                We take the uncertainty out of finding a great stay, so you can
                spend more time enjoying the destination.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-[#12201b]/10 bg-white/50 p-6"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8a6b37]/25 text-[#8a6b37]">
                    {reason.icon}
                  </div>

                  <h3 className="mt-5 font-serif text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#12201b]/45">
                    {reason.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#06100e]"
      >

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6a15d]/[0.055] blur-[160px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d0ac67]">
            Plan Your Escape
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Your next stay starts here.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Tell us where you want to go and we&apos;ll help you find a stay
            worth remembering.
          </p>

          <Link
            href="#search"
            className="mt-10 inline-flex items-center gap-5 bg-[#c6a15d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#10120f] transition hover:bg-[#d9b874]"
          >
            Find Your Stay
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#040908]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-3">

            <div className="relative flex h-8 w-8 items-center justify-center">

              <div className="absolute h-7 w-5 border border-[#c6a15d]" />

              <span className="relative font-serif text-sm text-[#d0ac67]">
                T
              </span>

            </div>

            <div>

              <div className="text-sm font-semibold tracking-[0.18em]">
                TERRASTAY
              </div>

              <div className="text-[7px] uppercase tracking-[0.2em] text-[#927c53]">
                Stay. Explore. Experience.
              </div>

            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">

            <Link
              href="#home"
              className="transition hover:text-[#d0ac67]"
            >
              Home
            </Link>

            <Link
              href="#destinations"
              className="transition hover:text-[#d0ac67]"
            >
              Destinations
            </Link>

            <Link
              href="#stays"
              className="transition hover:text-[#d0ac67]"
            >
              Stays
            </Link>

            <Link
              href="#offers"
              className="transition hover:text-[#d0ac67]"
            >
              Offers
            </Link>

            <Link
              href="#about"
              className="transition hover:text-[#d0ac67]"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-[#d0ac67]"
            >
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} TerraStay. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}