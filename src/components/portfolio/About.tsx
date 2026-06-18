import { motion } from "framer-motion";
import { Briefcase, Code2, Terminal } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

export const About = () => (
  <section id="about" className="container py-24">
    <SectionHeading kicker="About Me" title="A glimpse into who I am" />
    <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-24 items-center mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[4/5] max-w-[360px] lg:max-w-full w-full mx-auto"
      >
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-35 animate-pulse-glow" style={{ animationDuration: '4s' }} />

        {/* Card border and wrapper */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden gradient-border p-[3px] bg-background">
          <div className="w-full h-full rounded-[21px] overflow-hidden bg-muted">
            <img
              src="/Me...jpg"
              alt="Ayinala Koteswararao"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-8 flex flex-col justify-center text-left"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Hello! I'm <span className="gradient-text">Ayinala Koteswararao</span>
        </h3>

        <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
          <p>
            I am a passionate <span className="text-foreground font-semibold">Full Stack AI Developer</span> and{" "}
            <span className="text-foreground font-semibold">AI Engineer</span> who thrives on crafting intelligent, high-performance digital experiences. I specialize in designing and engineering robust web applications alongside smart artificial intelligence solutions that solve real-world problems.
          </p>
          <p>
            By bridging the gap between clean, scalable software architecture and advanced machine learning models, I build software that is both highly functional and visually stunning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          {[
            { n: "10+", l: "Projects", icon: <Briefcase className="w-6 h-6 mx-auto mb-3 text-primary opacity-80" /> },
            { n: "1.5+", l: "Years coding", icon: <Terminal className="w-6 h-6 mx-auto mb-3 text-primary opacity-80" /> },
            { n: "15+", l: "Technologies", icon: <Code2 className="w-6 h-6 mx-auto mb-3 text-primary opacity-80" /> },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-4 md:p-5 text-center border border-border hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {s.icon}
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">{s.n}</div>
              <div className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
