"use client";

import Link from "next/link";
import { useState } from "react";

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const packageCategories = [
    {
      title: "🏔️ Mountain Packages",
      packages: [
        {
          name: "Kedarnath Yatra",
          duration: "3N / 4D",
          description: "Haridwar to Haridwar • Hotel + Transport",
          price: "₹8,999",
          image: "/kedarnath.jpg",
        },
        {
          name: "Char Dham Yatra",
          duration: "9N / 10D",
          description: "Hotel + Meals Included",
          price: "₹24,999",
          image: "/chardham.jpg",
        },
        {
          name: "Manali Tour",
          duration: "4N / 5D",
          description: "Solang Valley + Atal Tunnel",
          price: "₹9,999",
          image: "/manali.jpg",
        },
        {
          name: "Spiti Valley",
          duration: "6N / 7D",
          description: "Adventure Tour",
          price: "₹18,999",
          image: "/spiti.jpg",
        },
        {
          name: "Leh Ladakh",
          duration: "6N / 7D",
          description: "Nubra Valley + Pangong Lake",
          price: "₹21,999",
          image: "/ladakh.jpg",
        },
      ],
    },

    {
      title: "🏖️ Beach Packages",
      packages: [
        {
          name: "Goa",
          duration: "3N / 4D",
          description: "Beach Resort Stay",
          price: "₹7,999",
          image: "/goa.jpg",
        },
        {
          name: "Andaman",
          duration: "5N / 6D",
          description: "Island Hopping",
          price: "₹24,999",
          image: "/andaman.jpg",
        },
        {
          name: "Lakshadweep",
          duration: "4N / 5D",
          description: "Water Activities",
          price: "₹29,999",
          image: "/lakshadweep.jpg",
        },
      ],
    },

    {
      title: "🕌 Spiritual Packages",
      packages: [
        {
          name: "Varanasi",
          duration: "2N / 3D",
          description: "Ganga Aarti",
          price: "₹5,999",
          image: "/varanasi.jpg",
        },
        {
          name: "Ayodhya",
          duration: "2N / 3D",
          description: "Ram Mandir Darshan",
          price: "₹4,999",
          image: "/ayodhya.jpg",
        },
        {
          name: "Vaishno Devi",
          duration: "3N / 4D",
          description: "Complete Pilgrimage Tour",
          price: "₹7,999",
          image: "/vaishnodevi.jpg",
        },
        {
          name: "Tirupati Balaji",
          duration: "2N / 3D",
          description: "Temple Darshan",
          price: "₹8,999",
          image: "/tirupati.jpg",
        },
        {
          name: "Rameswaram",
          duration: "3N / 4D",
          description: "Sacred Temple Tour",
          price: "₹9,999",
          image: "/rameswaram.jpg",
        },
      ],
    },

    {
      title: "🏰 Heritage Packages",
      packages: [
        {
          name: "Rajasthan Tour",
          duration: "5N / 6D",
          description: "Jaipur + Jodhpur + Udaipur",
          price: "₹16,999",
          image: "/rajasthan.jpg",
        },
        {
          name: "Golden Triangle",
          duration: "4N / 5D",
          description: "Delhi + Agra + Jaipur",
          price: "₹14,999",
          image: "/goldentriangle.jpg",
        },
      ],
    },

    {
      title: "🐅 Wildlife Packages",
      packages: [
        {
          name: "Jim Corbett",
          duration: "2N / 3D",
          description: "Safari Included",
          price: "₹6,999",
          image: "/jimcorbett.jpg",
        },
        {
          name: "Ranthambore",
          duration: "3N / 4D",
          description: "Tiger Safari",
          price: "₹8,999",
          image: "/ranthambore.jpg",
        },
        {
          name: "Kaziranga",
          duration: "3N / 4D",
          description: "National Park Experience",
          price: "₹11,999",
          image: "/kaziranga.jpg",
        },
      ],
    },

    {
      title: "🌴 Honeymoon Packages",
      packages: [
        {
          name: "Kashmir",
          duration: "5N / 6D",
          description: "Srinagar + Gulmarg",
          price: "₹19,999",
          image: "/kashmir.jpg",
        },
        {
          name: "Kerala",
          duration: "5N / 6D",
          description: "Munnar + Alleppey",
          price: "₹18,999",
          image: "/kerala.jpg",
        },
        {
          name: "Ooty & Coorg",
          duration: "4N / 5D",
          description: "Romantic Hill Escape",
          price: "₹14,999",
          image: "/ooty.jpg",
        },
      ],
    },
  ];

  return (
    <main className="bg-[#0B1220] min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
         
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold mb-4">
            Explore India
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white">
            Tour Packages
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Discover handpicked travel experiences across India with comfort,
            adventure and unforgettable memories.
          </p>
          <div className="max-w-xl mx-auto mt-8 mb-8">
  <input
    type="text"
    placeholder="Search packages..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
  />
</div>
          <div className="sticky top-24 z-20 flex flex-wrap justify-center gap-3 mt-10 mb-16 bg-[#0B1220]/90 backdrop-blur-md py-4 rounded-2xl">
  {packageCategories.map((category) => (
    <a
      key={category.title}
      href={`#${category.title.replace(/[^a-zA-Z0-9]/g, "")}`}
      className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-orange-500 transition text-sm"
    >
      {category.title}
    </a>
  ))}
</div>
        </div>

        {packageCategories.map((category) => (
          <section
  id={category.title.replace(/[^a-zA-Z0-9]/g, "")}
  key={category.title}
  className="mb-16 scroll-mt-36"
>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 border-l-4 border-orange-500 pl-4">
              {category.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.packages
  .filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.description.toLowerCase().includes(search.toLowerCase())
  )
  .map((pkg) => (
  <Link
    key={pkg.name}
    href={
  pkg.name === "Kedarnath Yatra"
    ? "/packages/kedarnath"
    : pkg.name === "Char Dham Yatra"
    ? "/packages/chardham"
    : pkg.name === "Manali Tour"
    ? "/packages/manali"
    : pkg.name === "Spiti Valley"
    ? "/packages/spiti"
    : pkg.name === "Leh Ladakh"
    ? "/packages/ladakh"
    : "#"
}

  >
    <div
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
                  <div className="overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-4">
                   <h3 className="text-lg font-bold text-white"> 
                      {pkg.name}
                    </h3>

                    <p className="text-gray-400 mt-3">
                      {pkg.description}
                    </p>

                    <p className="text-gray-500 mt-3">
                      📅 {pkg.duration}
                    </p>

                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Starting From
                        </p>

                        <span className="text-orange-500 text-xl font-bold">
                          {pkg.price}
                        </span>
                      </div>

                      <span
  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold text-sm transition"
>
  View Details
</span>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white">
            Can't Find Your Dream Destination?
          </h2>

          <p className="text-gray-400 mt-3">
            Contact us and we'll create a customized travel package just for
            you.
          </p>

          <a
            href="https://wa.me/919717367006?text=Hi,%20I%20am%20looking%20for%20a%20customized%20travel%20package.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            Get Custom Package
          </a>
        </div>
      </div>
    </main>
  );
}