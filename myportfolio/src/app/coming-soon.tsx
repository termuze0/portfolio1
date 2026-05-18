"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target launch date: May 19, 2026 at 13:00 UTC
  const targetDate = new Date("2026-05-19T13:00:00Z");

 useEffect(() => {
  const targetDate = new Date("2026-05-19T07:00:00Z");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }
  };

  calculateTimeLeft();
  const timer = setInterval(calculateTimeLeft, 1000);

  return () => clearInterval(timer);
}, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Handle email notification
  const handleNotifyMe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    if (email) {
      // You can implement your email collection logic here
      // For example, send to an API endpoint
      window.location.href = `mailto:contact@termuze.dev?subject=Coming Soon Notification&body=I'd like to be notified when you launch! My email: ${email}`;
      alert('Thank you! We will notify you at ' + email);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center"
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={floatingAnimation}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
          >
            termuze.dev
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
        >
          Coming Soon
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-purple-200 max-w-2xl mb-12"
        >
          Something amazing is in the works. I&apos;m crafting a beautiful portfolio
          to showcase my work and creativity. Stay tuned for the launch!
        </motion.p>

        {/* Countdown Timer with 24hr format */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 gap-4 md:gap-8 mb-16 max-w-md mx-auto"
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
            <span className="text-3xl md:text-5xl font-bold text-white">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-purple-300 uppercase mt-2">Days</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
            <span className="text-3xl md:text-5xl font-bold text-white">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-purple-300 uppercase mt-2">Hours</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
            <span className="text-3xl md:text-5xl font-bold text-white">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-purple-300 uppercase mt-2">Minutes</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
            <span className="text-3xl md:text-5xl font-bold text-white">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-purple-300 uppercase mt-2">Seconds</span>
          </div>
        </motion.div>

    
        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-8 flex-wrap justify-center"
        >
          <motion.a
            href="https://github.com/termuze0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition-colors text-lg font-medium"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://t.me/term677"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition-colors text-lg font-medium"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Telegram
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/termuze8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-white transition-colors text-lg font-medium"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:contact@termuze.dev"
            className="text-purple-300 hover:text-white transition-colors text-lg font-medium"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </motion.a>
        </motion.div>

        {/* Contact Email Display */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-purple-400 text-sm"
        >
          <span>Contact: </span>
          <a href="mailto:contact@termuze.dev" className="hover:text-white transition-colors">
            contact@termuze.dev
          </a>
        </motion.div>

        {/* Animated Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          initial={{ width: "0%" }}
          animate={{
            width: ["0%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
          }}
        />
      </motion.div>
    </div>
  );
}