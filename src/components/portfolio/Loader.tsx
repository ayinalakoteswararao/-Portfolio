import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background grid place-items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-60 animate-pulse" />
            <div className="relative text-5xl font-extrabold gradient-text animate-pulse">AK.</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
