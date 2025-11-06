'use client';

import { useState, useEffect } from 'react';
import NextImage from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaArrowDown } from 'react-icons/fa';

interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
  icon: JSX.Element;
}

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  socialLinks?: SocialLink[];
}

const HeroSection = ({
  name = "Termuze Musa",
  title = "Full-Stack Developer",
  description = "I’m a full-stack developer who loves building complete digital experiences — from concept to launch. I enjoy creating powerful websites and custom CMS solutions that blend design, function, and performance. Every project I take on is a chance to learn, experiment, and craft something meaningful on the web.",
  socialLinks = [
    { platform: 'github', url: 'https://github.com/termuze0', ariaLabel: 'GitHub profile', icon: <FaGithub className="w-5 h-5" /> },
    { platform: 'linkedin', url: '#', ariaLabel: 'LinkedIn profile', icon: <FaLinkedin className="w-5 h-5" /> },
    { platform: 'twitter', url: 'https://x.com/term2277', ariaLabel: 'Twitter profile', icon: <FaTwitter className="w-5 h-5" /> },
    { platform: 'Telegram', url: 'https://t.me/term677', ariaLabel: 'Telegram profile', icon: <FaTelegram className="w-5 h-5" /> }
  ]
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsVisible(true);
    const img = new Image();
    img.src = 'https://picsum.photos/400/500';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true);
    };
  }, []);

  const getDelayClass = (index: number) => {
    const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
    return delays[index] || '';
  };

  return (
    <div 
      id="home"
      className="w-full border-2 border-blue-500 relative min-h-screen flex items-center justify-center pt-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      {/* Main content wrapper (100% width) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className={`flex flex-col space-y-6 px-4 md:px-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-all duration-300 transform hover:-translate-y-1 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Contact Me
            </button>
          </div>

          
          <div className="flex space-x-4 pt-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400 ${getDelayClass(index)} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        
        <div className={`relative flex items-center justify-center px-4 md:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem]">
            <div className={`absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Profile Image</span>
                </div>
              ) : (
                <NextImage
                  src="https://picsum.photos/400/500"
                  alt={`Professional portrait of ${name}`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                />
              )}
            </div>

           
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-yellow-400 dark:bg-yellow-500 rounded-lg shadow-xl rotate-12 animate-float flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">🚀</span>
            </div>
            <div className="absolute -bottom-8 left-6 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-lg shadow-xl -rotate-12 animate-float delay-1000 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">💻</span>
            </div>
          </div>
        </div>
      </div>

      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <FaArrowDown className="text-gray-400 dark:text-gray-600 mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
