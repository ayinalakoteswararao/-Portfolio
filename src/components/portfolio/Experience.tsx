import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    role: "Full Stack AI Developer",
    org: "Kayalastechlabs",
    date: "Feb 2026 — Present",
    desc: [
      "Developing full-stack AI solutions, integrating machine learning models with scalable web architectures.",
      "Building intelligent web applications and improving system performance.",
    ],
  },
  {
    role: "Red Hat Academy Student Ambassador",
    org: "Usha Rama College of Engineering",
    date: "2024 — 2025",
    desc: [
      "Led open-source advocacy programs and workshops reaching over 150 students.",
      "Facilitated Red Hat certification sessions and supported peers in using Linux-based technologies.",
      "Recognized among Top 5 Ambassadors in India for promoting open-source collaboration and technical excellence.",
    ],
  },
  {
    role: "AI Developer Intern",
    org: "Infosys Springboard",
    date: "Dec 2024 — Feb 2025",
    desc: [
      "Developed and deployed MediTrainAI, an AI-driven healthcare chatbot using Hugging Face Transformers and Flask.",
      "Improved response accuracy by 25% through fine-tuning and contextual NLP integration.",
      "Deployed the model on a web platform, optimizing model inference time for seamless user experience.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="container py-24">
    <SectionHeading kicker="Experience" title="My Journey" />
    <div className="relative max-w-4xl mx-auto mt-16">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
      {items.map((item, i) => (
        <motion.div
          key={item.role}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-14" : "md:ml-auto md:pl-14"} pl-16 md:pl-0`}
        >
          <div className={`absolute top-4 size-10 rounded-full bg-gradient-primary grid place-items-center shadow-glow
            ${i % 2 === 0 ? "left-1 md:left-auto md:-right-5" : "left-1 md:-left-5"} z-10`}>
            <Briefcase size={18} className="text-white" />
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-card transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-primary font-medium mb-3">
                <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  {item.date}
                </span>
              </div>
              
              <h3 className="font-bold text-xl md:text-2xl mt-1 text-foreground tracking-tight">{item.role}</h3>
              
              <div className="flex items-center gap-2 text-sm md:text-base text-accent font-medium mt-2">
                <Building2 size={16} />
                {item.org}
              </div>
              
              <ul className="mt-5 space-y-3">
                {item.desc.map((point, idx) => (
                  <li key={idx} className="text-sm md:text-base text-muted-foreground flex items-start gap-2 leading-relaxed">
                    <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
