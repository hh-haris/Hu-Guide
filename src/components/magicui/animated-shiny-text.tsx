"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedShinyText({ children, className }: AnimatedShinyTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-gradient-to-r from-neutral-600 via-neutral-900 to-neutral-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer dark:from-neutral-400 dark:via-neutral-100 dark:to-neutral-400",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.8) 50%, currentColor 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite",
      }}
    >
      {children}
    </motion.span>
  );
}