import Link from "next/link";
import BlogFilters from "./BlogFilters";

const posts = [
  {
    slug: "business-website-guide",
    category: "Web Development",
    title: "What Makes a Good Business Website in 2026?",
    excerpt:
      "A modern business website needs more than a good design. Discover the key elements that help a website build trust, perform well, and generate enquiries.",
    date: "August 18, 2026",
    readTime: "6 min read",
    image: "/blog/business-website.jpg",
    alt: "Modern business website development for a company",
    featured: true,
  },
  {
    slug: "seo-for-small-business",
    category: "SEO & Digital Growth",
    title: "Why SEO Matters for Small Businesses",
    excerpt:
      "Learn how search visibility can help local and growing businesses attract relevant customers without depending entirely on paid advertising.",
    date: "August 18, 2026",
    readTime: "7 min read",
    image: "/blog/seo-small-business.jpg",
    alt: "SEO analytics and digital growth for small businesses",
    featured: false,
  },
  {
    slug: "business-automation-guide",
    category: "AI & Automation",
    title: "Business Automation: Where Should You Start?",
    excerpt:
      "From lead follow-ups to repetitive admin work, discover practical areas where automation can save time and improve business operations.",
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/blog/business-automation.jpg",
    alt: "Business automation workflow and digital systems",
    featured: false,
  },
  {
    slug: "website-speed-business",
    category: "Web Development",
    title: "Why Website Speed Matters for Your Business",
    excerpt:
      "A slow website can affect user experience, conversions, and search visibility. Here is why performance should be part of your website strategy.",
    date: "August 18, 2026",
    readTime: "5 min read",
    image: "/blog/website-speed.jpg",
    alt: "Website speed and performance optimization",
    featured: false,
  },
  {
    slug: "local-seo-business",
    category: "SEO & Digital Growth",
    title: "Local SEO: How Businesses Can Get Found Nearby",
    excerpt:
      "A practical introduction to local search visibility and the digital signals that help businesses reach customers in their target location.",
    date: "August 18, 2026",
    readTime: "7 min read",
    image: "/blog/local-seo.jpg",
    alt: "Local SEO and Google Maps visibility for businesses",
    featured: false,
  },
  {
    slug: "ai-business-automation",
    category: "AI & Automation",
    title: "How AI Automation Can Improve Everyday Business Work",
    excerpt:
      "AI can help businesses handle repetitive processes, organise information, improve follow-ups, and give teams more time for valuable work.",
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/blog/ai-automation.jpg",
    alt: "AI automation for modern business workflows",
    featured: false,
  },
];

export const metadata = {
  title: "Yorra Tech Blog | Web Development, SEO, AI & Automation",
  description:
    "Explore Yorra Tech insights on website development, SEO, digital growth, AI automation, and business technology.",
  keywords: [
    "Yorra Tech blog",
    "web development blog",
    "SEO tips for businesses",
    "business automation",
    "AI automation",
    "digital growth",
    "website development",
    "business technology",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Yorra Tech Blog | Digital Growth & Technology Insights",
    description:
      "Practical insights on websites, SEO, digital growth, AI, automation, and technology for modern businesses.",
    url: "https://yorra.in/blog",
    siteName: "Yorra Tech",
    type: "website",
  },
};

export default function BlogPage() {
  const featuredPost = posts.find((post) => post.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/[0.055] blur-[150px]" />

        <div className="absolute right-[-180px] top-[45%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />

        <div className="absolute left-[-180px] top-[65%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.02] blur-[140px]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
              Yorra Tech Insights
            </p>
          </div>

          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
            Ideas for building,
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              growing & automating.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Practical insights on websites, SEO, digital growth, AI,
            automation, and technology to help modern businesses move
            forward.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Web Development
            </span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              SEO
            </span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              AI
            </span>

            <span className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Automation
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================== */}

      {featuredPost && (
        <section className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                Featured Insight
              </p>
            </div>

            <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]">
              <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Content */}
                <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      {featuredPost.category}
                    </span>

                    <span className="text-[10px] text-gray-600">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mt-7 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group/link inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                    >
                      Read Article

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-gray-600">
                      {featuredPost.date}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 relative min-h-[280px] overflow-hidden lg:order-2 lg:min-h-[430px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/70 via-transparent to-transparent" />

                  <div className="absolute inset-0 bg-cyan-400/[0.025] mix-blend-screen" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                      Yorra Tech
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =========================================================
          BLOG FILTERS + CARDS
      ========================================================== */}

      <BlogFilters posts={posts} />

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="relative px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-cyan-400/[0.025] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

          <div className="pointer-events-none absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-blue-400" />

          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Build · Grow · Automate
          </p>

          <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] sm:text-5xl">
            Have a digital challenge?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            If you are looking to build a website, improve your digital
            presence, or automate repetitive work, let&apos;s talk.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Start a Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}