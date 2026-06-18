const tech = [
  "HTML5", "CSS3", "JavaScript", "Tailwind CSS",
  "Python", "Java", "React", "Next.js", "TypeScript",
  "Node.js", "Flask", "FastAPI", "TensorFlow",
  "PyTorch", "Pandas", "Machine Learning", "Deep Learning",
  "NLP", "CNN", "Supabase", "PostgreSQL", "MongoDB", "SQL", "Photoshop", "Canva", "GitHub", "Jupyter Notebook", "VS Code", "Framer Motion", "Prisma", "GraphQL", "REST APIs", "WebSockets", "scikit-learn", "LangChain", "TensorFlow", "PyTorch", "Pandas", "Machine Learning", "Deep Learning", "NLP", "CNN",
];

export const Marquee = () => (
  <section aria-label="Tech stack" className="py-12 border-y border-white/5 overflow-hidden marquee">
    <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
      {[...tech, ...tech].map((t, i) => (
        <span
          key={i}
          className="text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {t} <span className="text-primary mx-4">✦</span>
        </span>
      ))}
    </div>
  </section>
);
