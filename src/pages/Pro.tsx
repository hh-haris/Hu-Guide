import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import { PricingCard } from '@/components/ui/pricing-card';

const Pro = () => {
  const plans = [
    {
      title: "Standard",
      description: "Essential guidance for your SHS journey.",
      features: [
        {
          title: "Features",
          items: [
            "Access to USAT Guide",
            "General University Finder Guide",
            "Documents Guide",
            "Cities (Job Situation excluded)",
            "Seniors"
          ]
        }
      ],
      buttonText: "Current Plan",
      isFree: true,
      current: true,
      onButtonClick: () => console.log("Current plan")
    },
    {
      title: "Pro",
      description: "Everything you need for a successful SHS application.",
      price: 299,
      features: [
        {
          title: "Features",
          items: [
            "All Standard features included",
            "Advanced City Job Situation Analysis",
            "Detailed Senior Reviews & Experiences",
            "Premium University Insights"
          ]
        },
        {
          title: "Perks",
          items: [
            "Priority Support",
            "Upcoming Premium Features",
            "Advanced Analytics",
            "Early Feature Access"
          ]
        }
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
      onButtonClick: () => console.log("Upgrade to Pro")
    }
  ];

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
        <div className="mobile-container pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Description */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
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
                className="text-muted-foreground text-lg leading-relaxed"
              >
                Get the guidance you need for your SHS journey. Our pricing is simple, transparent, and designed to help you succeed.
              </motion.p>
            </div>

            {/* Pricing Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid gap-6 max-w-5xl mx-auto lg:grid-cols-2 px-4"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-full"
                >
                  <PricingCard
                    title={plan.title}
                    description={plan.description}
                    price={plan.price}
                    features={plan.features}
                    buttonText={plan.buttonText}
                    onButtonClick={plan.onButtonClick}
                    popular={plan.popular}
                    current={plan.current}
                    isFree={plan.isFree}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground">
                Have questions? Contact us through the{' '}
                <Link to="/official" className="text-brand-orange hover:underline font-medium">
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