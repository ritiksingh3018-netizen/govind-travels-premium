"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl md:text-3xl font-black tracking-wide"
        >
          GOVIND TRAVELS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link
            href="/"
            className="hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/packages"
            className="hover:text-orange-500 transition duration-300"
          >
            Packages
          </Link>

          <Link
            href="/contact"
            className="hover:text-orange-500 transition duration-300"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/919717367006"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
         <button
  onClick={() => {
    alert("Menu Clicked");
    setMenuOpen(!menuOpen);
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
>
  Menu ☰
</button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-black/95 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-4 text-white hover:bg-orange-500 transition"
              >
                Home
              </Link>

              <Link
                href="/packages"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-4 text-white hover:bg-orange-500 transition"
              >
                Packages
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-4 text-white hover:bg-orange-500 transition"
              >
                Contact
              </Link>

              <a
                href="https://wa.me/919717367006"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-4 text-white hover:bg-orange-500 transition"
              >
                Book Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}