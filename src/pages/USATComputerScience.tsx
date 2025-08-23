import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Laptop, Code, Database } from 'lucide-react';
import Header from '../components/Header';
import HuBotFloat from '../components/HuBotFloat';

const USATComputerScience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HuBotFloat />
      
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">Home</Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <Link to="/usat" className="text-muted-foreground hover:text-brand-orange smooth-transition">USAT</Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Computer Science</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="font-secondary text-4xl font-bold text-brand-orange">USAT Computer Science</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Computer Science programs guide for USAT examination.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card border rounded-lg p-6 text-center">
                <Laptop className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Software Development</h3>
                <p className="text-muted-foreground text-sm">Programming and software engineering</p>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <Code className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Computer Systems</h3>
                <p className="text-muted-foreground text-sm">Hardware and systems programming</p>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <Database className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-muted-foreground text-sm">Big data and analytics programs</p>
              </div>
            </div>
            <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">Content Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Detailed USAT Computer Science examination information will be available soon.</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default USATComputerScience;
