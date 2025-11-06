"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "StudyGPT — AI-Powered Study App",
    description:
      "An interactive AI eBook platform built with Flutter and Django that helps students study and solve questions with real-time guidance.",
    image: "/studygpt.png",
    tech: ["Flutter", "Django", "OpenAI API", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "TalentFlow — Hiring Platform",
    description:
      "A full-featured job matching platform that connects companies with top talent, featuring dashboards, filtering, and real-time chat.",
    image: "/talentflow.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "TLearn — Learning Management System",
    description:
      "A modern LMS built with React and Laravel, allowing instructors to manage courses, track progress, and engage learners effectively.",
    image: "/tlearn.png",
    tech: ["React", "Laravel", "JWT", "MySQL"],
    link: "#",
    github: "#",
  },
];

export default function ProjectSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      id="projects"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 overflow-hidden w-full"
    >
      {/* Floating background lights */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Project content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        <motion.div
          layout
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <NextImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center space-x-4"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full font-medium transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-full font-medium transition"
                    >
                      GitHub
                    </a>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating blobs for decoration */}
        <motion.div
          className="absolute top-12 left-12 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-2xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-12 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}
