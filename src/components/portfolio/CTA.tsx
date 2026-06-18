import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="h-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12 text-center h-full flex flex-col justify-center items-center shadow-lg"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] bg-gradient-conic opacity-20 blur-3xl animate-spin-slow pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary mb-6 shadow-sm">
          <Sparkles size={12} /> Open for new projects
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Have a wild idea? <br /><span className="gradient-text">Let's build it.</span>
        </h2>
        
        <p className="text-muted-foreground max-w-sm mx-auto mb-8 text-sm md:text-base">
          From scrappy MVPs to polished production apps — I bring design, engineering and AI under one roof.
        </p>
        
        <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 shadow-glow animate-pulse-glow rounded-full px-8">
          <a href="#contact">Start a project <ArrowRight className="ml-2 size-4" /></a>
        </Button>
      </div>
    </motion.div>
  </div>
);
