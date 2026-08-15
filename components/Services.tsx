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

const cards = services.flatMap((service, serviceIndex) =>
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

  const desktopSectionRef = useRef<HTMLElement>(null);

  /* =========================================
     ACTIVE CARD
  ========================================= */

  const activeRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const [direction, setDirection] =
    useState<"next" | "prev">("next");

  /* =========================================
     DESKTOP WHEEL GESTURE CONTROL
  ========================================= */

  const wheelLockedRef = useRef(false);

  const wheelEndTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const wheelUnlockTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =========================================
     MOBILE
     NO JS TOUCH HANDLING
  ========================================= */

  /* =========================================
     CHECK DESKTOP SERVICES
  ========================================= */

  const isDesktopServicesActive = () => {
    if (window.innerWidth < 769) {
      return false;
    }

    const section =
      desktopSectionRef.current;

    if (!section) {
      return false;
    }

    const rect =
      section.getBoundingClientRect();

    return (
      rect.top <= 5 &&
      rect.bottom >=
        window.innerHeight - 5
    );
  };

  /* =========================================
     GET DESKTOP CARD POSITION
  ========================================= */

  const getDesktopCardPosition = (
    index: number
  ) => {
    const section =
      desktopSectionRef.current;

    if (!section) {
      return 0;
    }

    const rect =
      section.getBoundingClientRect();

    const sectionTop =
      window.scrollY + rect.top;

    const totalScroll =
      section.offsetHeight -
      window.innerHeight;

    const maxIndex =
      cards.length - 1;

    if (maxIndex <= 0) {
      return sectionTop;
    }

    const step =
      totalScroll / maxIndex;

    return sectionTop + step * index;
  };

  /* =========================================
     CHANGE DESKTOP CARD
  ========================================= */

  const changeDesktopCard = (
    nextIndex: number
  ) => {
    const current =
      activeRef.current;

    const safeIndex = Math.max(
      0,
      Math.min(
        cards.length - 1,
        nextIndex
      )
    );

    if (safeIndex === current) {
      return;
    }

    setDirection(
      safeIndex > current
        ? "next"
        : "prev"
    );

    activeRef.current =
      safeIndex;

    setActiveIndex(safeIndex);

    const target =
      getDesktopCardPosition(
        safeIndex
      );

    window.scrollTo({
      top: target,
      behavior: "auto",
    });
  };

  /* =========================================
     DESKTOP WHEEL GESTURE
     
     IMPORTANT:
     One physical gesture = one card.
  ========================================= */

  useEffect(() => {
    const handleWheel = (
      event: WheelEvent
    ) => {
      /* -------------------------------------
         MOBILE
         Do absolutely nothing.
      ------------------------------------- */

      if (window.innerWidth < 769) {
        return;
      }

      /* -------------------------------------
         Services not active
      ------------------------------------- */

      if (
        !isDesktopServicesActive()
      ) {
        return;
      }

      const delta =
        event.deltaY;

      /*
       * Ignore tiny trackpad noise.
       */

      if (
        Math.abs(delta) < 12
      ) {
        return;
      }

      /* -------------------------------------
         EXISTING GESTURE
         
         If this physical wheel movement
         already changed a card, consume all
         remaining wheel events.
      ------------------------------------- */

      if (wheelLockedRef.current) {
        event.preventDefault();

        /*
         * Keep extending the end-of-gesture
         * timer while wheel events continue.
         */

        if (
          wheelEndTimerRef.current
        ) {
          clearTimeout(
            wheelEndTimerRef.current
          );
        }

        wheelEndTimerRef.current =
          setTimeout(() => {
            /*
             * The physical gesture has
             * stopped sending events.
             *
             * We DON'T immediately unlock.
             * Keep a small cooldown so the
             * tail of the gesture cannot
             * trigger another card.
             */

            wheelUnlockTimerRef.current =
              setTimeout(() => {
                wheelLockedRef.current =
                  false;
              }, 350);
          }, 250);

        return;
      }

      const current =
        activeRef.current;

      const goingDown =
        delta > 0;

      const goingUp =
        delta < 0;

      /* -------------------------------------
         FIRST CARD
         
         Allow user to leave Services upward.
      ------------------------------------- */

      if (
        current === 0 &&
        goingUp
      ) {
        return;
      }

      /* -------------------------------------
         LAST CARD
         
         Allow user to continue down page.
      ------------------------------------- */

      if (
        current ===
          cards.length - 1 &&
        goingDown
      ) {
        return;
      }

      /*
       * From this point Services owns
       * the wheel gesture.
       */

      event.preventDefault();

      /*
       * LOCK IMMEDIATELY.
       *
       * This happens BEFORE changing
       * the card.
       */

      wheelLockedRef.current =
        true;

      /*
       * Clear any previous timers.
       */

      if (
        wheelEndTimerRef.current
      ) {
        clearTimeout(
          wheelEndTimerRef.current
        );
      }

      if (
        wheelUnlockTimerRef.current
      ) {
        clearTimeout(
          wheelUnlockTimerRef.current
        );
      }

      /* -------------------------------------
         ONE GESTURE = ONE CARD
      ------------------------------------- */

      const nextIndex =
        goingDown
          ? current + 1
          : current - 1;

      changeDesktopCard(
        nextIndex
      );

      /*
       * Start gesture-end detection.
       */

      wheelEndTimerRef.current =
        setTimeout(() => {
          wheelUnlockTimerRef.current =
            setTimeout(() => {
              wheelLockedRef.current =
                false;
            }, 350);
        }, 250);
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      if (
        wheelEndTimerRef.current
      ) {
        clearTimeout(
          wheelEndTimerRef.current
        );
      }

      if (
        wheelUnlockTimerRef.current
      ) {
        clearTimeout(
          wheelUnlockTimerRef.current
        );
      }
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
      {/* =================================================
          DESKTOP
      ================================================= */}

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
          height: "660vh",
        }}
      >
        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
          "
        >
          {/* Glow */}

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
                  DESKTOP CARD
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
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-8
                      pt-8
                    "
                  >
                    <span className="text-sm text-gray-600">
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

                        <span className="text-sm text-gray-700">
                          /
                        </span>

                        <span className="text-sm text-gray-500">
                          {
                            activeService.title
                          }
                        </span>
                      </div>
                    </div>
                  </div>

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

      {/* =================================================
          MOBILE
          NATIVE SCROLL SNAP
          NO JS TOUCH CONTROL
      ================================================= */}

      <section
        id="services-mobile"
        className="
          block
          bg-[#05070b]
          text-white
          lg:hidden
        "
      >
        <div
          className="
            scrollbar-hide
            h-screen
            snap-y
            snap-mandatory
            overflow-y-auto
            overscroll-y-contain
          "
        >
          {/* Mobile intro */}

          <div
            className="
              flex
              h-screen
              snap-start
              snap-always
              items-center
              px-5
            "
          >
            <div className="w-full">
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
                Three ways we help businesses
                build a stronger digital presence
                and operate smarter.
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
          </div>

          {/* Mobile cards */}

          {cards.map(
            (card, index) => {
              const service =
                services[
                  card.serviceIndex
                ];

              return (
                <div
                  key={index}
                  className="
                    flex
                    h-screen
                    snap-start
                    snap-always
                    items-center
                    justify-center
                    px-4
                  "
                >
                  <article
                    className="
                      w-full
                      max-w-[520px]
                      overflow-hidden
                      rounded-[1.75rem]
                      border
                      border-white/10
                      bg-[#0a0f17]
                      shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                    "
                  >
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

                    <div
                      className="
                        px-5
                        pb-7
                        pt-6
                      "
                    >
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

                      <h3
                        className="
                          mt-6
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

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-6
                          text-gray-500
                        "
                      >
                        {
                          card.description
                        }
                      </p>

                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          gap-2
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

                        <span className="text-xs text-gray-700">
                          /
                        </span>

                        <span className="text-xs text-gray-500">
                          {
                            service.title
                          }
                        </span>
                      </div>
                    </div>

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
              );
            }
          )}
        </div>
      </section>
    </>
  );
}