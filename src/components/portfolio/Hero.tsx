import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const phrases = [
  "Full Stack AI Developer",
  "AI / ML Engineer",
  "Software Developer",
  "Frontend Developer",
];

const useTyping = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI(i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
};

const orbitTech = ["⚛️", "🐍", "🧠", "⚡", "🚀", "💎"];

export const Hero = () => {
  const text = useTyping();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 noise opacity-50 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-green-400 animate-pulse" /> Available for opportunities
            <span className="mx-1 text-white/20">|</span>
            <MapPin size={11} /> India
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Hi, I'm <span className="gradient-text">Ayinala Koteswararao</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-10 mb-6">
            <span>{text}</span>
            <span className="inline-block w-0.5 h-7 bg-primary ml-1 align-middle animate-blink" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I build modern web applications and intelligent AI-powered solutions that solve real-world problems. Passionate about creating scalable, user-friendly, and impactful digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <a href="#projects">View Projects <ArrowRight className="ml-2 size-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-border hover:bg-black/5 dark:hover:bg-white/10">
              <a href="/resume.pdf" download>
                <Download className="mr-2 size-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-11 grid place-items-center glass rounded-full glow-hover hover:-translate-y-1 transition-transform"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[460px]"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30" />

          {/* Orbiting rings */}
          <div className="absolute size-[420px] rounded-full border border-border animate-spin-slow" />
          <div className="absolute size-[320px] rounded-full border border-primary/20" />
          {orbitTech.map((t, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{ animation: `orbit 14s linear infinite`, animationDelay: `${-i * 2.3}s` }}
            >
              <span className="glass rounded-full size-12 grid place-items-center shadow-glow">{t}</span>
            </div>
          ))}

          <div className="relative aspect-square w-72 rounded-3xl glass-strong p-2 animate-float">
            <div className="w-full h-full rounded-3xl bg-gradient-primary p-[2px]">
              <div className="w-full h-full rounded-3xl bg-background grid place-items-center overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="text-[8rem] font-extrabold gradient-text relative" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AK</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
