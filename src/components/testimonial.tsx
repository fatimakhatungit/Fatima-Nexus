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
      className="
        overflow-hidden
        bg-white
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span
            className="
              inline-block
              rounded-full
              border
              border-violet-300
              bg-violet-100
              px-4
              py-1
              text-xs
              font-medium
              text-violet-700
              sm:text-sm
              dark:border-violet-500/30
              dark:bg-violet-500/10
              dark:text-violet-400
            "
          >
            Testimonials
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            What People Say About Me
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            Feedback from clients, managers, and colleagues I&apos;ve worked
            with.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                flex
                h-full
                flex-col
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
                sm:p-7
                lg:p-8
                dark:border-slate-800
                dark:bg-slate-900/60
                dark:hover:shadow-violet-500/10
              "
            >
              {/* Rating */}
              <div className="mb-5 flex gap-1 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-current text-yellow-400 sm:h-[18px] sm:w-[18px]"
                  />
                ))}
              </div>

              {/* Review */}
              <p
                className="
                  flex-1
                  text-sm
                  leading-7
                  text-slate-700
                  sm:text-base
                  sm:leading-8
                  dark:text-slate-300
                "
              >
                &quot;{item.review}&quot;
              </p>

              {/* Author */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  border-t
                  border-slate-200
                  pt-5
                  sm:mt-8
                  sm:gap-4
                  sm:pt-6
                  dark:border-slate-800
                "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  sizes="60px"
                  className="
                    h-12
                    w-12
                    shrink-0
                    rounded-full
                    border
                    border-slate-200
                    object-cover
                    sm:h-14
                    sm:w-14
                    dark:border-slate-700
                  "
                />

                <div className="min-w-0">
                  <h3
                    className="
                      truncate
                      text-base
                      font-semibold
                      text-slate-900
                      sm:text-lg
                      dark:text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      font-medium
                      text-violet-600
                      sm:text-sm
                      dark:text-violet-400
                    "
                  >
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