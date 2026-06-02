export default function Home() {
  const destinations = [
    {
      name: "Kedarnath",
      image: "/kedarnath.jpg",
    },
    {
      name: "Char Dham",
      image: "/chardham.jpg",
    },
    {
      name: "Manali",
      image: "/manali.jpg",
    },
    {
      name: "Spiti",
      image: "/spiti.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-travel.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
                Premium Travel Experiences
              </span>

              <h1 className="mt-6 text-6xl md:text-8xl font-black text-white">
                Explore Sacred
                <br />
                India
              </h1>

              <p className="mt-6 text-xl text-gray-200">
                Kedarnath • Char Dham • Manali • Spiti
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <a
                  href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition"
                >
                  Book Tour
                </a>

                <a
                  href="/packages"
                  className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Tours */}
<section className="bg-[#111827] py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-end flex-wrap gap-4 mb-14">
      <div>
        <p className="uppercase tracking-[4px] text-orange-500 font-bold">
          Featured Tours
        </p>

        <h2 className="text-5xl md:text-6xl font-black text-white mt-3">
          Handpicked Travel Packages
        </h2>
      </div>

      <a
        href="/packages"
        className="text-orange-500 font-semibold text-lg"
      >
        View All →
      </a>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Kedarnath Yatra",
          image: "/kedarnath.jpg",
          price: "₹18,999",
          days: "5 Days",
        },
        {
          title: "Char Dham Yatra",
          image: "/chardham.jpg",
          price: "₹34,999",
          days: "10 Days",
        },
        {
          title: "Manali Tour",
          image: "/manali.jpg",
          price: "₹12,999",
          days: "4 Days",
        },
      ].map((tour) => (
        <div
          key={tour.title}
          className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">
                {tour.title}
              </h3>

              <span className="text-sm bg-white/10 text-white px-3 py-1 rounded-full">
                {tour.days}
              </span>
            </div>

            <div className="flex justify-between items-center mt-8">
              <span className="text-3xl font-black text-orange-500">
                {tour.price}
              </span>

              <a
                href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold"
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

      {/* Popular Destinations */}
      <section className="bg-[#0B1220] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-12">
            Popular Destinations
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {destinations.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-12">
            Why Choose Govind Travels?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">500+</h3>
              <p className="text-gray-300 mt-3">Happy Travelers</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">50+</h3>
              <p className="text-gray-300 mt-3">Destinations</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">24/7</h3>
              <p className="text-gray-300 mt-3">Support</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-black text-orange-500">4.9★</h3>
              <p className="text-gray-300 mt-3">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black text-white">
            Ready For Your Next Adventure?
          </h2>

          <p className="text-white/90 text-xl mt-6">
            Book your dream trip with Govind Travels today.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20interested%20in.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black px-10 py-4 rounded-xl font-bold text-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </main>
  );
}