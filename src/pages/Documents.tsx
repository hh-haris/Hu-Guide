import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const Documents = () => {
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
            <span className="text-brand-orange font-medium">Documents</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-secondary text-3xl font-bold text-brand-orange">Documents Guide</h1>
            <p className="text-muted-foreground font-primary">Helpful resources and templates.</p>

            <div className="space-y-3">
              <Link to="/documents/motivation-letter" className="block p-4 rounded-lg border hover:bg-brand-light-gray dark:hover:bg-gray-800 smooth-transition">
                <div className="font-secondary font-semibold">Motivation Letter</div>
                <div className="text-sm text-muted-foreground">Guidance and examples</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Documents;