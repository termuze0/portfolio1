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
    { name: 'Blog', href: '/blog', id: 'blog' },
    { name: 'Achievements', href: '/#timeline', id: 'timeline' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  // Dynamic text color class
  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const linkColor = isScrolled
    ? 'text-gray-600 hover:text-gray-900'
    : 'text-white/90 hover:text-white';
  const activeLinkColor = 'text-blue-600';
  const logoTextColor = isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
  <Image
    src={logo}
    alt="TM Logo"
    width={40}
    height={40}
    className="object-contain transition-all duration-300"
  />
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


        {/* Desktop Navigation */}
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

        {/* Download Resume Button - Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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