import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const education = [
  { 
    degree: "SSC", 
    school: "Narayana E-Techno School", 
    date: "2019", 
    grade: "9.5 CGPA",
    position: { x: 15, y: 70 },
    alignment: "bottom"
  },
  { 
    degree: "Intermediate", 
    school: "Narayana Junior College", 
    date: "2019 — 2021", 
    grade: "8.95 CGPA",
    position: { x: 50, y: 50 },
    alignment: "top"
  },
  { 
    degree: "B.Tech (AI & ML)", 
    school: "Usha Rama College of Engineering", 
    date: "2021 — 2025", 
    grade: "8.28 CGPA",
    position: { x: 85, y: 20 },
    alignment: "bottom"
  },
];

export const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress strictly within the timeline div itself
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    // Start drawing when the top of the timeline is 80% down the screen
    // Finish drawing when the bottom of the timeline hits the center
    offset: ["start 80%", "end center"]
  });

  // Map the scroll progress (0 to 1) to individual node opacities
  // Node 1 appears between 0% and 15% scroll
  const node1Opacity = useTransform(scrollYProgress, [0.0, 0.15], [0, 1]);
  const node1Scale = useTransform(scrollYProgress, [0.0, 0.15], [0.5, 1]);
  
  // Node 2 appears between 35% and 50% scroll
  const node2Opacity = useTransform(scrollYProgress, [0.35, 0.50], [0, 1]);
  const node2Scale = useTransform(scrollYProgress, [0.35, 0.50], [0.5, 1]);
  
  // Node 3 appears between 70% and 85% scroll
  const node3Opacity = useTransform(scrollYProgress, [0.70, 0.85], [0, 1]);
  const node3Scale = useTransform(scrollYProgress, [0.70, 0.85], [0.5, 1]);

  const opacities = [node1Opacity, node2Opacity, node3Opacity];
  const scales = [node1Scale, node2Scale, node3Scale];

  return (
    <section id="education" className="container py-32 relative">
      <SectionHeading kicker="Education" title="Learning never stops" subtitle="Where I studied and what I've earned along the way." />
      
      {/* Increased height slightly to allow for more scrolling time */}
      <div ref={timelineRef} className="relative w-full h-[600px] mt-24 max-w-5xl mx-auto hidden md:block">
        
        {/* Background glow for the whole section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

        {/* The Golden Curve SVG */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 1000 400" 
          preserveAspectRatio="none"
        >
          {/* We bind the pathLength directly to scrollYProgress! */}
          <motion.path
            d="M 50 300 C 250 400, 350 150, 500 200 S 750 0, 950 100"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }} 
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#eab308" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes and Content */}
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ 
              left: `${item.position.x}%`, 
              top: `${item.position.y}%`,
              opacity: opacities[i],
              scale: scales[i]
            }}
          >
            {/* Glowing Dot */}
            <div className="relative size-5 rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(253,224,71,0.8)] border-2 border-yellow-100 z-10">
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-60" />
            </div>

            {/* Text Card */}
            <div className={`absolute w-72 text-center ${item.alignment === 'bottom' ? 'top-10' : 'bottom-10'} glass p-5 rounded-xl border border-yellow-500/30 backdrop-blur-md shadow-lg shadow-black/20`}>
              <div className="text-xs text-yellow-500 font-bold tracking-widest uppercase mb-1">{item.date}</div>
              <h3 className="font-semibold text-lg text-foreground">{item.degree}</h3>
              <div className="text-sm text-muted-foreground mt-1">{item.school}</div>
              <div className="text-sm font-semibold text-yellow-500 mt-3 bg-yellow-500/10 py-1 px-3 rounded-full inline-block">{item.grade}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Fallback - Also scroll linked but vertically */}
      <div className="md:hidden flex flex-col gap-10 mt-16 relative">
        {/* We can map the vertical line length to scroll as well */}
        <motion.div 
          className="absolute left-[29px] top-4 bottom-4 w-1 bg-gradient-to-b from-yellow-500 to-yellow-200 origin-top rounded-full"
          style={{ scaleY: scrollYProgress }}
        />
        {education.map((item, i) => (
           <motion.div
           key={item.degree}
           style={{ opacity: opacities[i] }}
           className="relative pl-16"
         >
           <div className="absolute left-[31px] top-6 size-4 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(253,224,71,0.8)] -translate-x-1/2 z-10 border-2 border-white/20" />
           <div className="glass p-6 rounded-2xl border border-yellow-500/20 shadow-lg shadow-black/10">
             <div className="text-xs text-yellow-500 font-bold uppercase tracking-wider">{item.date}</div>
             <h3 className="font-semibold text-xl mt-1">{item.degree}</h3>
             <div className="text-sm text-muted-foreground mt-1">{item.school}</div>
             <div className="text-sm font-semibold text-yellow-500 mt-3 inline-block bg-yellow-500/10 px-3 py-1 rounded-full">{item.grade}</div>
           </div>
         </motion.div>
        ))}
      </div>

    </section>
  );
};
