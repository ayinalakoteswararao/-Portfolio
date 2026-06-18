import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => (
  <footer className="relative bg-background pt-16 pb-10 overflow-hidden border-t border-border mt-20">
    <div className="container relative z-10 flex flex-col justify-between min-h-[300px]">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
        {/* Left Side: CTA and Quote */}
        <div className="max-w-lg">
          <blockquote className="border-l-2 border-primary/40 pl-5 mb-8 text-muted-foreground/80 italic font-serif text-lg">
            "The best way to predict the future is to invent it."
          </blockquote>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mb-8 leading-tight tracking-tight">
            If something here <br className="hidden md:block" /> sparked curiosity, <br className="hidden md:block" /> let's talk.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-6 shadow-glow">
              <a href="#contact">Get talking <ArrowRight className="ml-2 size-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-bold text-base px-8 py-6 border-border hover:bg-primary/10">
              <a href="#projects">Get started</a>
            </Button>
          </div>
        </div>

        {/* Right Side: Social Icons Only */}
        <div className="flex gap-4 pt-4 lg:pt-0 items-start">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-4 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-4 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow">
            <Github size={24} />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="p-4 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Massive Name */}
      <div className="w-full flex justify-center items-center mt-auto px-4 overflow-hidden pb-4">
        <h1
          className="leading-none text-primary/20 select-none pointer-events-none text-center whitespace-normal md:whitespace-nowrap"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.5rem, 12vw, 7rem)",
          }}
        >
          Ayinala Koteswararao
        </h1>
      </div>

      {/* Import the elegant serif font for the massive text */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
      `}</style>
    </div>
  </footer>
);
