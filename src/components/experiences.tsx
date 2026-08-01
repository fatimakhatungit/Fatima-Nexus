import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ThemeHoly",
    duration: "December 2022 - Present",
    location: "Remote, Germany",
    current: true,
    responsibilities: [
      "Developed responsive and high-performance websites using HTML5, CSS3, JavaScript, SCSS, and jQuery.",
      "Converted Figma designs into pixel-perfect and responsive user interfaces.",
      "Optimized website performance, accessibility, and SEO.",
      "Collaborated with designers and developers to deliver high-quality client projects.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Code Astrology",
    duration: "February 2022 - October 2022",
    location: "Remote, Rajshahi",
    current: false,
    responsibilities: [
      "Built WordPress websites using Elementor and custom themes.",
      "Created responsive layouts for desktop, tablet, and mobile devices.",
      "Improved website speed and user experience.",
      "Maintained and updated client websites.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience-sec"
      className="bg-white transition-colors duration-300 dark:bg-slate-950 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
            Experience
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            My Professional Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Over 3 years of experience building modern, responsive, and
            high-performance web applications for international clients.
          </p>
        </div>

        <div className="grid items-center gap-4 lg:grid-cols-2 py-24"> 
          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-violet-500/10"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-lg font-medium text-violet-600 dark:text-violet-400">
                      {item.company}
                    </p>
                  </div>

                  {item.current && (
                    <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-400">
                      Current
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/image.png"
              alt="Professional Experience"
              width={500}
              height={600}
              priority
              className="rounded-3xl border border-slate-200 object-cover shadow-xl dark:border-slate-800 dark:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}