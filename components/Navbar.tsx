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
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
                  h-16 overflow-hidden rounded-full border border-white/20
                  bg-white/[0.10] px-5 shadow-[0_15px_50px_rgba(0,0,0,0.45)]
                  backdrop-blur-3xl backdrop-saturate-150 sm:px-6
                `
                : `
                  h-20 border-b border-white/10 bg-[#05070b]/90 px-3 sm:px-6
                `
            }
          `}
        >
          {scrolled && (
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.12] via-white/[0.02] to-transparent" />
          )}

          {scrolled && (
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
          )}

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 shrink-0 text-xl font-black tracking-tight sm:text-2xl"
          >
            <span className="text-white">Yorra</span>
            <span className="text-cyan-400"> Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative whitespace-nowrap py-1 text-sm font-medium text-gray-200 transition-colors duration-300 hover:text-cyan-400"
                >
                  {item.name}

                  {/* Active Dot */}
                  <span
                    className={`
                      absolute -bottom-3 left-1/2 h-1.5 w-1.5
                      -translate-x-1/2 rounded-full bg-cyan-400
                      shadow-[0_0_10px_rgba(34,211,238,0.85)]
                      transition-all duration-300 ease-out
                      ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                    `}
                  />

                  {/* Hover Underline */}
                  <span className="absolute -bottom-1 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="relative z-10 hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20 md:block"
          >
            Start a Project
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-all duration-300 active:scale-95 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="relative flex h-4 w-5 items-center justify-center">
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-white transition-all duration-200 ${
                  menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden
            ${
              menuOpen
                ? "pointer-events-auto mt-2 max-h-[500px] opacity-100"
                : "pointer-events-none mt-0 max-h-0 opacity-0"
            }
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          `}
        >
          <div
            className={`origin-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-3 scale-[0.98] opacity-0"
            }`}
          >
            <nav
              className="
                relative overflow-hidden rounded-3xl border border-white/10
                bg-[#05070b]/95 p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                backdrop-blur-3xl backdrop-saturate-150
              "
            >
              {/* Opaque layer prevents the Home hero from flashing through */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-[#05070b]/75" />

              <div className="relative z-10 flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                      }}
                      className={`
                        group relative rounded-xl px-4 py-3 text-sm font-medium
                        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          active
                            ? "bg-white/[0.06] text-cyan-400"
                            : "text-gray-300 hover:bg-white/[0.07] hover:text-cyan-400"
                        }
                        ${
                          menuOpen
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-3 opacity-0"
                        }
                      `}
                    >
                      {item.name}

                      {/* Active Mobile Dot */}
                      <span
                        className={`absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)] transition-all duration-300 ${
                          active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                      />

                      <span className="absolute bottom-2 left-4 h-px w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-12" />
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    transitionDelay: menuOpen
                      ? `${navItems.length * 45}ms`
                      : "0ms",
                  }}
                  className={`mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-cyan-300 ${
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