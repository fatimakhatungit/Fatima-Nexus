"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const stats = [
  {
    number: "30+",
    label: "PROJECTS DONE",
    color:
      "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600",
  },
  {
    number: "3+ Years",
    label: "EXPERIENCE",
    color:
      "from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 text-green-600",
  },
  {
    number: "100+",
    label: "HAPPY CLIENTS",
    color:
      "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 text-purple-500",
  },
];

const skills = [
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];

export default function About() {
  return (
    <section
      id="about-sec"
      className="relative overflow-hidden bg-white py-16 dark:bg-[#080d1a] sm:py-20 lg:py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute bottom-20 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-violet-500/20 blur-[50px] sm:blur-[70px]" />

              {/* Image */}
              <div
                className="
                  relative
                  h-64
                  w-64
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white
                  shadow-[0_20px_60px_rgba(99,102,241,.25)]
                  sm:h-80
                  sm:w-80
                  sm:border-[5px]
                  md:h-[350px]
                  md:w-[350px]
                  lg:h-[380px]
                  lg:w-[380px]
                "
              >
                <Image
                  src="/assets/avatar.png"
                  alt="Fatima Khatun Profile Picture"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Heading */}
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl dark:text-white">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="mb-6 mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 sm:mb-8 sm:w-24" />

            {/* Description */}
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-9 dark:text-slate-300">
              I am a passionate{" "}
              <span className="font-bold text-slate-900 underline underline-offset-4 dark:text-white">
                Full-Stack Developer
              </span>{" "}
              dedicated to building modern, scalable, secure and user-friendly
              web applications using the MERN Stack and Next.js ecosystem.
            </p>

            {/* ================= STATS ================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-10">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className={`
                    rounded-2xl
                    border
                    border-slate-200
                    bg-gradient-to-br
                    ${item.color}
                    p-5
                    shadow-md
                    sm:p-6
                    lg:p-7
                    dark:border-slate-700
                  `}
                >
                  <h3 className="text-3xl font-black sm:text-4xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[2px] text-gray-600 sm:mt-3 sm:text-xs sm:tracking-[3px] dark:text-gray-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ================= SKILLS ================= */}
            <div className="mt-9 sm:mt-12">
              <h4 className="mb-5 text-xs font-black uppercase tracking-[3px] text-slate-700 sm:mb-6 sm:text-sm sm:tracking-[4px] dark:text-slate-300">
                Technical Prowess
              </h4>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      cursor-pointer
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-slate-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-transparent
                      hover:bg-gradient-to-r
                      hover:from-violet-600
                      hover:via-blue-500
                      hover:to-cyan-500
                      hover:text-white
                      hover:shadow-lg
                      sm:px-5
                      sm:py-3
                      sm:text-sm
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-9 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/fatimakhatungit"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-slate-900
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:px-7
                  sm:py-3.5
                  dark:bg-white
                  dark:text-slate-900
                "
              >
                <SiGithub className="text-lg transition-transform duration-300 group-hover:rotate-6 sm:text-xl" />
                GitHub
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/fatimakhatuncse/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/30
                  sm:px-8
                  sm:py-3.5
                "
              >
                LeetCode
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}