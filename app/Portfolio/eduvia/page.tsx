"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About Us", href: "#about" },
  { name: "Mentorship", href: "#mentorship" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact" },
];

const features = [
  {
    icon: "🎓",
    title: "Expert Instructors",
    text: "Learn from highly qualified teachers and industry experts.",
  },
  {
    icon: "▣",
    title: "Flexible Learning",
    text: "Study at your own pace with flexible recorded classes.",
  },
  {
    icon: "↗",
    title: "Track Progress",
    text: "Monitor your progress and achieve your learning goals.",
  },
  {
    icon: "♧",
    title: "Certification",
    text: "Get certified and stand out in your career.",
  },
];

const learningPaths = [
  {
    number: "01",
    title: "Professional Courses",
    text: "Industry-focused courses designed to build practical skills and prepare learners for real-world opportunities.",
  },
  {
    number: "02",
    title: "Mentorship Programs",
    text: "Get personalized guidance from experienced mentors who help you understand your strengths and plan your next step.",
  },
  {
    number: "03",
    title: "Career Preparation",
    text: "Build interview confidence, improve your portfolio and develop the skills employers are looking for.",
  },
  {
    number: "04",
    title: "Certification",
    text: "Complete structured learning programs and earn certificates that showcase your knowledge and progress.",
  },
];

const courses = [
  {
    category: "BUSINESS",
    title: "Digital Marketing",
    lessons: "42 Lessons",
    level: "Beginner",
    rating: "4.9",
  },
  {
    category: "TECHNOLOGY",
    title: "Full Stack Development",
    lessons: "68 Lessons",
    level: "Intermediate",
    rating: "4.9",
  },
  {
    category: "DESIGN",
    title: "UI/UX Design",
    lessons: "36 Lessons",
    level: "Beginner",
    rating: "4.8",
  },
];

export default function EduviaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff] text-[#08152f]">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-250px] top-[15%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.05] blur-[160px]" />

        <div className="absolute right-[-250px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.05] blur-[160px]" />
      </div>

      {/* =========================================================
          EDUVIA NAVBAR
          BELOW YORRA TECH NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-[76px] z-40">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-5 shadow-[0_18px_50px_rgba(15,45,90,0.10)] backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute bottom-1 left-1 h-6 w-5 rounded-bl-[10px] rounded-tr-[10px] bg-blue-600" />

                <div className="absolute bottom-1 right-1 h-6 w-5 rounded-br-[10px] rounded-tl-[10px] bg-blue-500" />

                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400" />
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-bold tracking-[-0.02em] text-[#0a1b3c]">
                  Eduvia
                </div>

                <div className="mt-1 text-[6px] font-medium tracking-[0.1em] text-slate-400">
                  LEARN. GROW. SUCCEED.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[9px] font-medium text-slate-500 transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Search + Login + CTA */}
            <div className="hidden items-center gap-4 sm:flex">
              <button
                type="button"
                aria-label="Search"
                className="text-lg text-slate-500 transition hover:text-blue-600"
              >
                ⌕
              </button>

              <Link
                href="#contact"
                className="text-[9px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="#courses"
                className="flex items-center gap-3 rounded-full bg-blue-600 px-4 py-2.5 text-[9px] font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.20)] transition hover:bg-blue-500"
              >
                Get Started
                <span>→</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 sm:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-[#08152f] transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-[#08152f] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-[#08152f] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>

            {/* Mobile Dropdown */}
            <div
              className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:hidden ${
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
                    className="block border-b border-slate-100 px-4 py-4 text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#courses"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white"
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
        className="relative min-h-[780px] overflow-hidden border-b border-slate-200 pt-[76px]"
      >
        <Image
          src="/images/Portfolio/eduvia/hero.jpg"
          alt="Eduvia online learning platform"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft overlays */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#f7faff] via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[704px] max-w-[1440px] items-end px-6 pb-24 pt-36 sm:px-10 lg:px-16">

          <div className="max-w-[650px]">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2">

              <span className="text-[10px]">
                🎓
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                #1 Online Learning Platform
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[48px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#08152f] sm:text-[64px] lg:text-[76px]">
              Learning Today,
              <br />
              <span className="text-blue-600">
                Leading
              </span>{" "}
              Tomorrow.
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-7 text-slate-500">
              Eduvia empowers students with quality education, expert guidance
              and the right resources to achieve their dreams.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="#courses"
                className="group flex items-center gap-5 rounded-lg bg-blue-600 px-5 py-3.5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.20)] transition hover:bg-blue-500"
              >
                Explore Courses

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#about"
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/80 px-5 py-3.5 text-[10px] font-medium text-slate-600 shadow-sm backdrop-blur-sm transition hover:border-blue-200 hover:text-blue-600"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 text-[8px] text-blue-600">
                  ▶
                </span>

                Watch Video
              </Link>

            </div>

          </div>

          {/* Stats Card */}
          <div className="absolute right-[6%] top-[32%] hidden w-[180px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(20,50,100,0.15)] backdrop-blur-md xl:block">

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  ♧
                </div>

                <div>
                  <div className="text-sm font-bold text-[#08152f]">
                    25,000+
                  </div>

                  <div className="text-[8px] text-slate-400">
                    Happy Students
                  </div>
                </div>

              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                  ▣
                </div>

                <div>
                  <div className="text-sm font-bold text-[#08152f]">
                    200+
                  </div>

                  <div className="text-[8px] text-slate-400">
                    Expert Courses
                  </div>
                </div>

              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                  ♕
                </div>

                <div>
                  <div className="text-sm font-bold text-[#08152f]">
                    95%
                  </div>

                  <div className="text-[8px] text-slate-400">
                    Success Rate
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Floating Arrow */}
          <div className="absolute bottom-20 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-xl text-slate-500 shadow-lg backdrop-blur-md transition hover:border-blue-300 hover:text-blue-600 lg:flex">
            ↗
          </div>

        </div>

        {/* Feature Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200/80 bg-white/80 backdrop-blur-xl">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-r border-slate-200/70 px-5 py-5 last:border-r-0 sm:px-7"
              >

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-sm">
                    {feature.icon}
                  </div>

                  <div>

                    <h3 className="text-[9px] font-semibold text-[#08152f]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 hidden text-[8px] leading-4 text-slate-400 sm:block">
                      {feature.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Concept Project */}
        <div className="absolute bottom-[94px] left-8 hidden rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur-md lg:block">
          Concept Project
        </div>

      </section>

      {/* =========================================================
          ABOUT / BUSINESS
      ========================================================= */}
      <section
        id="about"
        className="border-b border-slate-200 bg-[#071226] text-white"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Education
              </p>

              <div className="mt-5 flex items-end justify-between">

                <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Eduvia
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-white/20">
                  07 / 10
                </span>

              </div>

            </div>

            <div>

              <p className="max-w-[720px] text-xl leading-9 text-white/45 sm:text-2xl">
                An education concept designed to make courses, programs and
                admissions easier to explore.
              </p>

              <Link
                href="#courses"
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
          LEARNING EXPERIENCE
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">

        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[700px]">

            <Image
              src="/images/Portfolio/eduvia/education-1.jpg"
              alt="Eduvia classroom learning experience"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071226]/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/20 bg-[#071226]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                01 — Learning Experience
              </span>

            </div>

          </div>

          {/* Content */}
          <div className="flex items-center bg-[#f8fbff] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600">
                Our Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#08152f] sm:text-5xl">
                Learning should feel simple.
              </h2>

              <p className="mt-7 text-sm leading-8 text-slate-500">
                Eduvia brings courses, mentors, resources and progress tracking
                together in one clear learning experience designed around the
                student.
              </p>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Whether learners are starting something new or preparing for
                their next career move, every part of the platform is designed
                to keep them focused on what matters.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">

                <div>

                  <div className="text-3xl font-semibold text-blue-600">
                    25K+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Students

                  </div>

                </div>

                <div>

                  <div className="text-3xl font-semibold text-blue-600">
                    200+
                  </div>

                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Courses
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          LEARNING PATHS
      ========================================================= */}
      <section
        id="mentorship"
        className="border-b border-slate-200 bg-[#f7faff]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Intro */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                Learning Paths
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] text-[#08152f] sm:text-5xl">
                Everything you need to move forward.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                From learning a new skill to preparing for a career, Eduvia
                gives students a clear path from curiosity to confidence.
              </p>

            </div>

            {/* Accordion */}
            <div className="border-t border-slate-200">

              {learningPaths.map((path, index) => (
                <button
                  key={path.number}
                  type="button"
                  onClick={() => setActivePath(index)}
                  className="group block w-full border-b border-slate-200 py-7 text-left"
                >

                  <div className="flex items-start gap-6">

                    <span className="pt-1 text-[10px] tracking-[0.2em] text-slate-300">
                      {path.number}
                    </span>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-4">

                        <h3
                          className={`text-xl font-semibold transition sm:text-2xl ${
                            activePath === index
                              ? "text-blue-600"
                              : "text-[#08152f]/65 group-hover:text-[#08152f]"
                          }`}
                        >
                          {path.title}
                        </h3>

                        <span
                          className={`text-xl transition ${
                            activePath === index
                              ? "rotate-45 text-blue-600"
                              : "text-slate-300"
                          }`}
                        >
                          ↗
                        </span>

                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          activePath === index
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >

                        <div className="overflow-hidden">

                          <p className="max-w-xl text-sm leading-7 text-slate-500">
                            {path.text}
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
          ONLINE LEARNING
      ========================================================= */}
      <section className="border-b border-slate-200">

        <div className="grid lg:grid-cols-2">

          {/* Content */}
          <div className="order-2 flex items-center bg-white px-6 py-20 sm:px-12 lg:order-1 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600">
                Learn Anywhere
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#08152f] sm:text-5xl">
                Your classroom is wherever you are.
              </h2>

              <p className="mt-7 text-sm leading-8 text-slate-500">
                Access your courses, track progress and continue learning from
                your laptop, tablet or mobile device. Eduvia keeps everything
                you need within reach.
              </p>

              <Link
                href="#courses"
                className="mt-9 inline-flex items-center gap-4 rounded-full bg-blue-600 px-6 py-3.5 text-[10px] font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition hover:bg-blue-500"
              >
                Start Learning
                <span>↗</span>
              </Link>

            </div>

          </div>

          {/* Image */}
          <div className="relative order-1 min-h-[520px] overflow-hidden lg:order-2 lg:min-h-[700px]">

            <Image
              src="/images/Portfolio/eduvia/education-2.jpg"
              alt="Eduvia online learning experience"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071226]/65 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8">

              <span className="rounded-full border border-white/20 bg-[#071226]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                02 — Digital Learning
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          COURSES
      ========================================================= */}
      <section
        id="courses"
        className="border-b border-slate-200 bg-[#071226] text-white"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Featured Courses
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Learn skills that move you forward.
              </h2>

            </div>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              07 / 10
            </span>

          </div>

          {/* Course Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {courses.map((course, index) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-blue-400/30"
              >

                {/* Course visual */}
                <div className="relative flex h-[190px] items-end overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-5">

                  <div className="absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full border-[25px] border-white/10" />

                  <div className="absolute right-5 top-5 text-5xl font-bold text-white/10">
                    0{index + 1}
                  </div>

                  <div>

                    <div className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/60">
                      {course.category}
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {course.title}
                    </h3>

                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between text-[9px] text-white/35">

                    <span>
                      {course.lessons}
                    </span>

                    <span>
                      {course.level}
                    </span>

                    <span className="text-amber-300">
                      ★ {course.rating}
                    </span>

                  </div>

                  <Link
                    href="#contact"
                    className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5 text-[10px] font-semibold text-white/65 transition group-hover:text-white"
                  >
                    View Course
                    <span>↗</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CAMPUS / COMMUNITY
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">

        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[700px]">

            <Image
              src="/images/Portfolio/eduvia/education-3.jpg"
              alt="Eduvia modern learning campus"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071226]/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="rounded-full border border-white/20 bg-[#071226]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                03 — Community
              </span>

            </div>

          </div>

          <div className="flex items-center bg-[#f7faff] px-6 py-20 sm:px-12 lg:px-20 lg:py-32">

            <div className="max-w-xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600">
                A Community That Learns
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#08152f] sm:text-5xl">
                Learn together.
                <br />
                Grow together.
              </h2>

              <p className="mt-7 text-sm leading-8 text-slate-500">
                Education becomes more powerful when learners can exchange
                ideas, ask questions and learn from one another. Eduvia brings
                students and educators together around a shared goal:
                continuous growth.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="text-2xl font-semibold text-blue-600">
                    150+
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    Expert Mentors
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="text-2xl font-semibold text-blue-600">
                    4.8/5
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    Student Rating
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          BLOG
      ========================================================= */}
      <section
        id="blog"
        className="border-b border-slate-200 bg-[#f7faff]"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-blue-600">
                Eduvia Insights
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#08152f] sm:text-5xl">
                Ideas for your next chapter.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-slate-500">
                Explore practical advice, career insights and learning
                strategies designed to help you make better decisions.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-blue-600"
              >
                Explore The Blog
                <span>↗</span>
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="text-[9px] uppercase tracking-[0.2em] text-blue-600">
                  01 — Career
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#08152f]">
                  Building skills for the future
                </h3>

                <p className="mt-4 text-xs leading-6 text-slate-400">
                  Discover the skills modern employers are looking for and how
                  to build them.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-slate-300">
                  6 min read ↗
                </div>

              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="text-[9px] uppercase tracking-[0.2em] text-blue-600">
                  02 — Learning
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#08152f]">
                  How to learn more effectively
                </h3>

                <p className="mt-4 text-xs leading-6 text-slate-400">
                  Simple strategies to improve focus, retention and your
                  learning routine.
                </p>

                <div className="mt-7 text-[9px] uppercase tracking-[0.18em] text-slate-300">
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
        className="relative overflow-hidden bg-[#071226] text-white"
      >

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.10] blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-40">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Start Learning
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Your next achievement starts here.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
            Explore courses, find your path and start building the skills that
            will shape your future.
          </p>

          <Link
            href="#courses"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-blue-600 px-7 py-4 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition hover:bg-blue-500"
          >
            Explore Courses
            <span>↗</span>
          </Link>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">

          {/* Brand */}
          <div className="flex items-center gap-3">

            <div className="relative flex h-8 w-8 items-center justify-center">

              <div className="absolute bottom-1 left-1 h-6 w-5 rounded-bl-[10px] rounded-tr-[10px] bg-blue-600" />

              <div className="absolute bottom-1 right-1 h-6 w-5 rounded-br-[10px] rounded-tl-[10px] bg-blue-500" />

              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400" />

            </div>

            <div>

              <div className="text-sm font-bold tracking-[-0.02em] text-[#08152f]">
                Eduvia
              </div>

              <div className="text-[7px] uppercase tracking-[0.16em] text-slate-400">
                Learn. Grow. Succeed.
              </div>

            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">

            <Link
              href="#home"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="#courses"
              className="transition hover:text-blue-600"
            >
              Courses
            </Link>

            <Link
              href="#about"
              className="transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="#mentorship"
              className="transition hover:text-blue-600"
            >
              Mentorship
            </Link>

            <Link
              href="#blog"
              className="transition hover:text-blue-600"
            >
              Blog
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>

          </div>

          <p className="text-[9px] text-slate-300">
            © {new Date().getFullYear()} Eduvia. Concept Project.
          </p>

        </div>

      </footer>

    </main>
  );
}