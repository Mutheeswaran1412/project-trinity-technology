import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Tech Stack', href: '#tech-stack', hasDropdown: true },
    { name: 'Industries', href: '#industries', hasDropdown: true },
    { name: 'Insights', href: '#insights', hasDropdown: true },
    { name: 'Careers', href: '#careers', hasDropdown: true },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <a href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </a>
        {/* Right: Nav */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) =>
            link.name === 'Contact Us' ? (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors ml-2"
              >
                {link.name}
              </a>
            ) : (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center font-semibold text-black transition-colors relative group-hover:text-blue-600
                    ${openDropdown === link.name ? 'text-blue-600' : ''}
                  `}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                  <span
                    className="block h-0.5 bg-blue-600 absolute left-0 right-0 bottom-[-6px] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
                    style={{ transformOrigin: 'left', transition: 'transform 0.3s' }}
                  />
                </a>
                {/* Dropdown menu placeholder */}
                {link.hasDropdown && openDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 2</a>
                  </div>
                )}
              </div>
            )
          )}
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.name === 'Contact Us' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-semibold text-black hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;