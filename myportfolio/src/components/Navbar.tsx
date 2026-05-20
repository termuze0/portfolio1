'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logo from "../../public/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - 200 && window.scrollY < top + height - 200) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Blog', href: '/#blog', id: 'blog' },
    { name: 'Achievements', href: '/#timeline', id: 'timeline' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

const linkColor = isScrolled
  ? 'text-cyan-100 hover:text-lime-400 transition-colors duration-300'
  : 'text-gray-300 hover:text-cyan-400 transition-colors duration-300';

const activeLinkColor = 
  'bg-gradient-to-r from-lime-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent font-semibold';

const logoTextColor = isScrolled
  ? 'text-white hover:text-lime-300 transition-all duration-300'
  : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-lime-400 hover:via-cyan-500 hover:to-blue-600 transition-all duration-400';


return (
  <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  isScrolled
    ? 'bg-black/95 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10 py-3'
    : 'bg-black/90 backdrop-blur-md py-5'
}`}

  >


      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
  
  <span
    className={`text-xl font-bold transition-colors duration-300 ${
      isScrolled
        ? "text-gray-800 hover:text-blue-600"
        : "text-white hover:text-blue-400"
    }`}
  >
    TM
  </span>
</Link>


       
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id || pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-1 py-2 transition-colors duration-300 font-medium ${
                  isActive ? activeLinkColor : linkColor
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
            );
          })}
        </div>

       
<div className="hidden md:flex items-center">
  <a
    href="https://drive.google.com/file/d/1xWN77N5LyRJOHCUWMuPiZALS9GF_rHIT/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 rounded-md transition-all font-medium ${
      isScrolled
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
    }`}
  >
    Download Resume
  </a>
</div>


     
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md focus:outline-none transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id || pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg py-2 px-4 rounded-md transition-colors duration-300 ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium text-center"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;