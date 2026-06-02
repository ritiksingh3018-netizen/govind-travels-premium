export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm">
            Contact Govind Travel
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Let's Plan Your
            <span className="block text-blue-400">
              Next Adventure
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Need a cab, pilgrimage tour, hill station trip, or custom travel
            package? Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send an Inquiry
              </h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-4 outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-4 outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Destination (e.g. Kedarnath, Manali, Goa)"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-4 outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your trip requirements..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-4 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all"
                >
                  Submit Inquiry →
                </button>
              </form>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 h-full shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-blue-400 text-sm uppercase">
                    Call Us
                  </p>
                  <h3 className="text-xl text-white font-semibold">
                    +91 9717367006
                  </h3>
                </div>

                <div>
                  <p className="text-blue-400 text-sm uppercase">
                    Email
                  </p>
                  <h3 className="text-xl text-white font-semibold">
                    info@govindtravel.com
                  </h3>
                </div>

                <div>
                  <p className="text-blue-400 text-sm uppercase">
                    Office Address
                  </p>
                  <h3 className="text-lg text-white font-semibold">
                    New Delhi, India
                  </h3>
                </div>

                <div>
                  <p className="text-blue-400 text-sm uppercase">
                    Working Hours
                  </p>
                  <h3 className="text-lg text-white font-semibold">
                    Mon - Sat
                    <br />
                    9:00 AM - 7:00 PM
                  </h3>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <a
                    href="https://wa.me/919717367006"
                    className="block text-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="400"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}