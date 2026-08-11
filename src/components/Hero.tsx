"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Next.js Developer",
  "React.js Developer",
  "MERN Stack Developer",
  "Web Developer",
  "Frontend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
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

        if (displayText === "") {
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
    <section
      id="hero"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-slate-50
        px-0
        pb-16
        pt-24
        dark:bg-[#030712]
        sm:pt-28
        lg:pb-20
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="absolute -left-44 top-20 h-[350px] w-[350px] rounded-full bg-violet-300/30 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] dark:bg-violet-600/20" />

      <div className="absolute -bottom-10 -right-44 h-[350px] w-[350px] rounded-full bg-cyan-300/30 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px] dark:bg-cyan-500/15" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-[150px] sm:h-[700px] sm:w-[700px] sm:blur-[180px] dark:bg-indigo-500/5" />

      {/* ================= GRID PATTERN ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ================= HERO CONTENT ================= */}

          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-200
                bg-white/80
                px-4
                py-1
                text-xs
                font-medium
                text-violet-700
                shadow-md
                backdrop-blur-md
                sm:mb-6
                sm:text-sm
                dark:border-violet-800
                dark:bg-violet-900/20
                dark:text-violet-300
              "
            >
              <span>Hello 👋</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mb-4
                text-4xl
                font-black
                leading-[1.15]
                text-slate-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              I&apos;m{" "}
              <span
                className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(139,92,246,.35)",
                }}
              >
                Fatima Khatun
              </span>
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                mb-5
                flex
                min-h-[40px]
                items-center
                sm:mb-6
                sm:min-h-[48px]
              "
            >
              <span className="text-lg font-bold text-slate-700 sm:text-2xl md:text-3xl dark:text-slate-200">
                A{" "}
                <span className="text-violet-600 dark:text-cyan-400">
                  {displayText}
                </span>

                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-violet-600 align-middle sm:h-7 sm:w-1 dark:bg-cyan-400" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="
                mb-7
                max-w-xl
                text-sm
                leading-7
                text-slate-600
                sm:mb-8
                sm:text-base
                md:text-lg
                md:leading-8
                dark:text-slate-400
              "
            >
              Building modern, scalable, and user-friendly web applications
              with clean code, great performance, and seamless user
              experiences.
            </motion.p>

            {/* ================= ACTION BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                flex
               
                flex-col
                items-center
                justify-center
                gap-3
                sm:w-auto
                sm:flex-row
                sm:gap-4
                lg:justify-start
              "
            >
              {/* View Portfolio */}
              <a
                href="#project-sec"
                className="
                  group
                  inline-flex
                
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-violet-500/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-cyan-500/30
                  sm:w-auto
                  sm:px-8
                "
              >
                View Portfolio

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Contact */}
              <a
                href="#contact-sec"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-800
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-slate-100
                  sm:w-auto
                  sm:px-8
                  dark:border-slate-700
                  dark:bg-slate-900/70
                  dark:text-white
                  dark:hover:bg-slate-800
                "
              >
                <Mail
                  size={18}
                  className="transition-colors group-hover:text-violet-600 dark:group-hover:text-cyan-400"
                />

                Contact Me
              </a>
            </motion.div>
          </div>

          {/* ================= HERO IMAGE ================= */}

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",
              }}
              className="
                relative
                h-64
                w-64
                sm:h-80
                sm:w-80
                md:h-96
                md:w-96
              "
            >
              {/* Rotating Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-violet-400/40 dark:border-cyan-400/40 spin" />

              {/* Top Dot */}
              <div className="absolute inset-0 spin">
                <span className="absolute -top-1 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-violet-500 shadow-lg sm:-top-2 sm:h-5 sm:w-5 dark:bg-cyan-400" />
              </div>

              {/* Bottom Dot */}
              <div className="absolute inset-0 spin">
                <span className="absolute -bottom-1 left-1/2 h-4 w-4 rounded-full bg-violet-500 shadow-lg sm:-bottom-2 sm:h-5 sm:w-5 dark:bg-cyan-400" />
              </div>

              {/* Inner Ring */}
              <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-500 dark:border-cyan-400" />

              {/* Profile Image */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[70%]
                  w-[70%]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white
                  dark:border-slate-800
                "
              >
                <Image
                  src="/assets/avatar.png"
                  alt="Fatima Khatun Profile"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 224px, 270px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL DOWN ================= */}

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#about-sec"
          className="
            flex
            flex-col
            items-center
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-slate-400
            transition-colors
            hover:text-violet-600
            dark:text-slate-500
            dark:hover:text-violet-400
          "
        >
          <span className="mb-2">Scroll Down</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} className="text-violet-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}