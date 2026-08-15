import Link from "next/link";

const services = [
  { name: "Website Development", href: "/services" },
  { name: "Digital Growth", href: "/services" },
  { name: "Business Automation", href: "/services" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030509] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_0.8fr]">
          
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex text-2xl font-black tracking-tight"
            >
              <span className="text-white">Yorra</span>
              <span className="ml-1 text-cyan-400">Tech</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              We build digital experiences, accelerate business growth, and
              automate the work that slows businesses down.
            </p>

            <p className="mt-6 text-sm font-semibold tracking-wide text-gray-400">
              Build. Grow. Automate.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="w-fit text-sm text-gray-500 transition-colors hover:text-cyan-400"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-gray-500 transition-colors hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Yorra Tech. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/contact"
              className="transition-colors hover:text-gray-300"
            >
              Start a Project
            </Link>

            <span>Build · Grow · Automate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}