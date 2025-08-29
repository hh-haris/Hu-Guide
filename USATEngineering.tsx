import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';

const USATEngineering = () => {
  const [showPastPapers, setShowPastPapers] = useState(false);
  const [showStudyResources, setShowStudyResources] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const preparationTips = [
    "Your USAT preparation depends entirely on your own effort and ability.",
    "Focused practice on past papers and similar questions is the key to success and often all you need to score well.",
    "You can use YouTube channels such as Feel Free to Learn, Imran Sir Maths, Dear Sir, Fresher World, Aspirants of Future, and Career Ride to strengthen your concepts and practice solving past paper questions.",

    "Focus on time management read questions carefully and think smartly as some answers are obvious and need only logic not formulas."
  ];

  const pastPapersData = [
    { type: "Past Papers", downloadUrl: "https://drive.google.com/drive/folders/1-3fjXC6F33T9ANomMZ14XxP9yE06eTO2" },
    { type: "Quantitative R. Material", downloadUrl: "https://drive.google.com/drive/folders/1-0r2FAGbQ5piNZMS0wKQxUaN55AzZbT6" },
    { type: "Physics Material", downloadUrl: "https://drive.google.com/drive/folders/1w2dgW8HtXK1YpxEcCp4GY7P4_QtVe9dN" },
    { type: "Chemistry Material", downloadUrl: "https://drive.google.com/drive/folders/14SyCj1ip-H-IqaTV1iWtie0VaCFm874h" }

  ];

  const studyResourcesData = [
    { name: "USAT Preparation Playlist", type: "YouTube", link: "https://www.youtube.com/playlist?list=PLpUXU5ALHfD5V_QDspI8s7PABMbhpx-4Q" },
    { name: "Standout educator on YouTube", type: "YouTube", link: "https://www.youtube.com/@GATAcademy" },
    { name: "Complete Google Drive Link", type: "Drive", link: "https://drive.google.com/drive/folders/1DzYs4QSVONwQ7XuLbCJywths93DVJ2AO" }
  ];

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
            <span className="text-brand-orange font-medium">Engineering</span>
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
            <div className="space-y-4">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                USAT Engineering
              </h1>
             
            </div>

            {/* Test Format */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Test Format
              </h2>
              
              <div className="space-y-4">
                <h3 className="font-secondary font-semibold text-lg text-brand-orange">MCQs</h3>
                
                {/* Verbal Reasoning - Expandable */} 
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3 cursor-pointer" onClick={() => toggleSection('verbal')}>
                    <div className="flex justify-between items-center">
                      <span className="font-primary font-medium">Verbal Reasoning</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-primary font-medium">20 MCQs</span>
                        <ChevronUp className={`h-4 w-4 transition-transform ${expandedSection === 'verbal' ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'verbal' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-4"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Analogy</span>
                            <span className="font-primary text-muted-foreground text-sm">05 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Synonym/Antonym</span>
                            <span className="font-primary text-muted-foreground text-sm">04 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Sentence Completion</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Comprehension</span>
                            <span className="font-primary text-muted-foreground text-sm">05 MCQs</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quantitative Reasoning - Expandable */}
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3 cursor-pointer" onClick={() => toggleSection('quantitative')}>
                    <div className="flex justify-between items-center">
                      <span className="font-primary font-medium">Quantitative Reasoning</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-primary font-medium">25 MCQs</span>
                        <ChevronUp className={`h-4 w-4 transition-transform ${expandedSection === 'quantitative' ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedSection === 'quantitative' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden ml-4"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Arithmetic</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Algebra and Functions</span>
                            <span className="font-primary text-muted-foreground text-sm">04 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Geometry</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Equations</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Statistics</span>
                            <span className="font-primary text-muted-foreground text-sm">03 MCQs</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-primary text-muted-foreground text-sm">Scenario Based/Mental Mathematics</span>
                            <span className="font-primary text-muted-foreground text-sm">06 MCQs</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subject-specific sections - Non-expandable */}
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Physics</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Chemistry</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Mathematics</span>
                      <span className="font-primary font-medium">10 MCQs</span>
                    </div>
                  </div>
                </div>

                {/* Essays */}
                <h3 className="font-secondary font-semibold text-lg text-brand-orange mt-6">Essays</h3>
                <div className="space-y-2">
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Argument Based Essay</span>
                      <span className="font-primary font-medium">15 Marks</span>
                    </div>
                  </div>
                  <div className="bg-brand-light-green rounded-lg p-3">
                    <div className="flex justify-between">
                      <span className="font-primary font-medium">Narrative Based Essay</span>
                      <span className="font-primary font-medium">10 Marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                Preparation Tips
              </h2>
              
              <div className="space-y-3">
                {preparationTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-primary text-muted-foreground text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Resources */}
            <div className="space-y-4">
              
              
              <div className="space-y-2">
                <Card
  className="cursor-pointer hover:shadow-lg smooth-transition"
  onClick={() =>
    window.open(
      'https://drive.google.com/drive/folders/1DzYs4QSVONwQ7XuLbCJywths93DVJ2AO',
      '_blank',
      'noopener,noreferrer'
    )
  }
>

                  <CardContent className="p-0">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img src="/Resources.png" alt="Past Papers" className="w-full h-full object-cover" />


                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Past Papers Modal */}
      <AnimatePresence>
        {showPastPapers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowPastPapers(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Past Papers</h3>
                <button
                  onClick={() => setShowPastPapers(false)}
                  className="p-1 hover:bg-muted rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
             {pastPapersData.map((paper, index) => (
  <div
    key={index}
    className="flex justify-between items-center py-2 border-b border-brand-gray last:border-b-0"
  >
    <span className="font-primary text-brand-orange font-medium">
      {paper.type}
    </span>
   <a
  href={paper.downloadUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-brand-blue smooth-transition text-sm"
>
  Link
</a>
  </div>
))}

<p className="text-sm text-muted-foreground">
  Engineering USAT past papers to help you prepare effectively for the exam.
</p>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Study Resources Modal */}
      <AnimatePresence>
        {showStudyResources && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowStudyResources(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-brand-gray flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Study Resources</h3>
                <button
                  onClick={() => setShowStudyResources(false)}
                  className="p-1 hover:bg-muted rounded-full smooth-transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96">
                <div className="space-y-4">
                  {studyResourcesData.map((resource, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-primary text-muted-foreground text-sm">
                          {resource.name}
                        </span>
                        <span className="text-xs bg-brand-light-green px-2 py-1 rounded-full text-muted-foreground">
                          {resource.type}
                        </span>
                      </div>
                      <button className="w-full bg-brand-blue text-white py-2 rounded-lg hover:bg-brand-blue/90 smooth-transition text-sm">
                        Open {resource.type}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default USATEngineering;
