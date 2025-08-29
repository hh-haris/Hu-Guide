import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

const MotivationLetter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <motion.div
        className="pt-14 bg-brand-light-gray"
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
            <Link to="/documents" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Documents
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Motivation Letter</span>
          </div>
        </div>
      </motion.div>

      <main className="pb-12">
        <div className="mobile-container pt-8 space-y-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-secondary font-bold text-2xl text-brand-orange">
              Motivation Letter
            </h1>
            <p className="font-primary text-muted-foreground text-sm leading-relaxed">
              The main goal of a motivation letter is to answer the question
              “Why are you a suitable candidate” and it should be written in a clear,
              logical, and compelling manner. It needs to reflect your personality,
              professionalism, and attention to detail.
            </p>
          </motion.div>

          {/* Essential Rules */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-secondary font-medium text-brand-blue text-lg">
              Essential Rules
            </h3>
            <p className="font-primary text-muted-foreground text-sm leading-relaxed">
              Your letter of motivation should be at least 1,500 characters and must not exceed 4,000 characters.
              It must be in English and addressed directly to the Hungarian Higher Education Institution.
              Include the date and your signature.
            </p>
          </motion.div>

          {/* Key Questions */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-secondary font-medium text-brand-blue text-lg">
              Key Questions to Address
            </h3>
            <p className="font-primary text-muted-foreground text-sm leading-relaxed">
             In your motivation letter, be sure to answer the following 
            </p>
            <div className="space-y-3">
              {[
                'Why have you chosen this programme?',
                'Why did you decide to study in Hungary?',
                'What do you expect to gain from your studies?',
                'How does your background make you a strong candidate?',
                'How will the programme help you achieve your goals?',
                'How is your proposed study connected to a specific development or challenge?',
                'How will you apply your skills after returning home?',
                'What challenges might you face abroad and how will you prepare?'
              ].map((question, idx) => (
                <div
                  key={idx}
                  className="pl-4 border-l-4 border-brand-light-green font-primary text-sm text-muted-foreground leading-relaxed"
                >
                  {question}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Templates */}
<div className="space-y-2">
  <h3 className="font-secondary font-semibold text-brand-blue">
    Template
  </h3>
  <p className="text-sm text-muted-foreground">
    This sample from a successful candidate is for guidance only. Do not copy from it or any other source. Uniqueness is essential.
  </p>

  <a
    href="/ML Sample.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 bg-brand-light-green border border-brand-light-green text-foreground rounded-lg text-sm hover:bg-opacity-80 smooth-transition"
  >
    Download Sample
  </a>
</div>

            {/* Plagiarism */}
            <div className="space-y-2">
              <h3 className="font-secondary font-semibold text-brand-blue">
              Avoid Plagiarism
              </h3>
              <p className="text-sm text-muted-foreground">
              Ensure your letter is completely original, as universities take plagiarism very seriously and it creates a negative impression. 

            Paid plagiarism checking tools are generally more accurate, and many people offer such services. However, if you know a reliable free tool, you may use that as well.
              </p>
              
            </div>

           
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MotivationLetter;
