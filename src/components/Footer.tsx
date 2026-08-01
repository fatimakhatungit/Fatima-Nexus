'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-16 text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="container mx-auto px-6">
        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-12 md:gap-8 dark:border-slate-800">
          {/* Logo */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="text-3xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Fatima
              <span className="text-violet-600 dark:text-violet-400">.</span>
            </a>

            <p className="max-w-sm leading-7 text-slate-600 dark:text-slate-400">
              Frontend Developer passionate about building modern, responsive,
              and high-performance web applications with clean code and
              exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about-sec' },
                { label: 'Projects', href: '#project-sec' },
                { label: 'Experience', href: '#experience-sec' },
                { label: 'Skills', href: '#skills-sec' },
                { label: 'Contact', href: '#contact-sec' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Get In Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-violet-600 dark:text-violet-400"
                />
                <span>Rajshahi, Bangladesh</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-violet-600 dark:text-violet-400"
                />
                <a
                  href="tel:+8801751884882"
                  className="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                >
                  +880 1751-884882
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-violet-600 dark:text-violet-400"
                />
                <a
                  href="mailto:fatimakhatuncse@gmail.com"
                  className="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                >
                  fatimakhatuncse@gmail.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {[
                {
                  icon: <GithubIcon size={18} />,
                  href: 'https://github.com/fatimakhatungit',
                  label: 'GitHub',
                },
                {
                  icon: <LinkedinIcon size={18} />,
                  href: 'https://www.linkedin.com/in/fatima-khanun-cse/',
                  label: 'LinkedIn',
                },
                {
                  icon: <FaFacebook size={18} />,
                  href: 'https://www.facebook.com/fatimakhatuncse/',
                  label: 'Facebook',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:bg-violet-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm sm:flex-row">
          <p className="text-slate-500 dark:text-slate-400">
            © {currentYear} Fatima Khatun. All Rights Reserved.
          </p>

          <p className="text-slate-500 dark:text-slate-400">
            Designed & Built with{' '}
            <span className="text-rose-500">♥</span> using{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              Next.js
            </span>{' '}
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}