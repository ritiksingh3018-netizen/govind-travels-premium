import Link from "next/link";

const services = [
  { name: "Website Development", href: "/services" },
  { name: "Digital Growth", href: "/services" },
  { name: "Business Automation", href: "/services" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/[0.08] bg-[#F8F3E8] text-black">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[-180px]
            top-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#433A8F]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[-180px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#433A8F]/[0.025]
            blur-[130px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* =========================================================
            CONTACT CTA
        ========================================================== */}

        <div
          className="
            mb-14
            overflow-hidden
            rounded-2xl
            border
            border-slate-900/[0.08]
            bg-white/[0.28]
            transition-all
            duration-300
            hover:border-[#7C3AED]/30
            hover:bg-white/[0.42]
            hover:shadow-[0_15px_40px_rgba(124,58,237,0.08)]
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              px-5
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >

            <div>

              <p className="text-sm font-bold text-black">
                Ready to build something?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Let&apos;s turn your idea into something real.
              </p>

            </div>


            <Link
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-lg
                bg-white
                px-5
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-black
                shadow-[0_6px_20px_rgba(45,35,30,0.05)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:bg-[#7C3AED]
                hover:text-white
                hover:shadow-[0_12px_30px_rgba(124,58,237,0.25)]
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

          </div>

        </div>


        {/* =========================================================
            MAIN FOOTER
        ========================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div className="max-w-md">

            {/* LOGO */}

            <Link
              href="/"
              className="
                inline-flex
                items-center
                text-2xl
                font-black
                tracking-tight
              "
            >

              <span className="text-black">
                Yorra
              </span>

              <span className="ml-1 text-[#7C3AED]">
                Tech
              </span>

            </Link>


            {/* DESCRIPTION */}

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              We build digital experiences, accelerate business growth, and
              automate the work that slows businesses down.
            </p>


            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="mt-7 flex items-center gap-2.5">

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/yorra-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yorra Tech LinkedIn"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.25]
                  text-slate-500
                  shadow-[0_5px_18px_rgba(45,35,30,0.03)]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#7C3AED]
                  hover:bg-[#7C3AED]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(124,58,237,0.30)]
                  active:scale-95
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.25 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.88V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.71 1.87 3.05V20h3.38l.31-6.58Z" />
                </svg>

              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/yorratech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yorra Tech Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.25]
                  text-slate-500
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#7C3AED]
                  hover:bg-[#7C3AED]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(124,58,237,0.30)]
                  active:scale-95
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

              </a>


              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/1Cg79dLX6A/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yorra Tech Facebook"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.25]
                  text-slate-500
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#7C3AED]
                  hover:bg-[#7C3AED]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(124,58,237,0.30)]
                  active:scale-95
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.2 22.2 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.24V10H7.9v3h2.2v8h3.4Z" />
                </svg>

              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/919990859602"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Yorra Tech on WhatsApp"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.25]
                  text-slate-500
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#7C3AED]
                  hover:bg-[#7C3AED]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(124,58,237,0.30)]
                  active:scale-95
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
                  <path d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.6-.7c.1-.1.3-.2.5-.1l1.7.8c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1-.1-2.3-.8-3.4-1.8-1.1-1-1.8-2.3-1.9-3.3-.1-.6.1-1.1.6-1.4Z" />
                </svg>

              </a>


              {/* Call */}

              <a
                href="tel:+919990859602"
                aria-label="Call Yorra Tech"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.25]
                  text-slate-500
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[#7C3AED]
                  hover:bg-[#7C3AED]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(124,58,237,0.30)]
                  active:scale-95
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                >
                  <path d="M6.6 3.8 4.8 5.1c-.7.5-.9 1.4-.6 2.2 1.7 4.7 5 8 9.7 9.7.8.3 1.7.1 2.2-.6l1.3-1.8c.4-.6.3-1.4-.2-1.8l-2.1-1.7c-.5-.4-1.2-.4-1.7 0l-1.1.9a12.5 12.5 0 0 1-4.3-4.3l.9-1.1c.4-.5.4-1.2 0-1.7L8.4 4c-.4-.5-1.2-.6-1.8-.2Z" />
                </svg>

              </a>

            </div>


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="mt-5 space-y-3">

              {/* Phone */}

              <a
                href="tel:+919990859602"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#7C3AED]
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-3.5
                    w-3.5
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <path d="M6.6 3.8 4.8 5.1c-.7.5-.9 1.4-.6 2.2 1.7 4.7 5 8 9.7 9.7.8.3 1.7.1 2.2-.6l1.3-1.8c.4-.6.3-1.4-.2-1.8l-2.1-1.7c-.5-.4-1.2-.4-1.7 0l-1.1.9a12.5 12.5 0 0 1-4.3-4.3l.9-1.1c.4-.5.4-1.2 0-1.7L8.4 4c-.4-.5-1.2-.6-1.8-.2Z" />
                </svg>

                +91 99908 59602

              </a>


              {/* Contact Email */}

              <a
                href="mailto:contact@yorra.in"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#7C3AED]
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-3.5
                    w-3.5
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                contact@yorra.in

              </a>


              {/* Gmail */}

              <a
                href="mailto:info@yorra.in"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-500
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#7C3AED]
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-3.5
                    w-3.5
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                info@yorra.in

              </a>


              {/* Address */}

              <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>
                  Jharoda Majra, Burari, Delhi
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              SERVICES
          ====================================================== */}

          <div>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3.5">

              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-2.5
                    text-sm
                    text-slate-500
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-[#7C3AED]/25
                    hover:bg-white/80
                    hover:text-[#7C3AED]
                    hover:shadow-[0_10px_25px_rgba(124,58,237,0.15)]
                  "
                >

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {service.name}
                  </span>

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      text-[#7C3AED]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-[#7C3AED]
                      group-hover:text-white
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>

                </Link>
              ))}

            </nav>

          </div>


          {/* =====================================================
              COMPANY
          ====================================================== */}

          <div>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3.5">

              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-2.5
                    text-sm
                    text-slate-500
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-[#7C3AED]/25
                    hover:bg-white/80
                    hover:text-[#7C3AED]
                    hover:shadow-[0_10px_25px_rgba(124,58,237,0.15)]
                  "
                >

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.name}
                  </span>

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      text-[#7C3AED]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-[#7C3AED]
                      group-hover:text-white
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>

                </Link>
              ))}

            </nav>

          </div>


          {/* =====================================================
              MAP
          ====================================================== */}

          <div>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
              Find Us
            </h3>

            <div
              className="
                group
                relative
                mt-5
                overflow-hidden
                rounded-2xl
                border
                border-slate-900/[0.08]
                bg-white/[0.28]
                shadow-[0_10px_35px_rgba(45,35,30,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-[#7C3AED]/50
                hover:shadow-[0_18px_45px_rgba(124,58,237,0.20)]
              "
            >

              <div className="relative h-[150px] w-full overflow-hidden">

                <iframe
                  title="Yorra Tech location"
                  src="https://www.google.com/maps?q=Delhi,India&output=embed"
                  className="
                    h-full
                    w-full
                    border-0
                    opacity-60
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                    group-hover:opacity-100
                    group-hover:grayscale-0
                  "
                  loading="lazy"
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    rounded-lg
                    border
                    border-white/30
                    bg-black/40
                    px-3
                    py-1.5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:bg-[#7C3AED]/80
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                    Delhi, India
                  </p>

                </div>

              </div>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Yorra+Tech+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/map
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-900/[0.08]
                  px-4
                  py-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  transition-all
                  duration-300
                  hover:bg-[#7C3AED]
                  hover:text-white
                "
              >

                <span>
                  Open in Maps
                </span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/map:translate-x-1
                  "
                >
                  ↗
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* =========================================================
            BOTTOM
        ========================================================== */}

        <div
          className="
            mt-10
            border-t
            border-slate-900/[0.08]
            pt-7
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* =================================================
                COPYRIGHT
            ================================================== */}

            <p
              className="
                order-2
                text-xs
                text-slate-500
                sm:order-1
              "
            >
              © {new Date().getFullYear()} Yorra Tech. All rights reserved.
            </p>


            {/* =================================================
                PRIVACY + TERMS
            ================================================== */}

            <div
              className="
                order-1
                flex
                items-center
                gap-5
                sm:order-2
              "
            >

              {/* Privacy */}

              <Link
                href="/privacy"
                className="
                  group
                  relative
                  text-xs
                  font-semibold
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-[#7C3AED]
                "
              >

                Privacy

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[#7C3AED]
                    shadow-[0_0_10px_rgba(124,58,237,0.6)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </Link>


              <span className="text-slate-300">
                |
              </span>


              {/* Terms */}

              <Link
                href="/terms"
                className="
                  group
                  relative
                  text-xs
                  font-semibold
                  text-slate-500
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-[#7C3AED]
                "
              >

                Terms

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[#7C3AED]
                    shadow-[0_0_10px_rgba(124,58,237,0.6)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}