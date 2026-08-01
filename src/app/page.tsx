import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/experiences";
import TestimonialsSection from "@/components/testimonial";
import EducationSection from "@/components/education";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <Header />

      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
         <Skills />
        <TestimonialsSection />
        <EducationSection />
        <Contact />
      </main>

      {/* Footer */} 
      <Footer />
      <BackToTop /> 
    </div>
  );
}
