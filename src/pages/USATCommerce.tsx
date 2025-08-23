import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import HuBotFloat from '../components/HuBotFloat';

const USATCommerce = () => {
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
            <span className="text-brand-orange font-medium">Commerce</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="font-secondary text-4xl font-bold text-brand-orange">USAT Commerce</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Commerce and Business programs guide for USAT examination.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card border rounded-lg p-6 text-center">
                <TrendingUp className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Business Administration</h3>
                <p className="text-muted-foreground text-sm">MBA and business management programs</p>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Finance</h3>
                <p className="text-muted-foreground text-sm">Finance and accounting programs</p>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <BarChart3 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Economics</h3>
                <p className="text-muted-foreground text-sm">Economics and trade programs</p>
              </div>
            </div>
            <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">Content Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Detailed USAT Commerce examination information will be available soon.</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default USATCommerce;
