"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Website Development",
    short: "BUILD",
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
          "Make your business easier to discover when customers search for services in their local area.",
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

/* =========================================================
   FLATTEN
========================================================= */

const cards = services.flatMap((service, serviceIndex) =>
  service.items.map((item) => ({
    ...item,
    serviceIndex,
  }))
);

const TOTAL_SERVICES = cards.length;

const CHANGE_INTERVAL = 4200;
const CARD_ANIMATION_TIME = 1100;

/* =========================================================
   ROBOT
========================================================= */

function YorraRobot({
  activeIndex,
}: {
  activeIndex: number;
}) {
  const robotRef = useRef<HTMLDivElement>(null);
  const robotSvgRef = useRef<HTMLDivElement>(null);

  const headRef = useRef<SVGGElement>(null);
  const eyesRef = useRef<SVGGElement>(null);

  const torsoRef = useRef<SVGGElement>(null);
  const leftArmRef = useRef<SVGGElement>(null);
  const rightArmRef = useRef<SVGGElement>(null);
  const leftLegRef = useRef<SVGGElement>(null);
  const rightLegRef = useRef<SVGGElement>(null);

  const leftEyeRef = useRef<SVGRectElement>(null);
  const rightEyeRef = useRef<SVGRectElement>(null);

  const target = useRef({
    eyeX: 0,
    eyeY: 0,
    headTilt: 0,
  });

  const current = useRef({
    eyeX: 0,
    eyeY: 0,
    headTilt: 0,
  });

  /* =======================================================
     ROBOT MOTION ENGINE

     IMPORTANT:
     Movement is driven by JavaScript instead of relying only
     on SVG CSS transforms. This makes the animation reliable
     on desktop AND mobile.
  ======================================================= */

  useEffect(() => {
    let animationFrame = 0;
    let mobileEyeInterval: number | null = null;
    let blinkInterval: number | null = null;
    let blinkTimeout: number | null = null;
    let secondBlinkTimeout: number | null = null;

    const isMobile =
      window.matchMedia(
        "(max-width: 767px)"
      ).matches;

    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile || !robotRef.current) return;

      const rect =
        robotRef.current.getBoundingClientRect();

      const headX =
        rect.left + rect.width / 2;

      const headY =
        rect.top + rect.height * 0.25;

      const dx =
        event.clientX - headX;

      const dy =
        event.clientY - headY;

      const maxDistance = 420;

      const normalizedX = Math.max(
        -1,
        Math.min(
          1,
          dx / maxDistance
        )
      );

      const normalizedY = Math.max(
        -1,
        Math.min(
          1,
          dy / maxDistance
        )
      );

      target.current.eyeX =
        normalizedX * 7;

      target.current.eyeY =
        normalizedY * 4;

      target.current.headTilt =
        normalizedX * 1.5;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    /* =====================================================
       MOBILE EYES
    ===================================================== */

    if (isMobile) {
      const directions = [
        { x: -6, y: 0, tilt: -0.8 },
        { x: -4, y: -2, tilt: -0.4 },
        { x: 0, y: 0, tilt: 0 },
        { x: 5, y: -1, tilt: 0.6 },
        { x: 7, y: 1, tilt: 0.9 },
        { x: 3, y: 2, tilt: 0.3 },
        { x: 0, y: 0, tilt: 0 },
      ];

      let directionIndex = 0;

      const moveMobileEyes = () => {
        const direction =
          directions[
            directionIndex %
              directions.length
          ];

        target.current.eyeX =
          direction.x;

        target.current.eyeY =
          direction.y;

        target.current.headTilt =
          direction.tilt;

        directionIndex++;
      };

      moveMobileEyes();

      mobileEyeInterval =
        window.setInterval(
          moveMobileEyes,
          1500
        );
    }

    /* =====================================================
       ROBOT BLINK

       Real DOM/SVG attribute change.
       No fragile CSS keyframe dependency.
    ===================================================== */

    const setEyesOpen = () => {
      if (leftEyeRef.current) {
        leftEyeRef.current.setAttribute(
          "y",
          "80"
        );

        leftEyeRef.current.setAttribute(
          "height",
          "21"
        );
      }

      if (rightEyeRef.current) {
        rightEyeRef.current.setAttribute(
          "y",
          "80"
        );

        rightEyeRef.current.setAttribute(
          "height",
          "21"
        );
      }
    };

    const setEyesClosed = () => {
      if (leftEyeRef.current) {
        leftEyeRef.current.setAttribute(
          "y",
          "89.5"
        );

        leftEyeRef.current.setAttribute(
          "height",
          "2"
        );
      }

      if (rightEyeRef.current) {
        rightEyeRef.current.setAttribute(
          "y",
          "89.5"
        );

        rightEyeRef.current.setAttribute(
          "height",
          "2"
        );
      }
    };

    const blink = () => {
      setEyesClosed();

      blinkTimeout =
        window.setTimeout(() => {
          setEyesOpen();

          /*
           * Small second blink occasionally.
           */

          secondBlinkTimeout =
            window.setTimeout(() => {
              setEyesClosed();

              window.setTimeout(() => {
                setEyesOpen();
              }, 90);
            }, 150);
        }, 90);
    };

    /*
     * First blink after 2.8 seconds,
     * then every 3.8 seconds.
     */

    blinkInterval =
      window.setInterval(
        blink,
        3800
      );

    window.setTimeout(
      blink,
      2800
    );

    /* =====================================================
       MOTION LOOP
    ===================================================== */

    const startTime =
      performance.now();

    const animate = (
      now: number
    ) => {
      const elapsed =
        now - startTime;

      /*
       * Smooth cursor eye movement
       */

      const t = target.current;
      const c = current.current;

      c.eyeX +=
        (t.eyeX - c.eyeX) *
        0.12;

      c.eyeY +=
        (t.eyeY - c.eyeY) *
        0.12;

      c.headTilt +=
        (t.headTilt - c.headTilt) *
        0.08;

      /*
       * ================================================
       * EYES
       * ================================================
       */

      if (eyesRef.current) {
        eyesRef.current.setAttribute(
          "transform",
          `translate(${c.eyeX} ${c.eyeY})`
        );
      }

      /*
       * ================================================
       * HEAD
       * ================================================
       */

      if (headRef.current) {
        headRef.current.setAttribute(
          "transform",
          `rotate(${c.headTilt} 130 95)`
        );
      }

      /*
       * ================================================
       * WHOLE ROBOT
       *
       * Clearly visible idle movement.
       * ================================================
       */

      const bodyFloat =
        Math.sin(
          elapsed / 750
        ) * 4;

      const bodySide =
        Math.sin(
          elapsed / 1200
        ) * 3;

      const bodyRotate =
        Math.sin(
          elapsed / 1200
        ) * 1.1;

      if (robotSvgRef.current) {
        robotSvgRef.current.style.transform =
          `
            translate3d(
              ${bodySide}px,
              ${bodyFloat}px,
              0
            )
            rotate(
              ${bodyRotate}deg
            )
          `;
      }

      /*
       * ================================================
       * TORSO
       * ================================================
       */

      const torsoY =
        Math.sin(
          elapsed / 850
        ) * 3;

      const torsoX =
        Math.sin(
          elapsed / 1250
        ) * 2;

      const torsoRotate =
        Math.sin(
          elapsed / 1250
        ) * 1.8;

      if (torsoRef.current) {
        torsoRef.current.setAttribute(
          "transform",
          `
            translate(
              ${torsoX}
              ${torsoY}
            )
            rotate(
              ${torsoRotate}
              130
              205
            )
          `
        );
      }

      /*
       * ================================================
       * ARMS
       * ================================================
       */

      const leftArm =
        Math.sin(
          elapsed / 850
        ) * 8;

      const rightArm =
        Math.sin(
          elapsed / 850 +
            Math.PI
        ) * 8;

      if (leftArmRef.current) {
        leftArmRef.current.setAttribute(
          "transform",
          `rotate(${leftArm} 57 170)`
        );
      }

      if (rightArmRef.current) {
        rightArmRef.current.setAttribute(
          "transform",
          `rotate(${rightArm} 203 170)`
        );
      }

      /*
       * ================================================
       * LEGS
       * ================================================
       */

      const leftLeg =
        Math.sin(
          elapsed / 1300
        ) * 1.2;

      const rightLeg =
        Math.sin(
          elapsed / 1300 +
            Math.PI
        ) * 1.2;

      if (leftLegRef.current) {
        leftLegRef.current.setAttribute(
          "transform",
          `
            translate(
              ${leftLeg}
              0
            )
            rotate(
              ${leftLeg}
              103
              250
            )
          `
        );
      }

      if (rightLegRef.current) {
        rightLegRef.current.setAttribute(
          "transform",
          `
            translate(
              ${rightLeg}
              0
            )
            rotate(
              ${rightLeg}
              157
              250
            )
          `
        );
      }

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(
        animationFrame
      );

      if (
        mobileEyeInterval !== null
      ) {
        window.clearInterval(
          mobileEyeInterval
        );
      }

      if (
        blinkInterval !== null
      ) {
        window.clearInterval(
          blinkInterval
        );
      }

      if (
        blinkTimeout !== null
      ) {
        window.clearTimeout(
          blinkTimeout
        );
      }

      if (
        secondBlinkTimeout !== null
      ) {
        window.clearTimeout(
          secondBlinkTimeout
        );
      }

      setEyesOpen();
    };
  }, []);

  return (
    <div
      key={activeIndex}
      ref={robotRef}
      className="yorra-robot-stage"
      aria-hidden="true"
    >
      {/* =================================================
          PARTICLES
      ================================================= */}

      <span className="yorra-particle particle-a" />
      <span className="yorra-particle particle-b" />
      <span className="yorra-particle particle-c" />

      {/* =================================================
          ROBOT
      ================================================= */}

      <div ref={robotSvgRef} className="yorra-robot-svg">

        <svg
          viewBox="0 0 260 360"
          className="h-full w-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* =================================================
              HEAD
          ================================================= */}

          <g
            ref={headRef}
            className="robot-head"
          >

            {/* ANTENNA */}

            <line
              x1="130"
              y1="45"
              x2="130"
              y2="15"
              stroke="#67E8F9"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle
              cx="130"
              cy="10"
              r="7"
              fill="#67E8F9"
              className="robot-glow-pulse"
            />

            {/* HEAD */}

            <rect
              x="65"
              y="45"
              width="130"
              height="95"
              rx="30"
              fill="#101722"
              stroke="#67E8F9"
              strokeOpacity="0.35"
              strokeWidth="2"
            />

            {/* FACE */}

            <rect
              x="80"
              y="60"
              width="100"
              height="65"
              rx="20"
              fill="#050910"
            />

            {/* =================================================
                EYES
            ================================================= */}

            <g
              ref={eyesRef}
              className="robot-eyes"
            >

              <g className="robot-eye-blink">
                <rect
                  ref={leftEyeRef}
                  x="101"
                  y="80"
                  width="15"
                  height="21"
                  rx="6"
                  fill="#67E8F9"
                />
              </g>

              <g
                className="robot-eye-blink"
                style={{
                  animationDelay:
                    "0.08s",
                }}
              >
                <rect
                  ref={rightEyeRef}
                  x="144"
                  y="80"
                  width="15"
                  height="21"
                  rx="6"
                  fill="#67E8F9"
                />
              </g>

            </g>

            {/* MOUTH */}

            <circle
              cx="118"
              cy="111"
              r="3"
              fill="#67E8F9"
            />

            <circle
              cx="130"
              cy="111"
              r="3"
              fill="#67E8F9"
            />

            <circle
              cx="142"
              cy="111"
              r="3"
              fill="#67E8F9"
            />

            {/* EARS */}

            <rect
              x="57"
              y="78"
              width="10"
              height="28"
              rx="5"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.4"
            />

            <rect
              x="193"
              y="78"
              width="10"
              height="28"
              rx="5"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.4"
            />

          </g>

          {/* =================================================
              NECK
          ================================================= */}

          <rect
            x="115"
            y="140"
            width="30"
            height="18"
            rx="6"
            fill="#111923"
            stroke="#67E8F9"
            strokeOpacity="0.25"
          />

          {/* =================================================
              TORSO
          ================================================= */}

          <g ref={torsoRef} className="robot-torso">

            <rect
              x="63"
              y="153"
              width="134"
              height="105"
              rx="28"
              fill="#0D151F"
              stroke="#67E8F9"
              strokeOpacity="0.3"
              strokeWidth="2"
            />

            {/* CHEST SCREEN */}

            <rect
              x="94"
              y="175"
              width="72"
              height="38"
              rx="11"
              fill="#050910"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

            <circle
              cx="113"
              cy="194"
              r="4"
              fill="#67E8F9"
              className="robot-screen-dot"
            />

            <circle
              cx="130"
              cy="194"
              r="4"
              fill="#67E8F9"
              className="robot-screen-dot"
              style={{
                animationDelay:
                  "0.15s",
              }}
            />

            <circle
              cx="147"
              cy="194"
              r="4"
              fill="#67E8F9"
              className="robot-screen-dot"
              style={{
                animationDelay:
                  "0.3s",
              }}
            />

            <line
              x1="92"
              y1="232"
              x2="168"
              y2="232"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

          </g>

          {/* =================================================
              LEFT ARM
          ================================================= */}

          <g ref={leftArmRef} className="robot-left-arm">

            <circle
              cx="57"
              cy="170"
              r="14"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

            <rect
              x="43"
              y="181"
              width="25"
              height="55"
              rx="12"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <circle
              cx="55"
              cy="237"
              r="11"
              fill="#67E8F9"
            />

            <rect
              x="43"
              y="243"
              width="24"
              height="48"
              rx="12"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <rect
              x="37"
              y="282"
              width="36"
              height="20"
              rx="8"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

          </g>

          {/* =================================================
              RIGHT ARM
          ================================================= */}

          <g ref={rightArmRef} className="robot-right-arm">

            <circle
              cx="203"
              cy="170"
              r="14"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

            <rect
              x="192"
              y="181"
              width="25"
              height="55"
              rx="12"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <circle
              cx="205"
              cy="237"
              r="11"
              fill="#67E8F9"
            />

            <rect
              x="192"
              y="243"
              width="24"
              height="48"
              rx="12"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <rect
              x="187"
              y="282"
              width="36"
              height="20"
              rx="8"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.35"
            />

          </g>

          {/* =================================================
              LEFT LEG
          ================================================= */}

          <g ref={leftLegRef} className="robot-left-leg">

            <rect
              x="82"
              y="250"
              width="42"
              height="70"
              rx="15"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <rect
              x="72"
              y="310"
              width="58"
              height="20"
              rx="9"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.3"
            />

          </g>

          {/* =================================================
              RIGHT LEG
          ================================================= */}

          <g ref={rightLegRef} className="robot-right-leg">

            <rect
              x="136"
              y="250"
              width="42"
              height="70"
              rx="15"
              fill="#101923"
              stroke="#67E8F9"
              strokeOpacity="0.25"
            />

            <rect
              x="130"
              y="310"
              width="58"
              height="20"
              rx="9"
              fill="#111C28"
              stroke="#67E8F9"
              strokeOpacity="0.3"
            />

          </g>

        </svg>
      </div>

      {/* =================================================
          GROUND GLOW
      ================================================= */}

      <div className="yorra-robot-ground" />
    </div>
  );
}

/* =========================================================
   SERVICES COMPONENT
========================================================= */

export default function Services() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [previousIndex, setPreviousIndex] =
    useState<number | null>(null);

  const activeRef = useRef(0);

  /* =======================================================
     AUTO CHANGE
  ======================================================= */

  useEffect(() => {
    const interval =
      window.setInterval(() => {
        const current =
          activeRef.current;

        const next =
          (current + 1) %
          TOTAL_SERVICES;

        setPreviousIndex(current);

        activeRef.current =
          next;

        setActiveIndex(next);

        window.setTimeout(() => {
          setPreviousIndex(null);
        }, CARD_ANIMATION_TIME + 100);
      }, CHANGE_INTERVAL);

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, []);

  /* =======================================================
     DATA
  ======================================================= */

  const activeCard =
    cards[activeIndex];

  const activeService =
    services[
      activeCard.serviceIndex
    ];

  const previousCard =
    previousIndex !== null
      ? cards[previousIndex]
      : null;

  const previousService =
    previousCard !== null
      ? services[
          previousCard.serviceIndex
        ]
      : null;

  const progress =
    ((activeIndex + 1) /
      TOTAL_SERVICES) *
    100;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#05070b] text-white"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize:
              "60px 60px",
          }}
        />

      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:min-h-[820px] lg:px-10 lg:pb-28 lg:pt-36">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[430px_minmax(0,1fr)] xl:gap-20">

          {/* =================================================
              ROBOT
          ================================================= */}

          <div className="relative z-40 flex min-h-[470px] items-center justify-center lg:min-h-[540px]">

            <YorraRobot
              activeIndex={
                activeIndex
              }
            />

            <div
              key={`robot-info-${activeIndex}`}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center animate-service-info"
            >

              <p className="text-[9px] uppercase tracking-[0.28em] text-gray-700">
                Digital System
              </p>

              <p className="mt-2 text-sm font-semibold text-cyan-400">
                {
                  activeService.short
                }
              </p>

              <p className="mt-1 text-[10px] text-gray-600">
                {String(
                  activeIndex + 1
                ).padStart(
                  2,
                  "0"
                )}{" "}
                /{" "}
                {String(
                  TOTAL_SERVICES
                ).padStart(
                  2,
                  "0"
                )}
              </p>

            </div>

          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div className="relative z-20 min-w-0 translate-y-28 sm:translate-y-36 lg:translate-y-52">

            <div className="relative mx-auto h-[470px] w-full max-w-[720px] sm:h-[500px] lg:h-[540px]">

              {/* PREVIOUS */}

              {previousCard && (
                <article className="absolute inset-x-0 top-1/2 z-10 mx-auto w-full -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/[0.05] bg-[#080c13] opacity-25">

                  <div className="px-6 pb-10 pt-8 sm:px-8">

                    <div className="flex items-center justify-between">

                      <span className="text-sm text-gray-700">
                        {String(
                          previousIndex! +
                            1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-700">
                        ↗
                      </div>

                    </div>

                    <div className="mt-8 grid grid-cols-[58px_minmax(0,1fr)] gap-5 sm:grid-cols-[72px_minmax(0,1fr)]">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-gray-700 sm:h-16 sm:w-16">
                        {
                          previousCard.icon
                        }
                      </div>

                      <div className="min-w-0">

                        <h3 className="break-words text-3xl font-black tracking-tight text-gray-700 sm:text-5xl">
                          {
                            previousCard.title
                          }
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-700 sm:text-base sm:leading-8">
                          {
                            previousCard.description
                          }
                        </p>

                        <p className="mt-7 text-xs text-gray-700 sm:text-sm">
                          {
                            previousService?.title
                          }
                        </p>

                      </div>

                    </div>

                  </div>

                </article>
              )}

              {/* ACTIVE */}

              <article
                key={`active-${activeIndex}`}
                className="services-card-enter absolute inset-x-0 top-1/2 z-30 mx-auto w-full -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f17] shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              >

                <div className="flex items-center justify-between px-6 pt-6 sm:px-8 sm:pt-8">

                  <div className="flex items-center gap-3">

                    <span className="text-sm text-gray-600">
                      {String(
                        activeIndex +
                          1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                      {
                        activeService.short
                      }
                    </span>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 sm:h-12 sm:w-12">
                    ↗
                  </div>

                </div>

                <div className="grid grid-cols-[58px_minmax(0,1fr)] gap-5 px-6 pb-9 pt-6 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-6 sm:px-8 sm:pb-10 sm:pt-7">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] text-xl text-cyan-400 sm:h-16 sm:w-16 sm:text-2xl">
                    {
                      activeCard.icon
                    }
                  </div>

                  <div className="min-w-0">

                    <h3 className="break-words text-3xl font-black tracking-tight sm:text-5xl">
                      {
                        activeCard.title
                      }
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                      {
                        activeCard.description
                      }
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">

                      <span className="text-xs font-semibold text-cyan-400 sm:text-sm">
                        Service Details
                      </span>

                      <span className="text-gray-700">
                        /
                      </span>

                      <span className="text-xs text-gray-500 sm:text-sm">
                        {
                          activeService.title
                        }
                      </span>

                    </div>

                  </div>

                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              </article>

            </div>

          </div>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="mt-8 max-w-[430px] lg:-mt-1">

          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-gray-700">

            <span>
              Start
            </span>

            <span>
              {TOTAL_SERVICES} Services
            </span>

            <span>
              Finish
            </span>

          </div>

          <div className="mt-3 h-px overflow-hidden bg-white/10">

            <div
              className="h-full bg-cyan-400 transition-all duration-700"
              style={{
                width:
                  `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style jsx>{`

        /* =================================================
           CARD
        ================================================= */

        @keyframes serviceCardEnter {

          0% {
            transform:
              translate(
                105%,
                -50%
              );

            opacity:
              0.75;
          }

          100% {
            transform:
              translate(
                0,
                -50%
              );

            opacity:
              1;
          }

        }

        .services-card-enter {
          animation:
            serviceCardEnter
            1.1s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            )
            both;
        }

        /* =================================================
           ROBOT STAGE
        ================================================= */

        .yorra-robot-stage {
          position: relative;

          width: 330px;
          height: 420px;

          display: flex;

          align-items: center;
          justify-content: center;

          z-index: 50;
        }

        /* =================================================
           WHOLE ROBOT FLOAT
        ================================================= */

                .yorra-robot-svg {
          position: relative;
          z-index: 20;
          width: 260px;
          height: 360px;
          transform-origin: center bottom;
          will-change: transform;
        }

        /* =================================================
           HEAD
        ================================================= */

        .robot-head {
          transform-box:
            fill-box;

          transform-origin:
            130px 140px;

          will-change:
            transform;
        }

        /* =================================================
           EYES
        ================================================= */

        .robot-eyes {
          transform-box:
            fill-box;

          transform-origin:
            center;

          will-change:
            transform;
        }

        /* =================================================
           BLINK
        ================================================= */

                .robot-eye-blink {
          /* Blink is controlled by JavaScript. */
        }

        /* =================================================
           TORSO
        ================================================= */

                .robot-torso {
          transform-box: fill-box;
          transform-origin: center bottom;
          will-change: transform;
        }

        /* =================================================
           LEFT ARM
        ================================================= */

                .robot-left-arm {
          transform-box: fill-box;
          transform-origin: 57px 170px;
          will-change: transform;
        }

        /* =================================================
           RIGHT ARM
        ================================================= */

                .robot-right-arm {
          transform-box: fill-box;
          transform-origin: 203px 170px;
          will-change: transform;
        }

        /* =================================================
           LEGS
        ================================================= */

                .robot-left-leg {
          transform-box: fill-box;
          transform-origin: 103px 250px;
          will-change: transform;
        }

                .robot-right-leg {
          transform-box: fill-box;
          transform-origin: 157px 250px;
          will-change: transform;
        }

        /* =================================================
           ANTENNA
        ================================================= */

        .robot-glow-pulse {
          transform-box:
            fill-box;

          transform-origin:
            center;

          animation:
            robotGlow
            1.2s
            ease-in-out
            infinite;
        }

        @keyframes robotGlow {

          0%,
          100% {
            opacity:
              0.45;

            transform:
              scale(0.8);
          }

          50% {
            opacity:
              1;

            transform:
              scale(1.2);
          }

        }

        /* =================================================
           CHEST
        ================================================= */

        .robot-screen-dot {
          animation:
            screenDot
            1s
            ease-in-out
            infinite;
        }

        @keyframes screenDot {

          0%,
          100% {
            opacity:
              0.25;
          }

          50% {
            opacity:
              1;
          }

        }

        /* =================================================
           GROUND
        ================================================= */

        .yorra-robot-ground {
          position: absolute;

          left: 50%;
          bottom: 32px;

          width: 190px;
          height: 28px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            rgba(
              34,
              211,
              238,
              0.1
            );

          filter:
            blur(13px);

          animation:
            robotGround
            2.4s
            ease-in-out
            infinite;
        }

        @keyframes robotGround {

          0%,
          100% {
            opacity:
              0.35;

            transform:
              translateX(-50%)
              scale(0.8);
          }

          50% {
            opacity:
              0.8;

            transform:
              translateX(-50%)
              scale(1);
          }

        }

        /* =================================================
           PARTICLES
        ================================================= */

        .yorra-particle {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            #67e8f9;

          box-shadow:
            0 0 12px
            rgba(
              34,
              211,
              238,
              0.8
            );

          z-index: 5;
        }

        .particle-a {
          left: 35px;
          top: 145px;

          animation:
            particleA
            2.5s
            ease-in-out
            infinite;
        }

        .particle-b {
          right: 35px;
          top: 210px;

          animation:
            particleB
            2.8s
            ease-in-out
            infinite;
        }

        .particle-c {
          left: 70px;
          bottom: 75px;

          animation:
            particleC
            2.2s
            ease-in-out
            infinite;
        }

        @keyframes particleA {

          0%,
          100% {
            opacity:
              0.2;

            transform:
              translate(
                0,
                0
              );
          }

          50% {
            opacity:
              1;

            transform:
              translate(
                15px,
                -18px
              );
          }

        }

        @keyframes particleB {

          0%,
          100% {
            opacity:
              0.2;

            transform:
              translate(
                0,
                0
              );
          }

          50% {
            opacity:
              1;

            transform:
              translate(
                -15px,
                -12px
              );
          }

        }

        @keyframes particleC {

          0%,
          100% {
            opacity:
              0.2;

            transform:
              translate(
                0,
                0
              );
          }

          50% {
            opacity:
              1;

            transform:
              translate(
                12px,
                -15px
              );
          }

        }

        /* =================================================
           INFO
        ================================================= */

        @keyframes serviceInfoEnter {

          0% {
            opacity:
              0;

            transform:
              translateY(12px);
          }

          100% {
            opacity:
              1;

            transform:
              translateY(0);
          }

        }

        .animate-service-info {
          animation:
            serviceInfoEnter
            0.65s
            ease-out
            both;
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 640px) {

          .yorra-robot-stage {
            width: 290px;
            height: 380px;
          }

          .yorra-robot-svg {
            width: 240px;
            height: 330px;
          }






          .yorra-robot-ground {
            bottom: 28px;
          }

        }

        /* =================================================
           MOBILE BODY
        ================================================= */

        /* =================================================
           TABLET
        ================================================= */

        @media (
          min-width: 641px
        ) and (
          max-width: 1023px
        ) {

          .yorra-robot-stage {
            margin:
              0 auto;
          }

        }

      `}</style>
    </section>
  );
}