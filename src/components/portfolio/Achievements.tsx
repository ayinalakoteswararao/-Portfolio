import { motion } from "framer-motion";
import { Trophy, Star, Code, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Trophy, n: "3+", l: "Hackathon podiums" },
  { icon: Star, n: "4+", l: "Technical certifications" },
  { icon: Users, n: "150+", l: "Students mentored" },
  { icon: Code, n: "25%", l: "AI accuracy boosted" },
];

const wins = [
  { title: "HackerTribe Hackathon — 1st Place", date: "Winner", desc: "Secured 1st place for technical excellence and innovative problem-solving." },
  { title: "Code Royal & Rapid Coders — 3rd Place", date: "Two-time Winner", desc: "Achieved 3rd place twice, showcasing speed, algorithmic efficiency, and coding expertise." },
  { title: "Infosys Springboard", date: "Certifications", desc: "Earned certificates in GPT-3, Introduction to Natural Language Processing, and Applied Generative AI." },
  { title: "MongoDB", date: "Certification", desc: "Earned 'Introduction to MongoDB for Students' certification." },
];

export const Achievements = () => (
  <section id="achievements" className="container py-24">
    <SectionHeading kicker="Achievements & Certifications" title="Wins along the way" subtitle="Highlights from hackathons, competitions, and technical certifications." />

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      {stats.map((s, i) => (
        <motion.div
          key={s.l}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass rounded-2xl p-5 text-center hover:border-primary/40 transition-colors"
        >
          <s.icon className="mx-auto mb-2 text-primary" size={22} />
          <div className="text-3xl font-bold gradient-text">{s.n}</div>
          <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
        </motion.div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-5 mt-8">
      {wins.map((w, i) => (
        <motion.div
          key={w.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="glass rounded-2xl p-6 group hover:border-primary/40 transition-colors relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={16} className="text-primary" />
              <span className="text-xs text-primary font-semibold">{w.date}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{w.title}</h3>
            <p className="text-sm text-muted-foreground">{w.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
