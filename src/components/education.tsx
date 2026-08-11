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
      className="bg-white py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-xs font-medium text-violet-700 sm:text-sm dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
            Education
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            Academic Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
            My academic background has built a strong foundation in computer
            science, software engineering, and modern web development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left Side */}
          <div className="flex justify-center">
            <div
              className="
                flex
                h-44 w-44
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-violet-50
                shadow-lg
                sm:h-56 sm:w-56
                md:h-64 md:w-64
                dark:border-violet-500/20
                dark:bg-violet-500/10
              "
            >
              <GraduationCap
                size={90}
                strokeWidth={1.5}
                className="text-violet-600 sm:h-[105px] sm:w-[105px] md:h-[120px] md:w-[120px] dark:text-violet-400"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5 sm:space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-5
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500
                  hover:shadow-xl
                  sm:p-6
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:hover:shadow-violet-500/10
                "
              >
                {/* Title + Status */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-7 text-slate-900 sm:text-xl dark:text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-base font-medium text-violet-600 sm:text-lg dark:text-violet-400">
                      {item.institute}
                    </p>
                  </div>

                  <span
                    className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Currently Studying"
                        ? "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Meta Information */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}