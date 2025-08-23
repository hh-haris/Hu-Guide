import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineSeparator,
  TimelineIndicator,
  TimelineDate,
  TimelineTitle,
  TimelineContent,
} from '@/components/ui/timeline';

const TimelinePage = () => {
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
            <span className="text-brand-orange font-medium">Timeline</span>
          </div>
        </div>
      </div>

      <main className="pb-16">
        <div className="mobile-container pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h1 className="font-secondary text-3xl font-bold text-brand-orange">Application Timeline</h1>
              <p className="text-muted-foreground font-primary">Follow these steps for your SHS journey.</p>
            </div>

            <Timeline defaultValue={3} className="relative">
              <TimelineItem step={1}>
                <TimelineHeader>
                  <TimelineIndicator />
                  <div>
                    <TimelineTitle>USAT Registration</TimelineTitle>
                    <TimelineDate>August</TimelineDate>
                  </div>
                </TimelineHeader>
                <TimelineSeparator />
                <TimelineContent>
                  Register and prepare for the USAT according to your selected stream.
                </TimelineContent>
              </TimelineItem>

              <TimelineItem step={2}>
                <TimelineHeader>
                  <TimelineIndicator />
                  <div>
                    <TimelineTitle>USAT Exam</TimelineTitle>
                    <TimelineDate>September</TimelineDate>
                  </div>
                </TimelineHeader>
                <TimelineSeparator />
                <TimelineContent>
                  Sit the exam and ensure your documents are ready for the next steps.
                </TimelineContent>
              </TimelineItem>

              <TimelineItem step={3}>
                <TimelineHeader>
                  <TimelineIndicator />
                  <div>
                    <TimelineTitle>Application Preparation</TimelineTitle>
                    <TimelineDate>October</TimelineDate>
                  </div>
                </TimelineHeader>
                <TimelineSeparator />
                <TimelineContent>
                  Prepare documents, motivation letter, and shortlist universities.
                </TimelineContent>
              </TimelineItem>

              <TimelineItem step={4}>
                <TimelineHeader>
                  <TimelineIndicator />
                  <div>
                    <TimelineTitle>Submit Application</TimelineTitle>
                    <TimelineDate>November</TimelineDate>
                  </div>
                </TimelineHeader>
                <TimelineSeparator />
                <TimelineContent>
                  Complete and submit your SHS application before the deadline.
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;
