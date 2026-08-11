"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    github:
      "https://github.com/fatimakhatungit/skillpilot-AI-client",
    backend:
      "https://github.com/fatimakhatungit/skillpilot-ai-server",
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
    github:
      "https://github.com/fatimakhatungit/escul-client",
    backend:
      "https://github.com/fatimakhatungit/escul-server",
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
    github:
      "https://github.com/fatimakhatungit/medicare-connect-client",
    backend:
      "https://github.com/fatimakhatungit/medicare-connect-server",
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
    github:
      "https://github.com/fatimakhatungit/docappoint",
    backend:
      "https://github.com/fatimakhatungit/docappoint-server",
    slug: "docappoint",
    tags: ["React", "Node.js", "MongoDB"],
    type: "Medical",
  },
];

export default function Projects() {
  return (
    <section
      id="project-sec"
      className="relative overflow-hidden bg-white pb-20 pt-16 dark:bg-[#080d1a] sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 text-sm leading-6 text-slate-500 sm:text-base dark:text-slate-400">
            Real-world applications built with modern full-stack technologies
            and clean UI/UX principles.
          </p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:shadow-2xl
                sm:rounded-3xl
                dark:border-slate-800
                dark:bg-slate-900/60
              "
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-52 overflow-hidden sm:h-56 md:h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Tags */}
                <div className="absolute right-3 top-3 flex max-w-[70%] flex-wrap justify-end gap-2 sm:right-5 sm:top-5 sm:gap-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-white/95
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        shadow-lg
                        backdrop-blur
                        sm:px-4
                        sm:py-2
                        sm:text-xs
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-violet-600
                    sm:text-2xl
                    dark:text-white
                    dark:group-hover:text-violet-400
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2
                    line-clamp-3
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-base
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* ================= BUTTONS ================= */}
                <div className="mt-6 flex items-center gap-3 sm:mt-8">
                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-slate-900
                      px-4
                      py-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-white
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-lg
                      dark:bg-violet-600
                      dark:hover:bg-violet-700
                    "
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} frontend GitHub repository`}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-800
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-500
                      hover:text-violet-600
                      hover:shadow-lg
                      sm:h-12
                      sm:w-12
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                    "
                  >
                    <GitHubIcon />
                  </a>

                  {/* Backend */}
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} backend GitHub repository`}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-xs
                      font-bold
                      text-slate-800
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-500
                      hover:text-cyan-600
                      hover:shadow-lg
                      sm:h-12
                      sm:w-12
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                    "
                  >
                    &lt;/&gt;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}