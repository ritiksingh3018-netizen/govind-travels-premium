"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function RajasthanPage() {
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
          destination: "Rajasthan Tour Package",
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white">

      <section className="relative h-screen flex items-center justify-center px-6">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/rajasthan.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-md">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-center mb-4">
              Rajasthan Tour Package
            </h1>

            <p className="text-center text-slate-300 mb-8">
              Royal Palaces, Forts & Desert Adventures
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
                className="w-full bg-amber-500 hover:bg-amber-600 py-4 rounded-xl font-bold"
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
              href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Rajasthan%20Tour%20Package."
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
          Rajasthan Tour Package Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Jaipur City Tour",
            "Amber Fort",
            "Udaipur Lake Pichola",
            "City Palace",
            "Jaisalmer Desert Safari",
            "Camel Ride",
            "Jodhpur Mehrangarh Fort",
            "Traditional Rajasthani Culture",
            "Luxury Heritage Hotels",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500 transition"
            >
              ✅ {item}
            </div>
          ))}

        </div>

      </section>

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Best Rajasthan Tour Package 2026
        </h2>

        <div className="space-y-6 text-slate-300 leading-8">

          <p>
            Rajasthan Tour Package is one of India's most popular travel
            experiences. Known as the Land of Kings, Rajasthan is famous for
            magnificent forts, royal palaces, colorful culture, desert
            landscapes and rich heritage. From the pink city of Jaipur to the
            golden sands of Jaisalmer, Rajasthan offers unforgettable memories
            for families, couples, honeymooners and international travelers.
          </p>

          <p>
            Jaipur, the capital of Rajasthan, is known as the Pink City and is
            part of India's famous Golden Triangle circuit. Visitors can explore
            Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and vibrant local
            markets. Jaipur perfectly combines royal heritage with modern city
            life.
          </p>

          <p>
            Udaipur, often called the City of Lakes, is one of the most romantic
            destinations in India. Surrounded by beautiful lakes and Aravalli
            Hills, Udaipur attracts honeymoon couples from around the world.
            Lake Pichola, City Palace and Sajjangarh Monsoon Palace are among
            the city's most famous attractions.
          </p>

          <p>
            Jaisalmer is the jewel of the Thar Desert and one of the highlights
            of any Rajasthan itinerary. Travelers can enjoy camel safaris,
            desert camping, folk dance performances and spectacular sunsets over
            the sand dunes. Jaisalmer Fort, a UNESCO World Heritage Site, is one
            of the few living forts in the world.
          </p>

          <p>
            Jodhpur, known as the Blue City, is home to the magnificent
            Mehrangarh Fort. The city offers incredible architecture,
            traditional markets and a unique glimpse into Rajasthan's royal
            history. Visitors can also explore Jaswant Thada and Umaid Bhawan
            Palace.
          </p>

          <p>
            Rajasthan is also famous for its luxury heritage hotels. Many
            palaces have been converted into world-class hotels where travelers
            can experience royal hospitality. This makes Rajasthan one of the
            best destinations for luxury vacations and honeymoon trips.
          </p>

          <p>
            Travelers searching for Rajasthan Tour Package from Delhi,
            Rajasthan Family Package, Rajasthan Honeymoon Package or Jaipur
            Udaipur Jaisalmer Tour Package can enjoy customized itineraries
            through Yorra Travels.
          </p>

          <p>
            Rajasthan's colorful festivals, traditional folk music, handicrafts
            and authentic cuisine create a unique cultural experience. Dishes
            like Dal Baati Churma, Gatte Ki Sabzi and Laal Maas are loved by
            visitors from across the globe.
          </p>

          <p>
            The best time to visit Rajasthan is from October to March. During
            these months the weather remains pleasant for sightseeing, desert
            safaris and cultural exploration.
          </p>

          <p>
            Book your Rajasthan Tour Package with Yorra Travels and discover
            majestic forts, royal palaces, desert adventures and the timeless
            charm of India's most colorful state.
          </p>

        </div>

      </section>

      {/* Itinerary */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          6 Nights / 7 Days Rajasthan Itinerary
        </h2>

        <div className="space-y-8">

          {[
            {
              day: "Day 1",
              title: "Arrival in Jaipur",
              details:
                "Arrival and sightseeing including Hawa Mahal, City Palace and local markets.",
            },
            {
              day: "Day 2",
              title: "Jaipur Sightseeing",
              details:
                "Visit Amber Fort, Jal Mahal, Nahargarh Fort and Jantar Mantar.",
            },
            {
              day: "Day 3",
              title: "Jaipur to Jodhpur",
              details:
                "Transfer to Jodhpur and evening local exploration.",
            },
            {
              day: "Day 4",
              title: "Jodhpur to Jaisalmer",
              details:
                "Visit Mehrangarh Fort and continue to Jaisalmer.",
            },
            {
              day: "Day 5",
              title: "Jaisalmer Desert Experience",
              details:
                "Explore Jaisalmer Fort, Patwon Ki Haveli and enjoy desert safari with cultural show.",
            },
            {
              day: "Day 6",
              title: "Jaisalmer to Udaipur",
              details:
                "Transfer to Udaipur and evening leisure by Lake Pichola.",
            },
            {
              day: "Day 7",
              title: "Udaipur Sightseeing & Departure",
              details:
                "Visit City Palace, Saheliyon Ki Bari and transfer for departure.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-2">
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
          Top Tourist Places in Rajasthan
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              name: "Amber Fort",
              desc: "Jaipur's iconic fort known for its architecture and royal history.",
            },
            {
              name: "Lake Pichola",
              desc: "The most famous lake in Udaipur surrounded by palaces.",
            },
            {
              name: "Jaisalmer Fort",
              desc: "UNESCO World Heritage Site and one of the world's living forts.",
            },
            {
              name: "Mehrangarh Fort",
              desc: "Massive hilltop fort offering panoramic views of Jodhpur.",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500 transition"
            >
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  Add Rajasthan Image
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
              <li>✔ Jaipur Sightseeing</li>
              <li>✔ Jodhpur Sightseeing</li>
              <li>✔ Jaisalmer Desert Safari</li>
              <li>✔ Udaipur Sightseeing</li>
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
              <li>✘ Monument Entry Tickets</li>
              <li>✘ Personal Expenses</li>
              <li>✘ Adventure Activities</li>
              <li>✘ Travel Insurance</li>
            </ul>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Frequently Asked Questions About Rajasthan Tour Package
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the best time to visit Rajasthan?
            </h3>
            <p className="text-slate-300">
              October to March is the best time to visit Rajasthan due to pleasant weather and ideal sightseeing conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is Rajasthan good for honeymoon couples?
            </h3>
            <p className="text-slate-300">
              Yes, Rajasthan offers royal palaces, luxury heritage hotels and romantic lake views making it perfect for honeymoon trips.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              How many days are enough for Rajasthan?
            </h3>
            <p className="text-slate-300">
              A 6 Nights 7 Days itinerary is ideal for exploring Jaipur, Jodhpur, Jaisalmer and Udaipur.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Is desert safari included in Rajasthan packages?
            </h3>
            <p className="text-slate-300">
              Most Rajasthan packages include Jaisalmer desert safari and cultural evening programs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              What is the average Rajasthan trip cost?
            </h3>
            <p className="text-slate-300">
              Rajasthan trip cost depends on hotel category, season and itinerary customization.
            </p>
          </div>

        </div>

      </section>

      {/* Internal Links */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Explore More Heritage & Cultural Packages
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/packages/ayodhya-varanasi"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Ayodhya Varanasi Tour
          </Link>

          <Link
            href="/packages/mathura-vrindavan"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Mathura Vrindavan Tour
          </Link>

          <Link
            href="/packages/goa-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Goa Tour Package
          </Link>

          <Link
            href="/packages/kerala-tour-package"
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            Kerala Tour Package
          </Link>

        </div>

      </section>
            {/* Package Pricing */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Rajasthan Tour Package Price
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Standard
            </h3>

            <p className="text-4xl font-bold text-amber-400">
              ₹18,999
            </p>

            <p className="mt-4 text-slate-300">
              Per Person
            </p>

          </div>

          <div className="bg-amber-600 rounded-2xl p-8 text-center shadow-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Premium
            </h3>

            <p className="text-4xl font-bold">
              ₹27,999
            </p>

            <p className="mt-4">
              Per Person
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h3 className="text-2xl font-bold mb-4">
              Luxury
            </h3>

            <p className="text-4xl font-bold text-amber-400">
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
          Ready For Rajasthan?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Discover the royal heritage of Jaipur, Udaipur, Jodhpur and Jaisalmer
          with Yorra Travels. Experience majestic forts, luxury palaces, desert
          safaris and unforgettable cultural experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20am%20interested%20in%20the%20Rajasthan%20Tour%20Package."
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full font-bold"
          >
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 px-10 py-4 rounded-full font-bold"
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
            name: "Rajasthan Tour Package",
            description:
              "Best Rajasthan Tour Package including Jaipur, Udaipur, Jodhpur and Jaisalmer.",
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
                name: "What is the best time to visit Rajasthan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "October to March is considered the best time to visit Rajasthan."
                }
              },
              {
                "@type": "Question",
                name: "Is Rajasthan good for honeymoon couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Rajasthan offers royal palaces, luxury hotels and romantic experiences."
                }
              },
              {
                "@type": "Question",
                name: "How many days are enough for Rajasthan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 6 Nights 7 Days itinerary is ideal for exploring Rajasthan."
                }
              },
              {
                "@type": "Question",
                name: "Is desert safari included in Rajasthan packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Rajasthan packages include Jaisalmer desert safari experiences."
                }
              }
            ]
          }),
        }}
      />

    </main>
  );
}