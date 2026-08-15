"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Website Development",
    short: "BUILD",
    description:
      "We build modern digital experiences that make your business look professional and convert visitors into customers.",
    items: [
      {
        title: "Business Websites",
        description:
          "Professional websites designed to build trust, showcase your services and give your business a strong digital presence.",
        icon: "◈",
      },
      {
        title: "Landing Pages",
        description:
          "Focused landing pages designed around your offer, campaign and conversion goal.",
        icon: "↗",
      },
      {
        title: "E-Commerce",
        description:
          "Conversion-ready online stores with product catalogs, secure checkout flows and easy order management.",
        icon: "🛒",
      },
      {
        title: "Web Applications",
        description:
          "Custom web platforms built around your unique business requirements and workflows.",
        icon: "</>",
      },
    ],
  },

  {
    title: "Digital Growth",
    short: "GROW",
    description:
      "We help your business become more visible, attract the right audience and generate better opportunities.",
    items: [
      {
        title: "SEO",
        description:
          "Improve your search visibility and reach customers who are actively looking for your products and services.",
        icon: "⌕",
      },
      {
        title: "Local SEO",
        description:
          "Make your business easier to discover when customers search for services in your local area.",
        icon: "⌖",
      },
      {
        title: "Lead Generation",
        description:
          "Build digital systems that attract relevant prospects and turn attention into qualified enquiries.",
        icon: "↗",
      },
      {
        title: "Analytics",
        description:
          "Understand your visitors, campaigns and conversions so you can make better business decisions.",
        icon: "◒",
      },
    ],
  },

  {
    title: "Business Automation",
    short: "AUTOMATE",
    description:
      "We connect your tools and automate repetitive processes so your business can operate more efficiently.",
    items: [
      {
        title: "AI Solutions",
        description:
          "Practical AI solutions that help your team handle repetitive tasks, information and everyday operations.",
        icon: "✦",
      },
      {
        title: "CRM",
        description:
          "Organize customers, enquiries, follow-ups and sales processes in one structured system.",
        icon: "◎",
      },
      {
        title: "WhatsApp Automation",
        description:
          "Automate customer communication, follow-ups and business conversations through WhatsApp.",
        icon: "◌",
      },
      {
        title: "Workflows",
        description:
          "Connect the tools your business already uses and automate repetitive processes from start to finish.",
        icon: "⚡",
      },
    ],
  },
];

/* =========================================
   FLATTEN ALL SERVICES
========================================= */

const cards = services.flatMap(
  (service, serviceIndex) =>
    service.items.map((item, itemIndex) => ({
      ...item,
      serviceIndex,
      itemIndex,
    }))
);

export default function Services() {
  /* =========================================
     DESKTOP SECTION
  ========================================= */

  const desktopSectionRef =
    useRef<HTMLElement>(null);

  /* =========================================
     ACTIVE CARD
  ========================================= */

  const activeRef = useRef(0);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [direction, setDirection] =
    useState<"next" | "prev">("next");

  /* =========================================
     DESKTOP SCROLL LINKED CARD SYSTEM

     IMPORTANT:
     No wheel interception.
     No preventDefault.
     No window.scrollTo.

     Browser handles scrolling naturally.
  ========================================= */

  useEffect(() => {
    let ticking = false;

    const updateDesktopCard = () => {
      /* ---------------------------------------
         MOBILE
         Desktop system does nothing.
      --------------------------------------- */

      if (window.innerWidth < 1024) {
        ticking = false;
        return;
      }

      const section =
        desktopSectionRef.current;

      if (!section) {
        ticking = false;
        return;
      }

      const rect =
        section.getBoundingClientRect();

      /*
       * Total amount of scroll available
       * inside the Services section.
       */

      const totalScroll =
        section.offsetHeight -
        window.innerHeight;

      if (totalScroll <= 0) {
        ticking = false;
        return;
      }

      /*
       * How far the section has travelled.
       *
       * At start:
       * rect.top = 0
       *
       * At end:
       * rect.top = -totalScroll
       */

      const travelled =
        Math.min(
          totalScroll,
          Math.max(
            0,
            -rect.top
          )
        );

      /*
       * 0 → 1
       */

      const progress =
        travelled / totalScroll;

      /*
       * Convert scroll position
       * to card number.
       */

      const rawIndex =
        progress *
        (cards.length - 1);

      const nextIndex =
        Math.round(rawIndex);

      const currentIndex =
        activeRef.current;

      if (
        nextIndex !== currentIndex
      ) {
        setDirection(
          nextIndex > currentIndex
            ? "next"
            : "prev"
        );

        activeRef.current =
          nextIndex;

        setActiveIndex(
          nextIndex
        );
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateDesktopCard
        );

        ticking = true;
      }
    };

    const handleResize = () => {
      updateDesktopCard();
    };

    /*
     * Initial position.
     */

    updateDesktopCard();

    /*
     * Normal browser scroll.
     */

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================
     ACTIVE DATA
  ========================================= */

  const activeCard =
    cards[activeIndex];

  const activeService =
    services[
      activeCard.serviceIndex
    ];

  const progress =
    ((activeIndex + 1) /
      cards.length) *
    100;

  return (
    <>
      {/* =====================================================
          DESKTOP SERVICES
      ===================================================== */}

      <section
        ref={desktopSectionRef}
        id="services"
        className="
          relative
          hidden
          bg-[#05070b]
          text-white
          lg:block
        "
        style={{
          /*
           * More vertical space =
           * smoother card transitions.
           */
          height: "700vh",
        }}
      >
        {/* =========================================
            STICKY VIEWPORT
        ========================================= */}

        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
          "
        >
          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/[0.035]
              blur-[140px]
            "
          />

          {/* Main container */}

          <div
            className="
              relative
              mx-auto
              flex
              h-full
              w-full
              max-w-[1400px]
              items-center
              px-10
              pt-20
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-[420px_minmax(0,1fr)]
                items-center
                gap-16
                xl:grid-cols-[460px_minmax(0,1fr)]
              "
            >
              {/* =====================================
                  LEFT CONTENT
              ====================================== */}

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-cyan-400
                  "
                >
                  What We Do
                </p>

                <h2
                  className="
                    mt-6
                    text-6xl
                    font-black
                    leading-[0.92]
                    tracking-[-0.05em]
                    xl:text-7xl
                  "
                >
                  Build.
                  <br />
                  Grow.
                  <br />

                  <span className="text-gray-600">
                    Automate.
                  </span>
                </h2>

                <p
                  className="
                    mt-8
                    max-w-[390px]
                    text-base
                    leading-7
                    text-gray-500
                  "
                >
                  Three ways we help businesses
                  build a stronger digital presence
                  and operate smarter.
                </p>

                {/* Current service */}

                <div className="mt-10">
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-gray-600
                    "
                  >
                    {String(
                      activeIndex + 1
                    ).padStart(
                      2,
                      "0"
                    )}{" "}
                    /{" "}
                    {String(
                      cards.length
                    ).padStart(
                      2,
                      "0"
                    )}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                      text-cyan-400
                    "
                  >
                    {
                      activeService.title
                    }
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[390px]
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    {
                      activeService.description
                    }
                  </p>
                </div>

                {/* Progress */}

                <div
                  className="
                    mt-8
                    w-[390px]
                    max-w-full
                  "
                >
                  <div
                    className="
                      h-[2px]
                      overflow-hidden
                      rounded-full
                      bg-white/10
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-cyan-400
                        transition-[width]
                        duration-500
                        ease-out
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  <div
                    className="
                      mt-3
                      flex
                      justify-between
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-700
                    "
                  >
                    <span>
                      Start
                    </span>

                    <span>
                      12 Services
                    </span>

                    <span>
                      Finish
                    </span>
                  </div>
                </div>
              </div>

              {/* =====================================
                  DESKTOP CARD AREA
              ====================================== */}

              <div
                className="
                  relative
                  flex
                  h-[560px]
                  w-full
                  min-w-0
                  items-center
                  justify-center
                "
              >
                {/* Category */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    z-40
                  "
                >
                  <div
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.06]
                      px-4
                      py-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-cyan-400
                      backdrop-blur-xl
                    "
                  >
                    {
                      activeService.short
                    }
                  </div>
                </div>

                {/* Back card */}

                <div
                  className="
                    absolute
                    inset-x-6
                    top-1/2
                    h-[360px]
                    -translate-y-[calc(50%+40px)]
                    rounded-[2rem]
                    border
                    border-white/[0.04]
                    bg-white/[0.012]
                  "
                />

                {/* Back card 2 */}

                <div
                  className="
                    absolute
                    inset-x-3
                    top-1/2
                    h-[380px]
                    -translate-y-[calc(50%+20px)]
                    rounded-[2rem]
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                  "
                />

                {/* Active card */}

                <article
                  key={activeIndex}
                  className={`
                    services-card
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    w-[calc(100%-32px)]
                    max-w-[760px]
                    -translate-x-1/2
                    -translate-y-1/2
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-[#0a0f17]/95
                    shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                    backdrop-blur-2xl
                    ${
                      direction ===
                      "next"
                        ? "services-card-next"
                        : "services-card-prev"
                    }
                  `}
                >
                  {/* Card header */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-8
                      pt-8
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-gray-600
                      "
                    >
                      {String(
                        activeIndex + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-lg
                        text-gray-500
                      "
                    >
                      ↗
                    </div>
                  </div>

                  {/* Card content */}

                  <div
                    className="
                      grid
                      grid-cols-[75px_minmax(0,1fr)]
                      gap-7
                      px-8
                      pb-9
                      pt-7
                    "
                  >
                    {/* Icon */}

                    <div>
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-cyan-400/20
                          bg-cyan-400/[0.05]
                          text-2xl
                          text-cyan-400
                        "
                      >
                        {
                          activeCard.icon
                        }
                      </div>
                    </div>

                    {/* Text */}

                    <div className="min-w-0">
                      <h3
                        className="
                          break-words
                          text-5xl
                          font-black
                          tracking-tight
                        "
                      >
                        {
                          activeCard.title
                        }
                      </h3>

                      <p
                        className="
                          mt-5
                          max-w-2xl
                          text-base
                          leading-8
                          text-gray-500
                        "
                      >
                        {
                          activeCard.description
                        }
                      </p>

                      <div
                        className="
                          mt-8
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            text-sm
                            font-semibold
                            text-cyan-400
                          "
                        >
                          Service Details
                        </span>

                        <span
                          className="
                            text-sm
                            text-gray-700
                          "
                        >
                          /
                        </span>

                        <span
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          {
                            activeService.title
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom line */}

                  <div
                    className="
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400/30
                      to-transparent
                    "
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE SERVICES
          NORMAL PAGE SCROLL
      ===================================================== */}

      <section
        id="services-mobile"
        className="
          block
          bg-[#05070b]
          text-white
          lg:hidden
        "
      >
        {/* Mobile heading */}

        <div
          className="
            px-5
            pb-10
            pt-24
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-400
            "
          >
            What We Do
          </p>

          <h2
            className="
              mt-5
              text-5xl
              font-black
              leading-[0.92]
              tracking-[-0.05em]
            "
          >
            Build.
            <br />
            Grow.
            <br />

            <span className="text-gray-600">
              Automate.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-sm
              text-sm
              leading-6
              text-gray-500
            "
          >
            Three ways we help businesses build
            a stronger digital presence and operate
            smarter.
          </p>

          <div
            className="
              mt-8
              h-[2px]
              w-24
              bg-cyan-400
            "
          />
        </div>

        {/* =========================================
            MOBILE CARDS
        ========================================= */}

        <div
          className="
            space-y-5
            px-4
            pb-20
          "
        >
          {cards.map(
            (card, index) => {
              const service =
                services[
                  card.serviceIndex
                ];

              return (
                <article
                  key={index}
                  className="
                    w-full
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-[#0a0f17]
                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* Header */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      pt-5
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.06]
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-cyan-400
                      "
                    >
                      {
                        service.short
                      }
                    </span>

                    <span
                      className="
                        text-xs
                        text-gray-600
                      "
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}{" "}
                      /{" "}
                      {String(
                        cards.length
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  {/* Content */}

                  <div
                    className="
                      px-5
                      pb-7
                      pt-5
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.05]
                        text-xl
                        text-cyan-400
                      "
                    >
                      {
                        card.icon
                      }
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-5
                        break-words
                        text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                      "
                    >
                      {
                        card.title
                      }
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-gray-500
                      "
                    >
                      {
                        card.description
                      }
                    </p>

                    {/* Links */}

                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        items-center
                        gap-4
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-semibold
                          text-cyan-400
                        "
                      >
                        Service Details
                      </span>

                      <span
                        className="
                          text-xs
                          text-gray-700
                        "
                      >
                        /
                      </span>

                      <span
                        className="
                          text-xs
                          text-gray-500
                        "
                      >
                        {
                          service.title
                        }
                      </span>
                    </div>
                  </div>

                  {/* Bottom line */}

                  <div
                    className="
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400/30
                      to-transparent
                    "
                  />
                </article>
              );
            }
          )}
        </div>
      </section>
    </>
  );
}