"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;

  baseX: number;
  baseY: number;
  baseZ: number;

  vx: number;
  vy: number;
  vz: number;

  size: number;
  alpha: number;
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

    const mouse = {
      x: -2000,
      y: -2000,
    };

    const sphere = {
      x: 0,
      y: 0,
      radius: 300,
    };

    const particles: Particle[] = [];

    // Dense particle field
    const PARTICLE_COUNT = 3200;

    let rotation = 0;

    /*
    =========================================
    CREATE PARTICLES
    =========================================
    */

    const createParticles = () => {
      particles.length = 0;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const offset = 2 / PARTICLE_COUNT;

        const y =
          i * offset -
          1 +
          offset / 2;

        const radius =
          Math.sqrt(1 - y * y);

        const goldenAngle =
          Math.PI * (3 - Math.sqrt(5));

        const theta =
          goldenAngle * i;

        const x =
          Math.cos(theta) * radius;

        const z =
          Math.sin(theta) * radius;

        const px =
          x * sphere.radius;

        const py =
          y * sphere.radius;

        const pz =
          z * sphere.radius;

        particles.push({
          x: px,
          y: py,
          z: pz,

          baseX: px,
          baseY: py,
          baseZ: pz,

          vx: 0,
          vy: 0,
          vz: 0,

          /*
          Bigger dots
          */
          size:
            0.8 +
            Math.random() * 1.8,

          alpha:
            0.4 +
            Math.random() * 0.6,
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

      const dpr =
        Math.min(
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

      sphere.x =
        width * 0.68;

      sphere.y =
        height * 0.52;

      /*
      Slightly smaller football
      */

      if (width >= 1200) {
        sphere.radius = 315;
      } else if (width >= 768) {
        sphere.radius = 275;
      } else {
        sphere.radius = 180;
      }

      createParticles();
    };

    /*
    =========================================
    GLOBAL MOUSE
    =========================================
    */

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX -
        rect.left;

      mouse.y =
        event.clientY -
        rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "blur",
      handleMouseLeave
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

      rotation += 0.0017;

      const cos =
        Math.cos(rotation);

      const sin =
        Math.sin(rotation);

      const renderedParticles: Array<{
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
      }> = [];

      /*
      =======================================
      PARTICLE PHYSICS
      =======================================
      */

      for (
        const particle of particles
      ) {
        /*
        3D rotation
        */

        const rotatedX =
          particle.baseX * cos -
          particle.baseZ * sin;

        const rotatedZ =
          particle.baseX * sin +
          particle.baseZ * cos;

        /*
        Target sphere position
        */

        const targetX =
          sphere.x +
          rotatedX;

        const targetY =
          sphere.y +
          particle.baseY;

        /*
        Current position
        */

        const currentX =
          sphere.x +
          particle.x;

        const currentY =
          sphere.y +
          particle.y;

        /*
        =====================================
        CURSOR REPULSION
        =====================================
        */

        const dx =
          currentX -
          mouse.x;

        const dy =
          currentY -
          mouse.y;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );

        /*
        Larger interaction zone
        */

        const interactionRadius =
          360;

        if (
          distance <
          interactionRadius
        ) {
          const normalized =
            (interactionRadius -
              distance) /
            interactionRadius;

          const force =
            Math.pow(
              normalized,
              1.55
            );

          const angle =
            Math.atan2(
              dy,
              dx
            );

          /*
          Stronger escape
          */

          const push =
            force * 48;

          particle.vx +=
            Math.cos(angle) *
            push;

          particle.vy +=
            Math.sin(angle) *
            push;

          /*
          Depth explosion
          */

          particle.vz +=
            force * 13;
        }

        /*
        =====================================
        RETURN TO SPHERE
        =====================================
        */

        const returnX =
          targetX -
          currentX;

        const returnY =
          targetY -
          currentY;

        particle.vx +=
          returnX * 0.005;

        particle.vy +=
          returnY * 0.005;

        /*
        Friction
        */

        particle.vx *= 0.90;

        particle.vy *= 0.90;

        particle.vz *= 0.90;

        /*
        Move
        */

        particle.x +=
          particle.vx;

        particle.y +=
          particle.vy;

        particle.z +=
          particle.vz;

        /*
        Recover depth
        */

        particle.z *=
          0.985;

        renderedParticles.push({
          x:
            sphere.x +
            particle.x,

          y:
            sphere.y +
            particle.y,

          z:
            particle.z,

          size:
            particle.size,

          alpha:
            particle.alpha,
        });
      }

      /*
      =========================================
      DEPTH SORT
      =========================================
      */

      renderedParticles.sort(
        (a, b) =>
          a.z - b.z
      );

      /*
      =========================================
      DRAW PARTICLES
      =========================================
      */

      for (
        const particle of
        renderedParticles
      ) {
        const depth =
          (particle.z +
            sphere.radius) /
          (sphere.radius * 2);

        const size =
          particle.size *
          (0.45 +
            depth * 1.1);

        const alpha =
          particle.alpha *
          (0.18 +
            depth * 0.95);

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(
            103,
            232,
            249,
            ${alpha}
          )`;

        ctx.fill();
      }

      /*
      =========================================
      GLOW
      =========================================
      */

      const glow =
        ctx.createRadialGradient(
          sphere.x,
          sphere.y,
          sphere.radius *
            0.1,

          sphere.x,
          sphere.y,
          sphere.radius *
            1.35
        );

      glow.addColorStop(
        0,
        "rgba(34,211,238,0.08)"
      );

      glow.addColorStop(
        0.45,
        "rgba(59,130,246,0.035)"
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.beginPath();

      ctx.arc(
        sphere.x,
        sphere.y,
        sphere.radius *
          1.35,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        glow;

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
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "blur",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">

      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-[68%] top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

      {/* Particle field */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Center glow */}

      <div className="absolute left-[68%] top-[52%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_35px_12px_rgba(34,211,238,0.28)]" />

    </div>
  );
}