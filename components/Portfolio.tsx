import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function HomePortfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className={`${plusJakartaSans.className} relative overflow-hidden bg-[#F8F3E8] px-5 py-24 text-black sm:px-8 lg:px-12 lg:py-32`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple ambient glow */}

        <div className="absolute left-1/2 top-[10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/[0.035] blur-[150px]" />

        <div className="absolute left-[-180px] top-[50%] h-[400px] w-[400px] rounded-full bg-purple-500/[0.025] blur-[140px]" />

        <div className="absolute right-[-180px] top-[25%] h-[350px] w-[350px] rounded-full bg-purple-600/[0.025] blur-[130px]" />

        {/* SAME 28px GRID */}

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1400px]">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>

            {/* EYEBROW */}

            <div className="flex items-center gap-3">

              <span aria-hidden="true" className="h-px w-8 bg-purple-600" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-purple-600

                  sm:text-sm
                "
              >
                Contact for Portfolio
              </span>

            </div>

            {/* =====================================================
                MAIN HEADING
                ONLY THIS HEADING IS #433A8F
            ====================================================== */}

            <h2
              id="portfolio-heading"
              className="
                mt-5
                max-w-4xl
                text-5xl
                font-extrabold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#433A8F]

                sm:text-6xl
                lg:text-7xl
              "
            >
              Want to see
              <br />

              <span className="text-[#433A8F]">
                our portfolio?
              </span>
            </h2>

          </div>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <div className="max-w-md lg:pb-1">

            <p
              className="
                text-sm
                font-medium
                leading-7
                tracking-[-0.01em]
                text-slate-500

                sm:text-base
                sm:leading-8
              "
            >
              We keep our selected work private and share relevant projects
              directly based on your requirements, industry, and goals.
            </p>

            {/* STATUS */}

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-900/[0.08]
                bg-white/[0.3]
                px-4
                py-2
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-600
                  shadow-[0_0_10px_rgba(124,58,237,0.35)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                "
              >
                Selected Work Available
              </span>

            </div>

          </div>

        </div>

        {/* =========================================================
            CONTACT FOR PORTFOLIO
        ========================================================== */}

        <div
          aria-label="Yorra Tech selected portfolio work"
          className="mt-14 lg:mt-20">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-900/[0.08]
              bg-white/[0.28]
              p-7
              transition-all
              duration-500

              hover:-translate-y-1
              hover:border-purple-600/25
              hover:bg-white/[0.42]
              hover:shadow-[0_30px_100px_rgba(45,35,30,0.08)]

              sm:p-10
              lg:p-14
            "
          >

            {/* =====================================================
                DECORATIVE PURPLE GLOW
            ====================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[320px]
                w-[320px]
                rounded-full
                bg-purple-600/[0.06]
                blur-[100px]
                transition-all
                duration-700

                group-hover:bg-purple-600/[0.10]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-24
                h-[280px]
                w-[280px]
                rounded-full
                bg-purple-500/[0.035]
                blur-[100px]
              "
            />

            {/* =====================================================
                INNER CONTENT
            ====================================================== */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-10

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* ===================================================
                  LEFT CONTENT
              ==================================================== */}

              <div className="max-w-3xl">

                {/* NUMBER */}

                <div className="flex items-center gap-3">

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-purple-600
                    "
                  >
                    01
                  </span>

                  <span aria-hidden="true" className="h-px w-8 bg-purple-600/40" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                    "
                  >
                    Selected Work
                  </span>

                </div>

                {/* =================================================
                    CTA TITLE
                ================================================== */}

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-extrabold
                    leading-[1.02]
                    tracking-[-0.05em]
                    text-black

                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Contact for

                  <br />

                  <span className="text-purple-600">
                    Portfolio.
                  </span>
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-sm
                    font-medium
                    leading-7
                    text-slate-500

                    sm:text-base
                    sm:leading-8
                  "
                >
                  Looking for examples of our work? Get in touch and we will
                  share the most relevant portfolio pieces based on your
                  project, industry, and requirements.
                </p>

              </div>

              {/* ===================================================
                  RIGHT CTA
              ==================================================== */}

              <div className="shrink-0">

                <Link
                  href="/contact"
                  aria-label="Contact Yorra Tech to request relevant portfolio examples"
                  className="
                    group/button
                    relative
                    inline-flex
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-full
                    bg-purple-600
                    px-7
                    py-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    shadow-[0_12px_35px_rgba(124,58,237,0.18)]
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-purple-700
                    hover:shadow-[0_18px_45px_rgba(124,58,237,0.25)]

                    sm:px-8
                    sm:py-4
                  "
                >

                  <span>
                    Contact for Portfolio
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      text-base
                      transition-transform
                      duration-300

                      group-hover/button:translate-x-1
                    "
                  >
                    →
                  </span>

                </Link>

              </div>

            </div>

            {/* =====================================================
                BOTTOM META
            ====================================================== */}

            <div
              className="
                relative
                z-10
                mt-10
                flex
                flex-col
                gap-3
                border-t
                border-slate-900/[0.08]
                pt-6

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Yorra Tech / Selected Work
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-purple-600
                "
              >
                Available on request
              </span>

            </div>

          </div>

        </div>

        {/* =========================================================
            FOOTER META
        ========================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-slate-900/[0.08]
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Yorra Tech
          </span>

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Digital Experiences / Selected Work
          </span>

        </div>

      </div>

    </section>
  );
}