import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import HuBotFloat from '../components/HuBotFloat';

const Documents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HuBotFloat />
      
      <div className="pt-14 bg-brand-light-gray dark:bg-gray-900">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">Home</Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Documents</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="font-secondary text-4xl font-bold text-brand-orange">Documents Guide</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Essential documents and forms for your SHS application.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card border rounded-lg p-6">
                <FileText className="h-12 w-12 text-brand-orange mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Required Documents</h3>
                <p className="text-muted-foreground text-sm mb-4">List of all documents needed for application</p>
                <Link to="/documents/motivation-letter" className="text-brand-orange hover:underline text-sm font-medium">
                  View Motivation Letter Guide →
                </Link>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <Download className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="font-secondary text-xl font-semibold mb-2">Download Forms</h3>
                <p className="text-muted-foreground text-sm">Official application forms and templates</p>
              </div>
            </div>
            <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">Documents Checklist</h3>
              <p className="text-muted-foreground text-sm">Complete document preparation guide coming soon.</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Documents;