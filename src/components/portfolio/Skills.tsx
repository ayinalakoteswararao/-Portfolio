import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Palette, Wrench, Network, MessageSquare, Layers as LayersIcon } from "lucide-react";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaNodeJs, FaBrain, FaGithub, FaDatabase, FaRobot
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiFlask, SiFastapi,
  SiTensorflow, SiPytorch, SiPandas, SiPostgresql, SiMongodb, SiSupabase,
  SiJupyter, SiCanva
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";
import { SectionHeading } from "./SectionHeading";

const skillCategories = [
  { 
    icon: Code2, 
    title: "Frontend Development", 
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    ] 
  },
  { 
    icon: Server, 
    title: "Backend Development", 
    skills: [
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "Java", icon: FaJava, color: "text-[#007396]" },
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Flask", icon: SiFlask, color: "text-foreground" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
    ] 
  },
  { 
    icon: Brain, 
    title: "AI & ML", 
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "Pandas", icon: SiPandas, color: "text-[#150458] dark:text-white" },
      { name: "AI/ML", icon: FaBrain, color: "text-[#FF9DBB]" },
      { name: "DL", icon: Network, color: "text-[#3B82F6]" },
      { name: "NLP", icon: MessageSquare, color: "text-[#10B981]" },
      { name: "CNN", icon: LayersIcon, color: "text-[#8B5CF6]" },
    ] 
  },
  { 
    icon: Database, 
    title: "Databases", 
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "SQL", icon: FaDatabase, color: "text-[#F29111]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    ] 
  },
  { 
    icon: Wrench, 
    title: "Tools", 
    skills: [
      { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626]" },
    ] 
  },
  { 
    icon: Palette, 
    title: "Creative Tools", 
    skills: [
      { name: "Photoshop", icon: DiPhotoshop, color: "text-[#31A8FF]" },
      { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
    ] 
  },
];

export const Skills = () => (
  <section id="skills" className="container py-24">
    <SectionHeading kicker="Skills" title="My toolkit" subtitle="Technologies I use to bring ideas to life." />
    
    <div className="flex flex-col gap-4 md:gap-6 mt-16 max-w-6xl mx-auto">
      {/* First 4 categories */}
      {skillCategories.slice(0, 4).map((category, i) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        >
          <div className="flex items-center gap-4 w-full md:w-[260px] shrink-0">
            <div className="size-10 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
              <category.icon size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground font-display tracking-tight whitespace-nowrap">{category.title}</h3>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 w-full overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {category.skills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-background/50 border border-border/50 hover:bg-muted hover:border-border hover:scale-[1.02] transition-all duration-200 group shadow-sm"
              >
                <skill.icon className={`text-lg md:text-xl transition-transform group-hover:scale-110 ${skill.color}`} />
                <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Last 2 categories side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {skillCategories.slice(4).map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 4) * 0.1 }}
            className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 h-full"
          >
            <div className="flex items-center gap-4 shrink-0">
              <div className="size-10 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                <category.icon size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground font-display tracking-tight whitespace-nowrap">{category.title}</h3>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 w-full overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-background/50 border border-border/50 hover:bg-muted hover:border-border hover:scale-[1.02] transition-all duration-200 group shadow-sm"
                >
                  <skill.icon className={`text-lg md:text-xl transition-transform group-hover:scale-110 ${skill.color}`} />
                  <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
