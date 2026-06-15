"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function OotyKodaikanalPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: "",
          destination: "Ooty Kodaikanal Tour Package",
          message: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setName("");
        setPhone("");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <h1 className="text-4xl font-bold text-center mb-3">
              Ooty & Kodaikanal
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Queen of Hills & Princess of Hill Stations
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
              >
                {loading ? "Sending..." : "Get Best Price"}
              </button>

              {success && (
                <div className="text-center text-green-400">
                  ✅ Inquiry Submitted Successfully
                </div>
              )}
            </form>

            <a
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Ooty%20Kodaikanal%20Tour%20Package."
              target="_blank"
              className="flex items-center justify-center gap-2 mt-4 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold"
            >
              <FaWhatsapp size={22} />
              WhatsApp
            </a>

          </div>
        </div>

      </section>
            {/* Package Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Ooty Lake Boating",
            "Doddabetta Peak",
            "Botanical Garden",
            "Tea Factory Visit",
            "Pykara Lake & Falls",
            "Kodaikanal Lake",
            "Coaker's Walk",
            "Pillar Rocks",
            "Silver Cascade Falls",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Itinerary
        </h2>

        <div className="space-y-8">
          {[
            {
              day: "Day 1",
              title: "Arrival at Ooty",
              details:
                "Arrival, hotel check-in and evening visit to Ooty Lake and local market.",
            },
            {
              day: "Day 2",
              title: "Ooty Sightseeing",
              details:
                "Visit Doddabetta Peak, Botanical Garden, Rose Garden and Tea Factory.",
            },
            {
              day: "Day 3",
              title: "Pykara Excursion",
              details:
                "Explore Pykara Lake, Pykara Falls and scenic viewpoints.",
            },
            {
              day: "Day 4",
              title: "Transfer to Kodaikanal",
              details:
                "Enjoy a scenic drive to Kodaikanal and evening leisure at Kodai Lake.",
            },
            {
              day: "Day 5",
              title: "Kodaikanal Sightseeing",
              details:
                "Visit Coaker's Walk, Pillar Rocks, Bryant Park and Silver Cascade Falls.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Breakfast and transfer to airport/railway station with beautiful memories.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {item.day}
              </h3>

              <h4 className="text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-slate-300">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>
            {/* Top Attractions */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Top Attractions
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Ooty Lake",
              desc: "Famous boating lake surrounded by beautiful hills.",
            },
            {
              name: "Doddabetta Peak",
              desc: "Highest peak in the Nilgiri Mountains.",
            },
            {
              name: "Kodaikanal Lake",
              desc: "Star-shaped lake and the heart of Kodaikanal.",
            },
            {
              name: "Pillar Rocks",
              desc: "Magnificent rock formations with scenic valley views.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Image Here
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  {place.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Includes & Excludes */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Package Includes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Hotel Accommodation</li>
              <li>✔ Daily Breakfast</li>
              <li>✔ Airport / Railway Transfers</li>
              <li>✔ Ooty Sightseeing</li>
              <li>✔ Kodaikanal Sightseeing</li>
              <li>✔ Private Cab</li>
              <li>✔ Driver Allowance</li>
              <li>✔ Toll Tax & Parking</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Flight / Train Tickets</li>
              <li>✘ Lunch & Dinner</li>
              <li>✘ Entry Fees</li>
              <li>✘ Boating Charges</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Anything Not Mentioned Above</li>
            </ul>
          </div>

        </div>
      </section>
            {/* Package Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Package Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹14,999
            </p>

            <p className="mt-4 text-slate-300">
              Per Person
            </p>
          </div>

          <div className="bg-cyan-600 rounded-2xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Premium
            </h3>

            <p className="text-4xl font-bold">
              ₹21,999
            </p>

            <p className="mt-4">
              Per Person
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Luxury
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹32,999
            </p>

            <p className="mt-4 text-slate-300">
              Per Person
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready For Ooty & Kodaikanal?
        </h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Escape to the misty hills of South India and enjoy lakes, tea gardens, waterfalls and breathtaking mountain views with Yorra Travels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Ooty%20Kodaikanal%20Tour%20Package."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-full font-bold"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}