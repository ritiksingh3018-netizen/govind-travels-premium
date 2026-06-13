"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);


return ( <header className="fixed top-0 left-0 w-full z-50 bg-[#07111F]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"> <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


    {/* Logo */}
    <Link
      href="/"
      className="text-white text-3xl font-black tracking-wider"
    >
      <span className="text-orange-500">Yorra</span> Travels
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-8 text-white">

      <Link
        href="/"
        className="hover:text-orange-500 transition"
      >
        Home
      </Link>

      <Link
        href="/packages"
        className="hover:text-orange-500 transition"
      >
        Packages
      </Link>

      <Link
        href="/contact"
        className="hover:text-orange-500 transition"
      >
        Contact
      </Link>


      <a
        href="tel:+919717367006"
        className="text-orange-400 font-bold"
      >
        📞 9717367006
      </a>

      <a
        href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
        target="_blank"
        className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Book Now
      </a>

    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white text-3xl"
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-[#07111F] border-t border-white/10">
      <nav className="flex flex-col p-6 gap-5 text-white">

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/packages"
          onClick={() => setMenuOpen(false)}
        >
          Packages
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <a
          href="tel:+919717367006"
          className="text-orange-400 font-bold"
        >
          📞 9717367006
        </a>

        <a
          href="https://wa.me/919717367006"
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
