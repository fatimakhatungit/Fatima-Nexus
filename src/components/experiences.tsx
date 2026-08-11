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
      className="bg-white pt-16 transition-colors duration-300 sm:pt-20 lg:pt-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-xs font-medium text-violet-700 sm:text-sm dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
            Experience
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            My Professional Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
            Over 3 years of experience building modern, responsive, and
            high-performance web applications for international clients.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* ================= EXPERIENCE CARDS ================= */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500
                  hover:shadow-xl
                  sm:p-6
                  lg:p-7
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:shadow-violet-500/10
                "
              >
                {/* Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-7 text-slate-900 sm:text-2xl dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-base font-medium text-violet-600 sm:text-lg dark:text-violet-400">
                      {item.company}
                    </p>
                  </div>

                  {item.current && (
                    <span className="w-fit shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-400">
                      Current
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={16}
                      className="shrink-0 text-violet-600 dark:text-violet-400"
                    />

                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="shrink-0 text-violet-600 dark:text-violet-400"
                    />

                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-6 space-y-3">
                  {item.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base dark:text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />

              <Image
                src="/assets/image.png"
                alt="Professional Experience"
                width={500}
                height={600}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                className="
                  relative
                  h-auto
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  object-cover
                  shadow-xl
                  sm:rounded-3xl
                  dark:border-slate-800
                  dark:shadow-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}