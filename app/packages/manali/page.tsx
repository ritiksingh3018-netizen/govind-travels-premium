export default function ManaliPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/manali.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                Himachal Adventure 2026
              </span>

              <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
                Manali
                <span className="block text-orange-500">
                  Tour Package
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-300 max-w-2xl">
                Discover snow-covered mountains, scenic valleys,
                adventure sports and the beauty of Himachal Pradesh
                with our premium Manali tour package.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Manali%20Tour.%20Please%20share%20details."
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
                    ₹9,999
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Per Person
                  </p>
                </div>

                <div className="border-t border-white/10 my-6" />

                <div className="space-y-4">
                  <div>✅ 5 Days / 4 Nights</div>
                  <div>✅ Hotel Stay</div>
                  <div>✅ Sightseeing</div>
                  <div>✅ Transportation</div>
                  <div>✅ Adventure Locations</div>
                </div>

                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Manali%20Tour.%20Please%20share%20details."
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
                5D
              </h3>
              <p className="text-gray-400 mt-2">
                Tour Duration
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Attractions
              </p>
            </div>

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
              src="/manali-1.jpg"
              alt="Manali"
              className="rounded-3xl h-[500px] w-full object-cover"
            />
          </div>

          <div>

            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Manali
            </span>

            <h2 className="text-5xl font-black mt-4">
              The Heart Of
              <span className="block text-orange-500">
                Himachal Pradesh
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              Manali is one of India's most famous hill stations,
              known for snow-capped mountains, adventure sports,
              scenic valleys and beautiful landscapes.
              It is a perfect destination for families,
              honeymooners and adventure lovers.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-900 p-5 rounded-2xl">
                🏔️ Snow Mountains
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🚗 Scenic Drives
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🎿 Adventure Sports
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🏞️ Beautiful Valleys
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
              "🏨 Premium Hotel Stay",
              "🚗 Comfortable Transportation",
              "🏔️ Snow Point Visit",
              "🎿 Adventure Activities",
              "📸 Photography Spots",
              "📞 24×7 Support",
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
              desc: "Check-in at hotel and explore Mall Road.",
            },
            {
              day: "Day 2",
              title: "Solang Valley",
              desc: "Adventure sports, ropeway and snow activities.",
            },
            {
              day: "Day 3",
              title: "Atal Tunnel & Sissu",
              desc: "Visit the famous Atal Tunnel and scenic Sissu Valley.",
            },
            {
              day: "Day 4",
              title: "Rohtang Pass & Local Sightseeing",
              desc: "Explore snow points and famous attractions.",
            },
            {
              day: "Day 5",
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
                image: "/manali-2.jpg",
                title: "Solang Valley",
              },
              {
                image: "/manali-3.jpg",
                title: "Atal Tunnel",
              },
              {
                image: "/manali-4.jpg",
                title: "Rohtang Pass",
              },
              {
                image: "/manali-5.jpg",
                title: "Hadimba Temple",
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
            Explore Manali
          </span>

          <h2 className="text-5xl font-black mt-4">
            Travel Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "/manali-1.jpg",
            "/manali-2.jpg",
            "/manali-3.jpg",
            "/manali-4.jpg",
            "/manali-5.jpg",
            "/manali-6.jpg",
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
                <div>❌ Adventure Activity Charges</div>
                <div>❌ Rohtang Permit Charges</div>
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
              Amazing trip with perfect hotel stay and sightseeing.
            </p>

            <h4 className="font-bold mt-6">
              Rohit Sharma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Solang Valley and Atal Tunnel were unforgettable.
            </p>

            <h4 className="font-bold mt-6">
              Priya Mehta
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Best Manali experience. Highly recommended.
            </p>

            <h4 className="font-bold mt-6">
              Aman Verma
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
                What is the best time to visit Manali?
              </h3>

              <p className="text-gray-400 mt-3">
                October to June is the best time. Snow lovers should visit during winter.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is Rohtang Pass included?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, subject to weather conditions and permit availability.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Are adventure activities included?
              </h3>

              <p className="text-gray-400 mt-3">
                Adventure activities are optional and charged separately.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/manali.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">

          <h2 className="text-5xl md:text-7xl font-black">
            Ready For Your
            <span className="block text-orange-500">
              Manali Adventure?
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Book your Manali trip today with Yorra Travel.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Manali%20Tour.%20Please%20share%20details."
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