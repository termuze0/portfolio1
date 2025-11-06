"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  tags: string[];
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Next.js 15 — Modern Full Stack Framework",
    excerpt:
      "Next.js 15 introduces App Router improvements, partial pre-rendering, and enhanced image optimization. Learn how to leverage them for blazing-fast apps.",
    image: "https://picsum.photos/seed/nextjs15/600/400",
    category: "Web Development",
    author: "Termuze Musa",
    date: "Oct 22, 2025",
    tags: ["Next.js", "React", "Performance", "Frontend"],
    link: "#",
  },
  {
    id: 2,
    title: "Building a Secure JWT Auth System in Next.js",
    excerpt:
      "Implementing authentication securely is key for modern web apps. This guide covers using JWTs in Next.js to protect API routes and user sessions.",
    image: "https://picsum.photos/seed/jwtauth/600/400",
    category: "Security",
    author: "Termuze Musa",
    date: "Oct 18, 2025",
    tags: ["JWT", "Next.js", "Auth", "API"],
    link: "#",
  },
  {
    id: 3,
    title: "Optimizing Images in Next.js for Performance",
    excerpt:
      "Images can make or break performance. Learn how Next.js handles image optimization, remote patterns, and responsive image loading.",
    image: "https://picsum.photos/seed/nextimage/600/400",
    category: "Performance",
    author: "Termuze Musa",
    date: "Sep 30, 2025",
    tags: ["Next.js", "Image", "Optimization"],
    link: "#",
  },
  {
    id: 4,
    title: "How I Built VidTube — Learning DSA Visually",
    excerpt:
      "Behind the scenes of VidTube, a DSA learning platform with visualizations, quizzes, and code walkthroughs built using Django and Next.js.",
    image: "https://picsum.photos/seed/vidtube/600/400",
    category: "Projects",
    author: "Termuze Musa",
    date: "Sep 10, 2025",
    tags: ["DSA", "Django", "Next.js"],
    link: "#",
  },
  {
    id: 5,
    title: "Top 10 Resources for Learning Data Structures & Algorithms",
    excerpt:
      "Here are the best resources to master DSA — from visual sites to hands-on practice challenges that build problem-solving skills effectively.",
    image: "https://picsum.photos/seed/dsa/600/400",
    category: "Learning",
    author: "Termuze Musa",
    date: "Aug 25, 2025",
    tags: ["DSA", "Study", "Learning"],
    link: "#",
  },
];

const categories = [
  "All",
  "Web Development",
  "Security",
  "Performance",
  "Projects",
  "Learning",
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="blog"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Floating decorative blobs */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
        >
          Latest <span className="text-indigo-500">Blog Posts</span>
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-400/40"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blog grid */}
        <motion.div
          layout
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHovered(post.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <NextImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === post.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      className="text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full font-medium transition"
                    >
                      Read More
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-semibold text-indigo-500">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>

                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                  >
                    {post.title}
                  </motion.h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {post.author[0]}
                      </div>
                      <span className="text-sm text-gray-800 dark:text-gray-300">
                        {post.author}
                      </span>
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                    >
                      Continue →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating decorations */}
        <motion.div
          className="absolute top-10 right-20 w-24 h-24 bg-indigo-400 rounded-full opacity-20 blur-2xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 left-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Gradient border footer */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </section>
  );
}
