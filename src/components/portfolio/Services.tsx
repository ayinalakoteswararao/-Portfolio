import { motion } from "framer-motion";
import { Code2, Sparkles, Layers, Rocket, LineChart, Bot } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade React, Next.js & TypeScript apps with pixel-perfect UI.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "LLM-powered features, RAG pipelines and intelligent automation built into your product.",
  },
  {
    icon: Layers,
    title: "Full Stack Architecture",
    desc: "Scalable APIs, databases and auth systems that grow with your team.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Engineering",
    desc: "Design systems, micro-interactions and motion that make products feel alive.",
  },
  {
    icon: LineChart,
    title: "Data & ML",
    desc: "Custom models, dashboards and analytics from messy real-world data.",
  },
  {
    icon: Rocket,
    title: "MVP & Launch",
    desc: "From idea to deployed product in weeks — clean code, fast shipping.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24">
      <SectionHeading kicker="Services" title="What I can do for you" subtitle="End-to-end engineering, design and AI capabilities — under one roof." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="w-full text-left p-4 md:p-5 rounded-xl border glass border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex items-center gap-3 md:gap-4 group relative overflow-hidden"
          >
            {/* Hover accent line */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
            
            <div className="size-10 shrink-0 rounded-lg grid place-items-center bg-muted group-hover:bg-gradient-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <s.icon className="text-muted-foreground group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
