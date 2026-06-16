
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function GokarnaClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
          destination: "Gokarna Tour Package",
          message: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setName("");
        setPhone("");
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      {/* Hero */}

      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/gokarna.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Gokarna Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Beaches, Temples & Coastal Paradise
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
              >
                {loading
                  ? "Sending..."
                  : "Get Best Price"}
              </button>

              {success && (
                <p className="text-green-400 text-center">
                  Inquiry Submitted Successfully
                </p>
              )}
            </form>

            <a
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Gokarna%20Tour%20Package."
              target="_blank"
              className="flex items-center justify-center gap-2 mt-4 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>

      </section>
            {/* Package Highlights */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Gokarna Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Om Beach",
            "Kudle Beach",
            "Paradise Beach",
            "Half Moon Beach",
            "Mahabaleshwar Temple",
            "Beach Trekking",
            "Sunset Point",
            "Water Sports",
            "Private Beach Experience",
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

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Best Gokarna Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Gokarna Tour Package is one of the most popular beach holiday
            packages in India. Located on the beautiful coastline of Karnataka,
            Gokarna is famous for pristine beaches, peaceful surroundings,
            spiritual heritage and breathtaking sunsets. Travelers looking for a
            relaxed alternative to Goa often choose Gokarna because of its
            untouched natural beauty and calm atmosphere.
          </p>

          <p>
            Our Gokarna Tour Package is specially designed for families,
            couples, honeymoon travelers and groups. Whether you want a romantic
            beach holiday, a spiritual retreat or an adventure-filled vacation,
            Gokarna offers the perfect combination of nature and culture.
          </p>

          <p>
            Om Beach is the most famous attraction in Gokarna. Named after its
            unique shape resembling the sacred Om symbol, this beach attracts
            thousands of visitors every year. Visitors can enjoy water sports,
            beachside cafes and unforgettable sunset views.
          </p>

          <p>
            Kudle Beach is another must-visit destination. Known for its soft
            sands and peaceful atmosphere, Kudle Beach is ideal for relaxation,
            yoga and beach walks. Many travelers spend their evenings here
            enjoying the spectacular Arabian Sea sunsets.
          </p>

          <p>
            Paradise Beach and Half Moon Beach are among the hidden gems of
            Gokarna. These beaches are accessible through trekking trails and
            boat rides, making them perfect for adventure seekers and nature
            lovers.
          </p>

          <p>
            Gokarna is also a major pilgrimage destination. The famous
            Mahabaleshwar Temple attracts devotees from across India. Dedicated
            to Lord Shiva, this ancient temple is one of the most sacred sites
            in Karnataka.
          </p>

          <p>
            Travelers searching for Gokarna Tour Package from Bangalore,
            Gokarna Tour Package from Delhi, Gokarna Family Package or Gokarna
            Honeymoon Package can find customized options through Yorra Travels.
            We provide comfortable stays, transportation and sightseeing
            experiences tailored to your needs.
          </p>

          <p>
            The best time to visit Gokarna is between October and March when
            the weather remains pleasant and ideal for beach activities. During
            this period visitors can enjoy beach trekking, temple visits,
            sightseeing and photography without extreme heat.
          </p>

          <p>
            Gokarna is becoming one of India's fastest-growing tourist
            destinations. Its unique combination of spirituality, beaches and
            adventure attracts travelers from all over the world. Whether you
            are looking for a short weekend getaway or a long coastal holiday,
            Gokarna offers memorable experiences for every type of traveler.
          </p>

          <p>
            Book your Gokarna Tour Package with Yorra Travels and discover
            beautiful beaches, scenic viewpoints, spiritual attractions and the
            relaxed coastal lifestyle of Karnataka.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          4 Nights / 5 Days Gokarna Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Gokarna",
              details:
                "Arrival, hotel check-in and evening leisure at Gokarna Main Beach.",
            },
            {
              day: "Day 2",
              title: "Om Beach & Kudle Beach",
              details:
                "Visit Om Beach, Kudle Beach and enjoy sunset viewpoints.",
            },
            {
              day: "Day 3",
              title: "Beach Trek Adventure",
              details:
                "Explore Half Moon Beach and Paradise Beach through scenic coastal trekking trails.",
            },
            {
              day: "Day 4",
              title: "Temple & Local Sightseeing",
              details:
                "Visit Mahabaleshwar Temple and explore local markets and attractions.",
            },
            {
              day: "Day 5",
              title: "Departure",
              details:
                "Breakfast and transfer to airport or railway station.",
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
          Top Tourist Places in Gokarna
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Om Beach",
              desc: "Most famous beach in Gokarna known for its Om shape.",
            },
            {
              name: "Kudle Beach",
              desc: "Perfect beach for relaxation, sunsets and yoga.",
            },
            {
              name: "Paradise Beach",
              desc: "Beautiful secluded beach with crystal-clear waters.",
            },
            {
              name: "Mahabaleshwar Temple",
              desc: "Ancient Shiva temple attracting pilgrims from across India.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Gokarna Image
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

      {/* Includes Excludes */}

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
              <li>✔ Local Sightseeing</li>
              <li>✔ Driver Charges</li>
              <li>✔ Toll Tax</li>
              <li>✔ Parking Charges</li>
              <li>✔ Travel Assistance</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Flight Tickets</li>
              <li>✘ Train Tickets</li>
              <li>✘ Lunch & Dinner</li>
              <li>✘ Water Sports Charges</li>
              <li>✘ Entry Fees</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Gokarna?
            </h3>
            <p className="text-slate-300">
              October to March is considered the best season to visit Gokarna.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How much does a Gokarna trip cost?
            </h3>
            <p className="text-slate-300">
              The cost depends on hotel category, travel season and package inclusions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Gokarna better than Goa?
            </h3>
            <p className="text-slate-300">
              Gokarna is quieter and less crowded, making it ideal for peaceful holidays.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Gokarna good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, Gokarna is one of the best romantic beach destinations in India.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/pondicherry"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Pondicherry Tour Package
          </Link>

          <Link
            href="/packages/lakshadweep"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Lakshadweep Tour Package
          </Link>

          <Link
            href="/packages/andaman"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Andaman Tour Package
          </Link>

        </div>

      </section>

      {/* Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Gokarna Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-4xl font-bold text-cyan-400">₹9,999</p>
            <p className="mt-4 text-slate-300">Per Person</p>
          </div>

          <div className="bg-cyan-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold">₹14,999</p>
            <p className="mt-4">Per Person</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Luxury</h3>
            <p className="text-4xl font-bold text-cyan-400">₹22,999</p>
            <p className="mt-4 text-slate-300">Per Person</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Ready For Gokarna?
        </h2>

        <p className="text-slate-300 mb-8 text-lg max-w-3xl mx-auto">
          Book your Gokarna Tour Package with Yorra Travels and enjoy beautiful beaches, spiritual attractions and unforgettable coastal experiences.
        </p>

        <a
          href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Gokarna%20Tour%20Package."
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold inline-block"
        >
          WhatsApp Now
        </a>

      </section>

      {/* Schema Markup */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Gokarna Tour Package",
            provider: {
              "@type": "TravelAgency",
              name: "Yorra Travels",
              telephone: "+91-9717367006",
            },
          }),
        }}
      />

    </main>
  );
}