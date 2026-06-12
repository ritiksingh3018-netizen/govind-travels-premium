export default function CharDhamPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/chardham.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                Divine Himalayan Journey 2026
              </span>

              <h1 className="text-6xl md:text-8xl font-black mt-6 leading-none">
                Char Dham
                <span className="block text-orange-500">
                  Yatra
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-300 max-w-2xl">
                Visit the four sacred dhams of Uttarakhand —
                Yamunotri, Gangotri, Kedarnath and Badrinath
                in one unforgettable spiritual journey.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Char%20Dham%20Yatra.%20Please%20share%20details."
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
            <div className="lg:flex justify-end hidden">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl w-[380px]">

                <div className="text-center">
                  <p className="text-orange-400 font-semibold">
                    Starting From
                  </p>

                  <h2 className="text-6xl font-black mt-2">
                    ₹24,999
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Per Person
                  </p>
                </div>

                <div className="border-t border-white/10 my-6" />

                <div className="space-y-4">
                  <div>✅ 10 Days / 9 Nights</div>
                  <div>✅ 4 Sacred Dhams</div>
                  <div>✅ Hotel Stay</div>
                  <div>✅ Transportation</div>
                  <div>✅ Travel Support</div>
                </div>

                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Char%20Dham%20Yatra.%20Please%20share%20details."
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
                4
              </h3>
              <p className="text-gray-400 mt-2">
                Holy Dhams
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                10D
              </h3>
              <p className="text-gray-400 mt-2">
                Journey Duration
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">
                5000+
              </h3>
              <p className="text-gray-400 mt-2">
                Pilgrims Served
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
              src="/chardham-1.jpg"
              alt="Char Dham"
              className="rounded-3xl h-[500px] w-full object-cover"
            />
          </div>

          <div>

            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Char Dham
            </span>

            <h2 className="text-5xl font-black mt-4">
              The Most Sacred
              <span className="block text-orange-500">
                Pilgrimage Of India
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              Char Dham Yatra is one of the most important spiritual journeys
              in India. The pilgrimage covers Yamunotri, Gangotri,
              Kedarnath and Badrinath, located amidst the majestic Himalayas
              of Uttarakhand.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-900 p-5 rounded-2xl">
                🛕 4 Sacred Temples
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🏔️ Himalayan Views
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🙏 Spiritual Journey
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl">
                🚗 Comfortable Travel
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
              title: "Haridwar Arrival",
              desc: "Arrival and transfer to Barkot.",
            },
            {
              day: "Day 2",
              title: "Yamunotri Darshan",
              desc: "Visit Yamunotri Temple and return to Barkot.",
            },
            {
              day: "Day 3",
              title: "Gangotri Darshan",
              desc: "Visit the sacred Gangotri Temple.",
            },
            {
              day: "Day 4-5",
              title: "Kedarnath Darshan",
              desc: "Journey to Kedarnath and temple darshan.",
            },
            {
              day: "Day 6-7",
              title: "Badrinath Darshan",
              desc: "Visit Badrinath Temple and Mana Village.",
            },
            {
              day: "Day 8-10",
              title: "Return Journey",
              desc: "Return to Haridwar with blessings and memories.",
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

      {/* 4 DHAMS */}
      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-widest">
              Sacred Destinations
            </span>

            <h2 className="text-5xl font-black mt-4">
              Four Holy Dhams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                image: "/chardham-1.jpg",
                title: "Yamunotri",
              },
              {
                image: "/chardham-2.jpg",
                title: "Gangotri",
              },
              {
                image: "/chardham-3.jpg",
                title: "Kedarnath",
              },
              {
                image: "/chardham-4.jpg",
                title: "Badrinath",
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
            Journey Gallery
          </span>

          <h2 className="text-5xl font-black mt-4">
            Explore The Beauty
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "/chardham-1.jpg",
            "/chardham-2.jpg",
            "/chardham-3.jpg",
            "/chardham-4.jpg",
            "/chardham-5.jpg",
            "/chardham-6.jpg",
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
                <div>✅ Meals</div>
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
            What Pilgrims Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Excellent arrangements throughout the Char Dham journey.
            </p>

            <h4 className="font-bold mt-6">
              Rajesh Kumar
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              Hotels, transport and darshan assistance were perfectly managed.
            </p>

            <h4 className="font-bold mt-6">
              Sunita Sharma
            </h4>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-300">
              One of the best spiritual experiences with Yorra Travel.
            </p>

            <h4 className="font-bold mt-6">
              Deepak Verma
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
                What is the best time for Char Dham Yatra?
              </h3>

              <p className="text-gray-400 mt-3">
                May to June and September to October are ideal months.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is helicopter service available?
              </h3>

              <p className="text-gray-400 mt-3">
                Yes, helicopter services are available for Kedarnath and selected routes.
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                How many days are required?
              </h3>

              <p className="text-gray-400 mt-3">
                Usually 9 Nights and 10 Days are required to complete the yatra.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: "url('/chardham.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-6">

          <h2 className="text-5xl md:text-7xl font-black">
            Ready For The
            <span className="block text-orange-500">
              Char Dham Journey?
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Book your Char Dham Yatra today with Yorra Travel.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in%20Char%20Dham%20Yatra.%20Please%20share%20details."
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