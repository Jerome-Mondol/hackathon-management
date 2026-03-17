"use client";
import { motion } from "framer-motion";

export default function ProgressBars() {
  return (
    <div className="space-y-3 pt-2">
      {/* Background/Shadow bars for depth - use text-foreground color-mix for correct shade */}
      <div className="h-2 w-full bg-foreground/10 rounded-full" />
      <div className="h-2 w-[70%] bg-foreground/10 rounded-full" />
      
      {/* The main glowing progress bar */}
      <motion.div 
        className="h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(56,255,132,0.8)]"
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}