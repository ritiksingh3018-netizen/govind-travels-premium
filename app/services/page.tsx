"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    short:
      "High-performance digital experiences built around your business goals.",
    description:
      "We design and develop modern websites that communicate your value clearly, build trust, and turn visitors into customers.",
    features: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Custom web applications",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "Digital Growth",
    short:
      "Strategies that help your business get discovered and generate better opportunities.",
    description:
      "A great website is only the beginning. We help businesses improve visibility, attract relevant traffic, and create a stronger path from visitor to customer.",
    features: [
      "Search Engine Optimization",
      "Local SEO",
      "Google Business optimization",
      "Lead generation",
      "Conversion optimization",
      "Analytics & tracking",
    ],
  },
  {
    number: "03",
    title: "Business Automation",
    short:
      "Smart systems that reduce repetitive work and help your business operate better.",
    description:
      "We connect tools and workflows to automate repetitive tasks, improve follow-ups, and give your team more time to focus on important work.",
    features: [
      "AI-powered workflows",
      "CRM automation",
      "WhatsApp workflows",
      "Email automation",
      "Lead follow-ups",
      "Custom business workflows",
    ],
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const featureItem = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative px-6 pb-24 pt-36 sm:px-8 lg:px-10 lg:pb-32 lg:pt-44">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[-120px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]"
          />

          <motion.div
            animate={{
              x: [0, 35, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-180px] top-[50%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.025] blur-[120px]"
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 32, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px bg-cyan-400"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              Our Services
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-6xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
          >
            Digital solutions built to{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8"
          >
            From your first website to advanced growth systems and business
            automation, Yorra Tech helps you build, grow, and operate better.
          </motion.p>

          {/* Small service indicator */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Strategy
            </span>

            <span className="text-gray-700">→</span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Build
            </span>

            <span className="text-gray-700">→</span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Grow
            </span>

            <span className="text-gray-700">→</span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Automate
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition-colors duration-500 hover:border-cyan-400/25 hover:bg-white/[0.035] sm:p-9 lg:p-12"
              >
                {/* =================================================
                    CARD GLOW
                ================================================== */}

                <motion.div
                  className="pointer-events-none absolute -right-32 -top-32 h-[280px] w-[280px] rounded-full bg-cyan-400/[0.06] blur-[100px]"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

                {/* Top accent line */}
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  {/* =================================================
                      LEFT
                  ================================================== */}

                  <div>
                    {/* Number */}
                    <div className="flex items-center gap-4">
                      <motion.span
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#05070b] text-xs font-bold text-cyan-400 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-black"
                      >
                        {service.number}

                        <span className="absolute inset-[-5px] rounded-full border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/10" />
                      </motion.span>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-700">
                        Service {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-7 text-3xl font-black tracking-[-0.035em] transition-colors duration-300 group-hover:text-cyan-100 sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h2>

                    {/* Short */}
                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                      {service.short}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-8 bg-cyan-400/50 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400" />

                      <span className="text-[9px] uppercase tracking-[0.18em] text-gray-700 transition-colors duration-300 group-hover:text-cyan-400/60">
                        Yorra Tech
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT
                  ================================================== */}

                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <motion.div
                      variants={featureContainer}
                      className="mt-8 grid gap-3 sm:grid-cols-2"
                    >
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          variants={featureItem}
                          whileHover={{
                            x: 4,
                          }}
                          className="group/feature flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]"
                        >
                          {/* Check */}
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] text-[10px] text-cyan-400 transition-all duration-300 group-hover/feature:border-cyan-400/40 group-hover/feature:bg-cyan-400 group-hover/feature:text-black">
                            ✓
                          </span>

                          <span className="text-sm text-gray-400 transition-colors duration-300 group-hover/feature:text-gray-200">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Bottom service line */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-700">
                        {service.number} / 03
                      </span>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400/60 transition-colors duration-300 group-hover:text-cyan-400">
                        Build Better
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-5xl">
          {/* CTA glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[130px]"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-cyan-400/[0.025] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:px-10 lg:px-16 lg:py-20"
          >
            {/* Top glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="relative">
              {/* Label */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-cyan-400/60" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-xs">
                  Have a project in mind?
                </p>

                <span className="h-px w-7 bg-cyan-400/60" />
              </div>

              {/* Heading */}
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                  that matters.
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                Tell us what you want to build, grow, or automate and
                we&apos;ll help you figure out the right approach.
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="group/cta mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_10px_35px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_45px_rgba(34,211,238,0.15)]"
              >
                <span>Start a Project</span>

                <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </Link>

              {/* Bottom */}
              <div className="mx-auto mt-10 flex items-center justify-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-700">
                  Build · Grow · Automate
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}