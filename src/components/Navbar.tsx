import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { homeHash } from '../utils/paths';

const navLinks = [
  { href: homeHash('about'), label: 'עליי' },
  { href: homeHash('benefits'), label: 'יתרונות' },
  { href: '/blog', label: 'בלוג', isRoute: true, match: '/blog' },
  { href: '/knowledge', label: 'מרכז ידע', isRoute: true, match: '/knowledge' },
  { href: homeHash('pricing'), label: 'מחירים' },
  { href: homeHash('testimonials'), label: 'חוות דעת' },
  { href: homeHash('faq'), label: 'שאלות נפוצות' },
  { href: homeHash('contact'), label: 'צור קשר' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-handjet text-green-500 hover:text-green-400 transition-colors">
            סטינגר ישראל
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors font-rubik ${
                    location.pathname.startsWith(link.match || link.href)
                      ? 'text-green-500'
                      : 'text-gray-300 hover:text-green-500'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-green-500 transition-colors font-rubik"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-green-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-green-500 transition-colors font-rubik"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-green-500 transition-colors font-rubik"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;