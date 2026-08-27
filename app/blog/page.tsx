import Link from "next/link";
import BlogFilters from "./BlogFilters";
 
// ============================================================
// BLOG POSTS
// Titles are written around real search intent (what people
// actually type into Google) instead of generic filler topics —
// this is what drives organic reach for an agency blog.
// ============================================================
 
const posts = [
  {
    slug: "website-cost-india-2026",
    category: "Web Development",
    title: "How Much Does a Business Website Cost in India (2026)?",
    excerpt:
      "A transparent breakdown of what goes into website pricing — design, development, hosting, and maintenance — so you know what to budget for and what to avoid overpaying for.",
    date: "August 20, 2026",
    readTime: "7 min read",
    image: "/blog/website-cost.jpg",
    alt: "Website development cost breakdown for businesses in India",
    featured: true,
  },
  {
    slug: "signs-you-need-new-website",
    category: "Web Development",
    title: "7 Signs Your Business Website Is Losing You Customers",
    excerpt:
      "Slow load times, outdated design, and broken mobile layouts quietly cost businesses enquiries every day. Here's how to spot the warning signs early.",
    date: "August 19, 2026",
    readTime: "6 min read",
    image: "/blog/website-signs.jpg",
    alt: "Business website warning signs and redesign checklist",
    featured: false,
  },
  {
    slug: "google-my-business-ranking",
    category: "SEO & Digital Growth",
    title: "How to Rank Higher on Google Maps for Local Searches",
    excerpt:
      "A step-by-step look at optimising your Google Business Profile — reviews, categories, photos, and posts — to appear in the local map pack.",
    date: "August 18, 2026",
    readTime: "8 min read",
    image: "/blog/gmb-ranking.jpg",
    alt: "Google Maps local SEO ranking guide for businesses",
    featured: false,
  },
  {
    slug: "whatsapp-automation-business",
    category: "AI & Automation",
    title: "How Businesses Are Using WhatsApp Automation to Save Hours Every Week",
    excerpt:
      "From instant lead replies to automated follow-ups, see practical ways businesses are using WhatsApp automation to stop losing enquiries.",
    date: "August 17, 2026",
    readTime: "7 min read",
    image: "/blog/whatsapp-automation.jpg",
    alt: "WhatsApp business automation and chatbot workflow",
    featured: false,
  },
  {
    slug: "seo-vs-paid-ads",
    category: "SEO & Digital Growth",
    title: "SEO vs Paid Ads: Where Should a Small Business Spend First?",
    excerpt:
      "Both channels work differently over different timelines. Here's an honest comparison of cost, speed, and long-term value to help you decide.",
    date: "August 16, 2026",
    readTime: "6 min read",
    image: "/blog/seo-vs-ads.jpg",
    alt: "SEO versus paid advertising comparison for small business",
    featured: false,
  },
  {
    slug: "ai-chatbot-lead-generation",
    category: "AI & Automation",
    title: "Can an AI Chatbot Actually Generate Leads? Here's What Works",
    excerpt:
      "Not all chatbots are built the same. A look at what separates a lead-generating chatbot from one that just frustrates website visitors.",
    date: "August 14, 2026",
    readTime: "7 min read",
    image: "/blog/ai-chatbot-leads.jpg",
    alt: "AI chatbot for website lead generation",
    featured: false,
  },
  {
    slug: "ecommerce-website-checklist",
    category: "Web Development",
    title: "The Complete Checklist Before Launching Your E-commerce Website",
    excerpt:
      "Payment gateways, product pages, mobile checkout, and SEO basics — everything you need to verify before your online store goes live.",
    date: "August 12, 2026",
    readTime: "9 min read",
    image: "/blog/ecommerce-checklist.jpg",
    alt: "E-commerce website launch checklist for businesses",
    featured: false,
  },
  {
    slug: "crm-for-small-business",
    category: "AI & Automation",
    title: "Do Small Businesses Really Need a CRM? Here's How to Decide",
    excerpt:
      "If leads are slipping through spreadsheets and WhatsApp chats, a CRM might save more time than it costs. Here's how to know if you're ready for one.",
    date: "August 10, 2026",
    readTime: "6 min read",
    image: "/blog/crm-small-business.jpg",
    alt: "CRM software decision guide for small businesses",
    featured: false,
  },
  {
    slug: "core-web-vitals-explained",
    category: "Web Development",
    title: "Core Web Vitals Explained: Why Google Cares About Your Site Speed",
    excerpt:
      "A plain-English breakdown of the performance metrics that affect both user experience and search rankings — and how to actually improve them.",
    date: "August 8, 2026",
    readTime: "7 min read",
    image: "/blog/core-web-vitals.jpg",
    alt: "Core Web Vitals and website speed optimization guide",
    featured: false,
  },
];
 
export const metadata = {
  title: "Yorra Tech Blog | Web Development, SEO, AI & Automation Insights",
  description:
    "Practical, no-fluff guides on website development, local SEO, AI chatbots, and business automation — written for business owners, not developers.",
  keywords: [
    "Yorra Tech blog",
    "website cost India",
    "local SEO guide",
    "WhatsApp automation for business",
    "AI chatbot for business",
    "small business website",
    "Google My Business ranking",
    "business automation blog",
  ],
  alternates: {
    canonical: "https://yorra.in/blog",
  },
  openGraph: {
    title: "Yorra Tech Blog | Digital Growth & Technology Insights",
    description:
      "Practical, no-fluff guides on websites, SEO, AI, and automation for growing businesses.",
    url: "https://yorra.in/blog",
    siteName: "Yorra Tech",
    type: "website",
  },
};
 
export default function BlogPage() {
  const featuredPost = posts.find((post) => post.featured);
 
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#211b27] bg-[linear-gradient(rgba(112,78,145,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(112,78,145,0.035)_1px,transparent_1px)] bg-[size:36px_36px] relative">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
 
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-500/[0.055] blur-[150px]" />
 
        <div className="absolute right-[-180px] top-[45%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[140px]" />
 
        <div className="absolute left-[-180px] top-[65%] h-[400px] w-[400px] rounded-full bg-purple-400/[0.02] blur-[140px]" />
      </div>
 
      {/* =========================================================
          HERO
      ========================================================== */}
 
      <section className="relative px-6 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-600" />
 
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-600 sm:text-sm">
              Yorra Tech Insights
            </p>
          </div>
 
          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl drop-shadow-[0_10px_32px_rgba(55,37,70,0.09)]">
            Ideas for building,
            <br />
 
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-violet-700 bg-clip-text text-transparent">
              growing & automating.
            </span>
          </h1>
 
          <p className="mt-8 max-w-3xl text-base leading-7 text-[#665c6b] sm:text-lg sm:leading-8">
            Practical, no-fluff guides on websites, SEO, AI, and automation —
            written for business owners who want answers, not jargon.
          </p>
 
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rounded-full border border-violet-500/20 bg-violet-600/[0.05] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-600">
              Web Development
            </span>
 
            <span className="rounded-full border border-[#3b2b45]/10 bg-white/50 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#827887]">
              SEO & Digital Growth
            </span>
 
            <span className="rounded-full border border-[#3b2b45]/10 bg-white/50 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#827887]">
              AI & Automation
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
              <span className="h-px w-7 bg-violet-600" />
 
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#827887]">
                Featured Insight
              </p>
            </div>
 
            <article className="group relative overflow-hidden rounded-[2rem] border border-[#3b2b45]/10 bg-[#fffdfa]/78 backdrop-blur-xl shadow-[0_22px_70px_rgba(48,35,58,0.075)]">
              <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Content */}
                <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-violet-500/20 bg-violet-600/[0.05] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-600">
                      {featuredPost.category}
                    </span>
 
                    <span className="text-[10px] text-[#958b99]">
                      {featuredPost.readTime}
                    </span>
                  </div>
 
                  <h2 className="mt-7 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    {featuredPost.title}
                  </h2>
 
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#776d7c] sm:text-base sm:leading-8">
                    {featuredPost.excerpt}
                  </p>
 
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group/link inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6d3fc2] via-[#7546cc] to-[#5f35ad] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:from-[#7848d0] hover:via-[#8051d8] hover:to-[#683bb8] hover:shadow-[0_16px_42px_rgba(96,55,164,0.12)]"
                    >
                      Read Article
 
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
 
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#958b99]">
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
 
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f6f1e8]/70 via-transparent to-transparent" />
 
                  <div className="absolute inset-0 bg-violet-400/[0.025] mix-blend-multiply" />
 
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
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
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/[0.045] blur-[140px]" />
 
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#3b2b45]/10 bg-white/72 backdrop-blur-xl shadow-[0_20px_70px_rgba(58,38,80,0.08)] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(124,58,237,0.5)]" />
 
          <div className="pointer-events-none absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-purple-400" />
 
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-600">
            Build · Grow · Automate
          </p>
 
          <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] sm:text-5xl">
            Have a digital challenge?
          </h2>
 
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#827887] sm:text-base sm:leading-8">
            If you are looking to build a website, improve your digital
            presence, or automate repetitive work, let&apos;s talk.
          </p>
 
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6d3fc2] via-[#7546cc] to-[#5f35ad] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:from-[#7848d0] hover:via-[#8051d8] hover:to-[#683bb8] hover:shadow-[0_16px_42px_rgba(96,55,164,0.12)]"
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