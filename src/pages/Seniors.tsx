
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbList, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';

const Seniors = () => {
  const seniors = [
    {
      name: 'Abdul Muneeb',
      subject: 'Health Science',
      batch: '2025-26',
      university: 'Semmelweis University',
      city: 'Budapest',
      usatMarks: '86',

      bio: 'Muneeb is the admin of the SHS USAT Preparation Group and has been guiding students for the past two years. He is an SHS awardee at Semmelweis University in the Health Science program. He remains active in the group and is always ready to assist students and new applicants. If you have any questions, feel free to ask him in the group.',
    },
    {
      name: 'Haseeb',
      subject: 'Biotechnology',
      batch: '2025-26',
      university: 'University of Debrecen',
      city: 'Debrecen',
      usatMarks: 'N/A',
      fscMarks: 'N/A',
      bio: 'Haseeb is the admin of the SHS USAT Preparation Group and an SHS awardee at the University of Debrecen. For any questions, simply tag him in the group and ask.',
    },
    {
      name: 'Huzaifa',
      subject: 'Computer Science',
      batch: '2023-24',
      university: 'University of Debrecen',
      city: 'Debrecen',
      usatMarks: 'N/A',
      fscMarks: 'N/A',
      bio: 'N/A',
    },
    
    {
      name: 'Abdul Hanan',
      subject: 'Medicine',
      batch: '2025-26',
      university: 'Semmelweis University',
      city: 'Budapest',
      usatMarks: 'N/A',
      fscMarks: '94%',
      bio: 'N/A',
    },
    {
      name: 'Abdul Wahab',
      subject: 'Computer Science',
      batch: '2025-26',
      university: 'University of Pécs',
      city: 'Pécs',
      usatMarks: 'N/A',
      fscMarks: '87%',
      bio: 'N/A',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14">
        <div className="mobile-container py-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Seniors</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-secondary text-3xl font-bold text-brand-orange mb-8"
          >
            Seniors
          </motion.h1>

          {/* Seniors List */}
          <div className="space-y-6">
            {seniors.map((senior, index) => (
              <motion.div
                key={senior.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`/icon.jpg`} 
                      alt={senior.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-secondary text-xl font-bold text-brand-blue mb-1">
                    {senior.name}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-1">{senior.subject}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-brand-light-green text-xs px-2 py-1 rounded">
                      {senior.university}
                    </span>
                    <span className="bg-brand-light-green text-xs px-2 py-1 rounded">
                       {senior.city}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <span className="bg-brand-orange text-white text-xs px-2 py-1 rounded">
                      USAT Marks: {senior.usatMarks}
                    </span>
                    
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {senior.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Seniors;
