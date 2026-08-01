'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss, // Changed from SiCss3 to SiCss
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
    logo: SiCss, // Updated reference here
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
  logo: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: SkillItem[];
}

function SkillCategory({ title, description, skills }: SkillCategoryProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4 lg:sticky lg:top-24">
        <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/30 flex items-center space-x-4 shadow-sm hover:shadow transition-all duration-300"
          >
            <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <skill.logo className={`w-10 h-10 ${skill.color}`} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
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
      className="bg-white dark:bg-[#080d1a] relative overflow-hidden py-24"
    >
      {/* Decorative Blob */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} 
            className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3 block"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
          >
            Technologies I&apos;ve been working with recently and have extensive experience in building scalable applications.
          </motion.p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          <SkillCategory
            title="Frontend Development"
            description="Creating interactive user interfaces using modern coding standards and responsive frameworks."
            skills={frontendSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

          <SkillCategory
            title="Backend Development"
            description="Orchestrating server logic, business layers, and system processes."
            skills={backendSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

          <SkillCategory
            title="Database Systems"
            description="Managing relational tables and document-based data models."
            skills={databaseSkills}
          />

          <div className="h-px bg-slate-200 dark:bg-slate-800/60" />

         
        </div>

      </div>
    </section>
  );
}