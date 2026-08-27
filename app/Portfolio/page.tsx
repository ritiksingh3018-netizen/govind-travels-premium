"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F3E8] text-slate-900">

      {/* =====================================================
          FULL PAGE GRID BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71,58,45,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(71,58,45,0.13) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* =====================================================
          AMBIENT PURPLE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7C3AED]/[0.045]
          blur-[130px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          py-24
          sm:px-8
          lg:px-10
        "
      >

        <div className="relative w-full max-w-5xl text-center">

          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex items-center justify-center gap-3"
          >

            <span className="h-px w-8 bg-[#7C3AED]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#7C3AED]
                sm:text-xs
              "
            >
              Our Portfolio
            </span>

            <span className="h-px w-8 bg-[#7C3AED]" />

          </motion.div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              max-w-4xl
              text-5xl
              font-black
              leading-[0.92]
              tracking-[-0.06em]
              sm:text-6xl
              lg:text-8xl
            "
          >

            Explore our work.

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#433A8F]
                via-[#7C3AED]
                to-[#9B7BFF]
                bg-clip-text
                text-transparent
              "
            >
              Build something exceptional.
            </span>

          </motion.h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              sm:text-lg
              sm:leading-8
            "
          >
            Discover our portfolio and see how we turn ideas into
            thoughtful, high-quality digital experiences designed
            to help businesses stand out and grow.
          </motion.p>


          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >

            {/* View Portfolio */}

            <Link
              href="/portfolio"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-slate-900/[0.10]
                bg-white/60
                px-7
                py-4
                text-sm
                font-semibold
                text-slate-900
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#7C3AED]/30
                hover:bg-[#7C3AED]
                hover:text-white
                hover:shadow-[0_15px_40px_rgba(124,58,237,0.15)]
                sm:w-auto
              "
            >

              <span>
                View Our Portfolio
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>

            </Link>


            {/* Start Project */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#7C3AED]
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(124,58,237,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#6D28D9]
                hover:shadow-[0_18px_50px_rgba(124,58,237,0.25)]
                sm:w-auto
              "
            >

              <span>
                Start a Project
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </motion.div>


          {/* =================================================
              BOTTOM BRAND LINE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#7C3AED]
                shadow-[0_0_10px_rgba(124,58,237,0.45)]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              Web Design
            </span>

            <span className="text-slate-300">
              •
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              Development
            </span>

            <span className="text-slate-300">
              •
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              Digital Experiences
            </span>

          </motion.div>

        </div>

      </section>

    </main>
  );
}