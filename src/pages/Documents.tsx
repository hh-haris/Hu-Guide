import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
const Documents = () => {
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);
  const [showToolsModal, setShowToolsModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const faqs = [{
    question: 'What documents are mandatory for application?',
    answer: 'The mandatory documents include motivation letter, academic certificates, transcripts, passport copy, and English proficiency certificate.'
  }, {
    question: 'Do I need to get documents attested?',
    answer: 'Yes, all academic documents need to be attested by HEC (Higher Education Commission) Pakistan.'
  }, {
    question: 'What is the word limit for motivation letter?',
    answer: 'The motivation letter should be between 500-1000 words, clearly stating your purpose and goals.'
  }, {
    question: 'Can I submit scanned copies of documents?',
    answer: 'Yes, for initial application you can submit high-qual ity scanned copies. Original documents will be required later.'
  }, {
    question: 'What if I don\'t have English proficiency certificate?',
    answer: 'You can submit a certificate from your school/college stating that your medium of instruction was English.'
  }];
  const tools = [{
    name: 'Scribbr for Plagiarism',
    link: 'https://scribbr.com'
  }, {
    name: 'ChatGPT',
    link: 'https://chat.openai.com'
  }, {
    name: 'Grammarly',
    link: 'https://grammarly.com'
  }, {
    name: 'Scribd',
    link: 'https://scribd.com'
  }];
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <motion.div className="pt-14 bg-muted" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.3
    }}>
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Documents</span>
          </div>
        </div>
      </motion.div>

      <main className="pb-8">
        <div className="mobile-container pt-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            {/* Header */}
            <motion.div className="space-y-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }}>
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Documents
              </h1>
              <p className="font-primary text-muted-foreground text-sm leading-relaxed">
        
The application is submitted via two portals and all the documents listed here are required for the Tempus portal while the only document required on the HEC portal is the letter of motivation. Applicants are encouraged to go through this list thoroughly before submission and also check the official website of their chosen university as some institutions may ask for additional materials or have specific guidelines.
              </p>





              
              {/* Documents List */}
              <div className="space-y-6 mt-6">
                <div> 
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">High School Certificates (Sanad)</h3>
                  <p className="text-sm text-muted-foreground">
                 You must upload your Matric and Intermediate (or equivalent) certificates/Sanads. If your results are pending, you need to upload a declaration letter stating that you will provide your Intermediate (or equivalent) certificate before 1 August.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">Transcript of Records (DMC)</h3>
                  <p className="text-sm text-muted-foreground">
                   You must upload the DMCs or marksheets for both Matric or its equivalent and Intermediate or its equivalent when applying.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">Proof of Foreign Language Proficiency</h3>
                  <p className="text-sm text-muted-foreground">
                   You have to provide an English proficiency certificate from your high school stating that the medium of instruction was English and confirming your ability to use the language well. However, you should carefully check the official pages of your chosen university, as some institutions may specifically require an English proficiency test such as IELTS or TOEFL. Failing to meet such requirements could lead to rejection, so it is important to verify this in advance.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">Passport</h3>
                  <p className="text-sm text-muted-foreground">
                    You have to upload your passport when applying for the scholarship. If you do not have a passport at the time of application, you must upload your CNIC along with a declaration stating that you will provide the passport before 1 August.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">Mandatory Medical Certificate</h3>
                  <p className="text-sm text-muted-foreground">
                   Although a medical certificate is not required at the time of application, you will need to select the option of declaration that you will submit it by 15 April. After nomination, obtain it at your earliest convenience.
                  </p>
                </div>
                

<div className="space-y-2">
  <h3 className="font-secondary font-semibold text-brand-blue">
 Declaration Letter
  </h3>
  <p className="text-sm text-muted-foreground">
   You will need to upload a declaration letter if any documents, such as your FSc (or equivalent) certificate or passport, are missing. A template for the declaration letter is attached for your convenience."
  </p>

  <a
    href="/Dec Template.docx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 bg-brand-light-green border border-brand-light-green text-foreground rounded-lg text-sm hover:bg-opacity-80 smooth-transition"
  >
    Download Template
  </a>
</div>



                
                  <div>
                  <h3 className="font-secondary font-semibold text-brand-blue mb-2">Motivation Letter</h3>
                  <p className="text-sm text-muted-foreground">
                  The Motivation section is one of the most important parts of your application.
Universities will form their first impression of you based on this document, so it is essential to pay close attention to every detail when preparing it.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Motivation Letter Section */}
            <motion.div className="space-y-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              
              
              <Link to="/documents/motivation-letter">
                <motion.div whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.3
              }}>
                  <Card className="cursor-pointer hover:shadow-lg smooth-transition">
                    <CardContent className="p-0">
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <img src="/LOM.jpg" alt="Motivation Letter" className="w-full h-full object-cover" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </main>

      {/* Documents Details Modal */}
      <AnimatePresence>
        {showDocumentsModal && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowDocumentsModal(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-orange">Documents</h3>
                <button onClick={() => setShowDocumentsModal(false)} className="p-1 hover:bg-muted rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96 space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Before applying at any portal, please prepare all the given documents before applying. The general requirements are listed, please also check the University specific website also, like ILETS, CV requirements.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Motivation Letter</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter. It is first thing you are judged by so make it very carefully. The detailed guide motivation letter is available in documents page.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Certificates</h4>
                    <p className="text-sm text-muted-foreground">
                      You need to attach the high schools certificates, also called 'Sanad' of both FSc/Matric (equivalent). If you are waiting for FSc final year result, you need to upload Matric certificate with the deceleration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Transcripts</h4>
                    <p className="text-sm text-muted-foreground">
                      You need to attach the high schools transcripts, also called 'DMC' of both FSc/Matric (equivalent).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Passport</h4>
                    <p className="text-sm text-muted-foreground">
                      You must need to attach your passport. In case if you have no passport (or under process) you will need to attach you ID card with the deceleration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">English Proficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      You need to provide the proof of English proficiency In most cases the English Proficiency certificate from high school is enough but it may vary be conscious. Must check the related website either required professional certificate or not for any specific university or its specific program.
                    </p>
                  </div> 
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      {/* Tools Modal */}
      <AnimatePresence>
        {showToolsModal && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowToolsModal(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-blue">Tools</h3>
                <button onClick={() => setShowToolsModal(false)} className="p-1 hover:bg-muted rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {tools.map((tool, index) => <div key={index} className="flex justify-between items-center py-2">
                      <span className="font-primary text-brand-orange text-sm">{tool.name}</span>
                      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-brand-blue smooth-transition">
                        Link
                      </a>
                    </div>)}
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Detailed Structure of each USAT type is given with each Individual guide of each USAT.
                </p>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      {/* CV Modal */}
      <AnimatePresence>
        {showCVModal && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setShowCVModal(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          type: "spring",
          damping: 20
        }} className="bg-background rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-secondary font-bold text-lg text-brand-orange">CV</h3>
                <button onClick={() => setShowCVModal(false)} className="p-1 hover:bg-muted rounded-full smooth-transition">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96 space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Before applying at any portal, please prepare all the given documents before applying. The CV usually contain:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Motivation Letter</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Personal Details</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-secondary font-semibold text-brand-blue mb-2">Details</h4>
                    <p className="text-sm text-muted-foreground">
                      The first and most thing you need to make is the your motivation letter.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default Documents;