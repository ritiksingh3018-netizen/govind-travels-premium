import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, challenges, and goals before deciding what needs to be built.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We turn your goals into a clear digital strategy, project roadmap, and execution plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team designs and develops the solution with performance, usability, and scalability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test everything, optimize the final experience, and get your digital product ready for the real world.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "After launch, we help you improve, attract more customers, and automate the processes that matter.",
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className={`${plusJakartaSans.className} relative overflow-hidden bg-[#F8F3E8] px-6 py-24 text-black sm:px-8 lg:px-10 lg:py-32`}
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Subtle purple glow */}

        <div className="absolute left-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-purple-500/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-[10%] h-[380px] w-[380px] rounded-full bg-purple-500/[0.025] blur-[140px]" />

        {/* Same cream grid */}

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-3">

            {/* Purple line */}

            <span className="h-px w-8 bg-purple-600" />

            {/* Purple label */}

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              How We Work
            </p>

          </div>

          {/* =====================================================
              MAIN HEADING
          ====================================================== */}

          <h2
            id="process-heading"
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.055em]
              text-[#16A34A]

              sm:text-5xl
              lg:text-6xl
            "
          >
            From idea to{" "}

            <span className="text-[#16A34A]">
              impact.
            </span>
          </h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              font-medium
              leading-7
              tracking-[-0.01em]
              text-slate-500

              sm:text-lg
              sm:leading-8
            "
          >
            A simple, transparent process designed to turn ambitious ideas
            into digital products that actually move your business forward.
          </p>

        </div>

        {/* =========================================================
            PROCESS TIMELINE
        ========================================================== */}

        <div className="relative mt-16 sm:mt-20">

          {/* Desktop timeline base */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[5%]
              right-[5%]
              top-[31px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-slate-900/20
              to-transparent

              lg:block
            "
          />

          {/* Purple progress */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[5%]
              right-[5%]
              top-[31px]
              hidden

              lg:block
            "
          >

            <div
              className="
                h-px
                w-full
                bg-gradient-to-r
                from-purple-600/60
                via-purple-600/25
                to-transparent
                opacity-80
              "
            />

          </div>

          {/* =====================================================
              STEP GRID
          ====================================================== */}

          <div
            aria-label="Yorra Tech project process"
            className="
              grid
              gap-5

              sm:grid-cols-2

              lg:grid-cols-5
              lg:gap-4
            "
          >

            {steps.map((step, index) => (

              <article
                key={step.number}
                aria-labelledby={`process-step-${step.number}`}
                className="group relative lg:min-w-0"
              >

                {/* =================================================
                    MOBILE / TABLET CONNECTOR
                ================================================== */}

                {index !== steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[27px]
                      top-[64px]
                      hidden
                      h-[calc(100%+20px)]
                      w-px
                      bg-gradient-to-b
                      from-slate-900/15
                      to-transparent

                      sm:block
                      lg:hidden
                    "
                  />
                )}

                {/* =================================================
                    STEP CARD
                ================================================== */}

                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-900/[0.08]
                    bg-white/[0.18]
                    p-6
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-purple-600/25
                    hover:bg-white/[0.38]
                    hover:shadow-[0_20px_60px_rgba(45,35,30,0.08)]

                    sm:p-7

                    lg:border-transparent
                    lg:bg-transparent
                    lg:p-0
                    lg:shadow-none
                    lg:hover:border-transparent
                    lg:hover:bg-transparent
                    lg:hover:shadow-none
                  "
                >

                  {/* =================================================
                      HOVER GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-purple-600/[0.07]
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      lg:-right-8
                      lg:-top-8
                    "
                  />

                  <div className="relative z-10">

                    {/* =================================================
                        NUMBER
                    ================================================== */}

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          relative
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                        "
                      >

                        {/* Outer glow */}

                        <div
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-purple-600/10
                            opacity-0
                            blur-md
                            transition-opacity
                            duration-500

                            group-hover:opacity-100
                          "
                        />

                        {/* Circle */}

                        <div
                          className="
                            relative
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-purple-600/25
                            bg-[#F8F3E8]
                            text-sm
                            font-bold
                            text-purple-600
                            shadow-[0_0_0_6px_rgba(15,23,42,0.025)]
                            transition-all
                            duration-500

                            group-hover:border-purple-600/60
                            group-hover:bg-purple-600
                            group-hover:text-white
                            group-hover:shadow-[0_0_0_6px_rgba(124,58,237,0.07)]
                          "
                        >
                          {step.number}
                        </div>

                      </div>

                      {/* Small label */}

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-slate-400

                          lg:hidden
                        "
                      >
                        Step {index + 1}
                      </span>

                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="mt-6 lg:mt-7">

                      <h3
                        id={`process-step-${step.number}`}
                        className="
                          text-xl
                          font-extrabold
                          tracking-[-0.035em]
                          text-black
                          transition-colors
                          duration-300

                          group-hover:text-purple-600

                          sm:text-2xl
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          font-medium
                          leading-6
                          text-slate-500
                          transition-colors
                          duration-300

                          group-hover:text-slate-600
                        "
                      >
                        {step.description}
                      </p>

                    </div>

                    {/* =================================================
                        BOTTOM INDICATOR
                    ================================================== */}

                    <div className="mt-6 flex items-center gap-2">

                      <span
                        className="
                          h-px
                          w-5
                          bg-slate-900/20
                          transition-all
                          duration-500

                          group-hover:w-9
                          group-hover:bg-purple-600/60
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-400
                          transition-colors
                          duration-300

                          group-hover:text-purple-600
                        "
                      >
                        {step.number}
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-slate-900/[0.08]
            bg-white/[0.28]
            p-7

            sm:mt-20
            sm:p-9

            lg:p-10
          "
        >

          {/* CTA glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[-100px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-purple-600/[0.05]
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-7

              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            {/* =====================================================
                CTA TEXT
            ====================================================== */}

            <div>

              <div className="flex items-center gap-3">

                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-purple-600
                    shadow-[0_0_12px_rgba(124,58,237,0.45)]
                  "
                />

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-purple-600
                  "
                >
                  Our approach
                </p>

              </div>

              <h3
                className="
                  mt-4
                  text-xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-black

                  sm:text-2xl
                "
              >
                Clear process. Better outcomes.
              </h3>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  font-medium
                  leading-6
                  text-slate-500

                  sm:text-base
                "
              >
                You always know what we are working on, why we are doing it,
                and what comes next.
              </p>

            </div>

            {/* =====================================================
                PROCESS FLOW
            ====================================================== */}

            <div className="shrink-0">

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-xs
                  font-bold

                  sm:text-sm
                "
              >

                {/* Discover */}

                <span
                  className="
                    rounded-full
                    border
                    border-purple-600/25
                    bg-purple-600/[0.07]
                    px-3
                    py-2
                    text-purple-600
                  "
                >
                  Discover
                </span>

                <span aria-hidden="true" className="text-slate-400">
                  →
                </span>

                {/* Strategy */}

                <span
                  className="
                    rounded-full
                    border
                    border-slate-900/10
                    bg-white/[0.28]
                    px-3
                    py-2
                    text-slate-500
                  "
                >
                  Strategy
                </span>

                <span aria-hidden="true" className="text-slate-400">
                  →
                </span>

                {/* Build */}

                <span
                  className="
                    rounded-full
                    border
                    border-slate-900/10
                    bg-white/[0.28]
                    px-3
                    py-2
                    text-slate-500
                  "
                >
                  Build
                </span>

                <span aria-hidden="true" className="text-slate-400">
                  →
                </span>

                {/* Grow */}

                <span
                  className="
                    rounded-full
                    border
                    border-slate-900/10
                    bg-white/[0.28]
                    px-3
                    py-2
                    text-slate-500
                  "
                >
                  Grow
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            CLOSING LINE
        ========================================================== */}

        <div className="mt-8 flex items-center justify-center gap-3 text-center">

          <span aria-hidden="true" className="h-px w-8 bg-slate-900/15" />

          <span
            className="
              text-xs
              font-medium
              tracking-[-0.01em]
              text-slate-500
            "
          >
            Built with clarity. Delivered with purpose.
          </span>

          <span aria-hidden="true" className="h-px w-8 bg-slate-900/15" />

        </div>

      </div>
    </section>
  );
}