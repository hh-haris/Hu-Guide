import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Palette, Music, Drama } from 'lucide-react';
import Header from '../components/Header';
import HuBotFloat from '../components/HuBotFloat';

const USATArts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HuBotFloat />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <Link to="/usat" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              USAT
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Arts</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-secondary text-4xl font-bold text-brand-orange"
              >
                USAT Arts
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
              >
                Complete guide for Arts programs in the USAT examination for Stipendium Hungaricum.
              </motion.p>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              <div className="bg-card border rounded-lg p-6 text-center">
                <Palette className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Visual Arts</h3>
                <p className="text-muted-foreground text-sm">Fine Arts, Graphic Design, and Visual Communication programs</p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <Music className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Music</h3>
                <p className="text-muted-foreground text-sm">Music Theory, Performance, and Composition programs</p>
              </div>
              
              <div className="bg-card border rounded-lg p-6 text-center">
                <Drama className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Performing Arts</h3>
                <p className="text-muted-foreground text-sm">Theatre, Dance, and Drama programs</p>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 text-center"
            >
              <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">
                Content Coming Soon
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Detailed information about USAT Arts examination and preparation guidelines will be available soon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default USATArts;
