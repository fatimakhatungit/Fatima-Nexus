'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About Me', href: '#about-sec' },
  { name: 'Projects', href: '#project-sec' },
  { name: 'Experience', href: '#experience-sec' },
  { name: 'Skills', href: '#skills-sec' },
  { name: 'Contact Us', href: '#contact-sec' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for theme state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll for styling header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPos = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Fatima<span className="text-violet-500 font-sans">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-semibold tracking-wide transition-colors ${
                      activeSection === link.href
                        ? 'text-violet-600 dark:text-violet-400 font-bold'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-violet-600 dark:bg-violet-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions (Theme toggle, CV button, Mobile menu) */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === 'light' ? <Moon size={18} /> : <Sun size={18} />
              ) : (
                <span className="w-[18px] h-[18px]" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="#"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-850 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Resume</span>
              <Download size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-white dark:bg-[#0b0f19] shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between mb-8">
                <a
                  href="#hero"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-xl font-black tracking-tight text-slate-900 dark:text-white"
                >
                  Fatima<span className="text-violet-500 font-sans">.</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links inside drawer */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-base font-semibold transition-colors ${
                          activeSection === link.href
                            ? 'text-violet-600 dark:text-violet-400 font-bold'
                            : 'text-slate-650 hover:text-slate-900 dark:text-slate-450 dark:hover:text-white'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Action Button inside drawer */}
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-850">
                <a
                  href="#"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Resume</span>
                  <Download size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}