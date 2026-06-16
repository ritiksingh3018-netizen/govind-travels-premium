"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CharDhamPage() {
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
          destination: "Char Dham Yatra Package",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/chardham.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Char Dham Yatra Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Yamunotri • Gangotri • Kedarnath • Badrinath
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
                className="w-full bg-indigo-500 hover:bg-indigo-600 py-4 rounded-xl font-bold"
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Char%20Dham%20Yatra%20Package."
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
          Char Dham Yatra Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Yamunotri Temple Darshan",
            "Gangotri Temple Darshan",
            "Kedarnath Temple Darshan",
            "Badrinath Temple Darshan",
            "Devprayag Sangam",
            "Rudraprayag Visit",
            "Mana Village",
            "Himalayan Pilgrimage Journey",
            "Spiritual Uttarakhand Experience",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              ✅ {item}
            </div>
          ))}

        </div>

      </section>

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Best Char Dham Yatra Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Char Dham Yatra Package is one of the most sacred pilgrimage
            journeys in Hinduism. The Char Dham circuit includes Yamunotri,
            Gangotri, Kedarnath and Badrinath, located in the majestic
            Himalayan region of Uttarakhand. Every year lakhs of devotees
            undertake this spiritual journey to seek blessings and attain
            spiritual fulfillment.
          </p>

          <p>
            The Char Dham Yatra holds immense religious significance. It is
            believed that visiting these four holy shrines helps devotees
            cleanse their sins and move closer to salvation. The yatra is
            considered one of the most important pilgrimages for Hindus and
            attracts pilgrims from India and across the world.
          </p>

          <p>
            Yamunotri is the first destination of the Char Dham circuit and
            is dedicated to Goddess Yamuna. Located amidst beautiful mountains,
            Yamunotri Temple is known for its spiritual atmosphere and natural
            hot water springs. Pilgrims undertake a scenic trek to reach this
            sacred shrine.
          </p>

          <p>
            Gangotri is the second dham and is dedicated to Goddess Ganga.
            According to Hindu beliefs, the sacred River Ganga descended to
            Earth at this holy place. The Gangotri Temple situated along the
            Bhagirathi River is one of the most revered pilgrimage sites in
            India.
          </p>

          <p>
            Kedarnath is the third and one of the most important shrines of
            the Char Dham Yatra. Dedicated to Lord Shiva, Kedarnath Temple is
            among the twelve Jyotirlingas and is located amidst snow-covered
            Himalayan peaks. The spiritual energy and breathtaking scenery
            make Kedarnath a once-in-a-lifetime experience.
          </p>

          <p>
            Badrinath is the final destination of the Char Dham circuit and is
            dedicated to Lord Vishnu. Located on the banks of the Alaknanda
            River, Badrinath Temple attracts millions of devotees every year.
            The temple is surrounded by stunning Himalayan landscapes and
            sacred sites.
          </p>

          <p>
            Mana Village, located near Badrinath, is known as the last village
            of India before the Indo-Tibetan border. Pilgrims often visit Mana
            Village, Vyas Gufa, Ganesh Gufa and Bhim Pul during their journey.
          </p>

          <p>
            Travelers searching for Char Dham Yatra Package from Delhi,
            Char Dham Family Package, Char Dham Tour Package, Char Dham
            Helicopter Package or Kedarnath Badrinath Package can choose
            customized itineraries through Yorra Travels.
          </p>

          <p>
            The route also passes through famous Prayags including Devprayag,
            Rudraprayag, Karnaprayag and Nandprayag. These sacred river
            confluences add immense spiritual significance to the journey.
          </p>

          <p>
            The best time for Char Dham Yatra is from May to June and
            September to October. During these months the weather remains
            suitable for pilgrimage and mountain travel.
          </p>

          <p>
            Our Char Dham Yatra Package includes accommodation, transportation,
            travel assistance and carefully planned logistics for a smooth and
            comfortable pilgrimage experience.
          </p>

          <p>
            Whether you are traveling with family, senior citizens or a
            religious group, the Char Dham Yatra offers an unforgettable
            spiritual journey through some of India's most sacred and scenic
            destinations.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          9 Nights / 10 Days Char Dham Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Haridwar Arrival",
              details:
                "Arrival in Haridwar and transfer to Barkot.",
            },
            {
              day: "Day 2",
              title: "Yamunotri Darshan",
              details:
                "Trek to Yamunotri Temple and return to Barkot.",
            },
            {
              day: "Day 3",
              title: "Barkot to Uttarkashi",
              details:
                "Transfer to Uttarkashi and evening temple visit.",
            },
            {
              day: "Day 4",
              title: "Gangotri Darshan",
              details:
                "Visit Gangotri Temple and return to Uttarkashi.",
            },
            {
              day: "Day 5",
              title: "Uttarkashi to Guptkashi",
              details:
                "Scenic drive through Himalayan valleys.",
            },
            {
              day: "Day 6",
              title: "Kedarnath Darshan",
              details:
                "Trek or helicopter option for Kedarnath Temple Darshan.",
            },
            {
              day: "Day 7",
              title: "Return from Kedarnath",
              details:
                "Return to Guptkashi and overnight stay.",
            },
            {
              day: "Day 8",
              title: "Badrinath Transfer",
              details:
                "Drive to Badrinath and evening darshan.",
            },
            {
              day: "Day 9",
              title: "Badrinath & Mana Village",
              details:
                "Visit Badrinath Temple, Mana Village and nearby attractions.",
            },
            {
              day: "Day 10",
              title: "Return to Haridwar",
              details:
                "Departure with blessings from Char Dham.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-indigo-400 mb-2">
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
          Sacred Places Covered in Char Dham Yatra
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Yamunotri Temple",
              desc: "Sacred shrine dedicated to Goddess Yamuna and the first Dham of the pilgrimage.",
            },
            {
              name: "Gangotri Temple",
              desc: "Holy temple dedicated to Goddess Ganga situated on the banks of Bhagirathi River.",
            },
            {
              name: "Kedarnath Temple",
              desc: "One of the twelve Jyotirlingas and among the holiest Shiva temples in India.",
            },
            {
              name: "Badrinath Temple",
              desc: "Famous Vishnu temple and the final destination of Char Dham Yatra.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Char Dham Image
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
              <li>✔ Transportation Throughout Yatra</li>
              <li>✔ Char Dham Route Assistance</li>
              <li>✔ Driver Allowance</li>
              <li>✔ Toll Tax & Parking</li>
              <li>✔ Travel Support Team</li>
              <li>✔ Basic Medical Assistance</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Helicopter Charges</li>
              <li>✘ Pony / Palki Charges</li>
              <li>✘ VIP Darshan Charges</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ Lunch</li>
              <li>✘ Medical Expenses</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Char Dham Yatra
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What are the four temples included in Char Dham Yatra?
            </h3>
            <p className="text-slate-300">
              Char Dham Yatra includes Yamunotri, Gangotri, Kedarnath and Badrinath temples.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time for Char Dham Yatra?
            </h3>
            <p className="text-slate-300">
              May to June and September to October are considered the best months.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are required for Char Dham Yatra?
            </h3>
            <p className="text-slate-300">
              A 9 Nights 10 Days itinerary is ideal for completing the pilgrimage comfortably.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Char Dham Yatra suitable for senior citizens?
            </h3>
            <p className="text-slate-300">
              Yes, with proper planning and medical fitness, senior citizens can undertake the yatra.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is helicopter service available?
            </h3>
            <p className="text-slate-300">
              Yes, helicopter services are available for Kedarnath and complete Char Dham helicopter packages.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Spiritual Tour Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/kedarnath-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Kedarnath Tour Package
          </Link>

          <Link
            href="/packages/ayodhya-varanasi"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Ayodhya Varanasi Tour Package
          </Link>

          <Link
            href="/packages/mathura-vrindavan"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Mathura Vrindavan Tour Package
          </Link>

          <Link
            href="/packages/haridwar-rishikesh"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Haridwar Rishikesh Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Char Dham Yatra Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-indigo-400">
              ₹24,999
            </p>

            <p className="mt-4 text-slate-300">
              Per Person
            </p>

          </div>

          <div className="bg-indigo-600 rounded-2xl p-8 text-center shadow-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Premium
            </h3>

            <p className="text-4xl font-bold">
              ₹34,999
            </p>

            <p className="mt-4">
              Per Person
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Luxury
            </h3>

            <p className="text-4xl font-bold text-indigo-400">
              ₹54,999
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
          Ready For Char Dham Yatra?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Embark on the sacred journey of Yamunotri, Gangotri, Kedarnath and
          Badrinath with Yorra Travels. Experience divine blessings, Himalayan
          beauty and a spiritually enriching pilgrimage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Char%20Dham%20Yatra%20Package."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="bg-indigo-500 hover:bg-indigo-600 px-10 py-4 rounded-full font-bold"
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
            name: "Char Dham Yatra Package",
            description:
              "Complete Char Dham Yatra Package covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
            touristType: [
              "Pilgrimage",
              "Family",
              "Group",
              "Senior Citizens"
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
                name: "What are the four temples included in Char Dham Yatra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yamunotri, Gangotri, Kedarnath and Badrinath are included in Char Dham Yatra."
                }
              },
              {
                "@type": "Question",
                name: "What is the best time for Char Dham Yatra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "May to June and September to October are considered the best months."
                }
              },
              {
                "@type": "Question",
                name: "How many days are required for Char Dham Yatra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 9 Nights 10 Days itinerary is ideal for Char Dham Yatra."
                }
              },
              {
                "@type": "Question",
                name: "Is Char Dham Yatra suitable for senior citizens?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, with proper planning and medical fitness, senior citizens can undertake the yatra."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}