import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, CheckCircle, Clock } from 'lucide-react';
import Header from '../components/Header';
import HuBotFloat from '../components/HuBotFloat';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "December 1-15",
      title: "Application Period Opens",
      description: "Submit your SHS application through the official portal",
      status: "upcoming",
      color: "bg-brand-orange"
    },
    {
      date: "January 15",
      title: "Application Deadline",
      description: "Final deadline for submitting all required documents",
      status: "upcoming",
      color: "bg-red-500"
    },
    {
      date: "February - March",
      title: "Review Period",
      description: "Applications are reviewed by the selection committee",
      status: "upcoming",
      color: "bg-brand-blue"
    },
    {
      date: "April",
      title: "Results Announcement",
      description: "Scholarship recipients are notified of acceptance",
      status: "upcoming",
      color: "bg-green-500"
    },
    {
      date: "September",
      title: "Academic Year Begins",
      description: "Start your studies in Hungary",
      status: "upcoming",
      color: "bg-brand-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HuBotFloat />
      
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
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-secondary text-4xl font-bold text-brand-orange"
              >
                SHS Application Timeline
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
              >
                Stay on track with important dates and milestones for your Stipendium Hungaricum application.
              </motion.p>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {/* Timeline events */}
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline dot */}
                      <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center z-10`}>
                        {event.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <Clock className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      {/* Event content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-card border rounded-lg p-6 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-brand-orange" />
                            <span className="text-brand-orange font-medium text-sm">{event.date}</span>
                          </div>
                          <h3 className="font-secondary text-xl font-semibold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-brand-light-green dark:bg-gray-800 rounded-lg p-6 text-center">
                <h3 className="font-secondary text-lg font-semibold text-brand-blue mb-2">
                  Important Note
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dates may vary slightly each year. Always check the official Stipendium Hungaricum website for the most current information and deadlines.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
