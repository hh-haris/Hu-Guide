
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronUp, X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const USAT = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const scheduleData = [
   
    {
      session: "Test 03",
      registration: "September 09, 2025",
      rollNoSlip: "September 19, 2025",
      testDate: "September 28, 2025",
      resultDate: "October 20, 2025"
    },
    {
      session: "Test 04",
      registration: "November 10, 2025",
      rollNoSlip: "November 29, 2025",
      testDate: "December 07, 2025",
      resultDate: "December 29, 2025"
    }
  ];

  const usatCategories = [
    {
      title: "USAT Engineering",
      image: "04.jpg",
      link: "/usat/engineering"
    },
    {
      title: "USAT Medical",
      image: "05.jpg",
      link: "/usat/medical"
    },
    {
      title: "USAT Computer Science",
      image: "03.jpg",
      link: "/usat/computer-science"
    },
    {
      title: "USAT Commerce",
      image: "08.jpg",
      link: "/usat/commerce"
    },
    {
      title: "USAT Arts",
      image: "06.jpg",
      link: "/usat/arts"
    },
    {
      title: "USAT General Science",
      image: "07.jpg",
      link: "/usat/general-science"
    }
  ];

  const faqs = [
    {
      question: 'Which payment option should I choose: 1BILL or 1LINK?',
      answer: ' 1LINK.'
    },
    {
      question: 'I submitted the fee, but my status still is not showing as verified. What should I do?',
      answer: 'Check if you have done the payment verification. If yes and it’s still showing not verified then wait for some time. If it still doesn’t update, generate a ticket on the HEC helpline and see what they say.'
    },
    {
      question: 'What USAT category I choose?',
      answer: 'Choose the same category related to the subject in which you have done your FSc or equivalent.'
    },
    {
      question: 'What if I am some months away from turning 18 and have no ID card?',
      answer: 'You can bring your original FSc or equivalent DMC, birth certificate, and roll number slip. You will be allowed to enter the exam.'
    },
        {
      question: 'I have accidentally selected the wrong test center, now what I do?',
      answer: 'Create a new account using a different passport number or go to the selected center and request them to change it if possible. See if it works.'
    },
     {
      question: 'I have accidentally selected the wrong category, now what to do?',
      answer: 'Create a new account on Passport or go to the center and ask your invigilator and see if they can assist you in this matter. Otherwise, attempt whatever category you chose just for experience.'
    },
    {
      question: 'How many time USAT is valid?',
      answer: 'For one year.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-mute d-foreground" />
            <span className="text-brand-orange font-medium">USAT</span>
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
                USAT GUIDE
              </h1>
              <p className="font-primary text-muted-foreground text-sm">
                The Undergraduate Studies Admission/Aptitude Test (USAT) is the first and most important step in the SHS process. It is the key criterion on which HEC nominates candidates, making it the most critical phase of the entire selection journey.
              </p>
              
             
            </div>

            {/* Overview Section */}
            <div className="space-y-2">
              
              <Card className="cursor-pointer hover:shadow-lg smooth-transition" onClick={() => setShowModal(true)}>
                <CardContent className="p-0">
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <img 
                      src="U 1.jpg" 
                      alt="USAT Overview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>


{/* USAT Schedule */}
<div className="space-y-4">
  <h2 className="font-secondary font-semibold text-xl text-brand-blue">
    USAT Schedule
  </h2>
  <p className="font-primary text-muted-foreground text-sm">
   Here is the schedule for the remaining two USAT tests of this year. These dates are based on the official HEC schedule but they may change at any time. Please make sure to double check the relevant websites and official sources for the latest updates. We share this information with good intentions but we cannot take responsibility for any changes or inaccuracies in this schedule.
  </p>

  <div className="overflow-x-auto rounded-lg">
    <Table className="min-w-full text-sm">
      <TableHeader>
        <TableRow className="bg-brand-light-green">
          <TableHead className="font-secondary font-semibold text-foreground px-3 py-2 whitespace-nowrap">
            Session
          </TableHead>
          <TableHead className="font-secondary font-semibold text-foreground px-3 py-2 whitespace-nowrap">
            Registration
          </TableHead>
          <TableHead className="font-secondary font-semibold text-foreground px-3 py-2 whitespace-nowrap">
            Roll No. Slip
          </TableHead>
          <TableHead className="font-secondary font-semibold text-foreground px-3 py-2 whitespace-nowrap">
            Test Date
          </TableHead>
          <TableHead className="font-secondary font-semibold text-foreground px-3 py-2 whitespace-nowrap">
            Result Date
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {scheduleData.map((row, index) => (
          <TableRow
            key={index}
            className="hover:bg-brand-light-gray/50 transition-colors duration-200"
          >
            <TableCell className="px-3 py-3 font-medium text-foreground whitespace-nowrap">
              {row.session}
            </TableCell>
            <TableCell className="px-3 py-3 text-muted-foreground whitespace-nowrap">
              {row.registration}
            </TableCell>
            <TableCell className="px-3 py-3 text-muted-foreground whitespace-nowrap">
              {row.rollNoSlip}
            </TableCell>
            <TableCell className="px-3 py-3 text-muted-foreground whitespace-nowrap">
              {row.testDate}
            </TableCell>
            <TableCell className="px-3 py-3 text-muted-foreground whitespace-nowrap">
              {row.resultDate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>




            


            {/* USAT Categories */}
            <div className="space-y-4">
              <h2 className="font-secondary font-semibold text-xl text-brand-blue">
                USAT Categories
              </h2>
              <p className="font-primary text-muted-foreground text-sm">
             Guides for each USAT category are provided, detailing everything you need for preparation. It is advised to select the USAT category that aligns with the subject in which you completed your FSc, FA, or equivalent qualification.
              </p>
              
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {usatCategories.map((category, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Link to={category.link}>
                          <Card className="hover:shadow-lg smooth-transition">
                            <CardContent className="p-0">
                              <div className="relative w-full h-32 rounded-lg overflow-hidden">
                                <img 
                                  src={category.image} 
                                  alt={category.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

          </motion.div>
        </div>
      </main>

    {/* Modal for Overview Details */}
<AnimatePresence>
  {showModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading */}
        <div className="p-4 border-b border-brand-gray flex justify-between items-center">
          <h3 className="font-secondary font-bold text-lg text-brand-orange">
            Details
          </h3>
          <button
            onClick={() => setShowModal(false)}
            className="p-1 hover:bg-brand-light-gray rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 overflow-y-auto max-h-96">
          <div className="space-y-4">
         

            {/* Marks Table */}
            <div className="space-y-2">
              <h4 className="font-secondary font-semibold text-brand-blue">
                Test Structure
              </h4>
              <div className="overflow-x-auto">
                <Table className="w-full text-sm border-collapse">
                  <TableHeader>
                    <TableRow className="bg-brand-light-green">
                      <TableHead className="text-left px-3 py-2 font-secondary font-semibold text-foreground rounded-tl-lg">
                        Component
                      </TableHead>
                      <TableHead className="text-left px-3 py-2 font-secondary font-semibold text-foreground rounded-tr-lg">
                        Marks
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                   
                    <TableRow>
                      <TableCell className="font-medium px-3 py-2">MCQs</TableCell>
                      <TableCell className="px-3 py-2">75</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium px-3 py-2">Argumentative Essay</TableCell>
                      <TableCell className="px-3 py-2">15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium px-3 py-2">Narrative Essay</TableCell>
                      <TableCell className="px-3 py-2">10</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

           {/* Safe Marks & Duration */}
<div className="grid grid-cols-2 gap-4 mt-6">
  <div className="pl-4">
    <h4 className="font-secondary font-semibold text-brand-blue text-sm leading-tight">
      Safe Marks
    </h4>
    <p className="text-base font-bold text-brand-orange">75+</p>
  </div>
  <div>
    <h4 className="font-secondary font-semibold text-brand-blue text-sm leading-tight">
      Duration
    </h4>
    <p className="text-base font-bold text-brand-orange">100 + 40 Min</p>
  </div>
</div>


            {/* Notes */}
            <div className="space-y-2 mt-6">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                 This section provides general information about the USAT including its duration and format. A detailed structure for each USAT category is available on its respective page.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                  You are given a sheet for essay writing that contains three pages (One sheet, front and back counts as two pages). You will write one argumentative essay on the first two pages and one narrative essay on the third page, each selected from a choice of three topics. Both essays can be written in either Urdu or English and your choice of language does not affect your marks.


                </p>

              
              </div>

<div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">
                 The passing score is 50 but a score of 75 or more is usually considered safe for getting nominated for SHS.


                </p>

              
              </div>
              
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

export default USAT;
