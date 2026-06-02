export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-black mb-4">
              Yorra Travels
            </h2>

            <p className="text-gray-400">
              Premium travel experiences across
              Kedarnath, Char Dham, Kashmir,
              Himachal and Uttarakhand.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Destinations
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Kedarnath</li>
              <li>Char Dham</li>
              <li>Kashmir</li>
              <li>Manali</li>
              <li>Spiti Valley</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Tour Packages</li>
              <li>Hotel Booking</li>
              <li>Taxi Service</li>
              <li>Group Tours</li>
              <li>Custom Trips</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📞 +91 9717367006</li>
              <li>📧 info@yorra.in</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Yorra Travels. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}