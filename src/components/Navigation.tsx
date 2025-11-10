import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#verification', label: 'Verification' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-[hsl(var(--dark-navy))]' : 'text-white'
          }`}
        >
          DMI Medical
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wide relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(var(--medical-teal))] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? 'text-[hsl(var(--dark-navy))] hover:text-[hsl(var(--medical-teal))]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className={`ml-4 font-semibold transition-all duration-300 ${
              scrolled
                ? 'bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90'
                : 'bg-white text-[hsl(var(--dark-navy))] hover:bg-white/90'
            }`}
          >
            <a href="#contact">Get Started</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-[hsl(var(--dark-navy))]' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col py-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-[hsl(var(--dark-navy))] font-medium hover:bg-[hsl(var(--light-gray-bg))] hover:text-[hsl(var(--medical-teal))] transition-colors uppercase tracking-wide text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="px-6 pt-4"
              >
                <Button
                  asChild
                  className="w-full bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90"
                  onClick={handleLinkClick}
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}