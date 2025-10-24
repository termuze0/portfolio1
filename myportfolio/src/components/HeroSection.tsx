'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaArrowDown } from 'react-icons/fa';

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
  name = "Your Name",
  title = "Frontend Developer",
  description = "I create beautiful, functional, and responsive web experiences that delight users and solve real problems.",
  socialLinks = [
    {
      platform: 'github',
      url: '#',
      ariaLabel: 'GitHub profile',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      platform: 'linkedin',
      url: '#',
      ariaLabel: 'LinkedIn profile',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      platform: 'twitter',
      url: '#',
      ariaLabel: 'Twitter profile',
      icon: <FaTwitter className="w-5 h-5" />
    },
    {
      platform: 'dribbble',
      url: '#',
      ariaLabel: 'Dribbble profile',
      icon: <FaDribbble className="w-5 h-5" />
    }
  ]
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsVisible(true);

    // Simulate image loading with actual image or placeholder
    const img = new Image();
    img.src = 'https://picsum.photos/400/500'; // Replace with your actual image path
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // Still show the section
    };
  }, []);

  const getDelayClass = (index: number) => {
    const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
    return delays[index] || '';
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`flex flex-col space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="View my portfolio projects"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-all duration-300 transform hover:-translate-y-1 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </div>
          
          {/* Social Links */}
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
        
        {/* Image/Graphic Section */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-112">
            {/* Main Image Container */}
            <div className={`absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
              {imageError ? (
                // Fallback gradient when image fails to load
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Profile Image</span>
                </div>
              ) : (
                // Actual Image - replace src with your image
                <Image
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
            
            {/* Animated Background Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-pulse delay-1000"></div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-yellow-400 dark:bg-yellow-500 rounded-lg shadow-xl rotate-12 animate-float flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">🚀</span>
            </div>
            <div className="absolute -bottom-8 left-6 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-lg shadow-xl -rotate-12 animate-float delay-1000 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">💻</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <FaArrowDown className="text-gray-400 dark:text-gray-600 mt-2 animate-pulse" />
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(12deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(12deg); 
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;