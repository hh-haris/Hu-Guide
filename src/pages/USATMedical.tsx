import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const USATMedical = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/usat" className="text-muted-foreground hover:text-brand-orange smooth-transition">USAT</Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Medical</span>
          </div>
        </div>
      </div>
      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-secondary text-3xl font-bold text-brand-orange">USAT - Medical</h1>
            <p className="text-muted-foreground font-primary">Detailed content is coming soon.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default USATMedical;
