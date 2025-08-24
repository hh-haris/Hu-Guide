
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import Header from '../components/Header';
import { Highlighter } from '@/components/magicui/highlighter';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { cn } from '@/lib/utils';
import InfiniteMovingCardsDemo from '@/components/infinite-moving-cards-demo';

const Home = () => {
  const handleGetStarted = () => {
    // Trigger the menu open by dispatching a custom event
    window.dispatchEvent(new CustomEvent('openMenu'));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pt-14 pb-4"
      >
        <div className="flex justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Coming soon: A senior led blog to guide new applicants</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>
      
      <main className="min-h-screen flex items-center">
        <div className="mobile-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Main Logo/Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-secondary font-bold text-4xl md:text-5xl text-brand-orange"
              >
                hungaricum
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-primary font-semibold text-xl text-foreground dark:text-white"
              >
                The <Highlighter action="underline" color="#FF9800">Definitive Guide</Highlighter> to
                <br />
                Stipendium Hungaricum
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-primary text-muted-foreground dark:text-gray-300 text-base leading-relaxed max-w-xs mx-auto"
              >
              All that's needed from USAT to nomination for Pakistani <Highlighter action="underline" color="#FF9800">bachelor applicants</Highlighter>
              </motion.p>
            </div>

            {/* Infinite Moving Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <InfiniteMovingCardsDemo />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
