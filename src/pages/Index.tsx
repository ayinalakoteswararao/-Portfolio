import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Resume } from "@/components/portfolio/Resume";
import { CTA } from "@/components/portfolio/CTA";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Loader } from "@/components/portfolio/Loader";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <section className="container py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Resume />
          <CTA />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
