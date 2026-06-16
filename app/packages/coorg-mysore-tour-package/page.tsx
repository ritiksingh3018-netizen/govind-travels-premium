"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CoorgMysorePage() {
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
          destination: "Coorg Mysore Tour Package",
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

      {/* HERO SECTION */}

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
              Coorg Mysore Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Coffee Plantations, Waterfalls & Royal Heritage
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

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
                <div className="text-green-400 text-center">
                  Inquiry Submitted Successfully
                </div>
              )}

            </form>

            <a
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Coorg%20Mysore%20Tour%20Package."
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
          Coorg Mysore Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Mysore Palace",
            "Brindavan Gardens",
            "Chamundi Hills",
            "Abbey Falls",
            "Raja Seat",
            "Dubare Elephant Camp",
            "Coffee Plantation Tour",
            "Nisargadhama",
            "Luxury Hill Stay",
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
          Best Coorg Mysore Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Looking for the best Coorg Mysore Tour Package? Yorra Travels
            offers carefully designed Coorg Mysore holiday packages for
            families, couples, honeymoon travelers and groups. This package
            combines the royal heritage of Mysore with the natural beauty of
            Coorg, making it one of the most popular Karnataka tour packages.
          </p>

          <p>
            Mysore is famous for its magnificent Mysore Palace, Chamundi Hills,
            Brindavan Gardens and rich cultural heritage. Travelers from across
            India visit Mysore to experience its architecture, royal history and
            vibrant local markets. The city is also known for its traditional
            silk products, sandalwood items and cultural festivals.
          </p>

          <p>
            Coorg, often called the Scotland of India, is known for lush green
            hills, coffee plantations, waterfalls and scenic landscapes. The
            destination offers a peaceful retreat away from city life and is
            ideal for nature lovers. Attractions such as Abbey Falls, Raja Seat,
            Dubare Elephant Camp and Talacauvery attract thousands of visitors
            every year.
          </p>

          <p>
            This Coorg Mysore package includes comfortable hotel stays,
            sightseeing tours, private transportation and dedicated travel
            assistance. Whether you are planning a honeymoon trip, family
            vacation or weekend getaway, our package ensures a hassle-free and
            memorable experience.
          </p>

          <p>
            The best time to visit Coorg and Mysore is from October to March.
            During this period the weather remains pleasant and ideal for
            sightseeing. Travelers can enjoy clear skies, cool temperatures and
            breathtaking views of the Western Ghats.
          </p>

          <p>
            Coorg is particularly famous for its coffee estates. Visitors can
            explore plantation trails, learn about coffee production and enjoy
            fresh local coffee while surrounded by beautiful landscapes. The
            region is also home to rich wildlife and bird species, making it a
            paradise for photographers and nature enthusiasts.
          </p>

          <p>
            Mysore offers a completely different experience with its royal
            heritage and historical attractions. The illuminated Mysore Palace,
            especially during weekends and festivals, creates an unforgettable
            sight for travelers. Brindavan Gardens and musical fountain shows
            are among the most visited attractions in Karnataka.
          </p>

          <p>
            If you are searching for Coorg Mysore Tour Package Cost, Coorg
            Mysore Family Package, Coorg Honeymoon Package or Karnataka Tour
            Package, Yorra Travels provides customized itineraries at the best
            prices. Our travel experts help you create the perfect itinerary
            according to your budget and preferences.
          </p>

        </div>

      </section>

      {/* Itinerary */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Coorg Mysore Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Mysore",
              details:
                "Pickup, hotel check-in and evening visit to Mysore Palace.",
            },
            {
              day: "Day 2",
              title: "Mysore Sightseeing",
              details:
                "Visit Chamundi Hills, Brindavan Gardens and local attractions.",
            },
            {
              day: "Day 3",
              title: "Transfer to Coorg",
              details:
                "Scenic drive to Coorg through beautiful Karnataka landscapes.",
            },
            {
              day: "Day 4",
              title: "Coorg Sightseeing",
              details:
                "Visit Abbey Falls, Raja Seat and coffee plantations.",
            },
            {
              day: "Day 5",
              title: "Dubare & Nisargadhama",
              details:
                "Explore Dubare Elephant Camp and Nisargadhama Island.",
            },
            {
              day: "Day 6",
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
          Top Tourist Places in Coorg & Mysore
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Mysore Palace",
              desc: "One of India's most beautiful royal palaces.",
            },
            {
              name: "Abbey Falls",
              desc: "Popular waterfall surrounded by coffee plantations.",
            },
            {
              name: "Dubare Elephant Camp",
              desc: "Famous wildlife and elephant interaction center.",
            },
            {
              name: "Brindavan Gardens",
              desc: "Known for musical fountain and evening views.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Destination Image
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
              <li>✔ Mysore Sightseeing</li>
              <li>✔ Coorg Sightseeing</li>
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
              <li>✘ Lunch & Dinner</li>
              <li>✘ Entry Fees</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Anything Not Mentioned Above</li>
            </ul>

          </div>

        </div>

      </section>

      {/* SEO FAQ Section */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Coorg Mysore Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Coorg and Mysore?
            </h3>
            <p className="text-slate-300">
              October to March is considered the best season for visiting Coorg and Mysore due to pleasant weather and excellent sightseeing conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How much does a Coorg Mysore Tour Package cost?
            </h3>
            <p className="text-slate-300">
              The package cost depends on hotel category, travel dates, transportation and customization options. Contact Yorra Travels for the latest price.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Coorg good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes. Coorg is one of the most popular honeymoon destinations in South India because of its romantic weather, coffee estates and scenic resorts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Coorg and Mysore?
            </h3>
            <p className="text-slate-300">
              A 5 Nights 6 Days itinerary is ideal to comfortably explore major attractions in both destinations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Which are the top attractions in Coorg?
            </h3>
            <p className="text-slate-300">
              Abbey Falls, Raja Seat, Dubare Elephant Camp, Talacauvery and coffee plantations are among the top tourist attractions in Coorg.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Linking Section */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/ooty-kodaikanal"
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
          >
            Ooty Kodaikanal Package
          </Link>

          <Link
            href="/packages/pondicherry"
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
          >
            Pondicherry Package
          </Link>

          <Link
            href="/packages/andaman"
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
          >
            Andaman Package
          </Link>

          <Link
            href="/packages/sikkim"
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
          >
            Sikkim Package
          </Link>

        </div>

      </section>      {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Coorg Mysore Tour Package Price
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
              ₹28,999
            </p>

            <p className="mt-4 text-slate-300">
              Per Person
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Book Your Coorg Mysore Tour Today
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Explore the royal charm of Mysore and the natural beauty of Coorg
          with Yorra Travels. Get customized itineraries, best hotel deals,
          sightseeing and complete travel assistance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Coorg%20Mysore%20Tour%20Package."
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

      {/* SEO SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Coorg Mysore Tour Package",
            description:
              "Best Coorg Mysore Tour Package by Yorra Travels",
            touristType: [
              "Family",
              "Couple",
              "Group",
              "Honeymoon"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best time to visit Coorg and Mysore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "October to March is the best time to visit Coorg and Mysore."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Coorg Mysore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5 Nights 6 Days itinerary is ideal."
                }
              },
              {
                "@type": "Question",
                name: "Is Coorg good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Coorg is among the top honeymoon destinations in South India."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}