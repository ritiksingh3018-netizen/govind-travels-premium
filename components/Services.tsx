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
  const sectionRef = useRef<HTMLElement>(null);
  const previousIndex = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    let ticking = false;

    const updateCard = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) {
          ticking = false;
          return;
        }

        const rect = section.getBoundingClientRect();

        /*
         * Services section ki total scrollable height.
         */
        const totalScroll =
          section.offsetHeight - window.innerHeight;

        if (totalScroll <= 0) {
          ticking = false;
          return;
        }

        /*
         * Section ke andar current scroll position.
         */
        const currentScroll = Math.max(
          0,
          Math.min(totalScroll, -rect.top)
        );

        /*
         * 12 equal scroll zones.
         *
         * Har zone mein ek card.
         */
        const zoneSize = totalScroll / cards.length;

        let newIndex = Math.floor(
          currentScroll / zoneSize
        );

        /*
         * Last card ko preserve karo.
         */
        newIndex = Math.max(
          0,
          Math.min(cards.length - 1, newIndex)
        );

        /*
         * Direction.
         */
        if (newIndex !== previousIndex.current) {
          setDirection(
            newIndex > previousIndex.current
              ? "next"
              : "prev"
          );

          previousIndex.current = newIndex;
          setActiveIndex(newIndex);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", updateCard, {
      passive: true,
    });

    window.addEventListener("resize", updateCard);

    updateCard();

    return () => {
      window.removeEventListener(
        "scroll",
        updateCard
      );

      window.removeEventListener(
        "resize",
        updateCard
      );
    };
  }, []);

  const activeCard = cards[activeIndex];
  const activeService = services[activeCard.serviceIndex];

  const progress =
    ((activeIndex + 1) / cards.length) * 100;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#05070b] text-white"
      style={{
        height: `${cards.length * 80}vh`,
      }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.035]
            blur-[150px]
          "
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* =================================
                LEFT SIDE
            ================================= */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                What We Do
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Build.
                <br />
                Grow.
                <br />
                <span className="text-gray-600">
                  Automate.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-gray-500">
                Three ways we help businesses build a stronger
                digital presence and operate smarter.
              </p>

              {/* Active category */}
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(cards.length).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-bold text-cyan-400">
                  {activeService.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  {activeService.description}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-7 max-w-xs">
                <div className="h-[2px] overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-cyan-400 transition-[width] duration-500 ease-out"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-gray-700">
                  <span>Start</span>
                  <span>12 Services</span>
                  <span>Finish</span>
                </div>
              </div>
            </div>

            {/* =================================
                RIGHT SIDE
            ================================= */}
            <div className="relative h-[560px] w-full">

              {/* Category */}
              <div className="absolute left-0 top-4 z-40">
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-xl">
                  {activeService.short}
                </div>
              </div>

              {/* =================================
                  BACK CARD 1
              ================================= */}
              <div
                className="
                  absolute
                  left-1/2
                  top-20
                  h-[390px]
                  w-[88%]
                  -translate-x-1/2
                  -translate-y-[52px]
                  scale-[0.94]
                  rounded-[2rem]
                  border
                  border-white/[0.045]
                  bg-white/[0.012]
                "
              />

              {/* =================================
                  BACK CARD 2
              ================================= */}
              <div
                className="
                  absolute
                  left-1/2
                  top-20
                  h-[390px]
                  w-[94%]
                  -translate-x-1/2
                  -translate-y-[26px]
                  scale-[0.97]
                  rounded-[2rem]
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                "
              />

              {/* =================================
                  ACTIVE CARD
              ================================= */}
              <article
                key={activeIndex}
                className={`
                  absolute
                  left-0
                  right-0
                  top-20
                  z-30
                  mx-auto
                  max-w-3xl
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#0a0f17]/95
                  shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                  backdrop-blur-2xl
                  ${
                    direction === "next"
                      ? "services-card-next"
                      : "services-card-prev"
                  }
                `}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-7 pt-7 sm:px-10 sm:pt-9">
                  <span className="text-sm font-medium text-gray-600">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-gray-500">
                    ↗
                  </div>
                </div>

                {/* Card Content */}
                <div className="grid gap-8 px-7 pb-8 pt-8 sm:px-10 sm:pb-10 lg:grid-cols-[90px_1fr] lg:gap-8">

                  {/* Icon */}
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] text-2xl text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                      {activeCard.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                      {activeCard.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500">
                      {activeCard.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-cyan-400">
                        Service Details
                      </span>

                      <span className="text-sm text-gray-700">
                        /
                      </span>

                      <span className="text-sm text-gray-500">
                        {activeService.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              </article>

              {/* Bottom stack */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-10
                  w-[88%]
                  -translate-x-1/2
                  rounded-b-[2rem]
                  border-x
                  border-b
                  border-white/[0.05]
                  bg-white/[0.015]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}