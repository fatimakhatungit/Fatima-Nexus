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
      className="py-24 bg-white dark:bg-[#080d1a] relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-full blur-[70px]" />

              <div className="relative h-[380px] w-[380px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_20px_60px_rgba(99,102,241,.25)]">
               <Image
                                 src="/assets/avatar.png"
                                 alt="Fatima Khatun Profile Picture"
                                 fill
                                 priority
                                 sizes="(max-width: 768px) 100vw, 584px"
                                 className="object-cover"
                               />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Heading */}
            <h2 className="text-5xl font-black text-slate-900 dark:text-white">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="mt-4 mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500"></div>

            <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">
              I am a passionate{" "}
              <span className="font-bold text-slate-900 underline underline-offset-4 dark:text-white">
                Full-Stack Developer
              </span>{" "}
              dedicated to building modern, scalable, secure and user-friendly
              web applications using the MERN Stack and Next.js ecosystem.
            </p>

                    {/* Cards */}

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              {stats.map((item) => (
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  key={item.label}
                  className={`rounded-2xl bg-gradient-to-br ${item.color} border border-slate-200 dark:border-slate-700 p-7 shadow-md`}
                >
                  <h3 className="text-4xl font-black">
                    {item.number}
                  </h3>

                  <p className="uppercase tracking-[3px] text-xs mt-3 font-semibold text-gray-600 dark:text-gray-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* Skills */}
            <div className="mt-12">
              <h4 className="mb-6 text-sm font-black uppercase tracking-[4px] text-slate-700 dark:text-slate-300">
                Technical Prowess
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-pointer rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:via-blue-500 hover:to-cyan-500 hover:text-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
           {/* Buttons */}
<div className="mt-12 flex flex-wrap gap-4">

  <a
    href="https://github.com/fatimakhatungit"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1hover:shadow-xl dark:bg-white dark:text-slate-900"
  >
    <SiGithub className="text-xl transition-transform duration-300" />
    GitHub
  </a>

  <a
    href="https://leetcode.com/u/fatimakhatuncse/"
    target="_blank"
    rel="noopener noreferrer"
    className="group   inline-flex items-center justify-center   gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600   to-cyan-500 transition-all duration-300 hover:shadow-cyan-500/30"
  >

    leetcode
  </a>

</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}