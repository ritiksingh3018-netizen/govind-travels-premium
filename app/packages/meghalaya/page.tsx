"use client";

import Link from "next/link";
import { useState } from "react";

export default function MeghalayaPage() {
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
          destination: "Meghalaya Tour Package",
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <h1 className="text-4xl font-bold text-center mb-3">
              Meghalaya Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Get Best Price For Your Meghalaya Trip
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold transition"
              >
                {loading ? "Sending..." : "Get Best Price"}
              </button>

              {success && (
                <div className="text-center text-green-400 font-semibold">
                  ✅ Inquiry Submitted Successfully
                </div>
              )}
            </form>

           <a
  href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Meghalaya%20Tour%20Package.%20Please%20share%20details."
  target="_blank"
  className="block text-center mt-4 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold shadow-lg shadow-green-500/30 transition"
>
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
            "Shillong Sightseeing",
            "Dawki River Boating",
            "Living Root Bridge",
            "Mawlynnong Village",
            "Cherrapunji Tour",
            "Nohkalikai Falls",
            "Mawsmai Cave",
            "Seven Sisters Falls",
            "Umiam Lake",
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
              title: "Arrival at Shillong",
              details:
                "Pickup from Guwahati Airport, transfer to Shillong and visit the beautiful Umiam Lake.",
            },
            {
              day: "Day 2",
              title: "Shillong Sightseeing",
              details:
                "Visit Elephant Falls, Shillong Peak, Ward's Lake and Police Bazaar.",
            },
            {
              day: "Day 3",
              title: "Cherrapunji Tour",
              details:
                "Explore Nohkalikai Falls, Seven Sisters Falls, Eco Park and Mawsmai Cave.",
            },
            {
              day: "Day 4",
              title: "Dawki & Mawlynnong",
              details:
                "Enjoy crystal clear river boating and visit Asia's cleanest village.",
            },
            {
              day: "Day 5",
              title: "Living Root Bridge Trek",
              details:
                "Trek to the famous Double Decker Living Root Bridge and natural pools.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Transfer to Guwahati Airport / Railway Station for your onward journey.",
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
              name: "Nohkalikai Falls",
              desc: "India's tallest plunge waterfall.",
            },
            {
              name: "Dawki River",
              desc: "Famous crystal-clear river boating.",
            },
            {
              name: "Living Root Bridge",
              desc: "Natural bridge made from tree roots.",
            },
            {
              name: "Mawlynnong",
              desc: "Asia's cleanest village.",
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
              <li>✔ Private Cab</li>
              <li>✔ All Sightseeing</li>
              <li>✔ Pickup & Drop</li>
              <li>✔ Driver Allowance</li>
              <li>✔ Toll Tax</li>
              <li>✔ Parking Charges</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Flight Tickets</li>
              <li>✘ Train Tickets</li>
              <li>✘ Entry Fees</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Adventure Activities</li>
              <li>✘ Anything Not Mentioned Above</li>
            </ul>
          </div>

        </div>
      </section>
            {/* Pricing */}
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
              ₹19,999
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
              ₹29,999
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
          Ready For Meghalaya?
        </h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Experience waterfalls, caves, rivers, mountains and the natural beauty of Meghalaya with Yorra Travels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold"
          >
            WhatsApp Now
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