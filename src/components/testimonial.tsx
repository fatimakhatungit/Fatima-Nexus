import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Saiful Islam",
    role: "Web Programmer",
    image: "/assets/testi_1_1.jpg",
    review:
      "Nowadays, women are not behind only as a housewife. We are very proud to introduce another talented Frontend Developer of Code Astrology. She proves her skills every day and makes our team stronger. We always appreciate her dedication and professionalism.",
  },
  {
    name: "Code Astrology",
    role: "Product Manager",
    image: "/assets/testi_1_2.jpg",
    review:
      "Thank you, Fatima Khatun, for your valuable contribution to our Product Table Plugin. Your dedication and technical expertise helped us deliver a high-quality solution for WordPress users. We truly appreciate your commitment and look forward to working together again.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            What People Say About Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Feedback from clients, managers, and colleagues I've worked with.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-violet-500/10"
            >
              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                "{item.review}"
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full border border-slate-200 object-cover dark:border-slate-700"
                />

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}