"use client";

import { useState } from "react";

import {
  Target,
  BarChart3,
  Users,
  Code2,
} from "lucide-react";

/* =========================================================
   WHY YORRA CARDS
========================================================= */

const whyYorraCards = [
  {
    number: "01",
    icon: Target,
    title: "Business First",
    description:
      "We don't build technology just for the sake of it. Every solution starts with your business goal, audience, and desired outcome.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Built to Scale",
    description:
      "Our digital solutions are designed with growth in mind, so your website and systems can evolve as your business grows.",
  },
  {
    number: "03",
    icon: Users,
    title: "One Digital Partner",
    description:
      "Website development, digital growth, and automation under one roof means less complexity and better coordination.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern tools and development practices to create fast, reliable, responsive, and maintainable digital experiences.",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyCategories = [
  {
    title: "MOBILE",
    items: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Expo",
    ],
  },
  {
    title: "FRONTEND",
    items: [
      "React",
      "Next.js",
      "Astro",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "BACKEND",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "Go",
      "GraphQL",
    ],
  },
  {
    title: "DATABASE",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    items: [
      "AWS",
      "GCP",
      "Firebase",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "TOOLS",
    items: [
      "Figma",
      "GitHub",
      "Stripe",
      "Twilio",
      "SendGrid",
    ],
  },
];

/* =========================================================
   3D DIGITAL MODEL
========================================================= */

function Digital3DModel() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleMouseLeave = () => {
    setMouse({
      x: 0,
      y: 0,
    });
  };

  const rotateX = mouse.y * -12;
  const rotateY = mouse.x * 16;

  return (
    <div
      className="digital-3d-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================================
         AMBIENT GLOW
      ===================================================== */}

      <div className="digital-3d-glow" />

      {/* =====================================================
         FLOATING PARTICLES
      ===================================================== */}

      <span className="particle particle-1" />
      <span className="particle particle-2" />
      <span className="particle particle-3" />
      <span className="particle particle-4" />
      <span className="particle particle-5" />
      <span className="particle particle-6" />

      {/* =====================================================
         FLOATING OBJECT
      ===================================================== */}

      <div className="digital-3d-float">
        <div
          className="digital-3d-object"
          style={{
            transform: `
              rotateX(${rotateX - 16}deg)
              rotateY(${rotateY - 26}deg)
            `,
          }}
        >
          {/* =================================================
             OUTER CUBE
          ================================================= */}

          <div className="cube cube-outer">
            <div className="cube-face cube-front" />
            <div className="cube-face cube-back" />
            <div className="cube-face cube-left" />
            <div className="cube-face cube-right" />
            <div className="cube-face cube-top" />
            <div className="cube-face cube-bottom" />
          </div>

          {/* =================================================
             INNER CUBE
          ================================================= */}

          <div className="cube cube-inner">
            <div className="cube-face cube-front" />
            <div className="cube-face cube-back" />
            <div className="cube-face cube-left" />
            <div className="cube-face cube-right" />
            <div className="cube-face cube-top" />
            <div className="cube-face cube-bottom" />
          </div>

          {/* =================================================
             DIGITAL CORE
          ================================================= */}

          <div className="digital-core">
            <div className="core-grid" />

            <div className="core-symbol">
              <span />
              <span />
              <span />
            </div>

            <div className="core-label">
              DIGITAL
            </div>
          </div>

          {/* =================================================
             SCAN BARS
          ================================================= */}

          <div className="core-bar core-bar-1" />
          <div className="core-bar core-bar-2" />
          <div className="core-bar core-bar-3" />
        </div>
      </div>

      {/* =====================================================
         LABELS
      ===================================================== */}

      <div className="model-label model-label-top">
        <span className="model-label-dot" />
        SYSTEM
      </div>

      <div className="model-label model-label-bottom">
        DIGITAL CORE
      </div>

      <style>{`

        /* =====================================================
           3D SCENE
        ===================================================== */

        .digital-3d-scene {
          position: relative;

          width: 580px;
          height: 580px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 1300px;

          isolation: isolate;

          cursor: default;
        }

        /* =====================================================
           AMBIENT GLOW
        ===================================================== */

        .digital-3d-glow {
          position: absolute;

          width: 390px;
          height: 390px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(125, 48, 20, 0.20) 0%,
              rgba(125, 48, 20, 0.08) 35%,
              transparent 70%
            );

          filter: blur(28px);

          animation:
            core-glow 4s ease-in-out infinite;

          pointer-events: none;
        }

        @keyframes core-glow {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        /* =====================================================
           FLOAT WRAPPER
        ===================================================== */

        .digital-3d-float {
          position: relative;

          width: 330px;
          height: 330px;

          display: flex;
          align-items: center;
          justify-content: center;

          transform-style: preserve-3d;

          animation:
            digital-object-float 6s ease-in-out infinite;
        }

        @keyframes digital-object-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-16px);
          }
        }

        /* =====================================================
           MAIN 3D OBJECT
        ===================================================== */

        .digital-3d-object {
          position: relative;

          width: 300px;
          height: 300px;

          transform-style: preserve-3d;

          transition:
            transform 0.16s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );

          will-change: transform;
        }

        /* =====================================================
           CUBE
        ===================================================== */

        .cube {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 225px;
          height: 225px;

          transform-style: preserve-3d;

          transform:
            translate(-50%, -50%);
        }

        .cube-outer {
          animation:
            cube-breathe 5s ease-in-out infinite;
        }

        .cube-inner {
          width: 155px;
          height: 155px;

          animation:
            inner-cube-float 5s ease-in-out infinite;
        }

        @keyframes cube-breathe {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.035);
          }
        }

        @keyframes inner-cube-float {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.07);
          }
        }

        /* =====================================================
           CUBE FACES
        ===================================================== */

        .cube-face {
          position: absolute;

          width: 100%;
          height: 100%;

          border:
            1px solid
            rgba(125, 48, 20, 0.48);

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.16),
              rgba(255, 255, 255, 0.035)
            );

          backdrop-filter: blur(5px);

          box-shadow:
            inset 0 0 40px
            rgba(
              125,
              48,
              20,
              0.035
            );
        }

        .cube-outer .cube-face {
          border-color:
            rgba(125, 48, 20, 0.34);
        }

        .cube-inner .cube-face {
          border-color:
            rgba(125, 48, 20, 0.55);

          background:
            linear-gradient(
              135deg,
              rgba(125, 48, 20, 0.08),
              rgba(255, 255, 255, 0.025)
            );
        }

        /* =====================================================
           OUTER CUBE DEPTH
        ===================================================== */

        .cube-outer .cube-front {
          transform: translateZ(112px);
        }

        .cube-outer .cube-back {
          transform:
            rotateY(180deg)
            translateZ(112px);
        }

        .cube-outer .cube-right {
          transform:
            rotateY(90deg)
            translateZ(112px);
        }

        .cube-outer .cube-left {
          transform:
            rotateY(-90deg)
            translateZ(112px);
        }

        .cube-outer .cube-top {
          transform:
            rotateX(90deg)
            translateZ(112px);
        }

        .cube-outer .cube-bottom {
          transform:
            rotateX(-90deg)
            translateZ(112px);
        }

        /* =====================================================
           INNER CUBE DEPTH
        ===================================================== */

        .cube-inner .cube-front {
          transform: translateZ(77px);
        }

        .cube-inner .cube-back {
          transform:
            rotateY(180deg)
            translateZ(77px);
        }

        .cube-inner .cube-right {
          transform:
            rotateY(90deg)
            translateZ(77px);
        }

        .cube-inner .cube-left {
          transform:
            rotateY(-90deg)
            translateZ(77px);
        }

        .cube-inner .cube-top {
          transform:
            rotateX(90deg)
            translateZ(77px);
        }

        .cube-inner .cube-bottom {
          transform:
            rotateX(-90deg)
            translateZ(77px);
        }

        /* =====================================================
           DIGITAL CORE
        ===================================================== */

        .digital-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 135px;
          height: 135px;

          transform:
            translate(-50%, -50%)
            translateZ(56px);

          overflow: hidden;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(125, 48, 20, 0.78);

          background:
            radial-gradient(
              circle at center,
              rgba(125, 48, 20, 0.27),
              rgba(18, 13, 10, 0.95) 68%
            );

          box-shadow:
            0 0 42px
            rgba(125, 48, 20, 0.18),
            inset 0 0 35px
            rgba(125, 48, 20, 0.08);

          transform-style: preserve-3d;

          animation:
            core-pulse 3.5s
            ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%,
          100% {
            box-shadow:
              0 0 28px
              rgba(125, 48, 20, 0.12),
              inset 0 0 28px
              rgba(125, 48, 20, 0.06);
          }

          50% {
            box-shadow:
              0 0 65px
              rgba(125, 48, 20, 0.28),
              inset 0 0 45px
              rgba(125, 48, 20, 0.12);
          }
        }

        /* =====================================================
           CORE GRID
        ===================================================== */

        .core-grid {
          position: absolute;

          inset: 0;

          opacity: 0.25;

          background-image:
            linear-gradient(
              rgba(125, 48, 20, 0.45) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(125, 48, 20, 0.45) 1px,
              transparent 1px
            );

          background-size: 14px 14px;

          mask-image:
            radial-gradient(
              circle,
              black 20%,
              transparent 78%
            );
        }

        /* =====================================================
           CORE SYMBOL
        ===================================================== */

        .core-symbol {
          position: relative;

          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 6px;

          z-index: 5;
        }

        .core-symbol span {
          display: block;

          width: 6px;

          border-radius: 999px;

          background:
            linear-gradient(
              to top,
              #7d3014,
              #c27650
            );

          box-shadow:
            0 0 14px
            rgba(125, 48, 20, 0.55);
        }

        .core-symbol span:nth-child(1) {
          height: 20px;
        }

        .core-symbol span:nth-child(2) {
          height: 38px;
        }

        .core-symbol span:nth-child(3) {
          height: 28px;
        }

        /* =====================================================
           CORE LABEL
        ===================================================== */

        .core-label {
          position: relative;

          z-index: 5;

          margin-top: 7px;

          color: #c58b6d;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        /* =====================================================
           SCAN BARS
        ===================================================== */

        .core-bar {
          position: absolute;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(125, 48, 20, 0.75),
              transparent
            );

          z-index: 20;
        }

        .core-bar-1 {
          width: 210px;

          left: 50%;
          top: 42px;

          transform:
            translateX(-50%)
            translateZ(122px);

          animation:
            bar-scan 3s
            ease-in-out infinite;
        }

        .core-bar-2 {
          width: 160px;

          left: 50%;
          bottom: 44px;

          transform:
            translateX(-50%)
            translateZ(122px);

          opacity: 0.5;
        }

        .core-bar-3 {
          width: 1px;
          height: 190px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%)
            translateZ(122px);

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(125, 48, 20, 0.45),
              transparent
            );

          opacity: 0.4;
        }

        @keyframes bar-scan {
          0%,
          100% {
            opacity: 0.25;
          }

          50% {
            opacity: 1;
          }
        }

        /* =====================================================
           PARTICLES
        ===================================================== */

        .particle {
          position: absolute;

          display: block;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #7d3014;

          box-shadow:
            0 0 12px
            rgba(125, 48, 20, 0.55);

          animation:
            particle-float 5s
            ease-in-out infinite;

          z-index: 3;
        }

        .particle-1 {
          left: 15%;
          top: 29%;
          animation-delay: -1s;
        }

        .particle-2 {
          right: 16%;
          top: 23%;
          animation-delay: -2s;
        }

        .particle-3 {
          right: 11%;
          bottom: 28%;
          animation-delay: -3s;
        }

        .particle-4 {
          left: 17%;
          bottom: 21%;
          animation-delay: -4s;
        }

        .particle-5 {
          left: 10%;
          top: 52%;

          width: 3px;
          height: 3px;
        }

        .particle-6 {
          right: 9%;
          top: 57%;

          width: 3px;
          height: 3px;

          animation-delay: -2.5s;
        }

        @keyframes particle-float {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);

            opacity: 0.35;
          }

          50% {
            transform:
              translate3d(0, -16px, 12px)
              scale(1.35);

            opacity: 1;
          }
        }

        /* =====================================================
           LABELS
        ===================================================== */

        .model-label {
          position: absolute;

          color: #7d3014;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.18em;

          white-space: nowrap;
        }

        .model-label-top {
          top: 105px;
          right: 48px;

          display: flex;

          align-items: center;

          gap: 7px;
        }

        .model-label-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #7d3014;

          box-shadow:
            0 0 10px
            rgba(125, 48, 20, 0.55);
        }

        .model-label-bottom {
          bottom: 103px;
          left: 50px;

          opacity: 0.55;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .digital-3d-scene {
            width: 500px;
            height: 500px;
          }

          .digital-3d-float {
            transform: scale(0.88);
          }

          .model-label-top {
            right: 28px;
          }

          .model-label-bottom {
            left: 28px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .digital-3d-scene {
            width: 350px;
            height: 390px;
          }

          .digital-3d-float {
            transform: scale(0.70);
          }

          .model-label-top {
            top: 55px;
            right: 10px;

            font-size: 7px;
          }

          .model-label-bottom {
            bottom: 55px;
            left: 10px;

            font-size: 7px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .digital-3d-scene {
            width: 315px;
            height: 350px;
          }

          .digital-3d-float {
            transform: scale(0.62);
          }

          .model-label {
            font-size: 6px;
          }

          .model-label-top {
            top: 48px;
            right: 2px;
          }

          .model-label-bottom {
            bottom: 48px;
            left: 2px;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .digital-3d-float,
          .digital-3d-glow,
          .digital-core,
          .core-bar-1,
          .particle {
            animation: none;
          }

        }

      `}</style>
    </div>
  );
}

/* =========================================================
   TECHNOLOGY STACK MARQUEE
========================================================= */

function TechnologyStackMarquee() {
  return (
    <div
      className="technology-marquee-full"
      aria-label="Yorra Tech technology stack"
    >

      <div className="technology-marquee">

        <div className="technology-marquee-track">

          {/* =================================================
             FIRST SET
          ================================================= */}

          <div className="technology-marquee-content">

            {technologyCategories.map((category) => (

              <div
                key={category.title}
                className="technology-marquee-group"
              >

                <span className="technology-marquee-title">
                  {category.title}
                </span>

                {category.items.map((item) => (

                  <span
                    key={`${category.title}-${item}`}
                    className="technology-marquee-pill"
                  >
                    {item}
                  </span>

                ))}

              </div>

            ))}

          </div>

          {/* =================================================
             DUPLICATE SET
          ================================================= */}

          <div
            className="technology-marquee-content"
            aria-hidden="true"
          >

            {technologyCategories.map((category) => (

              <div
                key={`duplicate-${category.title}`}
                className="technology-marquee-group"
              >

                <span className="technology-marquee-title">
                  {category.title}
                </span>

                {category.items.map((item) => (

                  <span
                    key={`duplicate-${category.title}-${item}`}
                    className="technology-marquee-pill"
                  >
                    {item}
                  </span>

                ))}

              </div>

            ))}

          </div>

        </div>

      </div>

      <style>{`

        /* =====================================================
           FULL WIDTH MARQUEE
        ===================================================== */

        .technology-marquee-full {
          position: relative;

          left: 50%;

          width: 100vw;

          transform: translateX(-50%);

          margin-top: 14px;

          overflow: hidden;

          border-top:
            1px solid
            rgba(100, 116, 139, 0.22);

          border-bottom:
            1px solid
            rgba(100, 116, 139, 0.22);

          padding-top: 18px;
          padding-bottom: 18px;
        }

        .technology-marquee {
          width: 100%;
          overflow: hidden;
        }

        .technology-marquee-track {
          display: flex;

          align-items: center;

          width: max-content;

          animation:
            technology-marquee-scroll
            55s
            linear
            infinite;

          will-change: transform;
        }

        .technology-marquee-content {
          display: flex;

          align-items: center;

          gap: 42px;

          flex-shrink: 0;

          padding-right: 42px;
        }

        .technology-marquee-group {
          display: flex;

          align-items: center;

          gap: 12px;

          flex-shrink: 0;
        }

        .technology-marquee-title {
          flex-shrink: 0;

          margin-right: 6px;

          color: #000000;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.18em;

          white-space: nowrap;
        }

        .technology-marquee-pill {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          height: 38px;

          padding: 0 16px;

          border-radius: 999px;

          border:
            1px solid
            rgba(125, 48, 20, 0.18);

          background:
            rgba(255, 255, 255, 0.28);

          color: #5f5149;

          font-size: 12px;

          font-weight: 600;

          white-space: nowrap;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .technology-marquee-pill:hover {
          border-color:
            rgba(125, 48, 20, 0.4);

          background:
            rgba(255, 255, 255, 0.55);

          color: #7d3014;
        }

        @keyframes technology-marquee-scroll {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }

        /* =====================================================
           MOBILE MARQUEE
        ===================================================== */

        @media (max-width: 767px) {

          .technology-marquee-full {
            margin-top: 8px;

            padding-top: 14px;
            padding-bottom: 14px;
          }

          .technology-marquee-content {
            gap: 28px;

            padding-right: 28px;
          }

          .technology-marquee-group {
            gap: 8px;
          }

          .technology-marquee-title {
            font-size: 8px;
          }

          .technology-marquee-pill {
            height: 32px;

            padding: 0 12px;

            font-size: 10px;
          }

          .technology-marquee-track {
            animation-duration: 42s;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .technology-marquee-content {
            gap: 22px;

            padding-right: 22px;
          }

          .technology-marquee-group {
            gap: 7px;
          }

          .technology-marquee-pill {
            height: 30px;

            padding: 0 10px;

            font-size: 9px;
          }

          .technology-marquee-title {
            font-size: 7px;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .technology-marquee-track {
            animation: none;
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
    <section
      aria-labelledby="why-yorra-heading"
      className="
        relative
        overflow-hidden
        bg-[#F8F3E8]
        px-6
        py-20
        text-slate-700
        sm:px-8
        lg:px-10
        lg:py-24
      "
    >

      {/* =====================================================
         GRID BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.13]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* =====================================================
         BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.035]
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
           HEADER
        =================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-end
          "
        >

          <div>

            {/* WHY YORRA TECH */}

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black
                sm:text-sm
              "
            >
              Why Yorra Tech
            </p>

            {/* MAIN HEADING */}

            <h2
              id="why-yorra-heading"
              className="
                mt-4
                max-w-xl
                text-4xl
                font-black
                leading-[0.98]
                tracking-tight
                text-[#7D3014]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Technology that works for your{" "}

              <span className="text-[#7D3014]">
                business.
              </span>
            </h2>

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
              sm:leading-7
              lg:ml-auto
              lg:pb-1
            "
          >
            Yorra Tech combines strategy, design, website development, digital
            growth, and business automation to create practical digital solutions
            that are built for today and ready to scale with your business.
          </p>

        </div>

        {/* ===================================================
           CARDS + 3D MODEL
        =================================================== */}

        <div
          className="
            mt-12
            grid
            items-center
            gap-10
            lg:mt-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
          "
        >

          {/* =================================================
             LEFT — CARDS
          ================================================= */}

          <div className="w-full">

            <div
              className="
                grid
                w-full
                max-w-[640px]
                grid-cols-2
                overflow-hidden
                rounded-[20px]
                border
                border-slate-400/25
              "
            >

              {whyYorraCards.map((card, index) => {

                const Icon = card.icon;

                return (

                  <div
                    key={card.number}
                    className={`
                      group
                      relative
                      min-h-[270px]
                      bg-transparent
                      px-6
                      py-6
                      sm:px-7
                      sm:py-7

                      ${
                        index % 2 === 0
                          ? "border-r border-slate-400/25"
                          : ""
                      }

                      ${
                        index < 2
                          ? "border-b border-slate-400/25"
                          : ""
                      }
                    `}
                  >

                    {/* NUMBER + ARROW */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[10px]
                          font-bold
                          tracking-[0.22em]
                          text-purple-600
                        "
                      >
                        {card.number}
                      </span>

                      <span
                        className="
                          text-sm
                          leading-none
                          text-slate-500
                        "
                      >
                        ↗
                      </span>

                    </div>

                    {/* ICON */}

                    <div
                      className="
                        mt-5
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-purple-400/60
                        bg-transparent
                      "
                    >

                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-purple-600"
                      />

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-5
                        max-w-[200px]
                        text-[20px]
                        font-black
                        leading-[1.08]
                        tracking-tight
                        text-slate-700
                        sm:text-[21px]
                      "
                    >
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-4
                        max-w-[245px]
                        text-[12px]
                        leading-[1.7]
                        text-slate-500
                        sm:text-[13px]
                      "
                    >
                      {card.description}
                    </p>

                    {/* BOTTOM LINE */}

                    <div
                      className="
                        absolute
                        bottom-6
                        left-6
                        h-px
                        w-7
                        bg-slate-400/60
                        sm:left-7
                      "
                    />

                  </div>

                );

              })}

            </div>

          </div>

          {/* =================================================
             RIGHT — 3D MODEL
          ================================================= */}

          <div
            className="
              flex
              min-h-[580px]
              items-center
              justify-center
              lg:min-h-[580px]
            "
          >

            <Digital3DModel />

          </div>

        </div>

      </div>

      {/* =====================================================
         FULL WIDTH TECHNOLOGY MARQUEE
      ===================================================== */}

      <div className="mt-14">

        <TechnologyStackMarquee />

      </div>

    </section>
  );
}