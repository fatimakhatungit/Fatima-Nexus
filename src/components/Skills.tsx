"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiFastapi,
  SiJsonwebtokens,
  SiPostman,
  SiRender,
} from "react-icons/si";

const frontendSkills = [
  {
    name: "HTML5",
    subtitle: "Semantic Markup",
    logo: SiHtml5,
    color: "text-orange-600",
  },
  {
    name: "CSS3",
    subtitle: "Modern Layouts",
    logo: SiCss,
    color: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    subtitle: "Utility First",
    logo: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "JavaScript",
    subtitle: "ES6+",
    logo: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "React.js",
    subtitle: "Frontend Library",
    logo: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    subtitle: "React Framework",
    logo: SiNextdotjs,
    color: "text-black dark:text-white",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    subtitle: "Runtime",
    logo: SiNodedotjs,
    color: "text-green-600",
  },
  {
    name: "Express.js",
    subtitle: "Backend Framework",
    logo: SiExpress,
    color: "text-gray-800 dark:text-white",
  },
  {
    name: "REST API",
    subtitle: "API Development",
    logo: SiPostman,
    color: "text-orange-500",
  },
  {
    name: "JWT Auth",
    subtitle: "Authentication",
    logo: SiJsonwebtokens,
    color: "text-pink-500",
  },
  {
    name: "FastAPI",
    subtitle: "Python API",
    logo: SiFastapi,
    color: "text-teal-500",
  },
];

const databaseSkills = [
  {
    name: "MongoDB",
    subtitle: "NoSQL",
    logo: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "MySQL",
    subtitle: "Relational DB",
    logo: SiMysql,
    color: "text-blue-600",
  },
];

const toolsSkills = [
  {
    name: "Git",
    subtitle: "Version Control",
    logo: SiGit,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    subtitle: "Repository",
    logo: SiGithub,
    color: "text-black dark:text-white",
  },
  {
    name: "VS Code",
    subtitle: "Editor",
    color: "text-blue-500",
  },
  {
    name: "Figma",
    subtitle: "UI Design",
    logo: SiFigma,
    color: "text-pink-500",
  },
  {
    name: "Vercel",
    subtitle: "Deployment",
    logo: SiVercel,
    color: "text-black dark:text-white",
  },
  {
    name: "Netlify",
    subtitle: "Hosting",
    logo: SiNetlify,
    color: "text-teal-500",
  },
  {
    name: "Render",
    subtitle: "Cloud Platform",
    logo: SiRender,
    color: "text-purple-500",
  },
];

interface SkillItem {
  name: string;
  subtitle: string;
  logo?: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: SkillItem[];
}

function SkillCategory({
  title,
  description,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
      {/* Category Info */}
      <div className="lg:sticky lg:top-24 lg:col-span-4">
        <h3 className="mb-3 text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
          {title}
        </h3>

        <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
          {description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-8 lg:grid-cols-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: idx * 0.05,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:shadow-md
              sm:p-5
              dark:border-slate-800/80
              dark:bg-slate-900/30
            "
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
              {skill.logo ? (
                <skill.logo
                  className={`h-9 w-9 transition-transform duration-300 hover:scale-110 sm:h-10 sm:w-10 ${skill.color}`}
                />
              ) : (
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-black ${skill.color} sm:h-10 sm:w-10`}
                >
                  VS
                </div>
              )}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <h4 className="truncate text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                {skill.name}
              </h4>

              <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs dark:text-slate-400">
                {skill.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills-sec"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-[#080d1a]
      "
    >
      {/* Decorative Blob */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-10
          h-56
          w-56
          rounded-full
          bg-violet-400/10
          blur-3xl
          sm:h-72
          sm:w-72
          dark:bg-violet-600/5
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mb-3
              block
              text-xs
              font-bold
              uppercase
              tracking-[3px]
              text-violet-600
              dark:text-violet-400
            "
          >
            My Expertise
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-4xl
              dark:text-white
            "
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            Technologies I&apos;ve been working with recently and have
            extensive experience in building scalable applications.
          </motion.p>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="space-y-12 sm:space-y-16">
          {/* Frontend */}
          <SkillCategory
            title="Frontend Development"
            description="Creating interactive user interfaces using modern coding standards and responsive frameworks."
            skills={frontendSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

          {/* Backend */}
          <SkillCategory
            title="Backend Development"
            description="Orchestrating server logic, business layers, and system processes."
            skills={backendSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

          {/* Database */}
          <SkillCategory
            title="Database Systems"
            description="Managing relational tables and document-based data models."
            skills={databaseSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

          {/* Tools */}
          <SkillCategory
            title="Tools & Deployment"
            description="Using modern development, version control, design, and deployment tools to build and ship reliable applications."
            skills={toolsSkills}
          />
        </div>
      </div>
    </section>
  );
}