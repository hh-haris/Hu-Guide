import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function AnimatedThemeToggler() {
  const { actualTheme, setTheme } = useTheme();
  const isDark = actualTheme === 'dark';

  const toggleTheme = () => {
    // Simple toggle between light and dark only (no system option)
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -180,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
    </button>
  );
}