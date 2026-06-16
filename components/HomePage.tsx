"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [destination, setDestination] = useState("");
const [submitted, setSubmitted] = useState(false);
const [searchDestination, setSearchDestination] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      
      destination,
      
    }),
  });

  const data = await res.json();

 if (data.success) {
  setSubmitted(true);

  setName("");
  setPhone("");
  
  setDestination("");
  
}
};

const handleSearch = () => {
  if (!searchDestination.trim()) return;

  const search = searchDestination.toLowerCase();

  const foundPackage = packages.find(
    (pkg) =>
      pkg.name.toLowerCase().includes(search) ||
      pkg.slug.toLowerCase().includes(search)
  );

  if (foundPackage) {
    window.location.href = `/packages/${foundPackage.slug}`;
    return;
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Yorra Travels, I am looking for a travel package for ${searchDestination}.`
  );

  window.open(
    `https://wa.me/919717367006?text=${whatsappMessage}`,
    "_blank"
  );
};



  const packageSliderRef = useRef<HTMLDivElement>(null);
const destinationSliderRef = useRef<HTMLDivElement>(null);
const categorySliderRef = useRef<HTMLDivElement>(null);
  const packages = [
    {
      name: "Kedarnath Yatra",
      image: "/kedarnath.jpg",
      duration: "4D / 3N",
      price: "₹9,999",
      slug: "kedarnath-tour-package",
    },
    {
      name: "Char Dham",
      image: "/chardham.jpg",
      duration: "10D / 9N",
      price: "₹24,999",
      slug: "char-dham-yatra",
    },
    
    {
      name: "Ladakh Trip",
      image: "/ladakh.jpg",
      duration: "6D / 5N",
      price: "₹18,999",
      slug: "ladakh-tour-package",
    },
    {
      name: "Manali Tour",
      image: "/manali.jpg",
      duration: "4D / 3N",
      price: "₹8,999",
      slug: "manali-tour-package",
    },
   { name: "Meghalaya Explorer",
    image: "/meghalaya.jpg",
    duration:  "5D / 4N",
    price:  "₹18,999",
    slug: "meghalaya-tour-package",
  },
  {
  name: "Andaman Escape",
  image: "/andaman.jpg",
  duration: "6D / 5N",
  price: "₹24,999",
  slug: "andaman-tour-package",
},
{
  name: "Jim Corbett & Nainital",
  image: "/jimcorbett.jpg",
  duration: "4D / 3N",
  price: "₹9,999",
  slug: "jim-corbett-nainital-tour-package",
},
{
  name: "Sikkim Special",
  image: "/sikkim.jpg",
  duration: "6D / 5N",
  price: "₹19,999",
  slug: "sikkim-tour-package",
},
{
  name: "Tawang Adventure",
  image: "/tawang.jpg",
  duration: "7D / 6N",
  price: "₹24,999",
  slug: "tawang-tour-package",
},
{
  name: "Lakshadweep Premium",
  image: "/lakshadweep.jpg",
  duration: "5D / 4N",
  price: "₹34,999",
  slug: "lakshadweep-tour-package",
},
{
  name: "Ayodhya & Varanasi Darshan",
  image: "/ayodhya-varanasi.jpg",
  duration: "4D / 3N",
  price: "₹8,999",
  slug: "ayodhya-varanasi-tour-package",
},
{
  name: "Mathura Vrindavan",
  image: "/mathura-vrindavan.jpg",
  duration: "3D / 2N",
  price: "₹6,999",
  slug: "mathura-vrindavan-tour-package",
},
{
  name: "Spiti Valley Expedition",
  image: "/spiti.jpg",
  duration: "7D / 6N",
  price: "₹17,999",
  slug: "spiti-tour-package",
},
{
  name: "Pondicherry Retreat",
  image: "/pondicherry.jpg",
  duration: "4D / 3N",
  price: "₹10,999",
  slug: "pondicherry-tour-package",
},
{
  name: "Ooty & Kodaikanal",
  image: "/ooty-kodaikanal.jpg",
  duration: "5D / 4N",
  price: "₹14,999",
  slug: "ooty-kodaikanal-tour-package",
},
{
  name: "Coorg & Mysore",
  image: "/coorg-mysore.jpg",
  duration: "5D / 4N",
  price: "₹13,999",
  slug: "coorg-mysore-tour-package",
},
{
  name: "Gokarna Beach Tour",
  image: "/gokarna.jpg",
  duration: "4D / 3N",
  price: "₹9,999",
  slug: "gokarna-tour-package",
},
{
  name: "Darjeeling & Gangtok",
  image: "/darjeeling-gangtok.jpg",
  duration: "6D / 5N",
  price: "₹18,999",
  slug: "darjeeling-gangtok-tour-package",
},
    {
      name: "Kerala Tour",
      image: "/kerala.jpg",
      duration: "5D / 4N",
      price: "₹16,999",
      slug: "kerala-tour-package",
    },
    {
      name: "Goa Tour",
      image: "/goa.jpg",
      duration: "4D / 3N",
      price: "₹12,999",
      slug: "goa-tour-package",
    },
    {
      name: "Rajasthan Tour",
      image: "/rajasthan.jpg",
      duration: "6D / 5N",
      price: "₹17,999",
      slug: "rajasthan-tour-package",
    },
  ];
  const findPackage = (search: string) => {
  const term = search.toLowerCase().trim();

  return packages.find((pkg) => {
    return (
      pkg.name.toLowerCase().includes(term) ||
      pkg.slug.toLowerCase().includes(term)
    );
  });
};

const scrollPackagesLeft = () => {
  packageSliderRef.current?.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
};
const categories = [
  { name: "Adventure", image: "/categories/adventure.jpg" },
  { name: "Pilgrimage", image: "/categories/pilgrimage.jpg" },
  { name: "Honeymoon", image: "/categories/honeymoon.jpg" },
  { name: "Family Tours", image: "/categories/family.jpg" },
  { name: "Beach Holidays", image: "/categories/beach.jpg" },
  { name: "Road Trips", image: "/categories/roadtrip.jpg" },
  { name: "Camping", image: "/categories/camping.jpg" },
  { name: "Heritage Tours", image: "/categories/heritage.jpg" },
];

const scrollPackagesRight = () => {
  packageSliderRef.current?.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
};

const scrollDestinationsLeft = () => {
  destinationSliderRef.current?.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
};

const scrollDestinationsRight = () => {
  destinationSliderRef.current?.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
};
const scrollCategoriesLeft = () => {
  categorySliderRef.current?.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
};

const scrollCategoriesRight = () => {
  categorySliderRef.current?.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
};
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
<section className="relative min-h-screen overflow-hidden">

  <Image
    src="/hero-banner.jpg"
    alt="Yorra Travels India Tour Packages"
    fill
    priority
    quality={100}
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/70" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

  <div className="relative z-10 min-h-screen flex items-center">

    <div className="max-w-7xl mx-auto px-6 w-full">

      <div className="max-w-4xl">

        <span className="inline-flex items-center px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-medium">
          Luxury Travel Experiences Across India
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl xl:text-8xl font-black leading-tight">
          Discover
          <span className="block text-amber-400">
            Extraordinary India
          </span>
          With Yorra
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed">
          Curated spiritual journeys, luxury escapes, family holidays,
          adventure expeditions and unforgettable experiences across India.
        </p>

      </div>

     
{/* PREMIUM SEARCH BOX */}

<div className="mt-14 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 max-w-6xl overflow-visible">

  <div className="grid md:grid-cols-4 gap-4">

    {/* DESTINATION SEARCH */}

    <div className="relative z-50">

  <div className="relative">

  <input
    type="text"
    
    value={searchDestination}
    onChange={(e) => setSearchDestination(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
    placeholder="Search destination..."
    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4"
  />

  

</div>

   {showSuggestions && searchDestination && (

  <div className="absolute left-0 right-0 top-full mt-2 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden z-[9999]">
{packages
  .filter((pkg) => {
    const search = searchDestination.toLowerCase().trim();

    return (
      pkg.name.toLowerCase().includes(search) ||
      pkg.slug.toLowerCase().includes(search)
    );
  })
      .slice(0, 5)
      .map((pkg) => (

        <button
          key={pkg.slug}
          type="button"
          onClick={() => {
  window.location.href = `/packages/${pkg.slug}`;
}}
          className="block w-full text-left px-4 py-3 hover:bg-white/10"
        >
          {pkg.name}
        </button>

      ))}

  </div>

)}

    </div>

    {/* DURATION */}

    <select className="bg-black/40 border border-white/10 rounded-2xl p-4">
      <option>Duration</option>
      <option>3-5 Days</option>
      <option>5-7 Days</option>
      <option>7+ Days</option>
    </select>

    {/* BUDGET */}

    <select className="bg-black/40 border border-white/10 rounded-2xl p-4">
      <option>Budget</option>
      <option>₹0 - ₹10k</option>
      <option>₹10k - ₹20k</option>
      <option>₹20k - ₹40k</option>
      <option>₹40k+</option>
    </select>

    {/* SEARCH BUTTON */}

    <button
      onClick={handleSearch}
      className="bg-amber-500 hover:bg-amber-600 text-black rounded-2xl font-bold"
    >
      Search Packages
    </button>

  </div>

</div>

    </div>
  </div>
</section>

      {/* PACKAGES */}
<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center mb-12">

      <div>
        <p className="text-amber-400 uppercase tracking-widest text-sm">
          Popular Packages
        </p>

        <h2 className="text-5xl font-black mt-3">
          Handpicked Experiences
        </h2>
      </div>

      <div className="hidden md:flex gap-3">

        <button
          onClick={scrollPackagesLeft}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 transition"
        >
          ←
        </button>

        <button
          onClick={scrollPackagesRight}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 transition"
        >
          →
        </button>

      </div>
    </div>

    <div
      ref={packageSliderRef}
      className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
    >

      {packages.map((pkg) => (

        <div
          key={pkg.name}
          className="
          min-w-[300px]
          md:min-w-[calc(25%-18px)]
          rounded-[32px]
          overflow-hidden
          bg-gradient-to-b
          from-white/10
          to-white/5
          border
          border-white/10
          hover:border-amber-500
          hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]
          transition-all
          duration-500
          "
        >

          <div className="relative overflow-hidden">

            <img
              src={pkg.image}
              alt={pkg.name}
              className="h-60 w-full object-cover transition duration-700 hover:scale-110"
            />

            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-sm">
              {pkg.duration}
            </div>

          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold">
              {pkg.name}
            </h3>

            <div className="flex items-center gap-2 mt-3">
              ⭐⭐⭐⭐⭐
              <span className="text-gray-400 text-sm">
                (4.9 Rating)
              </span>
            </div>

            <p className="text-amber-400 text-3xl font-black mt-4">
              {pkg.price}
            </p>

            <Link
              href={`/packages/${pkg.slug}`}
              className="
              block
              mt-6
              text-center
              bg-amber-500
              hover:bg-amber-600
              text-black
              py-3
              rounded-2xl
              font-bold
              "
            >
              Explore Package
            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      
      {/* TOP DESTINATIONS */}
<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center mb-12">

      <div>
        <p className="text-amber-400 uppercase tracking-widest text-sm">
          Explore India
        </p>

        <h2 className="text-5xl font-black mt-3">
          Top Destinations
        </h2>
      </div>

      <div className="hidden md:flex gap-3">

        <button
          onClick={scrollDestinationsLeft}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500"
        >
          ←
        </button>

        <button
          onClick={scrollDestinationsRight}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500"
        >
          →

        </button>

      </div>

    </div>

    <div
      ref={destinationSliderRef}
      className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
    >

      {[
        {
          state: "Jammu & Kashmir",
          destination: "Srinagar",
          image: "/destinations/srinagar.jpg",
        },
        {
          state: "Himachal Pradesh",
          destination: "Manali",
          image: "/destinations/manali.jpg",
        },
        {
          state: "Uttarakhand",
          destination: "Kedarnath",
          image: "/destinations/kedarnath.jpg",
        },
        {
          state: "Punjab",
          destination: "Golden Temple",
          image: "/destinations/amritsar.jpg",
        },
        {
          state: "Rajasthan",
          destination: "Jaipur",
          image: "/destinations/jaipur.jpg",
        },
        {
          state: "Gujarat",
          destination: "Statue of Unity",
          image: "/destinations/statueofunity.jpg",
        },
        {
          state: "Maharashtra",
          destination: "Mumbai",
          image: "/destinations/mumbai.jpg",
        },
        {
          state: "Goa",
          destination: "North Goa",
          image: "/destinations/goa.jpg",
        },
        {
          state: "Kerala",
          destination: "Munnar",
          image: "/destinations/munnar.jpg",
        },
        {
          state: "Tamil Nadu",
          destination: "Ooty",
          image: "/destinations/ooty.jpg",
        },
        {
          state: "Karnataka",
          destination: "Coorg",
          image: "/destinations/coorg.jpg",
        },
        {
          state: "Andhra Pradesh",
          destination: "Tirupati",
          image: "/destinations/tirupati.jpg",
        },
        {
          state: "Telangana",
          destination: "Hyderabad",
          image: "/destinations/hyderabad.jpg",
        },
        {
          state: "Madhya Pradesh",
          destination: "Khajuraho",
          image: "/destinations/khajuraho.jpg",
        },
        {
          state: "Bihar",
          destination: "Bodh Gaya",
          image: "/destinations/bodhgaya.jpg",
        },
        {
          state: "West Bengal",
          destination: "Darjeeling",
          image: "/destinations/darjeeling.jpg",
        },
        {
          state: "Sikkim",
          destination: "Gangtok",
          image: "/destinations/gangtok.jpg",
        },
        {
          state: "Assam",
          destination: "Kaziranga",
          image: "/destinations/kaziranga.jpg",
        },
        {
          state: "Meghalaya",
          destination: "Shillong",
          image: "/destinations/shillong.jpg",
        },
        {
          state: "Odisha",
          destination: "Puri",
          image: "/destinations/puri.jpg",
        },
      ].map((item) => (
        <div
  key={item.destination}
  className="
  relative
  min-w-[300px]
  md:min-w-[calc(25%-18px)]
  rounded-[32px]
  overflow-hidden
  group
  "
>

  <img
    src={item.image}
    alt={item.destination}
    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

  <div className="absolute bottom-6 left-6">

    <p className="text-amber-400 text-sm">
      {item.state}
    </p>

    <h3 className="text-3xl font-black mt-2">
      {item.destination}
    </h3>

    <p className="text-gray-300 mt-2">
      Luxury stays & curated experiences
    </p>

  </div>

</div>
      ))}

    </div>

  </div>

</section>
{/* EXPLORE TOP CATEGORIES */}
<section className="py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center mb-8">

     <div className="mb-12">

  <p className="text-amber-400 uppercase tracking-widest text-sm">
    Travel Styles
  </p>

  <h2 className="text-5xl font-black mt-3">
    Explore By Category
  </h2>

</div>

      <div className="hidden md:flex gap-3">

        <button
          onClick={scrollCategoriesLeft}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500"
        >
          ←
        </button>

        <button
          onClick={scrollCategoriesRight}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500"
        >
          →
        </button>

      </div>

    </div>

    <div
      ref={categorySliderRef}
      className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
    >

      {categories.map((category) => (
        <div
  key={category.name}
  className="
  min-w-[300px]
  md:w-[calc(25%-18px)]
  flex-shrink-0
  snap-start
  rounded-[32px]
  overflow-hidden
  relative
  group
  cursor-pointer
  "
>

  <img
    src={category.image}
    alt={category.name}
    className="
    h-80
    w-full
    object-cover
    transition
    duration-700
    group-hover:scale-110
    "
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute bottom-6 left-6">

    <h3 className="text-3xl font-black">
      {category.name}
    </h3>

    <p className="text-gray-300 mt-2">
      Discover experiences
    </p>

  </div>

</div>
      ))}

    </div>

  </div>

</section>
{/* WHY CHOOSE YORRA */}

<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-amber-400 uppercase tracking-widest text-sm">
        Why Travelers Love Us
      </p>

      <h2 className="text-5xl md:text-6xl font-black mt-4">
        Why Choose Yorra?
      </h2>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center hover:border-amber-500 transition">

        <h3 className="text-5xl font-black text-amber-400">
          10K+
        </h3>

        <p className="mt-3 text-gray-300">
          Happy Travelers
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center hover:border-amber-500 transition">

        <h3 className="text-5xl font-black text-amber-400">
          50+
        </h3>

        <p className="mt-3 text-gray-300">
          Destinations
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center hover:border-amber-500 transition">

        <h3 className="text-5xl font-black text-amber-400">
          24/7
        </h3>

        <p className="mt-3 text-gray-300">
          Customer Support
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center hover:border-amber-500 transition">

        <h3 className="text-5xl font-black text-amber-400">
          4.9★
        </h3>

        <p className="mt-3 text-gray-300">
          Average Rating
        </p>

      </div>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}

<section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-amber-400 uppercase tracking-widest text-sm">
        Testimonials
      </p>

      <h2 className="text-5xl md:text-6xl font-black mt-4">
        What Our Travelers Say
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

        <div className="text-amber-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-300 mt-5 leading-8">
          Amazing Kedarnath experience. Hotels, transport and support
          were perfectly managed.
        </p>

        <h4 className="mt-6 font-bold text-amber-400">
          Rahul Sharma
        </h4>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

        <div className="text-amber-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-300 mt-5 leading-8">
          The Char Dham package exceeded our expectations.
          Highly recommended.
        </p>

        <h4 className="mt-6 font-bold text-amber-400">
          Priya Verma
        </h4>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

        <div className="text-amber-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-300 mt-5 leading-8">
          Excellent planning, premium hotels and best pricing.
        </p>

        <h4 className="mt-6 font-bold text-amber-400">
          Amit Singh
        </h4>

      </div>

    </div>

  </div>

</section>

{/* INQUIRY FORM */}

<section className="relative h-[650px] px-6 overflow-hidden">

{/* HERO IMAGE */}
<img
  src="/travel-banner.jpg"
  alt="Best India Tour Packages - Govind Travel"
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/70" />

{/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto h-full flex justify-end items-center">


<div
  className="
  w-full
  max-w-[420px]
  bg-black/40
  backdrop-blur-xl
  border
  border-white/20
  rounded-[45px]
  p-4
  shadow-2xl
  "
>

  <h2 className="text-5xl font-black text-center">
  Design Your Perfect Journey
</h2>

<p className="text-center text-gray-400 mt-4 mb-8">
  Tell us your travel plans and our experts will create a
  personalized itinerary just for you.
</p>

  <form onSubmit={handleSubmit} className="space-y-5">

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
    />

    <input
      type="tel"
      placeholder="10 Digit Mobile Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
    />

    

    <input
      type="text"
      placeholder="Destination"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
    />

    

    

    {submitted ? (
      <div className="w-full bg-green-600 text-white py-4 rounded-2xl text-center font-bold">
        ✅ Form Submitted! Our team will contact you shortly.
      </div>
    ) : (
     <button
  type="submit"
  className="
  w-full
  bg-amber-500
  hover:bg-amber-600
  py-4
  rounded-2xl
  font-bold
  text-lg
  text-black
  "
>
  Get Free Consultation →
</button>
    )}

  </form>

  <p className="text-center text-gray-400 mt-5 text-sm">
    🔒 Your information is safe with us.
  </p>

</div>


  </div>

</section>
{/* SEO CONTENT */}

<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-black mb-8">
      India Tour Packages With Yorra Travels
    </h2>

    <p className="text-gray-300 leading-9 text-lg">
      Yorra Travels offers carefully curated India tour packages
      covering Kedarnath, Char Dham, Ladakh, Kashmir, Kerala,
      Goa, Rajasthan, Meghalaya, Andaman and many other
      destinations. Whether you are looking for spiritual
      journeys, luxury vacations, family holidays, honeymoon
      packages or adventure expeditions, our travel experts
      ensure a seamless and memorable experience from start
      to finish.
    </p>

  </div>

</section>


{/* CTA */}

<section className="py-24 px-6 text-center">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl md:text-7xl font-black leading-tight">
      Ready For Your Next
      <span className="block text-amber-400">
        Adventure?
      </span>
    </h2>

    <p className="text-gray-400 mt-8 text-xl">
      Explore India with Yorra Travels and create unforgettable memories.
    </p>

    <a
      href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20want%20to%20know%20more%20about%20your%20travel%20packages."
      target="_blank"
      rel="noopener noreferrer"
      className="
      inline-block
      mt-10
      bg-amber-500
      hover:bg-amber-600
      text-black
      px-12
      py-5
      rounded-2xl
      font-black
      transition
      "
    >
      Contact Us Now
    </a>

  </div>

</section>

    </main>
  );
}