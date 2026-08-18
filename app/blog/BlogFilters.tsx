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
    <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            EXPLORE TOPICS
        ====================================================== */}

        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-7 bg-cyan-400" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Explore Topics
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  active
                    ? "border-cyan-400/40 bg-cyan-400 text-black"
                    : "border-white/[0.08] bg-white/[0.02] text-gray-600 hover:border-cyan-400/25 hover:text-cyan-400"
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
              <span className="h-px w-7 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                Latest Insights
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Ideas worth{" "}
              <span className="text-gray-600">
                exploring.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-600">
            Practical ideas designed to help businesses make better digital
            decisions.
          </p>
        </div>

        {/* =====================================================
            ARTICLE GRID
        ====================================================== */}

        {filteredPosts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/[0.035]"
              >
                {/* =================================================
                    ARTICLE IMAGE
                ================================================== */}

                <div className="relative h-52 overflow-hidden bg-[#080c12]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/85 via-[#05070b]/10 to-transparent" />

                  {/* Subtle cyan overlay */}
                  <div className="absolute inset-0 bg-cyan-400/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category badge */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/[0.12] bg-black/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                    {categoryShortNames[post.category] || "Insight"}
                  </span>

                  {/* Article number */}
                  <span className="absolute right-5 top-5 text-[9px] font-bold tracking-[0.18em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Bottom brand */}
                  <span className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    Yorra Tech
                  </span>

                  {/* Image hover shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-[100%] w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                {/* =================================================
                    ARTICLE CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  {/* Category + read time */}

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      {post.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-gray-700" />

                    <span className="text-[9px] text-gray-700">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-cyan-100">
                    {post.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-500">
                    {post.excerpt}
                  </p>

                  {/* Bottom information */}

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-gray-700">
                      {post.date}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/read inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                    >
                      Read

                      <span className="transition-transform duration-300 group-hover/read:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Bottom cyan hover line */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        ) : (
          /* =====================================================
             EMPTY STATE
          ====================================================== */

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-16 text-center">
            <p className="text-sm text-gray-500">
              No articles found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}