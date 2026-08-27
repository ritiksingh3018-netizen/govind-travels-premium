import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className={`${plusJakartaSans.className} relative overflow-hidden bg-[#F8F3E8] px-6 py-24 text-black sm:px-8 lg:px-10 lg:py-32`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main purple glow */}

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#433A8F]/[0.055] blur-[150px]" />

        {/* Side glows */}

        <div className="absolute left-[-180px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#433A8F]/[0.025] blur-[130px]" />

        <div className="absolute right-[-180px] top-1/3 h-[350px] w-[350px] rounded-full bg-[#433A8F]/[0.025] blur-[130px]" />

        {/* =====================================================
            SAME 28px GRID
        ====================================================== */}

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* =========================================================
            MAIN CTA CARD
        ========================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-900/[0.08]
            bg-white/[0.28]
            px-6
            py-16
            text-center
            shadow-[0_30px_100px_rgba(45,35,30,0.07)]
            transition-all
            duration-500

            hover:border-[#433A8F]/20
            hover:bg-white/[0.36]

            sm:px-10
            sm:py-20

            lg:px-16
            lg:py-24
          "
        >

          {/* =====================================================
              CARD GLOW
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-180px]
              h-[360px]
              w-[360px]
              -translate-x-1/2
              rounded-full
              bg-[#433A8F]/[0.06]
              blur-[100px]
              transition-all
              duration-700

              group-hover:bg-[#433A8F]/[0.10]
            "
          />

          {/* =====================================================
              TOP HIGHLIGHT
          ====================================================== */}

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
              via-[#433A8F]/50
              to-transparent
            "
          />

          {/* =====================================================
              LABEL
          ====================================================== */}

          <div className="relative flex items-center justify-center gap-3">

            <span aria-hidden="true" className="h-px w-7 bg-[#433A8F]/60" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#433A8F]

                sm:text-xs
              "
            >
              Start Something New
            </p>

            <span aria-hidden="true" className="h-px w-7 bg-[#433A8F]/60" />

          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <h2
            id="cta-heading"
            className="
              relative
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-extrabold
              leading-[0.98]
              tracking-[-0.055em]
              text-black

              sm:text-5xl

              lg:text-7xl
            "
          >
            Have an idea?

            <br />

            <span className="text-[#433A8F]">
              Let&apos;s build it.
            </span>

          </h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            className="
              relative
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-slate-500

              sm:text-base
              sm:leading-8

              lg:text-lg
            "
          >
            Tell us what you&apos;re trying to build, grow, or automate.
            We&apos;ll help you turn the idea into a practical digital
            solution that moves your business forward.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className="
              relative
              mt-10
              flex
              flex-col
              justify-center
              gap-3

              sm:flex-row
              sm:gap-4
            "
          >

            {/* =================================================
                PRIMARY BUTTON
            ================================================== */}

            <Link
              href="/contact"
              aria-label="Start a project with Yorra Tech"
              className="
                group/button
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#433A8F]
                px-7
                py-4
                text-sm
                font-bold
                text-white
                shadow-[0_10px_35px_rgba(67,58,143,0.16)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#39327A]
                hover:shadow-[0_15px_40px_rgba(67,58,143,0.22)]
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

                  group-hover/button:translate-x-1
                "
              >
                →
              </span>

            </Link>

            {/* =================================================
                SECONDARY BUTTON
            ================================================== */}

            <Link
              href="/services"
              aria-label="Explore Yorra Tech digital services"
              className="
                group/button
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-slate-900/[0.10]
                bg-white/[0.20]
                px-7
                py-4
                text-sm
                font-bold
                text-black
                backdrop-blur-xl
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#433A8F]/30
                hover:bg-white/[0.42]
              "
            >

              <span>
                Explore Services
              </span>

              <span
                aria-hidden="true"
                className="
                  text-slate-400
                  transition-all
                  duration-300

                  group-hover/button:translate-x-1
                  group-hover/button:text-[#433A8F]
                "
              >
                ↗
              </span>

            </Link>

          </div>

          {/* =====================================================
              PROCESS INDICATORS
          ====================================================== */}

          <div
            className="
              relative
              mx-auto
              mt-14
              flex
              max-w-xl
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
            "
          >

            {/* Strategy */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#433A8F]
                  shadow-[0_0_10px_rgba(67,58,143,0.55)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Strategy
              </span>

            </div>

            <span className="text-slate-300">
              /
            </span>

            {/* Design */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-slate-300
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Design
              </span>

            </div>

            <span className="text-slate-300">
              /
            </span>

            {/* Build */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-slate-300
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Build
              </span>

            </div>

            <span className="text-slate-300">
              /
            </span>

            {/* Grow */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-slate-300
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Grow
              </span>

            </div>

          </div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}

          <div
            className="
              mx-auto
              mt-12
              h-px
              max-w-md
              bg-gradient-to-r
              from-transparent
              via-slate-900/[0.08]
              to-transparent
            "
          />

          {/* =====================================================
              FOOTER LINE
          ====================================================== */}

          <div className="mt-6 flex items-center justify-center gap-3">

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Build
            </span>

            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Grow
            </span>

            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Automate
            </span>

          </div>

        </div>

        {/* =========================================================
            BOTTOM MICRO COPY
        ========================================================== */}

        <div className="mt-8 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-slate-900/[0.08]" />

          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Let&apos;s create something meaningful
          </p>

          <span className="h-px w-8 bg-slate-900/[0.08]" />

        </div>

      </div>

    </section>
  );
}