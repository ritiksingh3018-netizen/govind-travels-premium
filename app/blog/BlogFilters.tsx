"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  featured: boolean;
};

const categories = [
  "All",
  "Web Development",
  "SEO & Digital Growth",
  "AI & Automation",
  "Business Technology",
];

const categoryShortNames: Record<string, string> = {
  "Web Development": "Web",
  "SEO & Digital Growth": "Growth",
  "AI & Automation": "AI",
  "Business Technology": "Business",
};

export default function BlogFilters({
  posts,
}: {
  posts: BlogPost[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter(
      (post) => post.category === activeCategory
    );
  }, [activeCategory, posts]);

  return (
    <section
      aria-labelledby="latest-insights-heading"
      className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            EXPLORE TOPICS
        ====================================================== */}

        <div className="mb-7 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-7 bg-violet-600"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
            Explore Topics
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}

        <div className="flex flex-wrap gap-2" aria-label="Filter blog articles by category">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  active
                    ? "border-violet-500/40 bg-gradient-to-r from-[#6d3fc2] via-[#7546cc] to-[#5f35ad] text-white"
                    : "border-[#3b2b45]/10 bg-white/50 text-[#827887] hover:border-violet-500/25 hover:text-violet-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            LATEST INSIGHTS HEADER
        ====================================================== */}

        <div className="mb-10 mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-violet-600"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                Latest Insights
              </p>
            </div>

            <h2
              id="latest-insights-heading"
              className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl"
            >
              Ideas worth{" "}
              <span className="text-[#776d7c]">
                exploring.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#827887]">
            Practical ideas designed to help businesses make better digital
            decisions.
          </p>
        </div>

        {/* =====================================================
            ARTICLE GRID
        ====================================================== */}

        {filteredPosts.length > 0 ? (
          <div
            aria-label="Yorra Tech blog articles"
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#3b2b45]/10 bg-[#fffdfa]/78 backdrop-blur-xl shadow-[0_22px_70px_rgba(48,35,58,0.075)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/25 hover:shadow-[0_28px_80px_rgba(48,35,58,0.1)]"
              >
                {/* =================================================
                    ARTICLE IMAGE
                ================================================== */}

                <div className="relative h-52 overflow-hidden bg-[#f6f1e8]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211b27]/70 via-[#211b27]/5 to-transparent" />

                  {/* Subtle violet overlay */}
                  <div className="absolute inset-0 bg-violet-400/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category badge */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/[0.25] bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                    {categoryShortNames[post.category] || "Insight"}
                  </span>

                  {/* Article number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-5 text-[9px] font-bold tracking-[0.18em] text-white/70"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Bottom brand */}
                  <span className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    Yorra Tech
                  </span>

                  {/* Image hover shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-[100%] w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                {/* =================================================
                    ARTICLE CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  {/* Category + read time */}

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-600">
                      {post.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#958b99]"
                    />

                    <span className="text-[9px] text-[#958b99]">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-violet-700">
                    {post.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#827887] transition-colors duration-300 group-hover:text-[#665c6b]">
                    {post.excerpt}
                  </p>

                  {/* Bottom information */}

                  <div className="mt-7 flex items-center justify-between border-t border-[#3b2b45]/10 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#958b99]">
                      {post.date}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read: ${post.title}`}
                      className="group/read inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#776d7c] transition-colors duration-300 hover:text-violet-600"
                    >
                      Read

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/read:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Bottom violet hover line */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full"
                />
              </article>
            ))}
          </div>
        ) : (
          /* =====================================================
             EMPTY STATE
          ====================================================== */

          <div className="rounded-3xl border border-[#3b2b45]/10 bg-[#fffdfa]/78 backdrop-blur-xl px-6 py-16 text-center">
            <p className="text-sm text-[#827887]">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}