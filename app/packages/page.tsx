export default function PackagesPage() {
  const packages = [
    {
      name: "Kedarnath Yatra",
      image: "/kedarnath.jpg",
      price: "₹14,999",
      duration: "4 Days / 3 Nights",
      description: "Darshan, Hotel Stay, Transport & Sightseeing Included",
    },
    {
      name: "Char Dham Yatra",
      image: "/chardham.jpg",
      price: "₹29,999",
      duration: "10 Days / 9 Nights",
      description: "Yamunotri, Gangotri, Kedarnath & Badrinath Tour",
    },
    {
      name: "Kashmir Tour",
      image: "/kashmir.jpg",
      price: "₹19,999",
      duration: "5 Days / 4 Nights",
      description: "Srinagar, Gulmarg, Sonmarg & Pahalgam",
    },
    {
      name: "Manali Tour",
      image: "/manali.jpg",
      price: "₹12,999",
      duration: "4 Days / 3 Nights",
      description: "Snow Point, Solang Valley & Local Sightseeing",
    },
    {
      name: "Spiti Valley",
      image: "/spiti.jpg",
      price: "₹24,999",
      duration: "7 Days / 6 Nights",
      description: "Adventure Road Trip Through The Himalayas",
    },
    {
      name: "Leh Ladakh",
      image: "/ladakh.jpg",
      price: "₹27,999",
      duration: "6 Days / 5 Nights",
      description: "Pangong Lake, Nubra Valley & Monasteries",
    },
  ];

  return (
    <main className="bg-[#0B1220] min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white">
            Tour Packages
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Discover Our Most Popular Travel Experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {pkg.name}
                </h2>

                <p className="text-gray-400 mt-3">
                  {pkg.description}
                </p>

                <p className="text-gray-500 mt-3">
                  {pkg.duration}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-orange-500 text-3xl font-bold">
                    {pkg.price}
                  </span>

                  <a
                    href="https://wa.me/919717367006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}