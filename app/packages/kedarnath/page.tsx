export default function KedarnathPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/kedarnath.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                Spiritual Journey 2026
              </span>

              <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
                Kedarnath
                <span className="block text-orange-500">
                  Yatra
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-300 max-w-2xl">
                Experience the divine beauty of the Himalayas and seek blessings
                at one of the most sacred Jyotirlingas in India.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Kedarnath%20Yatra.%20Please%20share%20details."
                  target="_blank"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold text-lg transition"
                >
                  Book Now
                </a>

                <a
                  href="#itinerary"
                  className="border border-white/20 hover:border-orange-500 px-8 py-4 rounded-2xl font-bold text-lg transition"
                >
                  View Itinerary
                </a>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="lg:flex justify-end hidden">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl w-[380px]">

                <div className="text-center">
                  <p className="text-orange-400 font-semibold">
                    Starting From
                  </p>

                  <h2 className="text-6xl font-black mt-2">
                    ₹8,999
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Per Person
                  </p>
                </div>

                <div className="border-t border-white/10 my-6" />

                <div className="space-y-4">
                  <div>✅ 4 Days / 3 Nights</div>
                  <div>✅ Hotel Accommodation</div>
                  <div>✅ Transportation</div>
                  <div>✅ Sightseeing</div>
                  <div>✅ Travel Support</div>
                </div>

                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Kedarnath%20Yatra.%20Please%20share%20details."
                  target="_blank"
                  className="block text-center mt-8 bg-orange-500 py-4 rounded-2xl font-bold"
                >
                  Reserve Seat
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                5000+
              </h3>
              <p className="text-gray-400 mt-2">
                Happy Travellers
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                12+
              </h3>
              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                24×7
              </h3>
              <p className="text-gray-400 mt-2">
                Support
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                ★ 4.9
              </h3>
              <p className="text-gray-400 mt-2">
                Customer Rating
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="/kedarnath-1.jpg"
              alt="Kedarnath"
              className="rounded-3xl h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Destination
            </span>

            <h2 className="text-5xl font-black mt-4">
              The Sacred Land Of
              <span className="block text-orange-500">
                Lord Shiva
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              Kedarnath is one of the holiest pilgrimage sites in India and one
              of the twelve Jyotirlingas of Lord Shiva. Located amidst the
              majestic Garhwal Himalayas, this spiritual destination offers a
              perfect blend of devotion, adventure and breathtaking landscapes.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-slate-900 p-5 rounded-2xl">
                🛕 Sacred Temple
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🏔️ Himalayan Views
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                📸 Photography
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🙏 Spiritual Experience
              </div>
            </div>
          </div>

        </div>
      </section>
            {/* HIGHLIGHTS */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-widest">
              Why Choose Yorra
            </span>

            <h2 className="text-5xl font-black mt-4">
              What's Included In Your Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "🏨 Premium Hotel Stay",
              "🚗 Comfortable Transportation",
              "🍽️ Meals Included",
              "📞 24×7 Travel Support",
              "🛕 Darshan Assistance",
              "🧳 Tour Coordinator",
            ].map((item) => (
              <div
                key={item}
                className="bg-black/30 border border-white/10 rounded-3xl p-8 hover:border-orange-500 transition-all"
              >
                <h3 className="text-xl font-bold">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section
        id="itinerary"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="text-center mb-20">
          <span className="text-orange-500 uppercase tracking-widest">
            Tour Plan
          </span>

          <h2 className="text-5xl font-black mt-4">
            Day Wise Itinerary
          </h2>
        </div>

        <div className="space-y-10">

          {[
            {
              day: "Day 1",
              title: "Haridwar To Guptkashi",
              desc: "Pickup from Haridwar/Rishikesh and transfer to Guptkashi.",
            },
            {
              day: "Day 2",
              title: "Kedarnath Darshan",
              desc: "Temple darshan, spiritual activities and local sightseeing.",
            },
            {
              day: "Day 3",
              title: "Return Trek",
              desc: "Return from Kedarnath and transfer back to Guptkashi.",
            },
            {
              day: "Day 4",
              title: "Back To Haridwar",
              desc: "Breakfast and comfortable return journey.",
            },
          ].map((item) => (
            <div
              key={item.day}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">

                <div className="bg-orange-500 text-black font-black px-6 py-3 rounded-xl">
                  {item.day}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* PLACES */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-widest">
              Explore
            </span>

            <h2 className="text-5xl font-black mt-4">
              Places To Visit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                image: "/kedarnath-1.jpg",
                title: "Kedarnath Temple",
              },
              {
                image: "/kedarnath-2.jpg",
                title: "Bhairavnath Temple",
              },
              {
                image: "/kedarnath-3.jpg",
                title: "Vasuki Tal",
              },
              {
                image: "/kedarnath-4.jpg",
                title: "Guptkashi",
              },
              {
                image: "/kedarnath-5.jpg",
                title: "Sonprayag",
              },
              {
                image: "/kedarnath-6.jpg",
                title: "Shankaracharya Samadhi",
              },
            ].map((place) => (
              <div
                key={place.title}
                className="overflow-hidden rounded-3xl bg-black/30 border border-white/10"
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="h-72 w-full object-cover hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {place.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest">
            Memories
          </span>

          <h2 className="text-5xl font-black mt-4">
            Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "/kedarnath-1.jpg",
            "/kedarnath-2.jpg",
            "/kedarnath-3.jpg",
            "/kedarnath-4.jpg",
            "/kedarnath-5.jpg",
            "/kedarnath-6.jpg",
          ].map((img) => (
            <img
              key={img}
              src={img}
              alt=""
              className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500"
            />
          ))}
        </div>
      </section>
            {/* INCLUDES & EXCLUDES */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-10">
              <h2 className="text-4xl font-black text-green-400 mb-8">
                Included
              </h2>

              <div className="space-y-4 text-lg">
                <div>✅ Hotel Accommodation</div>
                <div>✅ Transportation</div>
                <div>✅ Driver Charges</div>
                <div>✅ Parking Charges</div>
                <div>✅ Toll Tax</div>
                <div>✅ Sightseeing</div>
                <div>✅ Travel Assistance</div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-10">
              <h2 className="text-4xl font-black text-red-400 mb-8">
                Excluded
              </h2>

              <div className="space-y-4 text-lg">
                <div>❌ Helicopter Charges</div>
                <div>❌ Pony / Palki Charges</div>
                <div>❌ Personal Expenses</div>
                <div>❌ Medical Expenses</div>
                <div>❌ Travel Insurance</div>
                <div>❌ Anything Not Mentioned</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-5xl font-black mt-4">
            What Travellers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Amazing arrangements by Yorra. Everything was perfectly managed.
            </p>

            <h4 className="font-bold mt-6">
              Rahul Sharma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Very smooth journey and excellent hotel facilities.
            </p>

            <h4 className="font-bold mt-6">
              Priya Verma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Best Kedarnath experience. Highly recommended.
            </p>

            <h4 className="font-bold mt-6">
              Aman Singh
            </h4>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                What is the best time to visit Kedarnath?
              </h3>

              <p className="text-gray-400 mt-3">
                May to June and September to October are considered ideal.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is helicopter service available?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, helicopter service is available subject to weather and availability.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Can senior citizens travel?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, helicopter and palki facilities are available.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/kedarnath.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">

          <h2 className="text-5xl md:text-7xl font-black">
            Ready For Your
            <span className="block text-orange-500">
              Spiritual Journey?
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Book your Kedarnath Yatra today with Yorra Travel.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Kedarnath%20Yatra.%20Please%20share%20details."
            target="_blank"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl font-bold text-lg"
          >
            Contact On WhatsApp
          </a>

        </div>
      </section>

      

    </main>
  );
}