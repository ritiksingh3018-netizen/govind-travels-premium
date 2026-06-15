"use client";
import Link from "next/link";

import { useRef, useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [destination, setDestination] = useState("");
const [submitted, setSubmitted] = useState(false);
const [searchDestination, setSearchDestination] = useState("");

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
  if (searchDestination) {
    const destination = searchDestination;

    setSearchDestination("");

    window.location.href = `/packages/${destination}`;
  }
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
      slug: "kedarnath",
    },
    {
      name: "Char Dham",
      image: "/chardham.jpg",
      duration: "10D / 9N",
      price: "₹24,999",
      slug: "chardham",
    },
    
    {
      name: "Ladakh Trip",
      image: "/ladakh.jpg",
      duration: "6D / 5N",
      price: "₹18,999",
      slug: "ladakh",
    },
    {
      name: "Manali Tour",
      image: "/manali.jpg",
      duration: "4D / 3N",
      price: "₹8,999",
      slug: "manali",
    },
   { name: "Meghalaya Explorer",
    image: "/meghalaya.jpg",
    duration:  "5D / 4N",
    price:  "₹18,999",
    slug: "meghalaya",
  },
  {
  name: "Andaman Escape",
  image: "/andaman.jpg",
  duration: "6D / 5N",
  price: "₹24,999",
  slug: "andaman",
},
{
  name: "Jim Corbett & Nainital",
  image: "/jimcorbett.jpg",
  duration: "4D / 3N",
  price: "₹9,999",
  slug: "jim-corbett-nainital",
},
{
  name: "Sikkim Special",
  image: "/sikkim.jpg",
  duration: "6D / 5N",
  price: "₹19,999",
  slug: "sikkim",
},
{
  name: "Tawang Adventure",
  image: "/tawang.jpg",
  duration: "7D / 6N",
  price: "₹24,999",
  slug: "tawang",
},
{
  name: "Lakshadweep Premium",
  image: "/lakshadweep.jpg",
  duration: "5D / 4N",
  price: "₹34,999",
  slug: "lakshadweep",
},
{
  name: "Ayodhya & Varanasi Darshan",
  image: "/ayodhya-varanasi.jpg",
  duration: "4D / 3N",
  price: "₹8,999",
  slug: "ayodhya-varanasi",
},
{
  name: "Mathura Vrindavan",
  image: "/mathura-vrindavan.jpg",
  duration: "3D / 2N",
  price: "₹6,999",
  slug: "mathura-vrindavan",
},
{
  name: "Spiti Valley Expedition",
  image: "/spiti.jpg",
  duration: "7D / 6N",
  price: "₹17,999",
  slug: "spiti-valley",
},
{
  name: "Pondicherry Retreat",
  image: "/pondicherry.jpg",
  duration: "4D / 3N",
  price: "₹10,999",
  slug: "pondicherry",
},
{
  name: "Ooty & Kodaikanal",
  image: "/ooty-kodaikanal.jpg",
  duration: "5D / 4N",
  price: "₹14,999",
  slug: "ooty-kodaikanal",
},
{
  name: "Coorg & Mysore",
  image: "/coorg-mysore.jpg",
  duration: "5D / 4N",
  price: "₹13,999",
  slug: "coorg-mysore",
},
{
  name: "Gokarna Beach Tour",
  image: "/gokarna.jpg",
  duration: "4D / 3N",
  price: "₹9,999",
  slug: "gokarna",
},
{
  name: "Darjeeling & Gangtok",
  image: "/darjeeling-gangtok.jpg",
  duration: "6D / 5N",
  price: "₹18,999",
  slug: "darjeeling-gangtok",
},
    {
      name: "Kerala Tour",
      image: "/kerala.jpg",
      duration: "5D / 4N",
      price: "₹16,999",
      slug: "kerala",
    },
    {
      name: "Goa Tour",
      image: "/goa.jpg",
      duration: "4D / 3N",
      price: "₹12,999",
      slug: "goa",
    },
    {
      name: "Rajasthan Tour",
      image: "/rajasthan.jpg",
      duration: "6D / 5N",
      price: "₹17,999",
      slug: "rajasthan",
    },
  ];

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
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">

          <h1 className="text-5xl md:text-7xl font-black text-center">
            Explore Incredible India
          </h1>

          <p className="mt-4 text-gray-300 text-center text-lg">
            Find Your Perfect Travel Package
          </p>

          {/* SEARCH BOX */}
          <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-full max-w-5xl">

            <div className="grid md:grid-cols-4 gap-4">

              <select
  value={searchDestination}
  onChange={(e) => setSearchDestination(e.target.value)}
  className="bg-black/40 border border-white/20 rounded-xl p-4"
>
  <option value="">Destination</option>
  <option value="kedarnath">Kedarnath</option>
  <option value="chardham">Char Dham</option>
  <option value="ladakh">Ladakh</option>
  <option value="manali">Manali</option>
  <option value="kerala">Kerala</option>
  <option value="goa">Goa</option>
  <option value="rajasthan">Rajasthan</option>
</select>

              <select className="bg-black/40 border border-white/20 rounded-xl p-4">
                <option>Duration</option>
                <option>3-5 Days</option>
                <option>5-7 Days</option>
                <option>7+ Days</option>
              </select>

              <select className="bg-black/40 border border-white/20 rounded-xl p-4">
                <option>Budget</option>
                <option>₹10k - ₹20k</option>
                <option>₹20k - ₹40k</option>
                <option>₹40k+</option>
              </select>

              <button
  onClick={handleSearch}
  className="bg-orange-500 hover:bg-orange-600 rounded-xl font-bold"
>
  Search Packages
</button>

            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-4xl font-bold">
              Popular Travel Packages
            </h2>

            <div className="hidden md:flex gap-3">

              <button
                onClick={scrollPackagesLeft}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
              >
                ←
              </button>

              <button
                onClick={scrollPackagesRight}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
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
                className="min-w-[280px] md:min-w-[calc(25%-18px)] bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {pkg.duration}
                  </p>

                  <p className="text-orange-500 text-2xl font-bold mt-3">
                    {pkg.price}
                  </p>

                  
                <Link
  href={`/packages/${pkg.slug}`}
  className="block mt-5 w-full bg-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-600 text-center"
>
  View Details
</Link>
                  

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
      
      {/* TOP DESTINATIONS */}
<section className="py-20 px-6 bg-zinc-950">

  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center mb-8">

      <h2 className="text-4xl font-bold">
        Top Destinations Across India
      </h2>

     <div className="hidden md:flex gap-3"> 

        <button
          onClick={scrollDestinationsLeft}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
        >
          ←
        </button>

        <button
          onClick={scrollDestinationsRight}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
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
          className="min-w-[280px] md:min-w-[calc(25%-18px)] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:scale-105 transition-all duration-500"
        >
          <img
            src={item.image}
            alt={item.destination}
            className="h-60 w-full object-cover"
          />

          <div className="p-5">

            <p className="text-orange-400 text-sm">
              {item.state}
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {item.destination}
            </h3>

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

      <h2 className="text-4xl font-bold">
        Explore Top Categories
      </h2>

      <div className="hidden md:flex gap-3">

        <button
          onClick={scrollCategoriesLeft}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
        >
          ←
        </button>

        <button
          onClick={scrollCategoriesRight}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500"
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
          className="min-w-[280px] md:w-[calc(25%-18px)] flex-shrink-0 snap-start rounded-3xl overflow-hidden relative group cursor-pointer"
        >

          <img
            src={category.image}
            alt={category.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-5 left-5">

            <h3 className="text-2xl font-bold text-white">
              {category.name}
            </h3>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* WHY CHOOSE YORRA */}

<section className="py-24 px-6 bg-zinc-950">
  <div className="max-w-7xl mx-auto">


<h2 className="text-5xl font-bold text-center mb-16">
  Why Choose Yorra?
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
    <h3 className="text-4xl font-black text-orange-500">500+</h3>
    <p className="mt-2 text-gray-300">Happy Travelers</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
    <h3 className="text-4xl font-black text-orange-500">50+</h3>
    <p className="mt-2 text-gray-300">Destinations</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
    <h3 className="text-4xl font-black text-orange-500">24/7</h3>
    <p className="mt-2 text-gray-300">Customer Support</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
    <h3 className="text-4xl font-black text-orange-500">4.9★</h3>
    <p className="mt-2 text-gray-300">Customer Rating</p>
  </div>

</div>


  </div>
</section>

{/* TESTIMONIALS */}

<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">


<h2 className="text-5xl font-bold text-center mb-16">
  What Our Travelers Say
</h2>

<div className="grid md:grid-cols-3 gap-8">

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
    <p className="text-gray-300">
      “Amazing Kedarnath experience. Hotels, transport and support were excellent.”
    </p>
    <h4 className="mt-6 font-bold text-orange-400">
      Rahul Sharma
    </h4>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
    <p className="text-gray-300">
      “The Char Dham package was perfectly managed. Highly recommended.”
    </p>
    <h4 className="mt-6 font-bold text-orange-400">
      Priya Verma
    </h4>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
    <p className="text-gray-300">
      “Professional team and best pricing. Will definitely travel again.”
    </p>
    <h4 className="mt-6 font-bold text-orange-400">
      Amit Singh
    </h4>
  </div>

</div>


  </div>
</section>

{/* INQUIRY FORM */}

<section className="relative h-[550px] px-6 overflow-hidden">

{/* VIDEO */}
<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 w-full h-full object-cover"

>

```
<source src="/travel-video.mp4" type="video/mp4" />
```

  </video>

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

  <h2 className="text-5xl font-bold text-center">
    Plan Your Trip
  </h2>

  <p className="text-center text-gray-400 mt-4 mb-8">
    Fill the form and our travel expert will contact you.
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
        className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg"
      >
        Reserve Seat →
      </button>
    )}

  </form>

  <p className="text-center text-gray-400 mt-5 text-sm">
    🔒 Your information is safe with us.
  </p>

</div>


  </div>

</section>


{/* CTA */}

<section className="py-24 px-6 text-center">
  <div className="max-w-4xl mx-auto">


<h2 className="text-5xl font-bold">
  Ready For Your Next Adventure?
</h2>

<p className="text-gray-400 mt-6 text-lg">
  Explore India with Yorra Travels and create unforgettable memories.
</p>

<a
  href="https://wa.me/919717367006?text=Hi%20Yorra%20Travels,%20I%20want%20to%20know%20more%20about%20your%20travel%20packages."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl font-bold transition-all duration-300"
>
   Contact Us Now
</a>


  </div>
</section>


    </main>
  );
}