'use client';

import React, { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaArrowDown,
} from 'react-icons/fa';

interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  socialLinks?: SocialLink[];
}

const HeroSection = ({
  name = 'Termuze Musa',
  title = 'Full-Stack Developer',
  description = `I’m a full-stack developer who loves building complete digital experiences — from concept to launch. I enjoy creating powerful websites and custom CMS solutions that blend design, function, and performance.`,
  socialLinks = [
    {
      platform: 'github',
      url: 'https://github.com/termuze0',
      ariaLabel: 'GitHub profile',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      platform: 'linkedin',
      url: 'linkedin.com/in/termuze8',
      ariaLabel: 'LinkedIn profile',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      platform: 'twitter',
      url: 'https://x.com/term2277',
      ariaLabel: 'Twitter profile',
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      platform: 'telegram',
      url: 'https://t.me/term677',
      ariaLabel: 'Telegram profile',
      icon: <FaTelegram className="w-5 h-5" />,
    },
  ],
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-100 px-4 pt-20 transition-colors duration-500 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 md:px-8 lg:px-16"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Welcome
            </p>

            <h1 className="text-5xl font-black leading-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-3xl">
              {title}
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="rounded-xl bg-blue-600 px-7 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/25"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-xl border border-gray-300 bg-white/70 px-7 py-3 font-medium text-gray-700 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Contact Me
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="rounded-full border border-gray-200 bg-white p-4 text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />

          {/* Card */}
          <div className="relative flex h-[420px] w-[320px] items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl dark:border-gray-700/40 dark:bg-gray-900/40">
            <div className="text-center">
              <div className="mb-6 text-7xl">🚀</div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Building Modern Web Experiences
              </h3>

              <p className="mt-4 px-6 text-gray-600 dark:text-gray-400">
                React • Next.js • Laravel • Django
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -left-4 top-10 animate-bounce rounded-2xl bg-blue-500 p-4 text-white shadow-xl">
            💻
          </div>

          <div className="absolute -right-2 bottom-16 animate-pulse rounded-2xl bg-purple-500 p-4 text-white shadow-xl">
            ⚡
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1">
          <FaArrowDown className="mt-1 text-sm" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;