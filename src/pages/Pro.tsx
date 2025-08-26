import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ChevronRight } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import Header from '../components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Pro = () => {
  const [frequency, setFrequency] = useState<string>('onetime');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: {
        onetime: 'Free forever',
      },
      description: 'Essential guidance for your SHS journey.',
      features: [
        'Access to USAT Guide',
        'General University Finder Guide',
        'Documents Guide',
        'Cities (Basic Information)',
        'Seniors (Basic Contact)',
      ],
      cta: 'Current Plan',
      current: true,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: {
        onetime: 299,
      },
      description: 'Everything you need for a successful SHS application.',
      features: [
        'All Free features',
        'Advanced University Insights',
        'Detailed City Job Market Analysis',
        'Senior Reviews & Experiences',
        'Priority Support',
        'Upcoming Premium Features',
      ],
      cta: 'Upgrade to Pro',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-muted dark:bg-gray-900">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Tabs defaultValue={frequency} onValueChange={setFrequency}>
                  <TabsList className="bg-muted">
                    <TabsTrigger value="onetime" className="data-[state=active]:bg-background">
                      One-time Payment
                    </TabsTrigger>
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
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card
                    className={cn(
                      'relative w-full text-left h-full',
                      plan.popular && 'ring-2 ring-brand-orange shadow-lg',
                      plan.current && 'ring-2 ring-brand-blue'
                    )}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange hover:bg-brand-orange/90">
                        Most Popular
                      </Badge>
                    )}
                    {plan.current && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue hover:bg-brand-blue/90">
                        Current Plan
                      </Badge>
                    )}
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="font-secondary text-2xl font-bold">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="space-y-2">
                        <p className="text-muted-foreground">{plan.description}</p>
                        <div className="text-3xl font-bold text-foreground">
                          {typeof plan.price[frequency as keyof typeof plan.price] === 'number' ? (
                            <div className="flex items-baseline gap-1">
                              <span className="text-sm text-muted-foreground">PKR</span>
                              <NumberFlow
                                value={plan.price[frequency as keyof typeof plan.price] as number}
                                format={{ maximumFractionDigits: 0 }}
                                className="font-secondary"
                              />
                            </div>
                          ) : (
                            <span className="text-xl">
                              {plan.price[frequency as keyof typeof plan.price]}
                            </span>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <BadgeCheck className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                    
                    <CardFooter className="pt-6">
                      <Button
                        className={cn(
                          "w-full font-medium",
                          plan.popular 
                            ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
                            : plan.current
                            ? 'bg-brand-blue hover:bg-brand-blue/90 text-white'
                            : 'bg-secondary hover:bg-secondary/80'
                        )}
                        disabled={plan.current}
                      >
                        {plan.cta}
                        {!plan.current && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
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