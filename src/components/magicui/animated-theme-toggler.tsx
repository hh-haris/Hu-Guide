import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';

export function AnimatedThemeToggler() {
  const { actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative h-8 w-8 p-0 flex items-center justify-center rounded-full bg-transparent hover:bg-brand-light-gray dark:hover:bg-gray-800 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${actualTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={actualTheme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1],
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {actualTheme === 'dark' ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <Moon className="h-4 w-4 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <Sun className="h-4 w-4 text-foreground" />
          </motion.div>
        )}
      </motion.div>
      
      {/* Animated background circle */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: actualTheme === 'dark' 
            ? 'rgba(59, 130, 246, 0.1)' 
            : 'rgba(251, 146, 60, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}