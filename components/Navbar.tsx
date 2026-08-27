"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "px-3 pt-3 sm:px-5"
          : "px-0 pt-0"
      }`}
    >
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "mx-auto max-w-6xl"
            : "w-full"
        }`}
      >
        {/* =====================================
            MAIN NAVBAR
        ====================================== */}

        <div
          className={`
            relative flex items-center justify-between
            overflow-hidden
            border
            border-white/40
            bg-white/25
            backdrop-blur-2xl
            backdrop-saturate-150
            shadow-[0_15px_50px_rgba(80,60,100,0.10)]
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              scrolled
                ? `
                  h-16 rounded-full
                  px-5
                  shadow-[0_15px_50px_rgba(80,60,100,0.14)]
                  sm:px-6
                `
                : `
                  h-20 w-full
                  rounded-none
                  border-x-0
                  border-t-0
                  px-6
                  sm:px-8
                  lg:px-10
                `
            }
          `}
        >
          {/* =====================================
              GLASS HIGHLIGHT
          ====================================== */}

          <div
            className={`
              pointer-events-none absolute inset-0
              bg-gradient-to-b
              from-white/45
              via-white/15
              to-transparent
              ${scrolled ? "rounded-full" : ""}
            `}
          />

          {/* =====================================
              GLASS TOP EDGE
          ====================================== */}

          <div
            className={`
              pointer-events-none absolute inset-x-0 top-0
              h-px
              bg-white/70
              ${scrolled ? "rounded-full" : ""}
            `}
          />

          {/* =====================================
              PURPLE BOTTOM GLOW
          ====================================== */}

          {scrolled && (
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          )}

          {/* =====================================
              LOGO
              IMAGE = ICON ONLY
              TEXT = CODE
          ====================================== */}

          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Logo Icon */}

            <img
              src="/yorra-tech-logo.png"
              alt="Yorra Tech Logo"
              className="
                h-10
                w-10
                object-contain
                sm:h-11
                sm:w-11
              "
            />

            {/* Yorra Tech Text */}

            <span className="text-xl font-black tracking-tight sm:text-2xl">
              <span className="text-[#111827]">
                Yorra
              </span>{" "}
              <span className="text-purple-600">
                Tech
              </span>
            </span>
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ====================================== */}

          <nav className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative whitespace-nowrap py-1 text-sm font-medium text-[#374151] transition-colors duration-300 hover:text-purple-500"
                >
                  {item.name}

                  {/* =================================
                      PURPLE DOT

                      Active = Dot
                      Hover = Animated Line
                  ================================== */}

                  <span
                    className={`
                      absolute
                      -bottom-3
                      left-1/2
                      h-1.5
                      w-1.5
                      -translate-x-1/2
                      rounded-full
                      bg-purple-500
                      shadow-[0_0_10px_rgba(168,85,247,0.75)]
                      transition-all
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        active
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }

                      group-hover:h-1
                      group-hover:w-7
                      group-hover:scale-100
                      group-hover:opacity-100
                      group-hover:rounded-full
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =====================================
              DESKTOP CTA
          ====================================== */}

          <Link
            href="/contact"
            className="relative z-10 hidden rounded-full bg-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-purple-500/30 md:block"
          >
            Start a Project
          </Link>

          {/* =====================================
              MOBILE MENU BUTTON
          ====================================== */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/25 text-[#111827] shadow-sm backdrop-blur-xl transition-all duration-300 active:scale-95 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="relative flex h-4 w-5 items-center justify-center">

              {/* Top */}

              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-[#111827] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-[5px]"
                }`}
              />

              {/* Middle */}

              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-[#111827] transition-all duration-200 ${
                  menuOpen
                    ? "scale-0 opacity-0"
                    : "scale-100 opacity-100"
                }`}
              />

              {/* Bottom */}

              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-[#111827] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-[5px]"
                }`}
              />

            </span>
          </button>
        </div>

        {/* =====================================
            MOBILE MENU
        ====================================== */}

        <div
          className={`
            md:hidden overflow-hidden
            ${
              menuOpen
                ? "pointer-events-auto mt-2 max-h-[500px] opacity-100"
                : "pointer-events-none mt-0 max-h-0 opacity-0"
            }
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
          `}
        >
          <div
            className={`origin-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-3 scale-[0.98] opacity-0"
            }`}
          >
            <nav className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/25 p-4 shadow-[0_20px_60px_rgba(80,60,100,0.15)] backdrop-blur-2xl backdrop-saturate-150">

              {/* Mobile Glass Highlight */}

              <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/45 via-white/15 to-transparent" />

              <div className="relative z-10 flex flex-col gap-1">

                {navItems.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      style={{
                        transitionDelay: menuOpen
                          ? `${index * 45}ms`
                          : "0ms",
                      }}
                      className={`
                        group relative rounded-xl
                        px-4 py-3
                        text-sm font-medium
                        transition-all duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        ${
                          active
                            ? "bg-white/20 text-purple-600"
                            : "text-[#374151] hover:bg-white/25 hover:text-purple-500"
                        }

                        ${
                          menuOpen
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-3 opacity-0"
                        }
                      `}
                    >
                      {item.name}

                      {/* Mobile Purple Dot */}

                      <span
                        className={`
                          absolute
                          right-4
                          top-1/2
                          h-1.5
                          w-1.5
                          -translate-y-1/2
                          rounded-full
                          bg-purple-500
                          shadow-[0_0_10px_rgba(168,85,247,0.75)]
                          transition-all
                          duration-300

                          ${
                            active
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }

                          group-hover:scale-100
                          group-hover:opacity-100
                        `}
                      />

                      {/* Mobile Hover Line */}

                      <span
                        className="
                          absolute
                          bottom-2
                          left-4
                          h-px
                          w-0
                          rounded-full
                          bg-purple-500
                          shadow-[0_0_8px_rgba(168,85,247,0.5)]
                          transition-all
                          duration-300
                          group-hover:w-12
                        "
                      />
                    </Link>
                  );
                })}

                {/* =====================================
                    MOBILE CTA
                ====================================== */}

                <Link
                  href="/contact"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  style={{
                    transitionDelay: menuOpen
                      ? `${navItems.length * 45}ms`
                      : "0ms",
                  }}
                  className={`mt-2 rounded-xl bg-purple-600 px-4 py-3 text-center text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-purple-700 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
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