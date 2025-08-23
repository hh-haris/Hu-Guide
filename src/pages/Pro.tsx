import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PricingCard } from '@/components/blocks/PricingCard';

const Pro = () => {
  const [frequency, setFrequency] = useState<string>('onetime');

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
            <span className="text-brand-orange font-medium">Pro</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-secondary text-4xl font-bold text-brand-orange tracking-tight"
              >
                Simple, transparent pricing
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
              >
                Get the guidance you need for your SHS journey. Our pricing is simple, transparent, and designed to help you succeed.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Tabs defaultValue={frequency} onValueChange={setFrequency}>
                  <TabsList className="bg-muted">
                    <TabsTrigger value="onetime" className="data-[state=active]:bg-background">One-time Payment</TabsTrigger>
                  </TabsList>
                </Tabs>
              </motion.div>
            </div>

            {/* Pricing Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid gap-6 max-w-4xl mx-auto md:grid-cols-2"
            >
              <PricingCard
                title="Standard"
                description="Essential guidance for your SHS journey."
                price={0}
                features={[
                  {
                    title: 'Includes',
                    items: [
                      'Access to USAT Guide',
                      'General University Finder Guide',
                      'Documents Guide',
                      'Cities (Job Situation and Seniors reviews excluded)',
                      'Seniors',
                    ],
                  },
                ]}
                buttonText="Current Plan"
                onButtonClick={() => {}}
              />

              <PricingCard
                title="Pro"
                description="Access everything you need to confidently apply for SHS."
                price={299}
                features={[
                  {
                    title: 'Features',
                    items: ['Coming soon'],
                  },
                ]}
                buttonText="Upgrade to Pro"
                onButtonClick={() => {}}
                highlight
              />
            </motion.div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center space-y-4 max-w-2xl mx-auto"
            >
              <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">
                  Pro Features Coming Soon
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're working hard to bring you advanced features that will make your SHS journey even smoother. 
                  Pro subscribers will be the first to access these premium tools when they're ready.
                </p>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Have questions? Contact us through the{' '}
                <Link to="/official" className="text-brand-orange hover:underline">
                  official page
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Pro;