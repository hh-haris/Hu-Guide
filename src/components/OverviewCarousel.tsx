import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';

interface CurrencyAmount {
  huf: number;
  pkr: number;
}
interface CoverageItem {
  name: string;
  description: string;
  amount: CurrencyAmount;
}

const OverviewCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showProsCons, setShowProsCons] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const coverageData: CoverageItem[] = [
    {
      name: 'Tuition Fee',
      description: 'Complete exemption from all tuition fees for the entire duration of studies.',
      amount: { huf: 0, pkr: 0 },
    },
    {
      name: 'Stipend',
      description: 'A monthly stipend of 43,700 HUF (around 36,000 PKR or approximately 100 EUR).',
      amount: { huf: 0, pkr: 0 },
    },
    {
      name: 'Accommodation',
      description: 'Students are provided either a free dormitory placement or a housing contribution of 40,000 HUF per month, but in most cases scholarship holders are accommodated in dormitories.',
      amount: { huf: 0, pkr: 0 },
    },
    {
      name: 'Medical Insurance',
      description: 'Full medical insurance provided at no cost to the student.',
      amount: { huf: 0, pkr: 0 },
    },
    {
      name: 'Ticket',
      description: 'You initially pay for your ticket to Hungary yourself, and HEC later reimburses you for this one time travel expense.',
      amount: { huf: 100000, pkr: 87000 },
    },
  ];

  const slides = [
    {
      description:
        'The Stipendium Hungaricum is a prestigious, fully funded opportunity that allows Pakistani students including bachelors, to study in Hungary in the heart of Europe.',
      image: 'O 1.jpg',
      hasDetails: false,
      hasProsCons: true,
    },
    {
      description:
        'Pakistani citizens with no dual nationality, who are above 18 years of age, have completed FSc or an equivalent qualification, and possess valid USAT scores are eligible to apply.',
      image: 'O 3.jpg',
      hasDetails: true,
    },
    {
      image: 'O 2.jpg',
      hasDetails: false,
      hasCoverage: true,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="basis-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <motion.div
                        className="relative w-full h-32 rounded-2xl overflow-hidden"
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={slide.image}
                          alt="Stipendium Hungaricum"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <div className="text-center space-y-4 mx-[13px] my-[19px] px-px">
                        <motion.p
                          className="font-primary text-muted-foreground text-sm leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {slide.description}
                        </motion.p>

                        {/* Coverage Details */}
                        {slide.hasCoverage && (
                          <motion.div
                            className="space-y-4 mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            {coverageData.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: 0.5 + idx * 0.15,
                                  duration: 0.6,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                                className="my-[5px] py-0 px-px mx-[10px]"
                              >
                                <div className="text-left">
                                  <div className="font-primary font-medium text-brand-blue text-base mb-1">
                                    {item.name}
                                  </div>
                                  <div className="font-primary text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                            {/* FAQs button removed */}
                          </motion.div>
                        )}

                        {/* Details Button */}
                        {slide.hasDetails && (
                          <motion.button
                            onClick={() => setShowDetails(true)}
                            whileTap={{ scale: 0.95 }}
                            className="text-brand-blue font-primary font-medium active:text-brand-orange smooth-transition mx-[20px] my-[24px]"
                          >
                            Details
                          </motion.button>
                        )}

                        {/* Pros/Cons Button */}
                        {slide.hasProsCons && (
                          <motion.button
                            onClick={() => setShowProsCons(true)}
                            whileTap={{ scale: 0.95 }}
                            className="text-brand-blue font-primary font-medium active:text-brand-orange smooth-transition mx-[20px] my-[24px]"
                          >
                            Insights
                          </motion.button>
                        )}
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
      <div
        className={`flex justify-center space-x-2 transition-all duration-300 ${
          current === 1 || current === 2 ? 'mt-[-135px] mb-[0px]' : 'mt-6 mb-1'
        }`}
      >
        {Array.from({ length: count }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full smooth-transition ${
              index === current - 1 ? 'bg-brand-blue' : 'bg-brand-gray'
            }`}
            whileTap={{ scale: 0.8 }}
            animate={{ scale: index === current - 1 ? 1.2 : 1 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, duration: 0.5 }}
              className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Details</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
                  <ul className="space-y-1.5">
                    {[
                      'Must be a Pakistani or AJ&K citizen without any other nationality.',
                      'Must be 18 years old by 31 August 2026. Those born after 31 August 2008 are not eligible.',
                      'Must have completed F.Sc/F.A or an equivalent qualification.',
                      'Students awaiting their final year results are also eligible to apply.',
                      'Must have valid USAT marks (a score of 75 or above is recommended).',
                      'Must have all required documents complete.',
                      'A well prepared Letter of Motivation is required.',
                      'Must submit a medical certificate of satisfactory health.',
                    ].map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 p-1 rounded-md hover:bg-brand-light-gray transition-colors duration-200"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0"></span>
                        <span className="font-primary text-sm leading-snug text-muted-foreground">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pros/Cons Modal */}
      <AnimatePresence>
        {showProsCons && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowProsCons(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, duration: 0.5 }}
              className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Insights</h3>
                <button
                  onClick={() => setShowProsCons(false)}
                  className="p-1 hover:bg-brand-light-gray rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-6">
                  {/* Pros */}
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2 text-lg">
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'Fully funded scholarships for undergraduates are extremely rare, and SHS stands out as one of the finest opportunities available.',
                        'The scholarship provides a Schengen visa, enabling travel across Europe.',
                        'Living abroad builds independence, confidence, and lifelong skills.',
                        'You study in a diverse, multicultural environment with global peers.',
                        'The Pakistani student community in Hungary is supportive and close knit.',
                        'IELTS is often not required, making it easier to apply.',
                      ].map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 p-1 rounded-md hover:bg-brand-light-gray transition-colors duration-200"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0" />
                          <span className="font-primary text-sm leading-snug text-muted-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2 text-lg">
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        'The monthly stipend often isn’t enough to cover all expenses, so you’ll need extra personal funds.',
                        'To keep the scholarship, you must pass the Hungarian exam and earn at least 60 credits by your second semester.',
                        'Language barriers exist, as not everyone speaks English.',
                        'Student job opportunities are limited. In cities like Budapest it is difficult and in smaller cities the situation is even worse and very limited.',
                        'Dormitory conditions vary widely and may not always be ideal.',
                      ].map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 p-1 rounded-md hover:bg-brand-light-gray transition-colors duration-200"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0" />
                          <span className="font-primary text-sm leading-snug text-muted-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OverviewCarousel;
