import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

const HuBotFloat = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-10 right-10 z-50"
    >
      <Link to="/hubot">
        <motion.button
          className="hubot-float group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open HuBot Assistant"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot className="h-6 w-6 text-white group-hover:animate-pulse" />
          </motion.div>
        </motion.button>
      </Link>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg"
      >
        huBot
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-foreground border-t-2 border-b-2 border-t-transparent border-b-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default HuBotFloat;