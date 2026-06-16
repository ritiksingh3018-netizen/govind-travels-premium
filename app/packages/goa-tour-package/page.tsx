"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function GoaPage() {
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
          destination: "Goa Tour Package",
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
              "url('/goa.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Goa Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Beaches, Nightlife & Unlimited Fun
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Goa%20Tour%20Package."
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
          Goa Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Baga Beach",
            "Calangute Beach",
            "Candolim Beach",
            "Dudhsagar Waterfalls",
            "Aguada Fort",
            "Cruise Dinner",
            "North Goa Sightseeing",
            "South Goa Sightseeing",
            "Water Sports Activities",
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
          Best Goa Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Goa Tour Package is one of the most searched holiday packages in India.
            Famous for its golden beaches, vibrant nightlife, Portuguese heritage,
            luxury resorts and adventure activities, Goa attracts millions of tourists
            every year. Whether you are planning a honeymoon, family vacation,
            friends trip or corporate getaway, Goa offers unforgettable experiences.
          </p>

          <p>
            North Goa is known for its lively atmosphere, beach shacks, nightlife,
            clubs and water sports. Popular beaches such as Baga Beach, Calangute
            Beach, Candolim Beach, Anjuna Beach and Vagator Beach attract visitors
            from around the world. Travelers can enjoy parasailing, jet skiing,
            banana boat rides and beach parties.
          </p>

          <p>
            Baga Beach is one of Goa's most iconic attractions. It is famous for
            nightlife, Tito's Lane, beachside restaurants and adventure sports.
            Visitors looking for fun and entertainment often choose Baga Beach
            as their primary destination.
          </p>

          <p>
            Calangute Beach, often called the Queen of Beaches, offers a perfect
            blend of relaxation and activities. The beach is surrounded by cafes,
            resorts and shopping areas, making it one of the busiest tourist spots
            in Goa.
          </p>

          <p>
            South Goa is completely different from North Goa. It is known for
            peaceful beaches, luxury resorts and scenic beauty. Popular attractions
            include Colva Beach, Palolem Beach, Benaulim Beach and Miramar Beach.
            South Goa is especially popular among honeymoon couples and families.
          </p>

          <p>
            Dudhsagar Waterfalls is another major attraction included in many Goa
            itineraries. This spectacular waterfall is among the tallest waterfalls
            in India and offers a memorable experience for nature lovers.
          </p>

          <p>
            Aguada Fort is one of Goa's most famous historical landmarks. Built by
            the Portuguese in the 17th century, the fort offers panoramic views of
            the Arabian Sea and attracts thousands of visitors every year.
          </p>

          <p>
            Travelers searching for Goa Tour Package from Delhi, Goa Tour Package
            from Mumbai, Goa Honeymoon Package, Goa Family Tour Package or Goa
            Group Package can enjoy customized travel plans through Yorra Travels.
          </p>

          <p>
            Goa is also known for its nightlife. Beach clubs, casinos, live music,
            cruise parties and night markets make Goa one of India's top party
            destinations. At the same time, visitors can enjoy yoga retreats,
            heritage churches and peaceful beaches.
          </p>

          <p>
            The best time to visit Goa is from October to March. During this season,
            the weather remains pleasant and ideal for sightseeing, water sports
            and beach activities. Christmas and New Year are considered the most
            vibrant periods to visit Goa.
          </p>

          <p>
            Book your Goa Tour Package with Yorra Travels and enjoy beautiful
            beaches, adventure activities, luxury resorts, nightlife and unforgettable
            coastal experiences. Goa remains one of India's most loved travel
            destinations for travelers of all ages.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          4 Nights / 5 Days Goa Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Goa",
              details:
                "Arrival, hotel check-in and leisure time at nearby beach.",
            },
            {
              day: "Day 2",
              title: "North Goa Sightseeing",
              details:
                "Visit Baga Beach, Calangute Beach, Candolim Beach and Aguada Fort.",
            },
            {
              day: "Day 3",
              title: "South Goa Tour",
              details:
                "Explore Colva Beach, Miramar Beach, churches and local attractions.",
            },
            {
              day: "Day 4",
              title: "Dudhsagar Waterfalls & Adventure",
              details:
                "Excursion to Dudhsagar Waterfalls and optional water sports activities.",
            },
            {
              day: "Day 5",
              title: "Departure",
              details:
                "Breakfast and transfer to Goa Airport or Railway Station.",
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
          Top Tourist Places in Goa
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Baga Beach",
              desc: "Most famous beach known for nightlife, water sports and beach shacks.",
            },
            {
              name: "Calangute Beach",
              desc: "Popular beach destination known as the Queen of Beaches.",
            },
            {
              name: "Dudhsagar Waterfalls",
              desc: "One of India's tallest waterfalls and a major tourist attraction.",
            },
            {
              name: "Aguada Fort",
              desc: "Historic Portuguese fort offering panoramic sea views.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Goa Image
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
              <li>✔ North Goa Sightseeing</li>
              <li>✔ South Goa Sightseeing</li>
              <li>✔ Private Transfers</li>
              <li>✔ Driver Allowance</li>
              <li>✔ Toll Tax & Parking</li>
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
          Frequently Asked Questions About Goa Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Goa?
            </h3>
            <p className="text-slate-300">
              October to March is considered the best time to visit Goa due to pleasant weather and beach activities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Goa good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, Goa is one of India's most popular honeymoon destinations with beaches, resorts and romantic experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Goa?
            </h3>
            <p className="text-slate-300">
              A 4 Nights 5 Days itinerary is ideal for exploring North Goa and South Goa.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Which is better, North Goa or South Goa?
            </h3>
            <p className="text-slate-300">
              North Goa is famous for nightlife and water sports, while South Goa is known for peaceful beaches and luxury resorts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the average Goa trip cost?
            </h3>
            <p className="text-slate-300">
              Goa trip cost depends on hotel category, season and travel preferences.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Beach Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/gokarna-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Gokarna Tour Package
          </Link>

          <Link
            href="/packages/kerala-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Kerala Tour Package
          </Link>

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

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Goa Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹11,999
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
          Ready For Goa?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Enjoy the best beaches, nightlife, water sports, forts and unforgettable
          sunsets with Yorra Travels. Book your Goa Tour Package today and create
          memories that last forever.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Goa%20Tour%20Package."
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
            name: "Goa Tour Package",
            description:
              "Best Goa Tour Package including North Goa, South Goa, Baga Beach, Calangute Beach and Dudhsagar Waterfalls.",
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
                name: "What is the best time to visit Goa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "October to March is considered the best time to visit Goa."
                }
              },
              {
                "@type": "Question",
                name: "Is Goa good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Goa is one of India's most popular honeymoon destinations."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Goa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 4 Nights 5 Days itinerary is ideal for exploring Goa."
                }
              },
              {
                "@type": "Question",
                name: "Which is better, North Goa or South Goa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "North Goa is known for nightlife and water sports, while South Goa is famous for peaceful beaches and luxury resorts."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}