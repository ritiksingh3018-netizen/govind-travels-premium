"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featureContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const featureItem: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   INTERACTIVE 3D HERO STRUCTURE
========================================================= */

function Interactive3DStructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const structure = structureRef.current;
    const glow = glowRef.current;

    if (!container || !structure || !glow) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let targetAngle = 0;

    let currentX = 0;
    let currentY = 0;
    let currentAngle = 0;

    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      // Normalize against a smaller reference so movement anywhere
      // on the window still produces a strong, full-range response
      const refRange = Math.min(rect.width, rect.height) / 2;

      const x = dx / refRange;
      const y = dy / refRange;

      targetX = Math.max(-1.4, Math.min(1.4, x));
      targetY = Math.max(-1.4, Math.min(1.4, y));

      // Full 360° angle around the center, in degrees
      targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    };

    const shortestAngleLerp = (
      current: number,
      target: number,
      t: number
    ) => {
      let delta = target - current;

      while (delta > 180) delta -= 360;
      while (delta < -180) delta += 360;

      return current + delta * t;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentAngle = shortestAngleLerp(currentAngle, targetAngle, 0.16);

      const rotateY = currentX * 45;
      const rotateX = currentY * -35;
      const rotateZ = currentAngle * 0.55;

      structure.style.transform = `
        translate(-50%, -50%)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `;

      glow.style.transform = `
        translate3d(${currentX * 70}px, ${currentY * 55}px, 0)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    // Listen on the whole window so movement anywhere on the page
    // drives the rotation, not just inside the hero box
    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
      aria-hidden="true"
    >

      {/* Purple ambient glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7C3AED]/[0.07]
          blur-[110px]
        "
      />


      {/* 3D structure */}

      <div
        ref={structureRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          [transform-style:preserve-3d]
          will-change-transform
          sm:h-[420px]
          sm:w-[420px]
          lg:h-[540px]
          lg:w-[540px]
        "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >

        {/* Outer square */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[210px]
            w-[210px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-12
            border
            border-[#7C3AED]/25
            [transform:translateZ(35px)_rotate(12deg)]
            sm:h-[290px]
            sm:w-[290px]
            lg:h-[360px]
            lg:w-[360px]
          "
        />


        {/* Second square */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[210px]
            w-[210px]
            -translate-x-1/2
            -translate-y-1/2
            -rotate-12
            border
            border-[#433A8F]/20
            [transform:translateZ(-35px)_rotate(-12deg)]
            sm:h-[290px]
            sm:w-[290px]
            lg:h-[360px]
            lg:w-[360px]
          "
        />


        {/* Diagonal line */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[390px]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            rotate-[32deg]
            bg-gradient-to-b
            from-transparent
            via-[#7C3AED]/30
            to-transparent
            [transform:translateZ(20px)_rotate(32deg)]
          "
        />


        {/* Opposite diagonal */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[390px]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[32deg]
            bg-gradient-to-b
            from-transparent
            via-[#433A8F]/25
            to-transparent
            [transform:translateZ(15px)_rotate(-32deg)]
          "
        />


        {/* Horizontal axis */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[390px]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            rotate-90
            bg-gradient-to-b
            from-transparent
            via-[#7C3AED]/18
            to-transparent
            [transform:translateZ(10px)_rotate(90deg)]
          "
        />


        {/* Inner diamond */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[125px]
            w-[125px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-45
            border
            border-[#7C3AED]/40
            bg-[#7C3AED]/[0.025]
            [transform:translateZ(75px)_rotate(45deg)]
            sm:h-[175px]
            sm:w-[175px]
            lg:h-[220px]
            lg:w-[220px]
          "
        />


        {/* Ring */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[175px]
            w-[175px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#7C3AED]/20
            [transform:translateZ(45px)_rotateX(68deg)]
            sm:h-[245px]
            sm:w-[245px]
            lg:h-[300px]
            lg:w-[300px]
          "
        />


        {/* Second ring */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[120px]
            w-[245px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-[#433A8F]/20
            [transform:translateZ(20px)_rotateY(65deg)]
            sm:h-[170px]
            sm:w-[350px]
            lg:h-[210px]
            lg:w-[410px]
          "
        />


        {/* Core */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-16
            w-16
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#7C3AED]/55
            bg-[#F8F3E8]/80
            shadow-[0_0_55px_rgba(124,58,237,0.25)]
            [transform:translateZ(115px)]
            sm:h-20
            sm:w-20
            lg:h-24
            lg:w-24
          "
        >

          <div
            className="
              absolute
              inset-2
              rounded-full
              border
              border-[#7C3AED]/25
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#7C3AED]
              shadow-[0_0_20px_rgba(124,58,237,0.8)]
            "
          />

        </div>


        {/* Floating nodes */}

        <div
          className="
            absolute
            left-[18%]
            top-[24%]
            h-2
            w-2
            rounded-full
            bg-[#7C3AED]
            shadow-[0_0_18px_rgba(124,58,237,0.7)]
            [transform:translateZ(100px)]
          "
        />

        <div
          className="
            absolute
            right-[18%]
            top-[30%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#433A8F]
            shadow-[0_0_15px_rgba(67,58,143,0.6)]
            [transform:translateZ(75px)]
          "
        />

        <div
          className="
            absolute
            bottom-[20%]
            left-[28%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#7C3AED]
            shadow-[0_0_15px_rgba(124,58,237,0.6)]
            [transform:translateZ(90px)]
          "
        />

        <div
          className="
            absolute
            bottom-[27%]
            right-[22%]
            h-2
            w-2
            rounded-full
            bg-[#433A8F]
            shadow-[0_0_18px_rgba(67,58,143,0.6)]
            [transform:translateZ(65px)]
          "
        />

      </div>
    </div>
  );
}


/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-900">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#F8F3E8]">

        {/* Purple ambient glow */}

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
            absolute
            left-1/2
            top-[-180px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#7C3AED]/[0.04]
            blur-[140px]
          "
        />


        {/* Right glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#433A8F]/[0.03]
            blur-[120px]
          "
        />


        {/* Left glow */}

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
          className="
            absolute
            left-[-180px]
            top-[50%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#7C3AED]/[0.025]
            blur-[120px]
          "
        />


        {/* =================================================
            FULL PAGE GRID
            40px x 40px
        ================================================== */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(71,58,45,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(71,58,45,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>


      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          px-6
          pb-24
          pt-36
          sm:px-8
          lg:px-10
          lg:pb-32
          lg:pt-44
        "
      >

        {/* =====================================================
            3D STRUCTURE
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            mx-auto
            max-w-7xl
          "
        >
          <Interactive3DStructure />
        </div>


        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >

          {/* Eyebrow */}

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >

            <motion.span
              aria-hidden="true"
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 32,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="h-px bg-[#7C3AED]"
            />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#7C3AED]
                sm:text-sm
              "
            >
              Our Services
            </p>

          </motion.div>


          {/* Heading */}

          <motion.h1
            id="services-page-heading"
            variants={fadeUp}
            className="
              mt-6
              max-w-6xl
              text-5xl
              font-black
              leading-[0.94]
              tracking-[-0.055em]
              text-slate-900
              sm:text-6xl
              lg:text-8xl
            "
          >

            Digital solutions built to{" "}

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
              move businesses forward.
            </span>

          </motion.h1>


          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              sm:text-lg
              sm:leading-8
            "
          >
            From your first website to advanced growth systems and business
            automation, Yorra Tech helps you build, grow, and operate better.
          </motion.p>


          {/* Service indicator */}

          <motion.div
            variants={fadeUp}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-3
            "
          >

            <span
              className="
                rounded-full
                border
                border-[#7C3AED]/20
                bg-[#7C3AED]/[0.06]
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#7C3AED]
              "
            >
              Strategy
            </span>

            <span aria-hidden="true" className="text-slate-300">
              →
            </span>

            <span
              className="
                rounded-full
                border
                border-slate-900/[0.08]
                bg-white/60
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Build
            </span>

            <span aria-hidden="true" className="text-slate-300">
              →
            </span>

            <span
              className="
                rounded-full
                border
                border-slate-900/[0.08]
                bg-white/60
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Grow
            </span>

            <span aria-hidden="true" className="text-slate-300">
              →
            </span>

            <span
              className="
                rounded-full
                border
                border-slate-900/[0.08]
                bg-white/60
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Automate
            </span>

          </motion.div>

        </motion.div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section
        aria-labelledby="services-list-heading"
        className="
          relative
          px-6
          pb-24
          sm:px-8
          lg:px-10
          lg:pb-32
        "
      >

        <div className="mx-auto max-w-7xl">

          <h2 id="services-list-heading" className="sr-only">
            Yorra Tech Digital Services
          </h2>

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
                aria-labelledby={`service-${service.number}-heading`}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.48]
                  p-7
                  shadow-[0_10px_35px_rgba(45,35,30,0.035)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-[#7C3AED]/30
                  hover:bg-white/[0.68]
                  hover:shadow-[0_20px_55px_rgba(124,58,237,0.10)]
                  sm:p-9
                  lg:p-12
                "
              >

                {/* Card glow */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[#7C3AED]/[0.055]
                    blur-[100px]
                  "
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


                {/* Top accent */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#7C3AED]/40
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />


                <div
                  className="
                    relative
                    grid
                    gap-10
                    lg:grid-cols-[0.8fr_1.2fr]
                    lg:gap-16
                  "
                >

                  {/* LEFT */}

                  <div>

                    <div className="flex items-center gap-4">

                      <motion.span
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="
                          relative
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-900/[0.10]
                          bg-[#F8F3E8]
                          text-xs
                          font-bold
                          text-[#7C3AED]
                          transition-all
                          duration-500
                          group-hover:border-[#7C3AED]/50
                          group-hover:bg-[#7C3AED]
                          group-hover:text-white
                        "
                      >

                        {service.number}

                        <span
                          className="
                            absolute
                            inset-[-5px]
                            rounded-full
                            border
                            border-[#7C3AED]/0
                            transition-all
                            duration-500
                            group-hover:border-[#7C3AED]/10
                          "
                        />

                      </motion.span>


                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-slate-400
                        "
                      >
                        Service {index + 1}
                      </span>

                    </div>


                    <h3
                      id={`service-${service.number}-heading`}
                      className="
                        mt-7
                        text-3xl
                        font-black
                        tracking-[-0.035em]
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#433A8F]
                        sm:text-4xl
                        lg:text-5xl
                      "
                    >
                      {service.title}
                    </h3>


                    <p
                      className="
                        mt-5
                        max-w-xl
                        text-base
                        leading-7
                        text-slate-500
                        sm:text-lg
                        sm:leading-8
                      "
                    >
                      {service.short}
                    </p>


                    <div className="mt-8 flex items-center gap-3">

                      <span
                        className="
                          h-px
                          w-8
                          bg-[#7C3AED]/40
                          transition-all
                          duration-500
                          group-hover:w-14
                          group-hover:bg-[#7C3AED]
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                          transition-colors
                          duration-300
                          group-hover:text-[#7C3AED]/70
                        "
                      >
                        Yorra Tech
                      </span>

                    </div>

                  </div>


                  {/* RIGHT */}

                  <div>

                    <p
                      className="
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {service.description}
                    </p>


                    <motion.div
                      variants={featureContainer}
                      className="
                        mt-8
                        grid
                        gap-3
                        sm:grid-cols-2
                      "
                    >

                      {service.features.map((feature) => (

                        <motion.div
                          key={feature}
                          variants={featureItem}
                          whileHover={{
                            x: 4,
                          }}
                          className="
                            group/feature
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-slate-900/[0.07]
                            bg-white/[0.50]
                            px-4
                            py-3.5
                            transition-all
                            duration-300
                            hover:border-[#7C3AED]/25
                            hover:bg-[#7C3AED]/[0.035]
                            hover:shadow-[0_8px_20px_rgba(124,58,237,0.07)]
                          "
                        >

                          <span
                            className="
                              flex
                              h-6
                              w-6
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#7C3AED]/20
                              bg-[#7C3AED]/[0.05]
                              text-[10px]
                              text-[#7C3AED]
                              transition-all
                              duration-300
                              group-hover/feature:border-[#7C3AED]/40
                              group-hover/feature:bg-[#7C3AED]
                              group-hover/feature:text-white
                            "
                          >
                            ✓
                          </span>


                          <span
                            className="
                              text-sm
                              text-slate-500
                              transition-colors
                              duration-300
                              group-hover/feature:text-slate-800
                            "
                          >
                            {feature}
                          </span>

                        </motion.div>

                      ))}

                    </motion.div>


                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-900/[0.07]
                        pt-5
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                        "
                      >
                        {service.number} / 03
                      </span>


                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#7C3AED]/60
                          transition-colors
                          duration-300
                          group-hover:text-[#7C3AED]
                        "
                      >
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

      <section
        aria-labelledby="services-cta-heading"
        className="
          relative
          px-6
          pb-24
          sm:px-8
          lg:px-10
          lg:pb-32
        "
      >

        <div className="relative mx-auto max-w-5xl">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[450px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#7C3AED]/[0.045]
              blur-[130px]
            "
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
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-900/[0.08]
              bg-white/[0.48]
              px-6
              py-16
              text-center
              shadow-[0_25px_80px_rgba(45,35,30,0.06)]
              backdrop-blur-sm
              sm:px-10
              lg:px-16
              lg:py-20
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-1/2
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#7C3AED]/50
                to-transparent
              "
            />


            <div className="relative">

              <div className="flex items-center justify-center gap-3">

                <span aria-hidden="true" className="h-px w-7 bg-[#7C3AED]/60" />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#7C3AED]
                    sm:text-xs
                  "
                >
                  Have a project in mind?
                </p>

                <span aria-hidden="true" className="h-px w-7 bg-[#7C3AED]/60" />

              </div>


              <h2
                id="services-cta-heading"
                className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-slate-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >

                Let&apos;s build something{" "}

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
                  that matters.
                </span>

              </h2>


              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                  sm:leading-8
                "
              >
                Tell us what you want to build, grow, or automate and
                we&apos;ll help you figure out the right approach.
              </p>


              <Link
                href="/contact"
                aria-label="Start a project with Yorra Tech"
                className="
                  group/cta
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#7C3AED]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_35px_rgba(124,58,237,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#6D28D9]
                  hover:shadow-[0_15px_45px_rgba(124,58,237,0.25)]
                "
              >

                <span>
                  Start a Project
                </span>

                <span
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover/cta:translate-x-1
                  "
                >
                  →
                </span>

              </Link>


              <div className="mx-auto mt-10 flex items-center justify-center gap-3">

                <span
                  aria-hidden="true"
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
                    tracking-[0.2em]
                    text-slate-400
                  "
                >
                  Yorra Tech
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}