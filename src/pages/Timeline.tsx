import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from '../components/ui/timeline';
const TimelinePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-09-01T09:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        };
      }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const timelineItems = [{
    id: 1,
    date: "January - November",
    title: "USAT",
    description: "The Undergraduate Studies Admission/Aptitude Test is the first and most crucial step in the SHS journey. It is conducted four times a year and based on USAT scores, HEC nominates candidates for SHS. For a detailed guide, visit the USAT page."
  }, {
    id: 2,
    date: "November - January",
    title: "Apply",
    description: <>
        To apply for SHS, applicants are required to submit their applications at two separate portals. These are the {" "}
        <a href="https://apply.stipendiumhungaricum.hu" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-medium hover:underline">
          Tempus Public Foundation portal
        </a>{" "}
        on the Hungarian side and the  {" "}
        <a href="http://scholarship.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-medium hover:underline">
         HEC portal {" "}
        </a>
         on the Pakistan side. The application period typically opens in mid November and closes on 15 January. For complete details, visit the Apply page.
      </>
  }, {
    id: 3,
    date: "February - March",
    title: "Nomination",
    description: "HEC nominates students primarily on the basis of USAT marks and the federal quota system, usually by the end of February or the beginning of March."
  }, {
    id: 4,
    date: "April",
    title: "Medical Certificate",
    description: "After nomination, a required medical certificate must be submitted before 15 April. The template is available on the official website."
  }, {
    id: 5,
    date: "March - May",
    title: "Entrance Exam/Interview",
    description: "This period marks the second stage of selection, during which the preferred universities may contact candidates for an entrance exam, an interview, or both, depending on the university. It typically spans from mid March to the end of May."
  }, {
    id: 7,
    date: "June",
    title: "Acceptance",
    description: "After the entrance exam and interview, you will receive an acceptance from the universities based on your performance. However, this is not the final decision on whether the scholarship is awarded. You will need to wait for the official award confirmation from the Tempus Foundation."
  }, {
    id: 8,
    date: "June - July",
    title: "Final Selection",
    description: "From June to mid July, the Tempus Foundation announces the final decision on whether a candidate has been awarded the scholarship or not."
  }, {
    id: 9,
    date: "July - August",
    title: "Visa",
    description: "The final step is to begin the visa process and complete other necessary formalities. Prepare all required documents and schedule an appointment at the embassy to obtain a Hungarian visa. This process usually takes place from July to the end of August."
  }, {
    id: 10,
    date: "September",
    title: "Arrival in Hungary",
    description: "After visa approval, candidates arrive in Hungary in September. The above countdown isn’t just a timer it’s your victory clock ticking down to your very first class in Hungary, usually on 1 September at 9:00 AM. Congratulations, you’ve made it! 🎉"
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-14 bg-brand-light-gray">
        <div className="mobile-container py-3">
          <div className="flex items-center text-sm font-primary">
            <Link to="/" className="text-muted-foreground hover:text-brand-orange smooth-transition">
              Home
            </Link>
            <ChevronRight className="mx-2 h-3 w-3 text-muted-foreground" />
            <span className="text-brand-orange font-medium">Timeline</span>
          </div>
        </div>
      </div>

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
        }} className="space-y-3.5">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="font-secondary font-bold text-2xl text-brand-orange">
                Application Timeline
              </h1>
            </div>

            {/* Countdown - Removed box styling */}
            <div className="text-center space-y-2">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                   Countdown to 1 September 2026, 9:00 AM
                </p>
              </div>
              
              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-muted-foreground">hours</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-muted-foreground">min</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-brand-orange">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs text-muted-foreground">sec</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <Timeline defaultValue={3} className="py-0 my-[29px]">
                {timelineItems.map(item => <TimelineItem key={item.id} step={item.id} className="my-[5px] py-[7px]">
                    <TimelineHeader>
                      <TimelineSeparator />
                      <TimelineIndicator />
                      <div className="flex-1">
                        <TimelineTitle>{item.title}</TimelineTitle>
                        <TimelineDate>{item.date}</TimelineDate>
                      </div>
                    </TimelineHeader>
                    <TimelineContent>{item.description}</TimelineContent>
                  </TimelineItem>)}
              </Timeline>
            </div>
          </motion.div>
        </div>
      </main>
    </div>;
};
export default TimelinePage;