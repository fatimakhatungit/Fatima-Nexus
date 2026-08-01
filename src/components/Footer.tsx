'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Bio Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <a
              href="#hero"
              className="font-display text-2xl font-black tracking-tight text-white"
            >
              Fatima<span className="text-violet-500 font-sans">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Front-end developer specializing in scalable ecosystems, performance optimization, and pixel-perfect UI execution.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="font-display text-white text-base font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about-sec" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#project-sec" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills-sec" className="hover:text-white transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#contact-sec" className="hover:text-white transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="font-display text-white text-base font-bold uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-violet-400 flex-shrink-0" />
                <span>Rajshahi, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-violet-400 flex-shrink-0" />
                <a href="tel:+8801892293579" className="hover:text-white transition-colors">
                  +880 1751884882
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-violet-400 flex-shrink-0" />
                <a href="mailto:fatimakhatuncse@gmail.com" className="hover:text-white transition-colors">
                  fatimakhatuncse@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons inside Footer */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/fatimakhatungit"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-violet-600 hover:text-white transition-colors text-slate-400"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/fatima-khanun-cse/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-violet-600 hover:text-white transition-colors text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/fatimakhatuncse/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-violet-600 hover:text-white transition-colors text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <FaFacebook size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
          <p>© {currentYear} Fatima. All Rights Reserved.</p>
          <p>
            Designed & Built with <span className="text-rose-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
