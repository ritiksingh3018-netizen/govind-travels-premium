export default function HomePage() {
  const destinations = [
    { name: "Kedarnath", image: "/kedarnath.jpg" },
    { name: "Char Dham", image: "/chardham.jpg" },
    { name: "Kashmir", image: "/kashmir.jpg" },
    { name: "Kerala", image: "/kerala.jpg" },
  ];

  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-travel.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full text-orange-400 font-semibold">
                Trusted Travel Partner
              </span>

              <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none">
                Discover
                <br />
                Incredible India
              </h1>

              <p className="mt-6 text-xl text-gray-300">
                Kedarnath • Char Dham • Kashmir • Kerala • Goa
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
                  target="_blank"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold"
                >
                  Book Tour
                </a>

                <a
                  href="/packages"
                  className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition"
                >
                  Explore Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-orange-500 text-3xl">✓</h3>
              <p className="mt-2">Best Price Guarantee</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-orange-500 text-3xl">✓</h3>
              <p className="mt-2">Secure Booking</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-orange-500 text-3xl">✓</h3>
              <p className="mt-2">24/7 Support</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-orange-500 text-3xl">✓</h3>
              <p className="mt-2">Verified Tours</p>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-14">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-3xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40" />

                <h3 className="absolute bottom-6 left-6 text-3xl font-bold">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-14">
            Featured Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Kedarnath Yatra",
                image: "/kedarnath.jpg",
                price: "₹18,999",
              },
              {
                title: "Char Dham Yatra",
                image: "/chardham.jpg",
                price: "₹34,999",
              },
              {
                title: "Kashmir Tour",
                image: "/kashmir.jpg",
                price: "₹24,999",
              },
            ].map((tour) => (
              <div
                key={tour.title}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-all"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    {tour.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    Hotel • Transport • Sightseeing
                  </p>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-2xl font-black text-orange-500">
                      {tour.price}
                    </span>

                    <a
                      href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
                      target="_blank"
                      className="bg-orange-500 px-5 py-3 rounded-xl font-bold"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    
{/* Why Choose Yorra */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center mb-14">
      Why Choose Yorra?
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-black text-orange-500">
          500+
        </h3>
        <p className="mt-3 text-gray-300">
          Happy Travelers
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-black text-orange-500">
          50+
        </h3>
        <p className="mt-3 text-gray-300">
          Destinations
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-black text-orange-500">
          24/7
        </h3>
        <p className="mt-3 text-gray-300">
          Customer Support
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-black text-orange-500">
          4.9★
        </h3>
        <p className="mt-3 text-gray-300">
          Customer Rating
        </p>
      </div>

    </div>

  </div>
</section>

{/* Testimonials */}
<section className="py-24 bg-[#0B1220]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center mb-14">
      What Our Travelers Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <p className="text-gray-300">
          “Amazing Kedarnath experience. Hotels, transport and support were excellent.”
        </p>

        <h4 className="mt-6 font-bold text-xl">
          Rahul Sharma
        </h4>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <p className="text-gray-300">
          “The Char Dham package was perfectly managed. Highly recommended.”
        </p>

        <h4 className="mt-6 font-bold text-xl">
          Priya Verma
        </h4>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <p className="text-gray-300">
          “Professional team and best pricing. Will definitely travel again.”
        </p>

        <h4 className="mt-6 font-bold text-xl">
          Amit Singh
        </h4>
      </div>

    </div>

  </div>
</section>

{/* Inquiry Form */}
<section className="py-24">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center mb-6">
      Plan Your Trip
    </h2>

    <p className="text-center text-gray-400 mb-12">
      Fill the form and our travel expert will contact you.
    </p>

    <form className="space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        placeholder="Destination"
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
      />

      <textarea
        rows={4}
        placeholder="Tell us about your trip..."
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold"
      >
        Submit Inquiry
      </button>

    </form>

  </div>
</section>

{/* CTA Banner */}
<section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-5xl font-black">
      Ready For Your Next Adventure?
    </h2>

    <p className="mt-6 text-xl text-white/90">
      Explore India with Yorra Travels and create unforgettable memories.
    </p>

    <a
      href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
      target="_blank"
      className="inline-block mt-8 bg-white text-black px-10 py-4 rounded-xl font-bold"
    >
      Contact Us Now
    </a>

  </div>
</section>
    </main>
  );
}