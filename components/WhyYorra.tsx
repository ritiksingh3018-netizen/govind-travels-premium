"use client";

import type { CSSProperties } from "react";

import {
  ArrowUpRight,
  Target,
  BarChart3,
  Users,
  Code2,
} from "lucide-react";

/* =========================================================
   WHY YORRA CARDS
========================================================= */

const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We don't build technology just for the sake of it. Every solution starts with your business goal, audience, and desired outcome.",
    icon: Target,
  },
  {
    number: "02",
    title: "Built to Scale",
    description:
      "Our digital solutions are designed with growth in mind, so your website and systems can evolve as your business grows.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "One Digital Partner",
    description:
      "Website development, digital growth, and automation under one roof means less complexity and better coordination.",
    icon: Users,
  },
  {
    number: "04",
    title: "Modern Technology",
    description:
      "We use modern tools and development practices to create fast, reliable, responsive, and maintainable digital experiences.",
    icon: Code2,
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "Next.js",
    mark: "N",
    color: "#ffffff",
    glow: "rgba(255,255,255,.25)",
  },
  {
    name: "React",
    mark: "⚛",
    color: "#61dafb",
    glow: "rgba(97,218,251,.38)",
  },
  {
    name: "TypeScript",
    mark: "TS",
    color: "#3178c6",
    glow: "rgba(49,120,198,.38)",
  },
  {
    name: "Tailwind CSS",
    mark: "≋",
    color: "#38bdf8",
    glow: "rgba(56,189,248,.38)",
  },
  {
    name: "Node.js",
    mark: "JS",
    color: "#68a063",
    glow: "rgba(104,160,99,.38)",
  },
  {
    name: "PostgreSQL",
    mark: "PG",
    color: "#6699cc",
    glow: "rgba(102,153,204,.38)",
  },
  {
    name: "AWS",
    mark: "AWS",
    color: "#ff9900",
    glow: "rgba(255,153,0,.38)",
  },
  {
    name: "GitHub",
    mark: "GH",
    color: "#ffffff",
    glow: "rgba(255,255,255,.25)",
  },
  {
    name: "Python",
    mark: "Py",
    color: "#ffd43b",
    glow: "rgba(255,212,59,.38)",
  },
  {
    name: "Docker",
    mark: "◆",
    color: "#2496ed",
    glow: "rgba(36,150,237,.38)",
  },
  {
    name: "OpenAI",
    mark: "✦",
    color: "#10a37f",
    glow: "rgba(16,163,127,.38)",
  },
  {
    name: "Figma",
    mark: "F",
    color: "#f24e1e",
    glow: "rgba(242,78,30,.38)",
  },
];

/* =========================================================
   TECHNOLOGY WHEEL
========================================================= */

function TechnologyWheel() {
  return (
    <div className="technology-wheel">

      {/* =====================================================
         STATIC CENTER
      ===================================================== */}

      <div className="technology-center">
        <span className="technology-title">
          TECHNOLOGIES
        </span>

        <span className="technology-subtitle">
          WE BUILD WITH
        </span>
      </div>

      {/* =====================================================
         ROTATING RING
      ===================================================== */}

      <div className="technology-ring">

        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className={`technology-item tech-${String(
              index + 1
            ).padStart(2, "0")}`}
          >

            {/* =================================================
               COUNTER ROTATION

               Parent ring:
               +360deg

               This wrapper:
               -360deg

               Result:
               PILL ALWAYS HORIZONTAL
            ================================================= */}

            <div className="technology-counter">

              <div
                className="technology-pill"
                style={
                  {
                    "--tech-color": technology.color,
                    "--tech-glow": technology.glow,
                  } as CSSProperties
                }
              >

                <span className="technology-icon">
                  {technology.mark}
                </span>

                <span className="technology-name">
                  {technology.name}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

      <style jsx>{`

        /* =====================================================
           MAIN WHEEL
        ===================================================== */

        .technology-wheel {
          position: relative;

          width: 500px;
          height: 500px;

          margin: 0 auto;

          isolation: isolate;
        }

        /* =====================================================
           STATIC CENTER
        ===================================================== */

        .technology-center {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 145px;
          height: 145px;

          transform: translate(-50%, -50%);

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at center,
              rgba(18, 39, 51, 0.55),
              rgba(5, 9, 15, 0.98) 72%
            );

          box-shadow:
            0 0 45px rgba(34, 211, 238, 0.07);

          z-index: 100;

          pointer-events: none;

          text-align: center;
        }

        .technology-title {
          color: #22d3ee;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.17em;

          white-space: nowrap;
        }

        .technology-subtitle {
          margin-top: 7px;

          color: #7c8797;

          font-size: 8px;
          font-weight: 600;

          letter-spacing: 0.15em;

          white-space: nowrap;
        }

        /* =====================================================
           ROTATING RING
        ===================================================== */

        .technology-ring {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          transform-origin: center center;

          animation:
            technology-ring-rotate 32s linear infinite;

          will-change: transform;
        }

        @keyframes technology-ring-rotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        /* =====================================================
           TECHNOLOGY ITEM

           These positions create the circular layout.
        ===================================================== */

        .technology-item {
          position: absolute;

          width: max-content;

          z-index: 10;
        }

        /* =====================================================
           COUNTER ROTATION

           EXACT opposite animation.

           Ring:
           0 -> 360

           Counter:
           0 -> -360

           So pill itself stays straight.
        ===================================================== */

        .technology-counter {
          animation:
            technology-counter-rotate 32s linear infinite;

          transform-origin: center center;

          will-change: transform;
        }

        @keyframes technology-counter-rotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }

        }

        /* =====================================================
           CIRCULAR POSITIONS
        ===================================================== */

        .tech-01 {
          left: 50%;
          top: 4%;

          transform: translate(-50%, -50%);
        }

        .tech-02 {
          left: 71%;
          top: 9%;

          transform: translate(-50%, -50%);
        }

        .tech-03 {
          left: 89%;
          top: 25%;

          transform: translate(-50%, -50%);
        }

        .tech-04 {
          left: 96%;
          top: 50%;

          transform: translate(-50%, -50%);
        }

        .tech-05 {
          left: 89%;
          top: 75%;

          transform: translate(-50%, -50%);
        }

        .tech-06 {
          left: 71%;
          top: 91%;

          transform: translate(-50%, -50%);
        }

        .tech-07 {
          left: 50%;
          top: 96%;

          transform: translate(-50%, -50%);
        }

        .tech-08 {
          left: 29%;
          top: 91%;

          transform: translate(-50%, -50%);
        }

        .tech-09 {
          left: 11%;
          top: 75%;

          transform: translate(-50%, -50%);
        }

        .tech-10 {
          left: 4%;
          top: 50%;

          transform: translate(-50%, -50%);
        }

        .tech-11 {
          left: 11%;
          top: 25%;

          transform: translate(-50%, -50%);
        }

        .tech-12 {
          left: 29%;
          top: 9%;

          transform: translate(-50%, -50%);
        }

        /* =====================================================
           PILL
        ===================================================== */

        .technology-pill {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          min-width: 108px;
          height: 43px;

          padding: 0 14px;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.06),
              rgba(7, 12, 20, 0.96)
            );

          border: 1px solid var(--tech-color);

          color: #e5e7eb;

          white-space: nowrap;

          box-shadow:
            0 0 15px var(--tech-glow),
            0 7px 25px rgba(0, 0, 0, 0.35);
        }

        /* =====================================================
           ICON
        ===================================================== */

        .technology-icon {
          width: 23px;
          height: 23px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 7px;

          color: var(--tech-color);

          background: rgba(255, 255, 255, 0.035);

          border: 1px solid var(--tech-color);

          font-size: 9px;
          font-weight: 800;

          line-height: 1;

          box-shadow:
            0 0 8px var(--tech-glow);
        }

        /* =====================================================
           TECHNOLOGY NAME
        ===================================================== */

        .technology-name {
          color: #e5e7eb;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: -0.01em;

          white-space: nowrap;
        }

        /* =====================================================
           HOVER
        ===================================================== */

        .technology-pill:hover {
          box-shadow:
            0 0 25px var(--tech-glow),
            0 10px 30px rgba(0, 0, 0, 0.45);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .technology-wheel {
            width: 440px;
            height: 440px;
          }

          .technology-center {
            width: 130px;
            height: 130px;
          }

          .technology-pill {
            min-width: 96px;
            height: 39px;

            padding: 0 11px;

            gap: 6px;
          }

          .technology-icon {
            width: 21px;
            height: 21px;
          }

          .technology-name {
            font-size: 10px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .technology-wheel {
            width: 350px;
            height: 350px;
          }

          .technology-center {
            width: 105px;
            height: 105px;
          }

          .technology-title {
            font-size: 8px;
          }

          .technology-subtitle {
            font-size: 6px;
          }

          .technology-pill {
            min-width: 78px;
            height: 32px;

            padding: 0 8px;

            gap: 5px;
          }

          .technology-icon {
            width: 18px;
            height: 18px;

            font-size: 7px;
          }

          .technology-name {
            font-size: 8px;
          }

          /*
            IMPORTANT:
            Both animations MUST have the exact
            same duration.
          */

          .technology-ring {
            animation-duration: 36s;
          }

          .technology-counter {
            animation-duration: 36s;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .technology-wheel {
            width: 315px;
            height: 315px;
          }

          .technology-center {
            width: 94px;
            height: 94px;
          }

          .technology-title {
            font-size: 7px;
          }

          .technology-subtitle {
            font-size: 5px;
          }

          .technology-pill {
            min-width: 68px;
            height: 29px;

            padding: 0 6px;

            gap: 4px;
          }

          .technology-icon {
            width: 16px;
            height: 16px;

            font-size: 6px;
          }

          .technology-name {
            font-size: 7px;
          }

          .technology-ring {
            animation-duration: 40s;
          }

          .technology-counter {
            animation-duration: 40s;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .technology-ring,
          .technology-counter {
            animation: none;
            transform: none;
          }

        }

      `}</style>
    </div>
  );
}

/* =========================================================
   MAIN WHY YORRA SECTION
========================================================= */

export default function WhyYorra() {
  return (
    <section className="relative overflow-hidden bg-[#070a10] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28">

      {/* =====================================================
         BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
           HEADER
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
              Why Yorra Tech
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-[58px]">
              Technology that works for your{" "}
              <span className="text-gray-500">
                business.
              </span>
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 lg:ml-auto lg:pb-1">
            We combine strategy, design, development, growth, and automation
            to create digital solutions that are useful today and ready for
            tomorrow.
          </p>

        </div>

        {/* ===================================================
           MAIN GRID
        =================================================== */}

        <div className="mt-14 grid items-center gap-12 lg:mt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">

          {/* =================================================
             LEFT CARDS
          ================================================= */}

          <div className="mx-auto grid w-full max-w-[650px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">

            {reasons.map((reason) => {

              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="group relative min-h-[245px] bg-[#070a10] p-6 transition-all duration-500 hover:bg-[#0b1019] sm:min-h-[255px] sm:p-7"
                >

                  {/* CARD TOP */}

                  <div className="flex items-start justify-between">

                    <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400">
                      {reason.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-gray-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />

                  </div>

                  {/* CARD ICON */}

                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/[0.08]">

                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />

                  </div>

                  {/* TITLE */}

                  <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-[22px]">
                    {reason.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 max-w-[270px] text-[13px] leading-6 text-gray-500 sm:text-sm">
                    {reason.description}
                  </p>

                  {/* BOTTOM LINE */}

                  <div className="mt-5 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400/50" />

                </article>
              );
            })}

          </div>

          {/* =================================================
             TECHNOLOGY WHEEL
          ================================================= */}

          <div className="flex min-h-[500px] items-center justify-center lg:min-h-[500px]">

            <TechnologyWheel />

          </div>

        </div>

        {/* ===================================================
           BOTTOM STATEMENT
        =================================================== */}

        <div className="mt-14 border-t border-white/10 pt-8">

          <p className="max-w-5xl text-2xl font-semibold leading-tight tracking-tight text-gray-300 sm:text-3xl lg:text-4xl">

            <span className="text-white">
              Build something useful.
            </span>{" "}

            <span className="text-gray-500">
              Grow it with confidence. Automate what slows you down.
            </span>

          </p>

        </div>

      </div>
    </section>
  );
}