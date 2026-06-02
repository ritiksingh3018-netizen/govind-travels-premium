"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-black tracking-wide"
        >
          GOVIND TRAVELS
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/packages" className="hover:text-orange-500 transition">
            Packages
          </Link>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
            target="_blank"
            className="bg-orange-500 px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col p-6 gap-5 text-white">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/packages"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Packages
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Contact
            </Link>

            <a
              href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
              target="_blank"
              className="bg-orange-500 text-center py-3 rounded-xl font-bold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}