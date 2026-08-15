"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "px-3 pt-3 sm:px-5" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        {/* Main Navbar */}
        <div
          className={`
            relative flex items-center justify-between
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              scrolled
                ? `
                  h-16
                  overflow-hidden
                  rounded-full
                  border border-white/20
                  bg-white/[0.10]
                  px-5
                  shadow-[0_15px_50px_rgba(0,0,0,0.45)]
                  backdrop-blur-3xl
                  backdrop-saturate-150
                  sm:px-6
                `
                : `
                  h-20
                  border-b border-white/10
                  bg-[#05070b]/90
                  px-3
                  sm:px-6
                `
            }
          `}
        >
          {/* Glass Shine */}
          {scrolled && (
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-full
                bg-gradient-to-b
                from-white/[0.12]
                via-white/[0.02]
                to-transparent
              "
            />
          )}

          {/* Bottom Glass Highlight */}
          {scrolled && (
            <div
              className="
                pointer-events-none
                absolute inset-x-8 bottom-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-300/30
                to-transparent
              "
            />
          )}

          {/* Logo */}
          <Link
            href="/"
            className="
              relative z-10
              shrink-0
              text-xl
              font-black
              tracking-tight
              sm:text-2xl
            "
          >
            <span className="text-white">Yorra</span>
            <span className="text-cyan-400"> Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              absolute
              left-1/2
              z-10
              hidden
              -translate-x-1/2
              items-center
              gap-6
              md:flex
              lg:gap-8
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-1
                  text-sm
                  font-medium
                  text-gray-200
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                "
              >
                {item.name}

                {/* Animated Underline */}
                <span
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="
              relative
              z-10
              hidden
              rounded-full
              bg-white
              px-5
              py-2.5
              text-sm
              font-bold
              text-black
              shadow-lg
              shadow-black/10
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-cyan-300
              hover:shadow-cyan-400/20
              md:block
            "
          >
            Start a Project
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              relative
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white
              transition-all
              duration-300
              active:scale-95
              md:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="
                text-xl
                leading-none
                transition-transform
                duration-300
              "
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            grid
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:hidden
            ${
              menuOpen
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <nav
              className="
                rounded-3xl
                border
                border-white/15
                bg-white/[0.08]
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                backdrop-blur-3xl
                backdrop-saturate-150
              "
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      group
                      relative
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-gray-300
                      transition-all
                      duration-300
                      hover:bg-white/[0.07]
                      hover:text-cyan-400
                    "
                  >
                    {item.name}

                    {/* Mobile Underline */}
                    <span
                      className="
                        absolute
                        bottom-2
                        left-4
                        h-px
                        w-0
                        rounded-full
                        bg-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-12
                      "
                    />
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-2
                    rounded-xl
                    bg-white
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-cyan-300
                  "
                >
                  Start a Project →
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}