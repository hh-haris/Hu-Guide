
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const UniversitySearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <motion.div 
        className="pt-14 bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Choosing University</span>
          </div>
        </div>
      </motion.div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Choosing the Right University
              </h1>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                Choosing a university is one of the most crucial steps when applying for the SHS. It is a key factor that influences the awarding of the scholarship. Making a wise choice can greatly increase your chances of receiving the scholarship.
              </p>
            </motion.div>

            {/* How to choose University Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              
              <div className="space-y-4">
                
                
              </div>
            </motion.div>

            {/* Tips and Common Pitfalls Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
               Common Pitfalls
              </h2>
              <div className="space-y-4">
                <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                One of the most common mistakes students make when choosing a university is focusing solely on its ranking. While rankings can matter, they are not the only factor to consider. Many times, students also look only at the number of available seats, assuming that more seats automatically mean a better chance of admission. While seat availability is important, there are many other factors to take into account.

                </p>
                <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                Students often overlook checking the specific requirements of each university on its official website. Make sure to review the admission criteria for the universities you are applying to and work on meeting those expectations.
                </p>
                <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                 Another frequent mistake is not giving enough thought to the second preference choice. Your second preference can be just as important, so choose it carefully and seek advice from seniors, alumni, or experienced students in relevant groups.
                </p>
              </div>
            </motion.div>

            {/* University Finder Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
               Study Finder
              </h2>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
                When choosing your program and university, this official website can be a valuable resource to guide you.
              </p>
              
              <motion.div className="mt-4">
                <motion.a
                  href="https://studyinhungary.hu/study-in-hungary/menu/find-a-study-programme/study-finder.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-brand-light-green text-foreground rounded-lg font-primary font-medium hover:bg-opacity-80 smooth-transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  University Finder
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Need Help Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Need Help?
              </h2>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
               If you are uncertain, wish to discuss with seniors, or need any guidance, you can ask in this group, where experienced seniors and supportive peers are always ready to help.
              </p>
              
              <motion.div className="mt-4">
                <motion.a
                  href="https://chat.whatsapp.com/KmyqVewi9umEhtvjt1dwCw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-brand-light-green text-foreground rounded-lg font-primary font-medium hover:bg-opacity-80 smooth-transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Group
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UniversitySearch;
