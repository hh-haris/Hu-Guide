
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const handleGetStarted = () => {
    // Trigger the menu open by dispatching a custom event
    window.dispatchEvent(new CustomEvent('openMenu'));
  };

  return (
    <div className="min-h-screen bg-background" data-theme-transition>
      <Header />
      
      <main className="pt-14 min-h-screen flex items-center">
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
                className="font-primary font-semibold text-xl text-foreground"
              >
                The Definitive Guide to
                <br />
                Stipendium Hungaricum
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-primary text-muted-foreground text-base leading-relaxed max-w-xs mx-auto"
              >
              All that’s needed from USAT to nomination for Pakistani bachelor applicants
              </motion.p>
            </div>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={handleGetStarted}
                className="inline-block text-brand-blue font-primary font-medium hover:text-brand-orange smooth-transition"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
