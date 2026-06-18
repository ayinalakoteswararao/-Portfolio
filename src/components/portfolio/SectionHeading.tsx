import { motion } from "framer-motion";

export const SectionHeading = ({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl mx-auto"
  >
    <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">{kicker}</span>
    <h2 className="text-4xl md:text-5xl font-bold mt-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground mt-4">{subtitle}</p>}
  </motion.div>
);
