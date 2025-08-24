"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export function AnimatedThemeToggler() {
  const { actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-brand-light-gray dark:hover:bg-gray-800 smooth-transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: actualTheme === 'dark' ? 0 : 1,
          opacity: actualTheme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: actualTheme === 'dark' ? 1 : 0,
          opacity: actualTheme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
    </motion.button>
  );
}