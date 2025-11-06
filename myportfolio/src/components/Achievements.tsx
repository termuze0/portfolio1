"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Trophy, Award, Star, Rocket, Code, Book } from "lucide-react";

// Types
interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  year: string;
  type: "award" | "certificate" | "milestone" | "project";
  image?: string;
}

// Static data
const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Developer Award",
    description:
      "Recognized for excellence in building scalable, high-performance web applications using modern technologies like Next.js, Django, and Flutter.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    year: "2025",
    type: "award",
    image: "https://picsum.photos/seed/trophy/600/400",
  },
  {
    id: 2,
    title: "Google Cloud Certificate",
    description:
      "Completed the Google Cloud Engineer Track, gaining hands-on expertise in cloud infrastructure, deployment pipelines, and DevOps principles.",
    icon: <Award className="w-8 h-8 text-blue-500" />,
    year: "2024",
    type: "certificate",
    image: "https://picsum.photos/seed/gcloud/600/400",
  },
  {
    id: 3,
    title: "Launched VidTube",
    description:
      "Built VidTube — a platform for learning Data Structures & Algorithms visually, using Django REST and Next.js frontend integration.",
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    year: "2024",
    type: "project",
    image: "https://picsum.photos/seed/vidtubeach/600/400",
  },
  {
    id: 4,
    title: "Published 20+ Technical Blogs",
    description:
      "Shared deep insights and tutorials about React, Next.js, Django, and DSA concepts, helping thousands of developers learn better.",
    icon: <Book className="w-8 h-8 text-green-500" />,
    year: "2023",
    type: "milestone",
    image: "https://picsum.photos/seed/blogs/600/400",
  },
  {
    id: 5,
    title: "100 Days of Leetcode",
    description:
      "Completed a self-challenge solving 100 Leetcode problems in 100 days focusing on recursion, two-pointer, and sliding window techniques.",
    icon: <Code className="w-8 h-8 text-pink-500" />,
    year: "2023",
    type: "milestone",
    image: "https://picsum.photos/seed/leetcode/600/400",
  },
];

// Counter animation hook
function useCounter(end: number, duration = 2) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = (duration * 1000) / end;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
}

export default function AchievementsSection() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  const awards = useCounter(8);
  const certificates = useCounter(12);
  const projects = useCounter(25);
  const milestones = useCounter(50);

  return (
    <section
      id="achievements"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          My <span className="text-indigo-600">Achievements</span> & Milestones
        </motion.h2>

        {/* Animated Counters */}
       <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 1 }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-24"
>
  {[
    { label: "Projects", count: 15, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { label: "Certificates", count: 8, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Clients", count: 6, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { label: "Experience", count: 3, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.07, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className={`p-6 ${item.bg} shadow-xl rounded-2xl hover:shadow-2xl transform transition-all duration-300`}
    >
      <div className={`text-5xl font-extrabold ${item.color}`}>{item.count}+</div>
      <div className="mt-2 text-sm uppercase tracking-wide text-gray-700 dark:text-gray-300">
        {item.label}
      </div>
    </motion.div>
  ))}
</motion.div>


        
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative border-l border-gray-300 dark:border-gray-700 pl-8 mb-24"
        >
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              whileHover={{ scale: 1.02 }}
              className="relative mb-12 group"
            >
              <div className="absolute -left-4 top-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                {ach.icon}
              </div>
              <div
                onClick={() => setSelected(ach)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {ach.title}
                  </h3>
                  <span className="text-sm text-indigo-500 font-medium">
                    {ach.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
        >
          Certificates & Awards
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelected(ach)}
              className="relative bg-white dark:bg-gray-800 overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <NextImage
                src={ach.image ?? "https://picsum.photos/seed/default/600/400"}
                alt={ach.title}
                width={600}
                height={400}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold text-white">{ach.title}</h4>
                <span className="text-sm text-indigo-300">{ach.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        
        {/* <AnimatePresence>
          {selected && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
                <div className="mb-6">
                  <NextImage
                    src={selected.image ?? ""}
                    alt={selected.title}
                    width={800}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selected.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selected.description}
                </p>
                <div className="text-sm text-indigo-500 font-medium">
                  {selected.year} — {selected.type.toUpperCase()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>

      {/* Decorative glow footer */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </section>
  );
}
