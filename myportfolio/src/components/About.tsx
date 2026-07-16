"use client";

import React from "react";
import { motion, Variants } from "framer-motion";



const technicalSkills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Django", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    category: "Mobile & Tools",
    technologies: ["Flutter", "Docker", "Git", "Figma", "VS Code"]
  }
];


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const skillBar: Variants = {
  hidden: { width: 0 },
  visible: (w: number) => ({
    width: `${w}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

const floaty: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};


function DecorativeBlobLeft() {
  return (
    <motion.div
      variants={floaty}
      animate="animate"
      className="absolute -top-32 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-30"
    />
  );
}

function DecorativeBlobRight() {
  return (
    <motion.div
      variants={floaty}
      animate="animate"
      className="absolute -bottom-32 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-400 rounded-full blur-3xl opacity-25"
    />
  );
}

function TechnologyStack() {
  return (
    <section className="mt-12">
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
      >
        Technology Stack
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technicalSkills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={fadeUp}
            custom={categoryIndex * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/70 dark:bg-slate-800/60 shadow-lg border border-slate-100 dark:border-slate-700"
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {category.category}
            </h4>
            <div className="space-y-3">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIndex * 0.1 }}
                  className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  const expertiseAreas = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, TypeScript, and modern CSS frameworks",
    icon: "💻",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications, APIs, and database architectures with Node.js and Django",
    icon: "⚙️",
    technologies: ["Node.js", "Django", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with Flutter and React Native for iOS and Android",
    icon: "📱",
    technologies: ["Flutter", "React Native", "Dart", "Mobile UI/UX", "App Store Deployment"]
  },{
    title: "DevOps & Infrastructure",
    description: "Managing deployment, containerization, and cloud infrastructure for scalable applications",
    icon: "🚀",
    technologies: ["Docker", "CI/CD", "AWS", "GitHub Actions", "Vercel"]
  }
];
  return (
    <section className="mt-12">
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
      >
        Areas of Expertise
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            variants={fadeUp}
            custom={index * 0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/70 dark:bg-slate-800/60 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">{area.icon}</span>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {area.title}
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <DecorativeBlobLeft />
      <DecorativeBlobRight />

      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills, technologies I work with, 
            and areas where I excel in creating digital solutions
          </motion.p>
        </motion.div>

        <div className="space-y-16">
         
          <TechnologyStack />
          <Expertise />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;