import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institute: "North Bengal International University",
    location: "Rajshahi, Bangladesh",
    duration: "2024 - Present",
    status: "Currently Studying",
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "Bangladesh Polytechnic Institute",
    location: "Rajshahi, Bangladesh",
    duration: "Graduated in 2018",
    status: "Completed",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 bg-white transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
            Education
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Academic Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            My academic background has built a strong foundation in computer
            science, software engineering, and modern web development.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-slate-200 bg-violet-50 shadow-lg dark:border-violet-500/20 dark:bg-violet-500/10">
              <GraduationCap
                size={120}
                strokeWidth={1.5}
                className="text-violet-600 dark:text-violet-400"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-violet-500/10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-violet-600 dark:text-violet-400">
                      {item.institute}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Currently Studying"
                        ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}