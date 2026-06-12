export default function SpitiPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/spiti.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                Himalayan Adventure 2026
              </span>

              <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
                Spiti Valley
                <span className="block text-orange-500">
                  Adventure
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-300 max-w-2xl">
                Discover the breathtaking landscapes, ancient monasteries,
                crystal-clear lakes and the rugged beauty of Spiti Valley —
                one of India's most adventurous destinations.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Spiti%20Valley.%20Please%20share%20details."
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

            {/* PRICE CARD */}
            <div className="hidden lg:flex justify-end">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl w-[380px]">

                <div className="text-center">
                  <p className="text-orange-400 font-semibold">
                    Starting From
                  </p>

                  <h2 className="text-6xl font-black mt-2">
                    ₹18,999
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Per Person
                  </p>
                </div>

                <div className="border-t border-white/10 my-6" />

                <div className="space-y-4">
                  <div>✅ 7 Days / 6 Nights</div>
                  <div>✅ Hotel Stay</div>
                  <div>✅ Transportation</div>
                  <div>✅ Sightseeing</div>
                  <div>✅ Adventure Experience</div>
                </div>

                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Spiti%20Valley.%20Please%20share%20details."
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
                7D
              </h3>
              <p className="text-gray-400 mt-2">
                Tour Duration
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                6+
              </h3>
              <p className="text-gray-400 mt-2">
                Major Attractions
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                4000m+
              </h3>
              <p className="text-gray-400 mt-2">
                High Altitude
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

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="/spiti-1.jpg"
              alt="Spiti Valley"
              className="rounded-3xl h-[500px] w-full object-cover"
            />
          </div>

          <div>

            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Spiti Valley
            </span>

            <h2 className="text-5xl font-black mt-4">
              The Middle Land
              <span className="block text-orange-500">
                Of Himalayas
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              Spiti Valley is a cold desert mountain valley located in Himachal Pradesh.
              Known for its stunning landscapes, ancient monasteries,
              remote villages and thrilling roads, it is one of the most
              adventurous destinations in India.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-900 p-5 rounded-2xl">
                🏔️ High Mountains
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🛕 Ancient Monasteries
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🌌 Stargazing
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🚙 Adventure Roads
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
              Tour Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "🏨 Comfortable Stay",
              "🚙 Complete Transportation",
              "🏔️ High Altitude Experience",
              "🛕 Monastery Visits",
              "🌌 Stargazing Nights",
              "📞 24×7 Travel Support",
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
              title: "Arrival In Manali",
              desc: "Reach Manali and overnight stay.",
            },
            {
              day: "Day 2",
              title: "Manali To Kaza",
              desc: "Drive through Atal Tunnel and Kunzum Pass.",
            },
            {
              day: "Day 3",
              title: "Key Monastery & Kibber",
              desc: "Explore ancient monasteries and villages.",
            },
            {
              day: "Day 4",
              title: "Langza, Hikkim & Komic",
              desc: "Visit highest villages and post office.",
            },
            {
              day: "Day 5",
              title: "Chandratal Lake",
              desc: "Experience the beauty of the Moon Lake.",
            },
            {
              day: "Day 6",
              title: "Return To Manali",
              desc: "Scenic drive back through mountains.",
            },
            {
              day: "Day 7",
              title: "Departure",
              desc: "Breakfast and return journey.",
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

      {/* PLACES TO VISIT */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-widest">
              Top Attractions
            </span>

            <h2 className="text-5xl font-black mt-4">
              Places To Visit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                image: "/spiti-2.jpg",
                title: "Key Monastery",
              },
              {
                image: "/spiti-3.jpg",
                title: "Chandratal Lake",
              },
              {
                image: "/spiti-4.jpg",
                title: "Kaza Town",
              },
              {
                image: "/spiti-5.jpg",
                title: "Langza Village",
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
            Explore Spiti
          </span>

          <h2 className="text-5xl font-black mt-4">
            Travel Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "/spiti-1.jpg",
            "/spiti-2.jpg",
            "/spiti-3.jpg",
            "/spiti-4.jpg",
            "/spiti-5.jpg",
            "/spiti-6.jpg",
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
                <div>✅ Sightseeing</div>
                <div>✅ Driver Charges</div>
                <div>✅ Parking Charges</div>
                <div>✅ Toll Tax</div>
                <div>✅ Travel Assistance</div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-10">
              <h2 className="text-4xl font-black text-red-400 mb-8">
                Excluded
              </h2>

              <div className="space-y-4 text-lg">
                <div>❌ Personal Expenses</div>
                <div>❌ Medical Expenses</div>
                <div>❌ Adventure Activities</div>
                <div>❌ Travel Insurance</div>
                <div>❌ Meals Not Mentioned</div>
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
              Spiti was magical. The views and arrangements were excellent.
            </p>

            <h4 className="font-bold mt-6">
              Rahul Sharma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Chandratal Lake was the highlight of the trip. Amazing experience.
            </p>

            <h4 className="font-bold mt-6">
              Neha Verma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Perfect adventure trip with great support from Yorra Travel.
            </p>

            <h4 className="font-bold mt-6">
              Aman Gupta
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
                What is the best time to visit Spiti Valley?
              </h3>

              <p className="text-gray-400 mt-3">
                May to October is the best time to explore Spiti Valley.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is Spiti suitable for families?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, but due to high altitude, proper acclimatization is recommended.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is Chandratal Lake included?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, weather and road conditions permitting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/spiti.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">

          <h2 className="text-5xl md:text-7xl font-black">
            Ready For The
            <span className="block text-orange-500">
              Spiti Adventure?
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Explore the untouched beauty of the Himalayas with Yorra Travel.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Spiti%20Valley.%20Please%20share%20details."
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