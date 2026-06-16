"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ManaliPage() {
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
          destination: "Manali Tour Package",
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

      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/manali.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Manali Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Snow Mountains • Solang Valley • Rohtang Pass
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
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                <p className="text-green-400 text-center">
                  Inquiry Submitted Successfully
                </p>
              )}

            </form>

            <a
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Manali%20Tour%20Package."
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
          Manali Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Solang Valley",
            "Rohtang Pass",
            "Atal Tunnel",
            "Hidimba Devi Temple",
            "Mall Road Manali",
            "Sissu Valley",
            "Adventure Activities",
            "Snow Point Visit",
            "Beautiful Himalayan Views",
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
          Best Manali Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Manali Tour Package is one of the most popular holiday packages in
            India. Nestled in the beautiful Kullu Valley of Himachal Pradesh,
            Manali attracts honeymoon couples, families, adventure lovers and
            nature enthusiasts throughout the year. Surrounded by snow-capped
            mountains, pine forests, rivers and valleys, Manali offers a perfect
            escape from busy city life.
          </p>

          <p>
            Manali is famous for its pleasant weather, breathtaking landscapes
            and exciting adventure activities. Whether you want a romantic
            honeymoon, a family vacation or an adventure-filled trip, Manali
            provides unforgettable experiences for every traveler.
          </p>

          <p>
            Solang Valley is one of the biggest attractions included in most
            Manali Tour Packages. Located just a few kilometers from Manali,
            Solang Valley is known for skiing, snowboarding, paragliding,
            ziplining and ATV rides. During winter, the valley transforms into
            a snow paradise attracting tourists from all over India.
          </p>

          <p>
            Rohtang Pass is another iconic destination near Manali. Situated at
            an altitude of over 13,000 feet, Rohtang Pass offers spectacular
            mountain views and snow-covered landscapes. It is among the most
            visited places in Himachal Pradesh and a major highlight of every
            Kullu Manali Tour Package.
          </p>

          <p>
            Atal Tunnel has become one of the most popular attractions in
            Himachal Pradesh. This engineering marvel connects Manali with
            Lahaul Valley and provides travelers with access to stunning
            destinations such as Sissu and Keylong.
          </p>

          <p>
            Hidimba Devi Temple is one of the oldest and most famous temples in
            Manali. Surrounded by cedar forests, this unique wooden temple is
            dedicated to Hidimba Devi and attracts thousands of visitors every
            year.
          </p>

          <p>
            Mall Road Manali is the heart of the town and a favorite destination
            for shopping, dining and evening walks. Travelers can purchase local
            handicrafts, woolen clothes, souvenirs and Himachali products here.
          </p>

          <p>
            Adventure enthusiasts can enjoy river rafting, trekking, camping,
            mountain biking, skiing and paragliding. Manali is widely regarded
            as one of India's best adventure tourism destinations.
          </p>

          <p>
            Travelers searching for Manali Tour Package from Delhi, Kullu
            Manali Package, Manali Honeymoon Package, Manali Family Tour Package
            or Manali Holiday Package can choose customized travel plans through
            Yorra Travels.
          </p>

          <p>
            The best time to visit Manali is throughout the year. Summer months
            from March to June are ideal for sightseeing and adventure
            activities, while winter months from December to February are
            perfect for snowfall lovers.
          </p>

          <p>
            Manali is also one of India's top honeymoon destinations. Couples
            can enjoy scenic landscapes, cozy resorts, snowfall experiences and
            romantic mountain views.
          </p>

          <p>
            Book your Manali Tour Package with Yorra Travels and explore Solang
            Valley, Rohtang Pass, Atal Tunnel, Hidimba Temple and the natural
            beauty of Himachal Pradesh.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Manali Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Manali",
              details:
                "Arrival, hotel check-in and evening visit to Mall Road.",
            },
            {
              day: "Day 2",
              title: "Local Sightseeing",
              details:
                "Visit Hidimba Temple, Vashisht Temple, Tibetan Monastery and Club House.",
            },
            {
              day: "Day 3",
              title: "Solang Valley Adventure",
              details:
                "Enjoy paragliding, ATV rides, skiing and adventure activities.",
            },
            {
              day: "Day 4",
              title: "Rohtang Pass & Atal Tunnel",
              details:
                "Explore Rohtang Pass, Atal Tunnel and Sissu Valley.",
            },
            {
              day: "Day 5",
              title: "Kullu Excursion",
              details:
                "Visit Kullu Valley, river rafting points and local markets.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Breakfast and transfer for onward journey.",
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
          Top Tourist Places in Manali
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Solang Valley",
              desc: "Famous adventure destination known for paragliding, skiing and snow activities.",
            },
            {
              name: "Rohtang Pass",
              desc: "Iconic mountain pass offering breathtaking Himalayan landscapes.",
            },
            {
              name: "Atal Tunnel",
              desc: "Engineering marvel connecting Manali with Lahaul Valley.",
            },
            {
              name: "Hidimba Devi Temple",
              desc: "Ancient wooden temple surrounded by beautiful cedar forests.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Manali Image
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
              <li>✔ Daily Breakfast & Dinner</li>
              <li>✔ Private Cab for Sightseeing</li>
              <li>✔ Solang Valley Visit</li>
              <li>✔ Rohtang Pass Excursion</li>
              <li>✔ Atal Tunnel Visit</li>
              <li>✔ Driver Allowance</li>
              <li>✔ Toll Tax & Parking</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Flight Tickets</li>
              <li>✘ Volvo Tickets</li>
              <li>✘ Lunch</li>
              <li>✘ Adventure Activities</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Entry Fees Not Mentioned</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Manali Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Manali?
            </h3>
            <p className="text-slate-300">
              Manali can be visited throughout the year. Snowfall lovers should visit between December and February.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Manali good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, Manali is one of India's most popular honeymoon destinations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Manali?
            </h3>
            <p className="text-slate-300">
              A 5 Nights 6 Days itinerary is ideal for exploring Manali and nearby attractions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Rohtang Pass included in Manali packages?
            </h3>
            <p className="text-slate-300">
              Most Manali tour packages include Rohtang Pass or Atal Tunnel sightseeing depending on weather conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the average Manali trip cost?
            </h3>
            <p className="text-slate-300">
              Manali trip cost depends on hotel category, travel season and package inclusions.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Mountain Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/ladakh-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Ladakh Tour Package
          </Link>

          <Link
            href="/packages/spiti-valley"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Spiti Valley Tour Package
          </Link>

          <Link
            href="/packages/darjeeling-gangtok"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Darjeeling Gangtok Package
          </Link>

          <Link
            href="/packages/kashmir-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Kashmir Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Manali Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹12,999
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
              ₹18,999
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

      {/* CTA */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready For Manali?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Experience the beauty of Manali with snow-capped mountains,
          Solang Valley adventures, Rohtang Pass sightseeing and memorable
          Himalayan vacations with Yorra Travels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Manali%20Tour%20Package."
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

      {/* TouristTrip Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Manali Tour Package",
            description:
              "Best Manali Tour Package including Solang Valley, Rohtang Pass, Atal Tunnel and Kullu Valley sightseeing.",
            touristType: [
              "Family",
              "Couple",
              "Honeymoon",
              "Adventure"
            ],
            provider: {
              "@type": "TravelAgency",
              name: "Yorra Travels",
              telephone: "+91-9717367006",
              url: "https://yorra.in"
            }
          }),
        }}
      />

      {/* FAQ Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best time to visit Manali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Manali can be visited throughout the year. Snowfall lovers should visit from December to February."
                }
              },
              {
                "@type": "Question",
                name: "Is Manali good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Manali is one of India's most popular honeymoon destinations."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Manali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5 Nights 6 Days itinerary is ideal for exploring Manali and nearby attractions."
                }
              },
              {
                "@type": "Question",
                name: "Is Rohtang Pass included in Manali packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Manali tour packages include Rohtang Pass or Atal Tunnel sightseeing depending on weather conditions."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}