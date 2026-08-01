import React from 'react';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  challenges: string;
  improvements: string;
};

const projectData: Record<string, Project> = {
    docappoint: {
      title: 'DocAppoint',
      description:
        'A full-stack doctor appointment booking system where users can book doctors and manage appointments.',
      tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      live: '#',
      github: '#',
      challenges: 'Authentication, protected routes, booking system logic.',
      improvements: 'Add payment system, notifications, and video calls.',
    },

    wanderlust: {
      title: 'Wanderlust',
      description: 'A travel platform for exploring destinations and planning trips.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      live: '#',
      github: '#',
      challenges: 'API handling and dynamic data rendering.',
      improvements: 'Add booking system and reviews.',
    },

    suncart: {
      title: 'SunCart',
      description: 'An e-commerce platform with cart and checkout system.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      live: '#',
      github: '#',
      challenges: 'State management and cart sync.',
      improvements: 'Payment gateway integration.',
    },

    keenkeeper: {
      title: 'KeenKeeper',
      description: 'A task management app for productivity.',
      tech: ['Next.js', 'Tailwind CSS', 'LocalStorage'],
      live: '#',
      github: '#',
      challenges: 'State persistence.',
      improvements: 'Cloud sync + auth system.',
    },
  };

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="p-10 text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {project.title}
      </h1>

      <p className="mb-6 text-gray-600">
        {project.description}
      </p>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t: string) => (
          <span key={t} className="px-3 py-1 bg-gray-200 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-6">
        <a href={project.live} className="text-blue-600">
          Live
        </a>
        <a href={project.github} className="underline">
          GitHub
        </a>
      </div>

      <h2 className="text-xl font-semibold mb-2">Challenges</h2>
      <p className="mb-6">{project.challenges}</p>

      <h2 className="text-xl font-semibold mb-2">
        Future Improvements
      </h2>
      <p>{project.improvements}</p>
    </div>
  );
}