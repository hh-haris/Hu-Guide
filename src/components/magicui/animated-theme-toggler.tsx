import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function AnimatedThemeToggler() {
  const { actualTheme, setTheme } = useTheme();
  const isDark = actualTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode. Currently in ${isDark ? 'dark' : 'light'} mode.`}
      role="switch"
      aria-checked={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      tabIndex={0}
    >
      {/* Background track */}
      <motion.div
        className="absolute inset-1 rounded-full"
        animate={{
          backgroundColor: isDark ? '#1f2937' : '#e5e7eb',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      
      {/* Sliding circle */}
      <motion.div
        className="relative w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10"
        animate={{
          x: isDark ? 20 : 0,
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Sun icon */}
        <motion.div
          className="absolute"
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.8 : 1,
            rotate: isDark ? 180 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Sun className="w-3 h-3 text-yellow-500" />
        </motion.div>
        
        {/* Moon icon */}
        <motion.div
          className="absolute"
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.8,
            rotate: isDark ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Moon className="w-3 h-3 text-blue-300" />
        </motion.div>
      </motion.div>
      
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? 'linear-gradient(45deg, #1e3a8a, #3730a3)'
            : 'linear-gradient(45deg, #fbbf24, #f59e0b)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ opacity: 0.1 }}
      />
    </button>
  );
}