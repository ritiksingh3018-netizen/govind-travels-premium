"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Car Detailing",
    text: "Deep cleaning, polishing and finishing designed to restore your vehicle's showroom appearance.",
    image: "/images/Portfolio/autozen/service-1.jpg",
  },
  {
    number: "02",
    title: "Ceramic Coating",
    text: "Advanced surface protection that adds deep gloss, durability and a long-lasting hydrophobic finish.",
    image: "/images/Portfolio/autozen/service-2.jpg",
  },
  {
    number: "03",
    title: "Paint Protection",
    text: "Protect your vehicle's original finish from everyday scratches, road debris and environmental damage.",
    image: "/images/Portfolio/autozen/service-3.jpg",
  },
  {
    number: "04",
    title: "Interior Care",
    text: "Professional interior cleaning and conditioning for leather, fabric, dashboard and every detail.",
    image: "/images/Portfolio/autozen/service-1.jpg",
  },
];

const stats = [
  {
    value: "10,000+",
    label: "Happy Customers",
    icon: "▰",
  },
  {
    value: "50+",
    label: "Expert Technicians",
    icon: "⚒",
  },
  {
    value: "5+",
    label: "Service Centers",
    icon: "▣",
  },
  {
    value: "4.9/5",
    label: "Customer Rating",
    icon: "★",
  },
];

const packages = [
  {
    name: "Essential Care",
    price: "₹2,499",
    description: "A complete refresh for your everyday vehicle.",
    features: [
      "Exterior Foam Wash",
      "Interior Vacuum",
      "Dashboard Cleaning",
      "Tyre Dressing",
    ],
  },
  {
    name: "Premium Detail",
    price: "₹5,999",
    description: "A deeper detailing experience for a showroom finish.",
    features: [
      "Deep Exterior Cleaning",
      "Interior Deep Cleaning",
      "Paint Polish",
      "Premium Protection",
    ],
    featured: true,
  },
  {
    name: "Ultimate Protection",
    price: "₹14,999",
    description: "Advanced protection for owners who expect more.",
    features: [
      "Paint Correction",
      "Ceramic Coating",
      "Interior Protection",
      "Full Vehicle Inspection",
    ],
  },
];

export default function AutoZenPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-250px] top-[15%] h-[600px] w-[600px] rounded-full bg-red-600/[0.035] blur-[170px]" />

        <div className="absolute right-[-250px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-red-500/[0.025] blur-[170px]" />
      </div>

      {/* =========================================================
          AUTOZEN NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">

          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-white/[0.09] bg-[#070809]/90 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <span className="font-bold italic tracking-[-0.18em] text-white">
                  A
                </span>

                <span className="ml-[-2px] font-black italic text-red-500">
                  Z
                </span>
              </div>

              <div className="leading-none">
                <div className="text-[14px] font-bold tracking-[0.04em]">
                  AUTO<span className="text-red-500">ZEN</span>
                </div>

                <div className="mt-1 text-[6px] uppercase tracking-[0.18em] text-white/35">
                  Detail. Protect. Perfect.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-white/55 transition hover:text-red-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="hidden items-center gap-4 sm:flex">

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-[8px] text-white/55 transition hover:text-red-500"
              >
                <span className="text-red-500">◉</span>
                +91 98765 43210
              </a>

              <Link
                href="#appointment"
                className="flex items-center gap-3 rounded-md bg-red-600 px-4 py-2.5 text-[9px] font-semibold text-white transition hover:bg-red-500"
              >
                Book an Appointment
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

            {/* Mobile Menu */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-white/10 bg-[#08090a]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:hidden ${
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
                    className="block border-b border-white/[0.06] px-4 py-4 text-sm text-white/65 transition hover:text-red-500"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-red-600 px-4 py-3 text-sm font-medium text-white"
                >
                  Book Appointment
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
          src="/images/Portfolio/autozen/hero.jpg"
          alt="AutoZen premium car detailing"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/10" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[714px] max-w-[1440px] items-end px-6 pb-28 pt-36 sm:px-10 lg:px-16">

          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-red-600" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/65">
                Premium Car Care & Detailing
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[48px] font-semibold leading-[0.94] tracking-[-0.05em] sm:text-[64px] lg:text-[76px]">
              Your Car Deserves
              <br />
              The{" "}
              <span className="text-red-500">
                Best Care.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-7 text-white/50">
              From advanced detailing to mechanical perfection, AutoZen ensures
              your car looks great and performs at its very best.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="#services"
                className="group flex items-center gap-5 rounded-md bg-red-600 px-5 py-3.5 text-[10px] font-semibold text-white shadow-[0_12px_35px_rgba(220,38,38,0.2)] transition hover:bg-red-500"
              >
                Explore Services

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 rounded-md border border-white/20 bg-black/20 px-5 py-3.5 text-[10px] font-medium text-white/70 backdrop-blur-sm transition hover:border-red-500 hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[8px]">
                  ▶
                </span>

                Watch Video
              </Link>

            </div>

          </div>

          {/* Premium Quality Card */}
          <div className="absolute right-[6%] top-[35%] hidden w-[190px] rounded-2xl border border-white/10 bg-[#08090a]/80 p-4 backdrop-blur-md xl:block">

            {[
              ["⬟", "Premium Quality", "Best-in-class products & materials."],
              ["✦", "Advanced Expertise", "Trained automotive specialists."],
              ["◷", "Quick & Reliable", "Professional service, every time."],
              ["♧", "100% Satisfaction", "Your car deserves nothing less."],
            ].map(([icon, title, text], index) => (
              <div
                key={title}
                className={`${index !== 0 ? "border-t border-white/[0.08] pt-4" : ""} ${
                  index !== 3 ? "pb-4" : ""
                }`}
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-600/25 bg-red-600/[0.05] text-red-500">
                    {icon}
                  </div>

                  <div>

                    <h3 className="text-[9px] font-semibold text-white/80">
                      {title}
                    </h3>

                    <p className="mt-1 text-[7px] leading-4 text-white/30">
                      {text}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#070809]/70 text-xl text-white/60 backdrop-blur-md transition hover:border-red-500 hover:text-red-500 lg:flex">
            ↗
          </div>

        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[104px] left-8 hidden rounded-full border border-white/15 bg-[#08090a]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65 backdrop-blur-md lg:block">
          Concept Project
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08] bg-[#08090a]/90 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/[0.07] px-5 py-5 last:border-r-0 sm:px-7"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-600/25 bg-red-600/[0.05] text-red-500">
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
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="border-b border-white/[0.07] bg-[#08090a]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Automobile
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  AutoZen
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  09 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                A modern automotive concept focused on vehicles, services and a
                premium digital experience.
              </p>

              <Link
                href="#services"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 transition hover:text-red-500"
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

            {/* Intro */}
            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500">
                Our Services
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Complete care for every drive.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                From routine detailing to advanced paint protection, every
                AutoZen service is built around precision and care.
              </p>

            </div>

            {/* Service Accordion */}
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
                          className={`text-xl font-semibold transition sm:text-2xl ${
                            activeService === index
                              ? "text-red-500"
                              : "text-white/65 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeService === index
                              ? "rotate-45 text-red-500"
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
          SERVICE FEATURE
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[540px] overflow-hidden lg:min-h-[720px]">

            <Image
              src="/images/Portfolio/autozen/service-1.jpg"
              alt="AutoZen professional car detailing"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/15 bg-[#08090a]/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-red-500 backdrop-blur-md">
                01 — Car Detailing
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="flex items-center bg-[#111214] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                Precision Detailing
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Bring back the showroom finish.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Our detailing process combines professional products,
                experienced technicians and meticulous attention to every
                surface of your vehicle.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Exterior deep cleaning",
                  "Paint decontamination",
                  "Machine polishing",
                  "Premium finishing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/55"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-red-600/30 text-[10px] text-red-500">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PACKAGES
      ========================================================= */}
      <section
        id="packages"
        className="border-b border-white/[0.07] bg-[#08090a]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10">

            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
              Service Packages
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Choose the right care for your car.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">
              Flexible packages designed for everything from regular
              maintenance to complete vehicle protection.
            </p>

          </div>

          {/* Package Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative rounded-2xl border p-7 transition duration-500 ${
                  pkg.featured
                    ? "border-red-600/50 bg-red-600/[0.06]"
                    : "border-white/[0.08] bg-white/[0.025]"
                }`}
              >

                {pkg.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-[7px] font-bold uppercase tracking-[0.15em]">
                    Popular
                  </div>
                )}

                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  AutoZen Care
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {pkg.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-xs leading-6 text-white/35">
                  {pkg.description}
                </p>

                <div className="mt-6 border-y border-white/[0.08] py-5">

                  <span className="text-3xl font-semibold">
                    {pkg.price}
                  </span>

                  <span className="ml-2 text-[9px] text-white/25">
                    onwards
                  </span>

                </div>

                <div className="mt-6 space-y-3">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-xs text-white/50"
                    >
                      <span className="text-red-500">
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}

                </div>

                <Link
                  href="#appointment"
                  className={`mt-8 flex items-center justify-between rounded-md px-4 py-3 text-[10px] font-semibold ${
                    pkg.featured
                      ? "bg-red-600 text-white hover:bg-red-500"
                      : "border border-white/10 text-white/60 hover:border-red-500 hover:text-white"
                  }`}
                >
                  Choose Package
                  <span>→</span>
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CERAMIC / PROTECTION
      ========================================================= */}
      <section className="border-b border-white/[0.07]">

        <div className="grid lg:grid-cols-2">

          {/* Content */}
          <div className="order-2 flex items-center bg-[#070809] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                Advanced Protection
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Protection that looks as good as it performs.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Protect your vehicle's finish with advanced ceramic coatings
                designed to enhance gloss, repel contaminants and make
                maintenance easier.
              </p>

              <Link
                href="#appointment"
                className="mt-9 inline-flex items-center gap-4 rounded-md bg-red-600 px-6 py-3.5 text-[10px] font-semibold text-white transition hover:bg-red-500"
              >
                Explore Protection
                <span>↗</span>
              </Link>

            </div>

          </div>

          {/* Image */}
          <div className="relative order-1 min-h-[560px] overflow-hidden lg:order-2 lg:min-h-[740px]">

            <Image
              src="/images/Portfolio/autozen/service-2.jpg"
              alt="AutoZen ceramic coating service"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">

              <span className="rounded-full border border-white/15 bg-[#08090a]/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-red-500 backdrop-blur-md">
                02 — Ceramic Protection
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WORKSHOP / GALLERY
      ========================================================= */}
      <section
        id="gallery"
        className="border-b border-white/[0.07] bg-[#050607]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                The AutoZen Standard
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Precision in every bay.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              09 / 10
            </span>

          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.08]">

            <Image
              src="/images/Portfolio/autozen/service-3.jpg"
              alt="AutoZen professional automotive workshop"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-6 sm:bottom-10 sm:left-10 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
                  Professional Workshop
                </p>

                <h3 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-5xl">
                  Built for cars that demand more.
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-white/45">
                  Modern equipment, skilled technicians and a process built
                  around quality.
                </p>

              </div>

              <Link
                href="#contact"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-lg backdrop-blur-md transition hover:border-red-500 hover:text-red-500"
              >
                ↗
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
        className="border-b border-white/[0.07] bg-[#08090a]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                AutoZen Insights
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Better care starts with better knowledge.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/35">
                Practical advice for keeping your vehicle cleaner, safer and
                performing at its best.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition hover:text-red-500"
              >
                Explore The Blog
                <span>↗</span>
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-red-500">
                  01 — Protection
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Why ceramic coating matters
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/30">
                  Understand how modern ceramic protection can help preserve
                  your car's finish.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-white/20">
                  5 min read ↗
                </div>

              </article>

              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">

                <div className="text-[9px] uppercase tracking-[0.2em] text-red-500">
                  02 — Care
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Keeping your car showroom ready
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/30">
                  Simple habits that help your vehicle stay cleaner between
                  professional detailing sessions.
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
          APPOINTMENT CTA
      ========================================================= */}
      <section
        id="appointment"
        className="relative overflow-hidden bg-red-600"
      >

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Book Your Service
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Give your car the care it deserves.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/70">
            Choose your service, pick a convenient time and let our experts
            handle the rest.
          </p>

          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-5 rounded-md bg-black px-7 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#111]"
          >
            Book An Appointment
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="border-b border-white/[0.07] bg-[#08090a]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                Get In Touch
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Ready to give your car a better experience?
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/35">
                Tell us what your vehicle needs and our team will help you
                choose the right service.
              </p>

              <div className="mt-9 space-y-4">

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-sm text-white/60 transition hover:text-red-500"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-red-500">
                    ☎
                  </span>

                  +91 98765 43210
                </a>

                <a
                  href="mailto:hello@autozen.com"
                  className="flex items-center gap-4 text-sm text-white/60 transition hover:text-red-500"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-red-500">
                    @
                  </span>

                  hello@autozen.com
                </a>

                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-red-500">
                    ◉
                  </span>

                  Premium Auto Care Studio
                </div>

              </div>

            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="mt-2 w-full rounded-lg border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-600"
                  />
                </div>

              </div>

              <div className="mt-5">

                <label className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Service
                </label>

                <select className="mt-2 w-full rounded-lg border border-white/[0.08] bg-[#0a0b0c] px-4 py-3 text-sm text-white/60 outline-none focus:border-red-600">
                  <option>Car Detailing</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Protection</option>
                  <option>Interior Care</option>
                  <option>Mechanical Service</option>
                </select>

              </div>

              <div className="mt-5">

                <label className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your car..."
                  className="mt-2 w-full resize-none rounded-lg border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-600"
                />

              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-between rounded-lg bg-red-600 px-5 py-3.5 text-[10px] font-semibold text-white transition hover:bg-red-500"
              >
                Send Enquiry
                <span>→</span>
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.07] bg-[#040506]">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center font-bold italic">
              <span className="text-white">A</span>
              <span className="text-red-500">Z</span>
            </div>

            <div>

              <div className="text-sm font-bold tracking-[0.04em]">
                AUTO<span className="text-red-500">ZEN</span>
              </div>

              <div className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                Detail. Protect. Perfect.
              </div>

            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">

            <Link
              href="#home"
              className="transition hover:text-red-500"
            >
              Home
            </Link>

            <Link
              href="#services"
              className="transition hover:text-red-500"
            >
              Services
            </Link>

            <Link
              href="#packages"
              className="transition hover:text-red-500"
            >
              Packages
            </Link>

            <Link
              href="#about"
              className="transition hover:text-red-500"
            >
              About
            </Link>

            <Link
              href="#gallery"
              className="transition hover:text-red-500"
            >
              Gallery
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-red-500"
            >
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} AutoZen. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}