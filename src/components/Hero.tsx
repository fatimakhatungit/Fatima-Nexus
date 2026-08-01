'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';

const roles = ['Frontend Developer', 'Web Developer', 'MERN Stack Developer', 'UI/UX Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-[#030712]">
      {/* Background Glows */}
      <div className="absolute -left-44 top-20 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[140px] dark:bg-violet-600/20" />
      <div className="absolute -right-44 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[160px] dark:bg-cyan-500/15" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-[180px] dark:bg-indigo-500/5" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-violet-200 bg-white/80 text-violet-700 shadow-md backdrop-blur-md dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300 text-sm font-medium mb-6"
            >
              <span>Hello</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-slate-900 dark:text-white"
            >
              I&apos;m{' '}
              <span
                className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                style={{ textShadow: '0 0 30px rgba(139,92,246,.35)' }}
              >
                Fatima Khatun
              </span>
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center mb-6"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
                A{' '}
                <span className="text-violet-600 dark:text-cyan-400">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-6 ml-1 bg-violet-600 dark:bg-cyan-400 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              I build modern, scalable, and user-friendly web applications using clean, maintainable code and a strong focus on performance, usability, and great user experience.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start"
            >
              <a
                href="#project-sec"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
              >
                View Portfolio
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact-sec"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800"
              >
                <Mail
                  size={18}
                  className="transition-colors group-hover:text-violet-600 dark:group-hover:text-cyan-400"
                />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border border-violet-400/40 dark:border-cyan-400/40 spin" />

                <div className="absolute w-full h-full spin">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-violet-500 dark:bg-cyan-400 shadow-lg" />
                </div>

                <div className="absolute w-full h-full spin">
                  <span className="absolute -bottom-2 left-1/2 w-5 h-5 rounded-full bg-violet-500 dark:bg-cyan-400 shadow-lg" />
                </div>

                <div className="absolute w-[82%] h-[82%] rounded-full border-2 border-violet-500 dark:border-cyan-400" />

                <div className="relative w-[70%] h-[70%] rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                  <Image src="/assets/avatar.png" alt="Profile" fill className="object-cover" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#about-sec"
          className="flex flex-col items-center text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors uppercase"
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={14} className="text-violet-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}