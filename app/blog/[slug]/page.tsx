import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
};

const posts: BlogPost[] = [
  {
    slug: "business-website-guide",
    category: "Web Development",
    title: "What Makes a Good Business Website in 2026?",
    excerpt:
      "A modern business website needs more than a good design. It needs to communicate trust, provide a great user experience, perform well, and help turn visitors into opportunities.",
    date: "August 18, 2026",
    readTime: "6 min read",
    image: "/blog/business-website.jpg",
    alt: "Modern business website development",
  },
  {
    slug: "seo-for-small-business",
    category: "SEO & Digital Growth",
    title: "Why SEO Matters for Small Businesses",
    excerpt:
      "Search visibility can help small and growing businesses reach people who are already looking for their products and services.",
    date: "August 18, 2026",
    readTime: "7 min read",
    image: "/blog/seo-small-business.jpg",
    alt: "SEO analytics for small businesses",
  },
  {
    slug: "business-automation-guide",
    category: "AI & Automation",
    title: "Business Automation: Where Should You Start?",
    excerpt:
      "Automation can reduce repetitive work, improve consistency, and give business owners more time to focus on growth.",
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/blog/business-automation.jpg",
    alt: "Business automation workflow",
  },
  {
    slug: "website-speed-business",
    category: "Web Development",
    title: "Why Website Speed Matters for Your Business",
    excerpt:
      "Website performance affects user experience, engagement, and the overall quality of a digital presence.",
    date: "August 18, 2026",
    readTime: "5 min read",
    image: "/blog/website-speed.jpg",
    alt: "Website speed optimization",
  },
  {
    slug: "local-seo-business",
    category: "SEO & Digital Growth",
    title: "Local SEO: How Businesses Can Get Found Nearby",
    excerpt:
      "Local SEO helps businesses improve their visibility when potential customers search for services in their area.",
    date: "August 18, 2026",
    readTime: "7 min read",
    image: "/blog/local-seo.jpg",
    alt: "Local SEO for businesses",
  },
  {
    slug: "ai-business-automation",
    category: "AI & Automation",
    title: "How AI Automation Can Improve Everyday Business Work",
    excerpt:
      "AI automation can help businesses handle repetitive tasks, organise information, improve follow-ups, and create more efficient workflows.",
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/blog/ai-automation.jpg",
    alt: "AI automation for business",
  },
];

function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Yorra Tech",
    };
  }

  return {
    title: `${post.title} | Yorra Tech`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      "Yorra Tech",
      "business technology",
      "digital growth",
      "Yorra Tech blog",
    ],
    alternates: {
      canonical: `https://yorra.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Yorra Tech`,
      description: post.excerpt,
      url: `https://yorra.in/blog/${post.slug}`,
      siteName: "Yorra Tech",
      type: "article",
      publishedTime: "2026-08-18T00:00:00.000Z",
      images: [
        {
          url: `https://yorra.in${post.image}`,
          width: 1200,
          height: 630,
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Yorra Tech`,
      description: post.excerpt,
      images: [`https://yorra.in${post.image}`],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category === post.category
    )
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`https://yorra.in${post.image}`],
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    author: {
      "@type": "Organization",
      name: "Yorra Tech",
      url: "https://yorra.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Yorra Tech",
      url: "https://yorra.in",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yorra.in/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[150px]" />

        <div className="absolute right-[-200px] top-[45%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[140px]" />
      </div>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <section className="px-6 pb-8 pt-36 sm:px-8 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gray-600">
            <Link
              href="/"
              className="transition-colors hover:text-cyan-400"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/blog"
              className="transition-colors hover:text-cyan-400"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-gray-500">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE HEADER
      ====================================================== */}

      <article>
        <section className="px-6 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                {post.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="text-[10px] text-gray-600">
                {post.readTime}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-700" />

              <span className="text-[10px] text-gray-600">
                {post.date}
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              {post.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* =====================================================
            HERO IMAGE
        ====================================================== */}

        <section className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080c12]">
              <div className="relative aspect-[16/8] min-h-[260px] w-full overflow-hidden sm:min-h-[380px] lg:min-h-[500px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                    Yorra Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLE CONTENT
        ====================================================== */}

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">

            {/* Main content */}

            <div className="min-w-0">

              {/* Intro */}

              <div className="border-l-2 border-cyan-400/40 pl-5 sm:pl-7">
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  Digital technology has become an important part of how
                  modern businesses communicate, build trust, attract
                  customers, and operate every day.
                </p>
              </div>

              {/* Section 1 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Your website is often the first impression
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  For many customers, your website is the first place they
                  interact with your business. Before calling, visiting, or
                  sending an enquiry, people often look online to understand
                  who you are and what you offer.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  A professional website should therefore communicate your
                  business clearly within the first few seconds. Visitors
                  should understand what you do, who you help, and what they
                  can do next.
                </p>
              </section>

              {/* Section 2 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  1. Clear messaging
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  Good design cannot compensate for unclear messaging. Your
                  homepage should quickly explain your service, your target
                  audience, and the value you provide.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  Instead of filling the page with complicated terminology,
                  focus on simple language that your potential customers
                  understand.
                </p>
              </section>

              {/* Section 3 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  2. Strong visual design
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  Your website should look professional and consistent with
                  your brand. Typography, spacing, imagery, colours, buttons,
                  and layouts should work together rather than competing for
                  attention.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  A clean interface also makes information easier to scan,
                  especially for visitors using mobile devices.
                </p>
              </section>

              {/* Section 4 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  3. Mobile-first experience
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  A business website should work smoothly across phones,
                  tablets, laptops, and larger screens. Navigation, forms,
                  buttons, images, and content should remain easy to use
                  regardless of screen size.
                </p>
              </section>

              {/* Section 5 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  4. Website performance
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  Visitors do not want to wait for a website to load. Large
                  images, unnecessary scripts, and poorly optimised code can
                  affect the experience.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  Performance should be considered from the beginning of the
                  development process rather than treated as an afterthought.
                </p>
              </section>

              {/* Section 6 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  5. Search-friendly structure
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  A website should also be structured so that search engines
                  can understand its content. Clear headings, useful page
                  titles, descriptive URLs, internal links, relevant content,
                  and technical SEO all contribute to a stronger foundation.
                </p>
              </section>

              {/* Section 7 */}

              <section className="mt-12">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  6. Clear calls to action
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  A website should make it easy for visitors to take the next
                  step. Depending on the business, that could mean calling,
                  submitting an enquiry, booking a consultation, requesting a
                  quote, or starting a conversation on WhatsApp.
                </p>
              </section>

              {/* Conclusion */}

              <section className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                  Final Thoughts
                </p>

                <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                  A website should work for the business.
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  The best business websites are not simply attractive.
                  They communicate clearly, build trust, provide a smooth
                  experience, support search visibility, and make it easier
                  for potential customers to take action.
                </p>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                  At Yorra Tech, we believe technology should support
                  business goals. A website is one part of a larger digital
                  system designed to help a business build, grow, and
                  operate more efficiently.
                </p>
              </section>

              {/* CTA */}

              <div className="mt-12 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.035] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Need a website?
                </p>

                <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                  Let&apos;s build your digital presence.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                  Tell us about your business, your goals, and what you want
                  your website to achieve.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Start a Project
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Article
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-gray-700">
                      Category
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-400">
                      {post.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-gray-700">
                      Published
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-400">
                      {post.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-gray-700">
                      Reading time
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-400">
                      {post.readTime}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-white/[0.06]" />

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors hover:text-cyan-400"
                >
                  ← Back to Blog
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>

      {/* =====================================================
          RELATED ARTICLES
      ====================================================== */}

      {relatedPosts.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                Keep Reading
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Related insights
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      {related.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold leading-snug transition-colors group-hover:text-cyan-100">
                      {related.title}
                    </h3>

                    <span className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 transition-colors group-hover:text-cyan-400">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-14 text-center sm:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Yorra Tech
          </p>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Build. Grow. Automate.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Looking for a website, SEO strategy, or business automation
            solution? Let&apos;s discuss what you want to build.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Start a Project
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          ARTICLE SCHEMA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </main>
  );
}