import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Timeline</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="font-secondary text-4xl font-bold text-brand-orange tracking-tight">
              Timeline
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Important dates and milestones for your SHS application journey.
            </p>
            <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-muted-foreground text-sm">
                Timeline content coming soon. This page will contain important dates and milestones for your SHS application.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
