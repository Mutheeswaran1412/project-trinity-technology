import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, ChevronDown } from 'lucide-react';
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
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Left: Logo + Nav */}
        <div className="flex items-center space-x-8">
          <Logo className="h-8 w-auto" />
          <div className="border-l h-8 border-gray-300 mx-4" />
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center text-gray-700 font-semibold hover:text-green-700 transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </a>
                {/* Dropdown menu placeholder */}
                {link.hasDropdown && openDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 2</a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>


        {/* Right: Actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={20} className="text-gray-500" />
          </button>
<button className="border-2 border-[#3d3dff] text-[#3d3dff] hover:bg-[#3d3dff] hover:text-white font-bold py-2 px-6 rounded-full bg-white">
  Take a Tour
</button>
<button className="bg-[#3d3dff] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
  Contact Us
</button>
          <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
            <Globe size={20} className="text-gray-500" />
          </button>
          <div className="hidden lg:flex items-center space-x-4 ml-4 text-xs text-gray-400 font-semibold tracking-wide">
            <span>SUPPORT</span>
            <span>COMPANY</span>
            <span>LOGIN</span>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-green-700" /> : <Menu size={24} className="text-green-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-green-700 font-semibold hover:text-green-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="border border-green-600 text-green-700 font-semibold rounded-full px-5 py-2 mt-2">
                Take a Tour
              </button>
              <button className="bg-green-600 text-white font-semibold rounded-full px-5 py-2 mt-2">
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;