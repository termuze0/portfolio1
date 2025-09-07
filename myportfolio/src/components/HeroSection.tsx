'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    

    const img = new window.Image();
    img.src = '/api/placeholder/400/500'; 
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`flex flex-col space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
              I create beautiful, functional, and responsive web experiences that delight users and solve real problems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium">
              View My Work
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 rounded-md transition-all duration-300 transform hover:-translate-y-1 font-medium">
              Contact Me
            </button>
          </div>
          
          <div className="flex space-x-4 pt-6">
            {['github', 'linkedin', 'twitter', 'dribbble'].map((platform, index) => (
              <a
                key={platform}
                href="#"
                className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 delay-${index * 100}`}
                aria-label={platform}
              >
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
        
        <div className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-112">

            <div className={`absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-70"></div>
            </div>
            

            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-pulse delay-1000"></div>
            

            <div className="absolute -top-6 -right-6 w-14 h-14 bg-yellow-400 dark:bg-yellow-500 rounded-lg shadow-xl rotate-12 animate-float"></div>
            <div className="absolute -bottom-8 left-6 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-lg shadow-xl -rotate-12 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
      

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;