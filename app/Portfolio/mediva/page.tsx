"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Doctors", href: "#doctors" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "✚",
    title: "Easy Appointment",
    text: "Book appointments online quickly and securely.",
  },
  {
    icon: "▦",
    title: "Advanced Technology",
    text: "Modern facilities and advanced medical technology.",
  },
  {
    icon: "♡",
    title: "Patient First",
    text: "Your health and comfort are always our priority.",
  },
  {
    icon: "◉",
    title: "Expert Care",
    text: "Experienced doctors providing quality healthcare.",
  },
];

const specialties = [
  {
    number: "01",
    title: "Primary Care",
    text: "Personalized healthcare for your everyday medical needs.",
  },
  {
    number: "02",
    title: "Cardiology",
    text: "Advanced heart care supported by experienced specialists.",
  },
  {
    number: "03",
    title: "Diagnostics",
    text: "Modern diagnostic technology for faster, clearer insights.",
  },
  {
    number: "04",
    title: "Women's Health",
    text: "Comprehensive and compassionate care at every stage.",
  },
];

export default function MedivaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbfb] text-[#10212b]">

      {/* =========================================================
          MEDIVA NAVBAR
          Positioned below Yorra Tech main navbar
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-[#dce9e9]/80 bg-white/90 px-5 shadow-[0_15px_45px_rgba(14,73,79,0.10)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="grid h-9 w-9 grid-cols-2 grid-rows-2 gap-[2px]">
                <span className="rounded-tl-lg rounded-br-md bg-[#0ca8a5]" />
                <span className="rounded-tr-lg rounded-bl-md bg-[#13b7b4]" />
                <span className="rounded-tl-md rounded-br-lg bg-[#21c5c2]" />
                <span className="rounded-tr-md rounded-bl-lg bg-[#087e8a]" />
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-semibold tracking-[-0.02em] text-[#10212b]">
                  mediva
                </div>

                <div className="mt-1 text-[7px] font-bold uppercase tracking-[0.25em] text-[#079b9a]">
                  Healthcare
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-[#30454e] transition hover:text-[#078f91]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden items-center gap-3 rounded-full bg-[#078f91] px-4 py-2.5 text-[9px] font-semibold text-white shadow-[0_8px_25px_rgba(7,143,145,0.18)] transition hover:bg-[#05797c] sm:flex"
            >
              Book Appointment
              <span>→</span>
            </Link>

            {/* Mobile Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e7e7] bg-white lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-[#10212b] transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-[#10212b] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-[#10212b] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>

            {/* Mobile Menu */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-[#dce9e9] bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
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
                    className="block border-b border-[#edf2f2] px-4 py-4 text-sm text-[#30454e] transition hover:text-[#078f91]"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-[#078f91] px-4 py-3 text-sm font-medium text-white"
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
        className="relative min-h-[780px] overflow-hidden border-b border-[#dceaea] pt-[76px]"
      >
        <Image
          src="/images/Portfolio/mediva/hero.jpg"
          alt="Mediva healthcare doctor"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbfb]/90 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">
          <div className="max-w-[620px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#0aa7a5] shadow-[0_0_0_5px_rgba(10,167,165,0.10)]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#078f91]">
                Compassionate Care
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[600px] font-serif text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#132631] sm:text-[68px] lg:text-[76px]">
              Your Health,
              <br />
              <span className="text-[#078f91]">
                Our Priority
              </span>
            </h1>

            <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#53666e]">
              Providing trusted healthcare with advanced technology and a
              human touch.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="group flex items-center gap-5 rounded-lg bg-[#078f91] px-5 py-3.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(7,143,145,0.18)] transition hover:bg-[#05797c]"
              >
                Book Appointment

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 rounded-lg border border-[#d7e5e5] bg-white/75 px-5 py-3.5 text-[10px] font-semibold text-[#30454e] backdrop-blur-sm transition hover:border-[#078f91] hover:text-[#078f91]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#078f91] text-[8px] text-[#078f91]">
                  ▶
                </span>
                Watch Video
              </Link>
            </div>
          </div>

          {/* Patient Badge */}
          <div className="absolute right-[7%] top-[35%] hidden rounded-xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_15px_40px_rgba(12,74,80,0.12)] backdrop-blur-md lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f5f4] text-[#078f91]">
                ♟
              </div>

              <div>
                <div className="text-sm font-semibold text-[#21343c]">
                  10K+
                </div>

                <div className="text-[8px] text-[#7b8d93]">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Features */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#dce4e4] bg-white/75 backdrop-blur-xl">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="border-r border-[#e2ebeb] px-5 py-5 last:border-r-0 sm:px-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f6f5] text-sm text-[#078f91]">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-[9px] font-semibold text-[#1b3139]">
                      {service.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-[#718187] sm:block">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Concept badge */}
        <div className="absolute bottom-[98px] left-6 hidden rounded-full border border-white/30 bg-[#1d2c30]/80 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-md lg:block">
          Concept Project
        </div>

        {/* Arrow */}
        <div className="absolute bottom-[78px] right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/70 text-xl text-[#40545b] shadow-xl backdrop-blur-md lg:flex">
          ↗
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about" className="border-b border-[#dceaea] bg-[#f7fbfb]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#078f91]">
                Healthcare
              </p>

              <div className="mt-5 flex items-end justify-between">
                <h2 className="text-5xl font-semibold tracking-[-0.04em] text-[#132631] sm:text-6xl">
                  Mediva
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-[#a2b1b5]">
                  03 / 10
                </span>
              </div>
            </div>

            <div>
              <p className="max-w-[720px] text-xl leading-9 text-[#687980] sm:text-2xl">
                A clean healthcare concept focused on accessibility, trust and
                simple information discovery.
              </p>

              <Link
                href="#services"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#596970] transition hover:text-[#078f91]"
              >
                View Prototype
                <span>↗</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          CLINIC STORY
      ========================================================= */}
      <section className="border-b border-[#dceaea] bg-white">
        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]">
            <Image
              src="/images/Portfolio/mediva/clinic-1.jpg"
              alt="Mediva healthcare clinic reception"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10252a]/45 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#078f91] backdrop-blur-md">
                01 — Care Environment
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center bg-[#f7fbfb] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">
            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#078f91]">
                The Mediva Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#132631] sm:text-5xl">
                Care designed around people.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#6c7c82]">
                From the moment a patient walks through the door, every part
                of the Mediva experience is designed to feel simple,
                reassuring and human. Technology works quietly in the
                background while compassionate care stays at the center.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#dceaea] pt-8">
                <div>
                  <div className="text-3xl font-semibold text-[#132631]">
                    10K+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a999e]">
                    Patients
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-semibold text-[#132631]">
                    25+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a999e]">
                    Specialists
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
      <section id="services" className="border-b border-[#dceaea] bg-[#f7fbfb]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#078f91]">
                Our Services
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] text-[#132631] sm:text-5xl">
                Healthcare that works around you.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#718087]">
                Accessible healthcare, experienced specialists and modern
                technology — brought together in one simple experience.
              </p>
            </div>

            <div className="border-t border-[#d5e3e3]">

              {specialties.map((specialty, index) => (
                <button
                  key={specialty.number}
                  type="button"
                  onClick={() => setActiveSpecialty(index)}
                  className="group block w-full border-b border-[#d5e3e3] py-7 text-left"
                >
                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-[#a0afb3]">
                      {specialty.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-xl font-medium transition sm:text-2xl ${
                            activeSpecialty === index
                              ? "text-[#078f91]"
                              : "text-[#33484f] group-hover:text-[#078f91]"
                          }`}
                        >
                          {specialty.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activeSpecialty === index
                              ? "rotate-45 text-[#078f91]"
                              : "text-[#a2b1b5]"
                          }`}
                        >
                          ↗
                        </span>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activeSpecialty === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-sm leading-7 text-[#718087]">
                            {specialty.text}
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
          DOCTORS / CONSULTATION
      ========================================================= */}
      <section id="doctors" className="border-b border-[#dceaea] bg-white">
        <div className="grid lg:grid-cols-2">

          <div className="order-2 flex items-center bg-[#eaf7f6] px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">
            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#078f91]">
                Expert Doctors
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#132631] sm:text-5xl">
                Expertise you can trust.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#64767d]">
                Our specialists combine years of clinical experience with
                modern healthcare technology to deliver thoughtful,
                personalized treatment.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#078f91] px-6 py-3.5 text-[10px] font-semibold text-white transition hover:bg-[#05797c]"
              >
                Meet Our Specialists
                <span>↗</span>
              </Link>

            </div>
          </div>

          <div className="relative order-1 min-h-[480px] overflow-hidden lg:order-2 lg:min-h-[650px]">

            <Image
              src="/images/Portfolio/mediva/clinic-2.jpg"
              alt="Mediva doctor consultation"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10252a]/40 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">
              <span className="rounded-full border border-white/40 bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#078f91] backdrop-blur-md">
                02 — Specialists
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="border-b border-[#dceaea] bg-[#f7fbfb]">
        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]">

            <Image
              src="/images/Portfolio/mediva/clinic-3.jpg"
              alt="Mediva advanced healthcare technology"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10252a]/20" />

            <div className="absolute bottom-8 left-8">
              <span className="rounded-full border border-white/40 bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#078f91] backdrop-blur-md">
                03 — Technology
              </span>
            </div>

          </div>

          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#078f91]">
                Advanced Technology
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#132631] sm:text-5xl">
                Smarter technology.
                <br />
                Better care.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#718087]">
                From digital diagnostics to connected patient experiences,
                Mediva uses modern technology to make healthcare faster,
                clearer and more accessible.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-[#dceaea] bg-white p-5">
                  <div className="text-2xl font-semibold text-[#078f91]">
                    24/7
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#7b8b90]">
                    Digital Access
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dceaea] bg-white p-5">
                  <div className="text-2xl font-semibold text-[#078f91]">
                    98%
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#7b8b90]">
                    Patient Care
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          APPOINTMENT CTA
      ========================================================= */}
      <section id="contact" className="relative overflow-hidden bg-[#073c42]">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#20c8c2]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-36">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#65e0db]">
            Your Health Comes First
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55">
            Schedule an appointment with our experienced healthcare
            specialists and take control of your health journey.
          </p>

          <Link
            href="#home"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-white px-7 py-4 text-xs font-semibold text-[#073c42] transition hover:scale-[1.02]"
          >
            Book Appointment
            <span>↗</span>
          </Link>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-[#dceaea] bg-white">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-2">

            <div className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-[2px]">
              <span className="rounded-tl-lg rounded-br-md bg-[#0ca8a5]" />
              <span className="rounded-tr-lg rounded-bl-md bg-[#13b7b4]" />
              <span className="rounded-tl-md rounded-br-lg bg-[#21c5c2]" />
              <span className="rounded-tr-md rounded-bl-lg bg-[#087e8a]" />
            </div>

            <div>
              <div className="text-sm font-semibold text-[#10212b]">
                mediva
              </div>

              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#078f91]">
                Healthcare
              </div>
            </div>

          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#839095]">

            <Link href="#home" className="transition hover:text-[#078f91]">
              Home
            </Link>

            <Link href="#services" className="transition hover:text-[#078f91]">
              Services
            </Link>

            <Link href="#doctors" className="transition hover:text-[#078f91]">
              Doctors
            </Link>

            <Link href="#about" className="transition hover:text-[#078f91]">
              About
            </Link>

            <Link href="#contact" className="transition hover:text-[#078f91]">
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-[#a0adb1]">
            © {new Date().getFullYear()} Mediva. Concept Project.
          </p>

        </div>
      </footer>

    </main>
  );
}