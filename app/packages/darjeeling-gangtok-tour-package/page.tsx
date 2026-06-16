"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function DarjeelingGangtokPage() {
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
          destination: "Darjeeling Gangtok Tour Package",
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
              "url('/darjeeling-gangtok.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Darjeeling Gangtok Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Tea Gardens, Himalayas & Sikkim Beauty
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Darjeeling%20Gangtok%20Tour%20Package."
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
          Darjeeling Gangtok Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Tiger Hill Sunrise",
            "Tsomgo Lake",
            "Nathula Pass",
            "MG Marg",
            "Batasia Loop",
            "Ghoom Monastery",
            "Tea Garden Tour",
            "Himalayan Views",
            "Gangtok Sightseeing",
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
          Best Darjeeling Gangtok Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Darjeeling Gangtok Tour Package is one of the most popular
            Himalayan holiday packages in India. This journey combines the
            colonial charm of Darjeeling with the breathtaking beauty of
            Gangtok, offering travelers a perfect blend of nature,
            adventure, culture and scenic mountain landscapes.
          </p>

          <p>
            Darjeeling is known worldwide for its tea gardens, panoramic
            Himalayan views and the famous Darjeeling Himalayan Railway.
            The destination attracts families, honeymoon couples and
            adventure enthusiasts throughout the year. Visitors can enjoy
            mesmerizing views of Kanchenjunga, explore local monasteries
            and experience the unique culture of the region.
          </p>

          <p>
            Tiger Hill is among the most famous attractions in Darjeeling.
            Watching the sunrise over the snow-covered peaks of
            Kanchenjunga is a once-in-a-lifetime experience. Travelers
            from across the globe visit Tiger Hill for its spectacular
            early morning views.
          </p>

          <p>
            Batasia Loop and Ghoom Monastery are other major attractions
            that showcase the heritage and beauty of Darjeeling. The toy
            train route passing through Batasia Loop is a UNESCO
            World Heritage attraction and one of the most photographed
            locations in the region.
          </p>

          <p>
            Gangtok, the capital of Sikkim, is known for its clean roads,
            beautiful monasteries and stunning mountain scenery. MG Marg
            is the heart of Gangtok and offers shopping, cafes and local
            experiences. The city provides a perfect combination of
            modern tourism facilities and natural beauty.
          </p>

          <p>
            Tsomgo Lake is one of the most visited attractions near
            Gangtok. Surrounded by mountains, this glacial lake changes
            its appearance with the seasons and remains a favorite spot
            for photographers and nature lovers.
          </p>

          <p>
            Nathula Pass is another highlight of this package. Located on
            the Indo-China border, Nathula is one of the highest motorable
            roads in the world and offers unforgettable views of the
            Eastern Himalayas.
          </p>

          <p>
            Travelers searching for Darjeeling Gangtok Tour Package from
            Delhi, Darjeeling Gangtok Honeymoon Package, Darjeeling Family
            Tour Package or Sikkim Darjeeling Holiday Package can enjoy
            customized itineraries through Yorra Travels.
          </p>

          <p>
            The best time to visit Darjeeling and Gangtok is between
            March and June and again from September to December. During
            these months the weather remains pleasant and ideal for
            sightseeing and photography.
          </p>

          <p>
            Our Darjeeling Gangtok Tour Package includes comfortable
            accommodation, sightseeing, transfers and dedicated travel
            assistance. Whether you are planning a romantic honeymoon,
            family vacation or group trip, this package provides a
            memorable Himalayan experience.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Darjeeling Gangtok Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival at Gangtok",
              details:
                "Pickup from Bagdogra Airport / NJP Station and transfer to Gangtok.",
            },
            {
              day: "Day 2",
              title: "Tsomgo Lake & Nathula Pass",
              details:
                "Excursion to Tsomgo Lake, Baba Mandir and Nathula Pass.",
            },
            {
              day: "Day 3",
              title: "Gangtok Sightseeing",
              details:
                "Visit MG Marg, Hanuman Tok, Ganesh Tok and local attractions.",
            },
            {
              day: "Day 4",
              title: "Transfer to Darjeeling",
              details:
                "Scenic drive to Darjeeling with beautiful Himalayan views.",
            },
            {
              day: "Day 5",
              title: "Darjeeling Sightseeing",
              details:
                "Tiger Hill Sunrise, Batasia Loop, Ghoom Monastery and Tea Gardens.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Breakfast and transfer to Bagdogra Airport or NJP Railway Station.",
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
          Top Tourist Places in Darjeeling & Gangtok
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Tiger Hill",
              desc: "Famous sunrise point offering spectacular Kanchenjunga views.",
            },
            {
              name: "Tsomgo Lake",
              desc: "Beautiful glacial lake surrounded by snow-capped mountains.",
            },
            {
              name: "MG Marg",
              desc: "The heart of Gangtok known for shopping and local culture.",
            },
            {
              name: "Batasia Loop",
              desc: "Iconic Darjeeling toy train attraction and viewpoint.",
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
              <li>✔ Private Transfers</li>
              <li>✔ Gangtok Sightseeing</li>
              <li>✔ Darjeeling Sightseeing</li>
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
              <li>✘ Nathula Permit Charges (if applicable)</li>
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
              What is the best time to visit Darjeeling and Gangtok?
            </h3>
            <p className="text-slate-300">
              March to June and September to December are considered the best months for visiting Darjeeling and Gangtok.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Nathula Pass included in the package?
            </h3>
            <p className="text-slate-300">
              Nathula Pass can be included subject to permit availability and weather conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Darjeeling Gangtok good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, it is one of the most popular honeymoon destinations in Eastern India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Darjeeling and Gangtok?
            </h3>
            <p className="text-slate-300">
              A 5 Nights 6 Days itinerary is ideal to explore the major attractions comfortably.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the average Darjeeling Gangtok trip cost?
            </h3>
            <p className="text-slate-300">
              The trip cost depends on hotel category, season and customization preferences.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Himalayan Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/sikkim"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Sikkim Tour Package
          </Link>

          <Link
            href="/packages/tawang"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Tawang Tour Package
          </Link>

          <Link
            href="/packages/meghalaya"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Meghalaya Tour Package
          </Link>

          <Link
            href="/packages/spiti"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Spiti Valley Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Darjeeling Gangtok Tour Package Price
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
          Ready For Darjeeling & Gangtok?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Experience the beauty of the Himalayas, stunning tea gardens,
          monasteries, lakes and unforgettable mountain views with Yorra Travels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Darjeeling%20Gangtok%20Tour%20Package."
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
            name: "Darjeeling Gangtok Tour Package",
            description:
              "Best Darjeeling Gangtok Tour Package by Yorra Travels",
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
                name: "What is the best time to visit Darjeeling and Gangtok?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "March to June and September to December are the best months."
                }
              },
              {
                "@type": "Question",
                name: "Is Nathula Pass included in the package?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nathula Pass can be included subject to permit availability."
                }
              },
              {
                "@type": "Question",
                name: "Is Darjeeling Gangtok good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is one of the most popular honeymoon destinations in Eastern India."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Darjeeling and Gangtok?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5 Nights 6 Days itinerary is ideal."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}