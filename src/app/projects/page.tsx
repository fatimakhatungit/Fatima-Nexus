'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DocAppoint',
    image: '/projects/docappoint.jpg',
    slug: 'docappoint',
  },
  {
    title: 'Wanderlust',
    image: '/projects/wanderlust.jpg',
    slug: 'wanderlust',
  },
  {
    title: 'SunCart',
    image: '/projects/suncart.jpg',
    slug: 'suncart',
  },
  {
    title: 'KeenKeeper',
    image: '/projects/keenkeeper.jpg',
    slug: 'keenkeeper',
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Details Button (REQUIRED) */}
                <a
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-violet-600 font-semibold hover:underline"
                >
                  View More / Details <ExternalLink size={16} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}