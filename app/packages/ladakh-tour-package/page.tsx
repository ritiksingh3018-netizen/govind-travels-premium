"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function LadakhPage() {
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
          destination: "Ladakh Tour Package",
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
            backgroundImage: "url('/ladakh.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Ladakh Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Pangong Lake • Nubra Valley • Leh
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Ladakh%20Tour%20Package."
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
          Ladakh Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Pangong Lake",
            "Nubra Valley",
            "Khardung La Pass",
            "Magnetic Hill",
            "Shanti Stupa",
            "Leh Palace",
            "Diskit Monastery",
            "Camel Safari",
            "Adventure Road Trip",
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
          Best Leh Ladakh Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Ladakh Tour Package is one of India's most exciting travel
            experiences. Located in the northernmost region of India,
            Ladakh is famous for dramatic landscapes, high mountain passes,
            crystal-clear lakes, Buddhist monasteries and adventure tourism.
            Travelers from around the world visit Ladakh to witness its
            breathtaking beauty and unique culture.
          </p>

          <p>
            Leh, the capital of Ladakh, serves as the gateway to this
            Himalayan paradise. The town is surrounded by snow-covered
            mountains and offers attractions such as Leh Palace,
            Shanti Stupa, Hall of Fame Museum and vibrant local markets.
          </p>

          <p>
            Pangong Lake is undoubtedly the most famous attraction in
            Ladakh. Situated at an altitude of more than 14,000 feet,
            Pangong Lake is known for its mesmerizing blue waters that
            change colors throughout the day. The lake became globally
            popular after being featured in Bollywood movies and remains
            one of the top reasons travelers choose a Leh Ladakh Tour Package.
          </p>

          <p>
            Nubra Valley is another must-visit destination. Known for its
            sand dunes, double-humped Bactrian camels and spectacular
            mountain scenery, Nubra Valley offers a completely different
            landscape compared to the rest of Ladakh.
          </p>

          <p>
            Khardung La Pass is one of the highest motorable roads in the
            world and a dream destination for bikers and adventure
            enthusiasts. Driving through Khardung La is considered one of
            the highlights of a Ladakh road trip.
          </p>

          <p>
            Magnetic Hill is a fascinating attraction where vehicles appear
            to move uphill against gravity. It is one of the most visited
            tourist spots in Ladakh and attracts curious travelers from
            across the world.
          </p>

          <p>
            Ladakh is also known for its rich Buddhist heritage. Monasteries
            such as Hemis Monastery, Thiksey Monastery, Diskit Monastery
            and Alchi Monastery provide insight into the region's spiritual
            traditions and culture.
          </p>

          <p>
            Adventure lovers can enjoy bike trips, trekking, river rafting,
            camping, ATV rides and wildlife exploration. Ladakh remains one
            of the best destinations in India for adventure tourism.
          </p>

          <p>
            Travelers searching for Leh Ladakh Tour Package from Delhi,
            Ladakh Bike Trip Package, Ladakh Honeymoon Package, Ladakh
            Family Package or Pangong Lake Tour Package can find customized
            itineraries through Yorra Travels.
          </p>

          <p>
            The best time to visit Ladakh is between May and September when
            roads remain open and weather conditions are favorable for
            sightseeing and adventure activities.
          </p>

          <p>
            Whether you are a biker, nature lover, photographer, honeymoon
            couple or family traveler, Ladakh offers experiences unlike any
            other destination in India.
          </p>

          <p>
            Book your Ladakh Tour Package with Yorra Travels and explore
            Pangong Lake, Nubra Valley, Khardung La Pass, monasteries and
            unforgettable Himalayan landscapes.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          5 Nights / 6 Days Ladakh Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Leh",
              details:
                "Arrival, acclimatization and local sightseeing including Shanti Stupa and Leh Market.",
            },
            {
              day: "Day 2",
              title: "Leh Local Sightseeing",
              details:
                "Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib and Sangam Point.",
            },
            {
              day: "Day 3",
              title: "Leh to Nubra Valley",
              details:
                "Drive via Khardung La Pass and explore Diskit Monastery and Hunder Sand Dunes.",
            },
            {
              day: "Day 4",
              title: "Nubra Valley to Pangong Lake",
              details:
                "Scenic drive to Pangong Lake and overnight lakeside stay.",
            },
            {
              day: "Day 5",
              title: "Pangong Lake to Leh",
              details:
                "Enjoy sunrise views at Pangong Lake and return to Leh.",
            },
            {
              day: "Day 6",
              title: "Departure",
              details:
                "Breakfast and transfer to Leh Airport for onward journey.",
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
          Top Tourist Places in Ladakh
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Pangong Lake",
              desc: "World-famous high-altitude lake known for its crystal-clear blue waters.",
            },
            {
              name: "Nubra Valley",
              desc: "Beautiful valley famous for sand dunes, monasteries and Bactrian camels.",
            },
            {
              name: "Khardung La Pass",
              desc: "One of the world's highest motorable mountain passes.",
            },
            {
              name: "Magnetic Hill",
              desc: "Unique natural phenomenon attracting visitors from around the world.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Ladakh Image
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
              <li>✔ Airport Transfers</li>
              <li>✔ Private Cab for Sightseeing</li>
              <li>✔ Pangong Lake Excursion</li>
              <li>✔ Nubra Valley Visit</li>
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
              <li>✘ Lunch</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Adventure Activities</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Camera Charges</li>
              <li>✘ Entry Fees Not Mentioned</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Ladakh Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Ladakh?
            </h3>
            <p className="text-slate-300">
              May to September is considered the best time to visit Ladakh when roads and attractions are accessible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Ladakh?
            </h3>
            <p className="text-slate-300">
              A 5 Nights 6 Days itinerary is ideal for exploring Leh, Nubra Valley and Pangong Lake.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Ladakh suitable for family trips?
            </h3>
            <p className="text-slate-300">
              Yes, Ladakh is suitable for families provided proper acclimatization and planning are followed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Pangong Lake included in Ladakh packages?
            </h3>
            <p className="text-slate-300">
              Yes, Pangong Lake is one of the major highlights included in most Ladakh tour packages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Can I do a bike trip in Ladakh?
            </h3>
            <p className="text-slate-300">
              Absolutely. Ladakh is one of the most popular bike trip destinations in India.
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
            href="/packages/spiti-valley"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Spiti Valley Tour Package
          </Link>

          <Link
            href="/packages/darjeeling-gangtok"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Darjeeling Gangtok Tour Package
          </Link>

          <Link
            href="/packages/tawang-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Tawang Tour Package
          </Link>

          <Link
            href="/packages/kedarnath-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Kedarnath Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Ladakh Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-cyan-400">
              ₹19,999
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
              ₹29,999
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
              ₹44,999
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
          Ready For Ladakh?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Explore the magical landscapes of Leh Ladakh, witness the beauty of
          Pangong Lake, experience Nubra Valley adventures and conquer the
          legendary Khardung La Pass with Yorra Travels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Ladakh%20Tour%20Package."
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
            name: "Ladakh Tour Package",
            description:
              "Best Leh Ladakh Tour Package including Pangong Lake, Nubra Valley, Khardung La Pass and Leh sightseeing.",
            touristType: [
              "Adventure",
              "Family",
              "Couple",
              "Group"
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
                name: "What is the best time to visit Ladakh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "May to September is considered the best time to visit Ladakh."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Ladakh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5 Nights 6 Days itinerary is ideal for exploring Leh, Nubra Valley and Pangong Lake."
                }
              },
              {
                "@type": "Question",
                name: "Is Ladakh suitable for family trips?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Ladakh is suitable for families with proper acclimatization and planning."
                }
              },
              {
                "@type": "Question",
                name: "Is Pangong Lake included in Ladakh packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Pangong Lake is one of the major highlights included in most Ladakh tour packages."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}