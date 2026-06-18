import { motion } from "framer-motion";
import { CloudDownload, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Resume = () => (
  <div id="resume" className="h-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-strong rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden h-full flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute -top-20 -right-20 size-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="size-16 rounded-2xl bg-primary/10 grid place-items-center mb-6">
          <FileText className="text-primary" size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto text-sm md:text-base">
          Grab a copy of my resume to see my full professional background, skills, and experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
            <a href="/Ayinala-KoteswaraRao_Resume.pdf" download="Ayinala-KoteswaraRao_Resume.pdf">
              <CloudDownload className="mr-2 size-5" /> Download
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold rounded-full px-6">
            <a href="/Ayinala-KoteswaraRao_Resume.pdf" target="_blank" rel="noreferrer">
              <Eye className="mr-2 size-5" /> View
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  </div>
);
