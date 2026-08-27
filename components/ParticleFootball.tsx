"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: number;
  phase: number;
};

export default function ParticleFootball() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let time = 0;

    const mouse = {
      x: -10000,
      y: -10000,
    };

    const nodes: Node[] = [];

    const NODE_COUNT = 170;
    const CONNECTION_DISTANCE = 175;
    const MOUSE_RADIUS = 280;

    /*
    =========================================
    YORRA COLORS
    =========================================
    */

    const colors = [
      { r: 67, g: 58, b: 143 }, // Purple
      { r: 7, g: 92, b: 77 },   // Green
      { r: 125, g: 48, b: 20 }, // Orange
    ];

    /*
    =========================================
    CREATE NETWORK
    =========================================
    */

    const createNodes = () => {
      nodes.length = 0;

      const isMobile = width < 768;

      /*
      Desktop:
      Right side large network

      Mobile:
      Network starts around the
      Build / Grow / Automate area
      */

      const centerX = isMobile
        ? width * 0.52
        : width * 0.68;

      const centerY = isMobile
        ? height * 0.64
        : height * 0.52;

      const networkWidth = isMobile
        ? width * 0.95
        : Math.min(width * 0.58, 700);

      const networkHeight = isMobile
        ? Math.min(height * 0.42, 340)
        : Math.min(height * 0.78, 620);

      for (let i = 0; i < NODE_COUNT; i++) {
        const angle =
          Math.random() * Math.PI * 2;

        const distance =
          Math.sqrt(Math.random());

        const x =
          centerX +
          Math.cos(angle) *
            distance *
            (networkWidth / 2);

        const y =
          centerY +
          Math.sin(angle) *
            distance *
            (networkHeight / 2);

        nodes.push({
          x,
          y,

          baseX: x,
          baseY: y,

          vx:
            (Math.random() - 0.5) *
            0.35,

          vy:
            (Math.random() - 0.5) *
            0.35,

          radius:
            isMobile
              ? 1.4 + Math.random() * 2.4
              : 1.5 + Math.random() * 2.8,

          alpha:
            0.4 +
            Math.random() * 0.55,

          color:
            Math.floor(
              Math.random() * colors.length
            ),

          phase:
            Math.random() *
            Math.PI *
            2,
        });
      }
    };

    /*
    =========================================
    RESIZE
    =========================================
    */

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createNodes();
    };

    /*
    =========================================
    ONLY REAL MOUSE
    =========================================
    */

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      /*
      Touch and pen are completely ignored.
      Only physical mouse can interact.
      */

      if (
        event.pointerType !== "mouse"
      ) {
        mouse.x = -10000;
        mouse.y = -10000;
        return;
      }

      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX - rect.left;

      mouse.y =
        event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouse.x = -10000;
      mouse.y = -10000;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    window.addEventListener(
      "resize",
      resize
    );

    resize();

    /*
    =========================================
    ANIMATION
    =========================================
    */

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      time += 0.012;

      const isMobile =
        width < 768;

      /*
      =======================================
      MOVE NODES
      =======================================
      */

      for (const node of nodes) {
        /*
        Noticeable continuous movement
        */

        const movementAmount =
          isMobile ? 4.2 : 2.2;

        const floatX =
          Math.sin(
            time * 0.65 +
              node.phase
          ) *
          movementAmount;

        const floatY =
          Math.cos(
            time * 0.55 +
              node.phase
          ) *
          movementAmount;

        /*
        Slowly follow floating position
        */

        node.vx +=
          (
            node.baseX +
            floatX -
            node.x
          ) * 0.003;

        node.vy +=
          (
            node.baseY +
            floatY -
            node.y
          ) * 0.003;

        /*
        =====================================
        DESKTOP MOUSE REPULSION ONLY
        =====================================
        */

        if (!isMobile) {
          const dx =
            node.x -
            mouse.x;

          const dy =
            node.y -
            mouse.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distance <
            MOUSE_RADIUS
          ) {
            const force =
              (MOUSE_RADIUS -
                distance) /
              MOUSE_RADIUS;

            const angle =
              Math.atan2(
                dy,
                dx
              );

            node.vx +=
              Math.cos(angle) *
              force *
              0.85;

            node.vy +=
              Math.sin(angle) *
              force *
              0.85;
          }
        }

        /*
        Smooth physics
        */

        node.vx *= 0.985;
        node.vy *= 0.985;

        node.x += node.vx;
        node.y += node.vy;
      }

      /*
      =======================================
      CONNECTIONS
      =======================================
      */

      const connectionDistance =
        isMobile
          ? 135
          : CONNECTION_DISTANCE;

      for (
        let i = 0;
        i < nodes.length;
        i++
      ) {
        const nodeA = nodes[i];

        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const nodeB = nodes[j];

          const dx =
            nodeA.x -
            nodeB.x;

          const dy =
            nodeA.y -
            nodeB.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distance <
            connectionDistance
          ) {
            const strength =
              1 -
              distance /
                connectionDistance;

            const colorA =
              colors[nodeA.color];

            const colorB =
              colors[nodeB.color];

            const r =
              (colorA.r +
                colorB.r) /
              2;

            const g =
              (colorA.g +
                colorB.g) /
              2;

            const b =
              (colorA.b +
                colorB.b) /
              2;

            ctx.beginPath();

            ctx.moveTo(
              nodeA.x,
              nodeA.y
            );

            ctx.lineTo(
              nodeB.x,
              nodeB.y
            );

            ctx.strokeStyle =
              `rgba(
                ${r},
                ${g},
                ${b},
                ${strength * 0.30}
              )`;

            ctx.lineWidth =
              isMobile
                ? 0.65 +
                  strength * 0.5
                : 0.8 +
                  strength * 0.7;

            ctx.stroke();
          }
        }
      }

      /*
      =======================================
      MOUSE CONNECTIONS
      DESKTOP ONLY
      =======================================
      */

      if (!isMobile) {
        for (const node of nodes) {
          const dx =
            node.x -
            mouse.x;

          const dy =
            node.y -
            mouse.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distance <
            MOUSE_RADIUS
          ) {
            const strength =
              1 -
              distance /
                MOUSE_RADIUS;

            ctx.beginPath();

            ctx.moveTo(
              node.x,
              node.y
            );

            ctx.lineTo(
              mouse.x,
              mouse.y
            );

            ctx.strokeStyle =
              `rgba(
                67,
                58,
                143,
                ${strength * 0.55}
              )`;

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      }

      /*
      =======================================
      DRAW NODES
      =======================================
      */

      for (const node of nodes) {
        const color =
          colors[node.color];

        /*
        Node glow
        */

        const glow =
          ctx.createRadialGradient(
            node.x,
            node.y,
            0,

            node.x,
            node.y,
            node.radius * 7
          );

        glow.addColorStop(
          0,
          `rgba(
            ${color.r},
            ${color.g},
            ${color.b},
            ${node.alpha * 0.4}
          )`
        );

        glow.addColorStop(
          1,
          `rgba(
            ${color.r},
            ${color.g},
            ${color.b},
            0
          )`
        );

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius * 7,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = glow;
        ctx.fill();

        /*
        Main node
        */

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(
            ${color.r},
            ${color.g},
            ${color.b},
            ${node.alpha}
          )`;

        ctx.fill();
      }

      /*
      =======================================
      AMBIENT GLOW
      =======================================
      */

      const centerX =
        isMobile
          ? width * 0.52
          : width * 0.68;

      const centerY =
        isMobile
          ? height * 0.64
          : height * 0.52;

      const glow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          20,

          centerX,
          centerY,
          Math.min(
            width,
            height
          ) *
            (isMobile
              ? 0.45
              : 0.55)
        );

      glow.addColorStop(
        0,
        "rgba(67,58,143,0.055)"
      );

      glow.addColorStop(
        0.35,
        "rgba(7,92,77,0.035)"
      );

      glow.addColorStop(
        0.65,
        "rgba(125,48,20,0.025)"
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.beginPath();

      ctx.arc(
        centerX,
        centerY,
        Math.min(
          width,
          height
        ) *
          (isMobile
            ? 0.45
            : 0.55),
        0,
        Math.PI * 2
      );

      ctx.fillStyle = glow;
      ctx.fill();

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    /*
    =========================================
    CLEANUP
    =========================================
    */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">

      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-[68%] top-1/2 hidden h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.025] blur-[150px] md:block" />

      {/* Neural Network */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

    </div>
  );
}