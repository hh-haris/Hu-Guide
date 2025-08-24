"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
}

export function Highlighter({ 
  children, 
  action = "highlight", 
  color = "#FF9800", 
  className 
}: HighlighterProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className={cn(
          "absolute left-0 origin-left",
          action === "underline" 
            ? "bottom-0 h-0.5" 
            : "top-0 h-full opacity-30"
        )}
        style={{ 
          backgroundColor: color,
          ...(action === "underline" && { height: "2px" })
        }}
      />
    </span>
  );
}