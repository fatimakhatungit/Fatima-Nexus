'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

// Safe GitHub Icon
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.82 1.32 3.5 1 .1-.8.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1.02-.33 3.34 1.24.97-.27 2.02-.4 3.06-.4s2.09.13 3.06.4c2.32-1.57 3.34-1.24 3.34-1.24.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const projects = [
  {
    title: "SkillPilot AI",
    description:
      "An AI-powered learning platform that helps users discover personalized learning paths, track progress, and improve their skills with an interactive dashboard.",
    image: "/assets/skillpilot.png",
    live: "https://skillpilot-ai-client-zt96.vercel.app/", 
    github: "https://github.com/fatimakhatungit/skillpilot-AI-client",
    backend: "https://github.com/fatimakhatungit/skillpilot-ai-server",
    slug: "skillpilot",
    tags: ["Next.js", "TypeScript", "Node.js"],
    type: "Full Stack",
  },
  {
    title: "Escul",
    description:
      "A modern online learning platform where students can explore courses, enroll, manage learning progress, and interact with educational content.",
    image: "/assets/escul.png",
    live: "https://escul-client.vercel.app/",
    github: "https://github.com/fatimakhatungit/escul-client",
    backend: "https://github.com/fatimakhatungit/escul-server",
    slug: "escul",
    tags: ["React", "Express", "MongoDB"],
    type: "Education",
  },
  {
    title: "MediCare Connect",
    description:
      "A hospital appointment and healthcare management system featuring patient, doctor, and admin dashboards, secure authentication, online payments, and appointment scheduling.",
    image: "/assets/medicare-connect.png",
    live: "https://medicare-connect-client-iial.vercel.app/", 
    github: "https://github.com/fatimakhatungit/medicare-connect-client",
    backend: "https://github.com/fatimakhatungit/medicare-connect-server",
    slug: "medicare-connect",
    tags: ["Next.js", "Node.js", "MongoDB"],
    type: "Healthcare",
  },
  {
    title: "DocAppoint",
    description:
      "A doctor appointment booking platform with secure authentication, doctor management, appointment scheduling, and responsive user experience.",
    image: "/assets/docappoint.png",
    live: "https://docappoint-ajhl.vercel.app/",
    github: "https://github.com/fatimakhatungit/docappoint",
    backend: "https://github.com/fatimakhatungit/docappoint-server",
    slug: "docappoint",
    tags: ["React", "Node.js", "MongoDB"],
    type: "Medical",
  },
];

export default function Projects() {  
  return (
    <section className="relative pb-28 bg-white dark:bg-[#080d1a] relative overflow-hidden overflow-hidden" id='project-sec'>

      {/* background glow */}
      

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white">
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Real-world applications built with modern full-stack technologies and clean UI/UX principles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((project, idx) => (
            <motion.div
  key={project.slug}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: idx * 0.1 }}
  whileHover={{ y: -8 }}
  className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
>
 
  {/* Image */}
  <div className="relative h-[240px] overflow-hidden">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />

    {/* Tags */}
    <div className="absolute right-5 top-5 flex flex-col gap-3">
      {project.tags.slice(0, 2).map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-white/95 px-5 py-2 text-xs font-bold uppercase shadow-lg backdrop-blur"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="p-8">
    <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
      {project.title}
    </h3>

    <p className="text-muted-foreground mt-2 text-sm sm:text-base line-clamp-2 leading-relaxed">
      {project.description}
    </p>

    {/* Bottom */}
    <div className="mt-8 flex items-center justify-between">
      {/* Live */}
      <a
        href={project.live}
        target="_blank"
        className="flex-1 flex items-center justify-center gap-2 hidden sm:inline-flex items-center space-x-2 px-7 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-850 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        <ExternalLink size={18} />
        Live
      </a>

      <div className="ml-4 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow"
        >
          <GitHubIcon />
        </a>

        <a
          href={project.backend} target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow"
        >
          &lt;/&gt;
        </a>
      </div>
    </div>
  </div>
</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}