import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
title: "India Tour Packages | yorra Travel",
description:
"Explore the best India tour packages including Goa, Kerala, Ladakh, Rajasthan, Kedarnath, Sikkim, Meghalaya and more.",
alternates: {
canonical: "https://yourdomain.com/packages",
},
};

const packages = [
{
title: "Andaman Tour Package",
slug: "andaman-tour-package",
image: "/andaman.jpg",
duration: "5 Nights / 6 Days",
price: "₹24,999",
},
{
title: "Ayodhya Varanasi Tour Package",
slug: "ayodhya-varanasi-tour-package",
image: "/ayodhya.jpg",
duration: "4 Nights / 5 Days",
price: "₹14,999",
},
{
title: "Char Dham Yatra",
slug: "char-dham-yatra",
image: "/chardham.jpg",
duration: "10 Nights / 11 Days",
price: "₹32,999",
},
{
title: "Coorg Mysore Tour Package",
slug: "coorg-mysore-tour-package",
image: "/coorg-mysore.jpg",
duration: "5 Nights / 6 Days",
price: "₹18,999",
},
{
title: "Darjeeling Gangtok Tour Package",
slug: "darjeeling-gangtok-tour-package",
image: "/darjeeling-gangtok.jpg",
duration: "6 Nights / 7 Days",
price: "₹22,999",
},
{
title: "Goa Tour Package",
slug: "goa-tour-package",
image: "/goa.jpg",
duration: "4 Nights / 5 Days",
price: "₹12,999",
},
{
title: "Gokarna Tour Package",
slug: "gokarna-tour-package",
image: "/gokarna.jpg",
duration: "3 Nights / 4 Days",
price: "₹11,999",
},
{
title: "Jim Corbett Nainital Tour Package",
slug: "jim-corbett-nainital-tour-package",
image: "/jimcorbett.jpg",
duration: "5 Nights / 6 Days",
price: "₹17,999",
},
{
title: "Kedarnath Tour Package",
slug: "kedarnath-tour-package",
image: "/kedarnath.jpg",
duration: "5 Nights / 6 Days",
price: "₹16,999",
},
{
title: "Kerala Tour Package",
slug: "kerala-tour-package",
image: "/kerala.jpg",
duration: "6 Nights / 7 Days",
price: "₹23,999",
},
{
title: "Ladakh Tour Package",
slug: "ladakh-tour-package",
image: "/ladakh.jpg",
duration: "6 Nights / 7 Days",
price: "₹28,999",
},
{
title: "Lakshadweep Tour Package",
slug: "lakshadweep-tour-package",
image: "/lakshadweep.jpg",
duration: "5 Nights / 6 Days",
price: "₹29,999",
},
{
title: "Manali Tour Package",
slug: "manali-tour-package",
image: "/manali.jpg",
duration: "4 Nights / 5 Days",
price: "₹13,999",
},
{
title: "Mathura Vrindavan Tour Package",
slug: "mathura-vrindavan-tour-package",
image: "/mathura-vrindavan.jpg",
duration: "3 Nights / 4 Days",
price: "₹9,999",
},
{
title: "Meghalaya Tour Package",
slug: "meghalaya-tour-package",
image: "/meghalaya.jpg",
duration: "6 Nights / 7 Days",
price: "₹25,999",
},
{
title: "Ooty Kodaikanal Tour Package",
slug: "ooty-kodaikanal-tour-package",
image: "/ooty.jpg",
duration: "5 Nights / 6 Days",
price: "₹18,999",
},
{
title: "Pondicherry Tour Package",
slug: "pondicherry-tour-package",
image: "/pondicherry.jpg",
duration: "4 Nights / 5 Days",
price: "₹14,999",
},
{
title: "Rajasthan Tour Package",
slug: "rajasthan-tour-package",
image: "/rajasthan.jpg",
duration: "7 Nights / 8 Days",
price: "₹24,999",
},
{
title: "Sikkim Tour Package",
slug: "sikkim-tour-package",
image: "/sikkim.jpg",
duration: "6 Nights / 7 Days",
price: "₹21,999",
},
{
title: "Spiti Valley Tour Package",
slug: "spiti-tour-package",
image: "/spiti.jpg",
duration: "7 Nights / 8 Days",
price: "₹27,999",
},
{
title: "Tawang Tour Package",
slug: "tawang-tour-package",
image: "/tawang.jpg",
duration: "6 Nights / 7 Days",
price: "₹26,999",
},
];


export default function PackagesPage() {
return ( <main className="min-h-screen bg-[#0B1120] text-white">


  <section className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-black" />

    <div className="relative max-w-7xl mx-auto px-6 text-center">
      <span className="inline-block mb-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-yellow-400">
        Explore India
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold">
        Best India
        <span className="block text-yellow-400">
          Tour Packages
        </span>
      </h1>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
        Discover handpicked holiday packages across India.
      </p>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Popular Tour Packages
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {packages.map((pkg) => (
        <div
          key={pkg.slug}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div className="relative h-64">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold">
              {pkg.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {pkg.duration}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-yellow-400 font-bold">
                {pkg.price}
              </span>

              <Link
                href={`/packages/${pkg.slug}`}
                className="rounded-lg bg-yellow-500 px-4 py-2 text-black font-semibold"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  <section className="max-w-6xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-10">
      Best India Tour Packages
    </h2>

    <div className="space-y-6 text-slate-300 leading-8 text-lg">

      <p>
        Yorra Travel offers carefully crafted India tour packages
        covering Goa, Kerala, Rajasthan, Ladakh, Kedarnath,
        Meghalaya, Sikkim, Andaman, Lakshadweep and many more
        destinations.
      </p>

      <p>
        Whether you are planning a honeymoon, family vacation,
        pilgrimage tour, adventure trip or group holiday,
        our travel experts help you plan the perfect itinerary.
      </p>

      <p>
        We provide hotel bookings, transportation,
        sightseeing, travel assistance and customized itineraries
        at competitive prices.
      </p>

    </div>

  </section>

  <section className="max-w-5xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          Can I customize my tour package?
        </h3>

        <p className="mt-3 text-slate-400">
          Yes, all tour packages can be customized according to
          your budget, travel dates and preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          Are flights included?
        </h3>

        <p className="mt-3 text-slate-400">
          Flights can be included on request depending on the
          selected package.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">
          How do I book a package?
        </h3>

        <p className="mt-3 text-slate-400">
          Contact our travel experts on WhatsApp and we will
          assist you with the complete booking process.
        </p>
      </div>

    </div>

  </section>

  <section className="px-6 pb-24">

    <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 p-[1px]">

      <div className="rounded-3xl bg-[#0B1120] px-8 py-16 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Plan Your Dream Trip Today
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
          Get instant assistance and customized tour packages
          from our travel experts.
        </p>

        <a
          href="https://wa.me/919717367006"
          target="_blank"
          className="inline-flex items-center rounded-xl bg-green-500 px-8 py-4 text-white font-bold hover:scale-105 transition"
        >
          WhatsApp Us
        </a>

      </div>

    </div>

  </section>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "India Tour Packages",
      }),
    }}
  />

</main>
);
}
