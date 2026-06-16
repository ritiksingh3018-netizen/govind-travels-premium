"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function KeralaPage() {
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
          destination: "Kerala Tour Package",
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
            backgroundImage:
              "url('/kerala.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Kerala Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              God's Own Country Awaits You
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Kerala%20Tour%20Package."
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
          Kerala Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Munnar Tea Gardens",
            "Alleppey Houseboat Stay",
            "Thekkady Wildlife Safari",
            "Kochi Sightseeing",
            "Athirappilly Waterfalls",
            "Periyar National Park",
            "Backwater Cruise",
            "Spice Plantation Tour",
            "Kerala Beaches",
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
          Best Kerala Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Kerala Tour Package is one of the most popular holiday packages in
            India. Known as "God's Own Country", Kerala attracts millions of
            travelers every year with its scenic backwaters, lush green hills,
            wildlife sanctuaries, beaches and unique culture. Whether you are
            planning a family vacation, honeymoon trip or group tour, Kerala
            offers unforgettable experiences for every traveler.
          </p>

          <p>
            Munnar is among the most visited destinations in Kerala. Famous for
            its rolling tea plantations, mist-covered mountains and pleasant
            climate, Munnar is a paradise for nature lovers. Visitors can
            explore tea gardens, waterfalls, Echo Point and scenic viewpoints
            that provide breathtaking views of the Western Ghats.
          </p>

          <p>
            Alleppey is globally known for its beautiful backwaters and luxury
            houseboat experiences. Cruising through the serene canals and
            witnessing village life along the backwaters is one of the most
            memorable experiences in Kerala. Alleppey houseboats have become
            one of the biggest attractions for domestic and international
            tourists.
          </p>

          <p>
            Thekkady is another major highlight of Kerala. Home to the famous
            Periyar Wildlife Sanctuary, this destination offers wildlife
            safaris, bamboo rafting and spice plantation tours. Nature lovers
            can enjoy sightings of elephants, deer and a variety of bird
            species.
          </p>

          <p>
            Kochi, also known as Cochin, is the cultural gateway to Kerala.
            The city is famous for Fort Kochi, Chinese Fishing Nets, Mattancherry
            Palace and colonial architecture. Kochi perfectly blends modern
            city life with Kerala's rich heritage.
          </p>

          <p>
            Kerala is also one of the most sought-after honeymoon destinations
            in India. Couples enjoy romantic houseboat stays, hill station
            retreats and beautiful beach sunsets. Many travelers search for
            Kerala Honeymoon Package, Kerala Couple Package and Munnar Alleppey
            Honeymoon Tour due to the region's romantic atmosphere.
          </p>

          <p>
            Travelers looking for Kerala Tour Package from Delhi, Kerala Tour
            Package from Mumbai, Kerala Family Package or South India Holiday
            Package can choose customized itineraries through Yorra Travels.
            We provide complete travel assistance, comfortable stays and
            personalized sightseeing experiences.
          </p>

          <p>
            Kerala is also famous for Ayurveda and wellness tourism. Visitors
            from around the world travel here for rejuvenation therapies,
            yoga retreats and traditional Ayurvedic treatments. This makes
            Kerala a unique destination combining relaxation, health and
            tourism.
          </p>

          <p>
            The best time to visit Kerala is between October and March. During
            this period the weather remains pleasant and suitable for
            sightseeing, houseboat cruises and hill station visits. The monsoon
            season is also popular among Ayurveda tourists.
          </p>

          <p>
            Book your Kerala Tour Package with Yorra Travels and experience
            stunning landscapes, beautiful backwaters, wildlife adventures,
            tea gardens and world-famous hospitality. Kerala remains one of
            India's most complete travel destinations offering nature,
            adventure, culture and relaxation in a single trip.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Kerala Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Kochi",
              details:
                "Arrival at Kochi Airport, local sightseeing and overnight stay.",
            },
            {
              day: "Day 2",
              title: "Kochi to Munnar",
              details:
                "Drive to Munnar, visit waterfalls, tea gardens and scenic viewpoints.",
            },
            {
              day: "Day 3",
              title: "Munnar Sightseeing",
              details:
                "Explore Echo Point, Mattupetty Dam, Tea Museum and local attractions.",
            },
            {
              day: "Day 4",
              title: "Munnar to Thekkady",
              details:
                "Visit Periyar Wildlife Sanctuary and spice plantations.",
            },
            {
              day: "Day 5",
              title: "Alleppey Houseboat",
              details:
                "Enjoy a backwater cruise and overnight stay in a traditional houseboat.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Transfer to Kochi Airport for departure.",
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
          Top Tourist Places in Kerala
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Munnar",
              desc: "Famous for tea gardens, waterfalls and breathtaking mountain views.",
            },
            {
              name: "Alleppey",
              desc: "World-famous backwaters and luxury houseboat experiences.",
            },
            {
              name: "Thekkady",
              desc: "Home to Periyar Wildlife Sanctuary and spice plantations.",
            },
            {
              name: "Kochi",
              desc: "Historic city known for Fort Kochi and Chinese Fishing Nets.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Kerala Image
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
              <li>✔ Houseboat Stay in Alleppey</li>
              <li>✔ Daily Breakfast</li>
              <li>✔ Private Cab</li>
              <li>✔ Munnar Sightseeing</li>
              <li>✔ Thekkady Sightseeing</li>
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
              <li>✘ Train Tickets</li>
              <li>✘ Lunch & Dinner</li>
              <li>✘ Entry Tickets</li>
              <li>✘ Adventure Activities</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ Section */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Kerala Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Kerala?
            </h3>
            <p className="text-slate-300">
              October to March is considered the best time to visit Kerala for sightseeing, houseboats and hill stations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Kerala good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, Kerala is one of India's most popular honeymoon destinations due to its backwaters, beaches and hill stations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Kerala?
            </h3>
            <p className="text-slate-300">
              A 5 Nights 6 Days Kerala itinerary is ideal for exploring Munnar, Thekkady and Alleppey.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is houseboat stay included in Kerala packages?
            </h3>
            <p className="text-slate-300">
              Most Kerala packages include an overnight houseboat stay in Alleppey.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the average Kerala trip cost?
            </h3>
            <p className="text-slate-300">
              Kerala trip cost depends on hotel category, season and package inclusions.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More South India Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/ooty-kodaikanal"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Ooty Kodaikanal Package
          </Link>

          <Link
            href="/packages/coorg-mysore-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Coorg Mysore Package
          </Link>

          <Link
            href="/packages/pondicherry"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Pondicherry Tour Package
          </Link>

          <Link
            href="/packages/gokarna-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Gokarna Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Kerala Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹16,999
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
              ₹24,999
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
              ₹39,999
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
          Ready For Kerala?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Explore the beauty of Munnar, Alleppey, Thekkady and Kochi with
          Yorra Travels. Enjoy tea gardens, houseboats, wildlife and
          unforgettable experiences in God's Own Country.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Kerala%20Tour%20Package."
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
            name: "Kerala Tour Package",
            description:
              "Best Kerala Tour Package including Munnar, Alleppey, Thekkady and Kochi.",
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
                name: "What is the best time to visit Kerala?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "October to March is considered the best time to visit Kerala."
                }
              },
              {
                "@type": "Question",
                name: "Is Kerala good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Kerala is one of the most popular honeymoon destinations in India."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Kerala?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5 Nights 6 Days itinerary is ideal for exploring Kerala."
                }
              },
              {
                "@type": "Question",
                name: "Is houseboat stay included in Kerala packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Kerala packages include an overnight houseboat stay in Alleppey."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}