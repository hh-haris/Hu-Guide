
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '../components/ui/carousel';

const RegistrationGuide = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showExpandedImage, setShowExpandedImage] = useState(false);

 const registrationSteps = [
  {
    step: "Step 01",
    title: "Create Account",
   description: "To apply for the USAT, your first step is to create an account on the ETC HEC website. Visit https://etc.hec.gov.pk/#/login and fill in the required information.",
   image: "/RS 1.jpg",
  },
    {
      step: "Step 02", 
      title: "Begin USAT Application",
      description: "Once you create an account on the ETC portal, you will be directed to a screen similar to the one shown above. If you are applying during the period when USAT registrations are open and the deadline has not yet passed, you will see the Undergraduate Studies Admission Test listed with its closing date. Click on it to proceed to the USAT application section.",
      image: "/RS 2.jpg"
    },
    {
      step: "Step 03",
      title: "Upload Documents",
      description: "Upload required documents including educational certificates, CNIC copy, and passport size photograph.",
      image: "/RS 3.jpg"
    },
    {
      step: "Step 04",
      title: "Select USAT Category",
      description: "Choose your desired USAT category based on your educational background and field of interest.",
      image: "/RS 4.jpg"
    },
    {
      step: "Step 05",
      title: "Pay Registration Fee",
      description: "Complete the payment process for USAT registration fee through the available payment methods.",
      image: "/RS 5.jpg"
    }
   
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-muted">
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
            <span className="text-brand-orange font-medium">Registration</span>
          </div>
        </div>
      </div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Registration Guide
              </h1>
            </div>

            {/* Registration Steps Carousel */}
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {registrationSteps.map((step, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="border-0 shadow-none">
                        <CardContent className="p-0">
                          <div className="space-y-6">
                            {/* Screenshot with expand button */}
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => setShowExpandedImage(true)}
                                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white smooth-transition"
                              >
                                <Expand className="h-4 w-4 text-brand-blue" />
                              </button>
                            </div>

                            {/* Step Content */}
                            <div className="space-y-4">
                              <div className="inline-block bg-brand-light-green px-3 py-1 rounded-full">
                                <span className="text-sm font-primary font-medium text-muted-foreground">
                                  {step.step}
                                </span>
                              </div>
                              
                              <h2 className="font-secondary font-bold text-xl text-brand-blue">
                                {step.title}
                              </h2>
                              
                              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: count }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full smooth-transition ${
                    index === current - 1 ? 'bg-brand-blue' : 'bg-brand-gray'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {showExpandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setShowExpandedImage(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-white text-sm">Expanded Screenshot of {registrationSteps[current - 1]?.step}</p>
                <button
                  onClick={() => setShowExpandedImage(false)}
                  className="text-white hover:text-brand-orange smooth-transition"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <img 
                  src={registrationSteps[current - 1]?.image} 
                  alt="Expanded screenshot"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationGuide;
