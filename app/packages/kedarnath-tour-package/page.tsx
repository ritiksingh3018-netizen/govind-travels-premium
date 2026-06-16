"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function KedarnathPage() {
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
          destination: "Kedarnath Tour Package",
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
              "url('/kedarnath.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Kedarnath Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Divine Journey to Lord Shiva's Sacred Dham
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
                className="w-full bg-indigo-500 hover:bg-indigo-600 py-4 rounded-xl font-bold"
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Kedarnath%20Tour%20Package."
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
          Kedarnath Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Kedarnath Temple Darshan",
            "Gaurikund Trek",
            "Bhairavnath Temple",
            "Shankaracharya Samadhi",
            "Rudraprayag Visit",
            "Devprayag Sangam",
            "Himalayan Views",
            "Spiritual Pilgrimage Experience",
            "Haridwar & Rishikesh",
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
          Best Kedarnath Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Kedarnath Tour Package is one of the most sought-after pilgrimage
            packages in India. Kedarnath Temple, dedicated to Lord Shiva, is
            one of the twelve Jyotirlingas and one of the most sacred shrines
            in Hinduism. Located in the Garhwal Himalayas of Uttarakhand at an
            altitude of over 11,000 feet, Kedarnath attracts millions of
            devotees every year.
          </p>

          <p>
            The Kedarnath Yatra is not just a pilgrimage but also an
            extraordinary Himalayan journey. Surrounded by snow-capped peaks,
            glaciers and breathtaking landscapes, the route to Kedarnath
            offers a unique blend of spirituality and natural beauty.
          </p>

          <p>
            Kedarnath Temple is believed to have been established by the
            Pandavas and later revived by Adi Shankaracharya. The temple's
            spiritual significance and majestic location make it one of the
            holiest destinations in India.
          </p>

          <p>
            Most pilgrims begin their journey from Haridwar or Rishikesh and
            travel through Devprayag, Rudraprayag and Guptkashi before
            reaching Gaurikund. From Gaurikund, devotees undertake the famous
            trek to Kedarnath Temple.
          </p>

          <p>
            Gaurikund is an important stop on the Kedarnath route. According
            to Hindu mythology, Goddess Parvati performed penance here to
            attain Lord Shiva. The town serves as the base point for the
            Kedarnath trek.
          </p>

          <p>
            Bhairavnath Temple is another significant attraction near
            Kedarnath. Located on a hilltop, the temple offers panoramic views
            of the surrounding Himalayan ranges and is believed to protect the
            Kedarnath region during winter.
          </p>

          <p>
            Shankaracharya Samadhi, located behind the Kedarnath Temple, is a
            revered spiritual site associated with Adi Shankaracharya. Many
            pilgrims visit this sacred place after completing their darshan.
          </p>

          <p>
            Travelers searching for Kedarnath Tour Package from Delhi,
            Kedarnath Yatra Package, Kedarnath Family Package, Kedarnath
            Helicopter Package or Char Dham Yatra Package can choose
            customized itineraries through Yorra Travels.
          </p>

          <p>
            The best time to visit Kedarnath is from May to June and
            September to October. During these months, the weather remains
            favorable for pilgrimage and trekking activities. Monsoon season
            is generally avoided due to heavy rainfall and landslide risks.
          </p>

          <p>
            Our Kedarnath Tour Package includes accommodation, transportation,
            travel assistance and carefully planned itineraries to ensure a
            comfortable and spiritually fulfilling experience for pilgrims.
          </p>

          <p>
            Whether you are traveling alone, with family or in a group,
            Kedarnath offers a once-in-a-lifetime spiritual journey amidst
            the majestic Himalayas. The divine atmosphere, scenic landscapes
            and sacred significance make this destination unforgettable.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          4 Nights / 5 Days Kedarnath Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Haridwar / Rishikesh Arrival",
              details:
                "Arrival and transfer to Guptkashi with scenic Himalayan views.",
            },
            {
              day: "Day 2",
              title: "Guptkashi to Kedarnath",
              details:
                "Drive to Gaurikund and begin trek to Kedarnath. Evening darshan.",
            },
            {
              day: "Day 3",
              title: "Kedarnath Darshan",
              details:
                "Morning temple darshan, visit Bhairavnath Temple and return to Guptkashi.",
            },
            {
              day: "Day 4",
              title: "Guptkashi to Haridwar",
              details:
                "Visit Rudraprayag and Devprayag en route to Haridwar.",
            },
            {
              day: "Day 5",
              title: "Departure",
              details:
                "Breakfast and departure with blessings from Lord Kedarnath.",
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
          Top Places to Visit During Kedarnath Yatra
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Kedarnath Temple",
              desc: "One of the twelve Jyotirlingas and the main pilgrimage destination.",
            },
            {
              name: "Bhairavnath Temple",
              desc: "Sacred temple overlooking Kedarnath Valley with stunning views.",
            },
            {
              name: "Gaurikund",
              desc: "Starting point of the Kedarnath trek and an important spiritual site.",
            },
            {
              name: "Shankaracharya Samadhi",
              desc: "Historic spiritual site dedicated to Adi Shankaracharya.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Kedarnath Image
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
              <li>✔ Private / Shared Transportation</li>
              <li>✔ Kedarnath Yatra Assistance</li>
              <li>✔ Guptkashi Stay</li>
              <li>✔ Travel Support Team</li>
              <li>✔ Toll Tax & Parking</li>
              <li>✔ Driver Allowance</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Package Excludes
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✘ Helicopter Tickets</li>
              <li>✘ Pony / Palki Charges</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Travel Insurance</li>
              <li>✘ VIP Darshan Charges</li>
              <li>✘ Lunch</li>
              <li>✘ Medical Expenses</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Kedarnath Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Kedarnath?
            </h3>
            <p className="text-slate-300">
              The best time for Kedarnath Yatra is May to June and September to October.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How difficult is the Kedarnath trek?
            </h3>
            <p className="text-slate-300">
              The trek is moderate and suitable for most travelers with basic fitness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is helicopter service available for Kedarnath?
            </h3>
            <p className="text-slate-300">
              Yes, helicopter services are available from Phata, Guptkashi and Sersi subject to availability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are required for Kedarnath Yatra?
            </h3>
            <p className="text-slate-300">
              A 4 Nights 5 Days itinerary is ideal for a comfortable Kedarnath pilgrimage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Kedarnath part of Char Dham Yatra?
            </h3>
            <p className="text-slate-300">
              Yes, Kedarnath is one of the four sacred shrines of the Char Dham Yatra.
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
            href="/packages/char-dham-yatra"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Char Dham Yatra Package
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
          Kedarnath Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-indigo-400">
              ₹12,999
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

            <p className="text-4xl font-bold text-indigo-400">
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
          Ready For Kedarnath Yatra?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Experience the divine blessings of Lord Shiva at Kedarnath Dham.
          Travel comfortably with Yorra Travels and enjoy a well-planned,
          spiritually enriching Himalayan pilgrimage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Kedarnath%20Tour%20Package."
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
            name: "Kedarnath Tour Package",
            description:
              "Best Kedarnath Tour Package including Kedarnath Temple Darshan, Gaurikund, Bhairavnath Temple and Himalayan pilgrimage experience.",
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
                name: "What is the best time to visit Kedarnath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "May to June and September to October are the best months for Kedarnath Yatra."
                }
              },
              {
                "@type": "Question",
                name: "How difficult is the Kedarnath trek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The trek is moderate and suitable for most travelers with basic fitness."
                }
              },
              {
                "@type": "Question",
                name: "Is helicopter service available for Kedarnath?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, helicopter services are available from Phata, Sersi and Guptkashi."
                }
              },
              {
                "@type": "Question",
                name: "How many days are required for Kedarnath Yatra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 4 Nights 5 Days itinerary is ideal for Kedarnath Yatra."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}