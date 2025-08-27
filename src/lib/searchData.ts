import { FileText, MapPin, GraduationCap, Calendar, Book, Users, Building, Globe, DollarSign, Plane } from 'lucide-react';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  path: string;
  icon: React.ReactNode;
  keywords: string[];
  content?: string; // Full content for deep search
}

// University data for search
export const universityData = [
  {
    id: 'university-debrecen',
    title: 'University of Debrecen',
    description: 'Hungary\'s second-largest university offering comprehensive programs',
    category: 'Universities',
    path: '/cities/debrecen',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['university of debrecen', 'debrecen', 'medical', 'engineering', 'agriculture', 'humanities'],
    content: 'medicine, engineering, agriculture, humanities, research facilities, international recognition'
  },
  {
    id: 'university-szeged',
    title: 'University of Szeged',
    description: 'Prestigious research university with excellent programs',
    category: 'Universities',
    path: '/cities/szeged',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['university of szeged', 'szeged', 'medicine', 'sciences', 'humanities', 'law'],
    content: 'medicine, sciences, humanities, law, research excellence, academic standards, campus facilities'
  },
  {
    id: 'university-pecs',
    title: 'University of Pécs',
    description: 'Historic university with diverse academic programs',
    category: 'Universities',
    path: '/cities/pecs',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['university of pecs', 'pécs', 'medical', 'humanities', 'sciences'],
    content: 'medical school, humanities, sciences, cultural heritage, international programs'
  },
  {
    id: 'corvinus-university',
    title: 'Corvinus University Budapest',
    description: 'Leading business and economics university',
    category: 'Universities',
    path: '/cities/budapest',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['corvinus', 'corvinus university', 'budapest', 'business', 'economics', 'management'],
    content: 'business administration, economics, management, international relations, finance'
  },
  {
    id: 'bme',
    title: 'Budapest University of Technology and Economics',
    description: 'Premier technical university in Central Europe',
    category: 'Universities',
    path: '/cities/budapest',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['bme', 'budapest university of technology', 'technical university', 'engineering', 'technology'],
    content: 'engineering, technology, computer science, architecture, natural sciences'
  },
  {
    id: 'elte',
    title: 'Eötvös Loránd University',
    description: 'Hungary\'s oldest and largest university',
    category: 'Universities',
    path: '/cities/budapest',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['elte', 'eötvös loránd university', 'budapest', 'humanities', 'sciences', 'social sciences'],
    content: 'humanities, natural sciences, social sciences, education, law, psychology'
  }
];

// Core search data that covers all website content
export const coreSearchData: SearchResult[] = [
  // Main Pages
  {
    id: 'overview',
    title: 'Overview',
    description: 'Complete guide to Stipendium Hungaricum scholarship',
    category: 'Pages',
    path: '/overview',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['overview', 'scholarship', 'stipendium', 'hungaricum', 'guide', 'introduction'],
    content: 'stipendium hungaricum scholarship program overview guide eligibility requirements application process'
  },
  
  // Timeline & Schedule
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Complete timeline for scholarship application',
    category: 'Pages',
    path: '/timeline',
    icon: <Calendar className="h-4 w-4" />,
    keywords: ['timeline', 'schedule', 'dates', 'deadline', 'calendar', 'when', 'time'],
    content: 'application timeline schedule important dates deadlines submission periods'
  },
  {
    id: 'usat-schedule',
    title: 'USAT Schedule',
    description: 'University Selection Assessment Test schedule and timing',
    category: 'Timeline',
    path: '/timeline',
    icon: <Calendar className="h-4 w-4" />,
    keywords: ['usat schedule', 'test schedule', 'exam dates', 'assessment', 'university selection', 'timing'],
    content: 'university selection assessment test schedule exam dates timing preparation period'
  },

  // USAT Content
  {
    id: 'usat',
    title: 'USAT',
    description: 'University Selection Assessment Test information',
    category: 'Pages',
    path: '/usat',
    icon: <Book className="h-4 w-4" />,
    keywords: ['usat', 'university selection', 'assessment test', 'exam', 'test'],
    content: 'university selection assessment test usat examination evaluation academic assessment'
  },
  {
    id: 'preparation-tips',
    title: 'Preparation Tips',
    description: 'Expert tips and strategies for USAT preparation',
    category: 'USAT',
    path: '/usat',
    icon: <Book className="h-4 w-4" />,
    keywords: ['preparation tips', 'study tips', 'exam preparation', 'how to prepare', 'strategy', 'study guide'],
    content: 'preparation tips study strategies exam techniques practice methods academic preparation'
  },

  // USAT Streams
  {
    id: 'usat-engineering',
    title: 'USAT Engineering',
    description: 'Engineering stream USAT information and syllabus',
    category: 'USAT Streams',
    path: '/usat/engineering',
    icon: <Book className="h-4 w-4" />,
    keywords: ['engineering', 'usat engineering', 'technical', 'engineering stream', 'mathematics', 'physics'],
    content: 'engineering stream technical subjects mathematics physics chemistry mechanical civil electrical'
  },
  {
    id: 'usat-medical',
    title: 'USAT Medical',
    description: 'Medical stream USAT information and syllabus',
    category: 'USAT Streams',
    path: '/usat/medical',
    icon: <Book className="h-4 w-4" />,
    keywords: ['medical', 'usat medical', 'medicine', 'medical stream', 'healthcare', 'biology', 'chemistry'],
    content: 'medical stream medicine healthcare biology chemistry physics anatomy physiology'
  },
  {
    id: 'usat-computer-science',
    title: 'USAT Computer Science',
    description: 'Computer Science stream USAT information',
    category: 'USAT Streams',
    path: '/usat/computer-science',
    icon: <Book className="h-4 w-4" />,
    keywords: ['computer science', 'usat computer science', 'cs', 'programming', 'technology', 'software'],
    content: 'computer science programming software development mathematics logic algorithms data structures'
  },
  {
    id: 'usat-commerce',
    title: 'USAT Commerce',
    description: 'Commerce stream USAT information',
    category: 'USAT Streams',
    path: '/usat/commerce',
    icon: <Book className="h-4 w-4" />,
    keywords: ['commerce', 'usat commerce', 'business', 'economics', 'finance', 'accounting'],
    content: 'commerce business studies economics finance accounting statistics mathematics'
  },
  {
    id: 'usat-arts',
    title: 'USAT Arts',
    description: 'Arts stream USAT information',
    category: 'USAT Streams',
    path: '/usat/arts',
    icon: <Book className="h-4 w-4" />,
    keywords: ['arts', 'usat arts', 'humanities', 'liberal arts', 'arts stream', 'literature'],
    content: 'arts humanities liberal arts literature history philosophy social sciences'
  },
  {
    id: 'usat-general-science',
    title: 'USAT General Science',
    description: 'General Science stream USAT information',
    category: 'USAT Streams',
    path: '/usat/general-science',
    icon: <Book className="h-4 w-4" />,
    keywords: ['general science', 'usat general science', 'science', 'general', 'basic science'],
    content: 'general science basic sciences physics chemistry biology mathematics environmental science'
  },

  // University & Cities
  {
    id: 'university-finder',
    title: 'University Finder',
    description: 'Find and choose the right university for your studies',
    category: 'Pages',
    path: '/university-search',
    icon: <GraduationCap className="h-4 w-4" />,
    keywords: ['university finder', 'choose university', 'university search', 'find university', 'university selection'],
    content: 'university selection criteria choosing right university academic programs research facilities'
  },
  {
    id: 'cities',
    title: 'Cities',
    description: 'Hungarian cities with universities and student life',
    category: 'Pages',
    path: '/cities',
    icon: <MapPin className="h-4 w-4" />,
    keywords: ['cities', 'hungarian cities', 'locations', 'where to study', 'places', 'student life'],
    content: 'hungarian cities university locations student life accommodation cultural activities'
  },
  {
    id: 'budapest',
    title: 'Budapest',
    description: 'Capital city with top universities and vibrant student life',
    category: 'Cities',
    path: '/cities/budapest',
    icon: <MapPin className="h-4 w-4" />,
    keywords: ['budapest', 'capital', 'pest', 'buda', 'main city', 'metropolitan'],
    content: 'budapest capital city universities student life cultural activities danube pest buda'
  },
  {
    id: 'debrecen',
    title: 'Debrecen',
    description: 'Second largest city with University of Debrecen',
    category: 'Cities',
    path: '/cities/debrecen',
    icon: <MapPin className="h-4 w-4" />,
    keywords: ['debrecen', 'university of debrecen', 'second largest', 'medical university'],
    content: 'debrecen second largest city university medical programs student accommodation'
  },
  {
    id: 'szeged',
    title: 'Szeged',
    description: 'University town with University of Szeged',
    category: 'Cities',
    path: '/cities/szeged',
    icon: <MapPin className="h-4 w-4" />,
    keywords: ['szeged', 'university of szeged', 'research university', 'tisza'],
    content: 'szeged university town research facilities academic excellence tisza river'
  },
  {
    id: 'pecs',
    title: 'Pécs',
    description: 'Cultural city with University of Pécs',
    category: 'Cities',
    path: '/cities/pecs',
    icon: <MapPin className="h-4 w-4" />,
    keywords: ['pecs', 'pécs', 'university of pecs', 'cultural', 'mecsek'],
    content: 'pécs cultural heritage university programs mecsek mountains student activities'
  },

  // Documents
  {
    id: 'documents',
    title: 'Documents',
    description: 'Required documents for scholarship application',
    category: 'Pages',
    path: '/documents',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['documents', 'required documents', 'papers', 'certificates', 'requirements'],
    content: 'required documents application papers certificates academic transcripts recommendations'
  },
  {
    id: 'motivation-letter',
    title: 'Motivation Letter',
    description: 'Guide to writing an effective motivation letter',
    category: 'Documents',
    path: '/documents/motivation-letter',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['motivation letter', 'statement of purpose', 'personal statement', 'letter', 'application essay'],
    content: 'motivation letter writing guide personal statement application essay structure tips'
  },

  // Financial Information
  {
    id: 'tuition-fee',
    title: 'Tuition Fee',
    description: 'Information about tuition fees and coverage',
    category: 'Financial',
    path: '/overview',
    icon: <DollarSign className="h-4 w-4" />,
    keywords: ['tuition fee', 'fees', 'cost', 'expenses', 'money', 'payment', 'covered'],
    content: 'tuition fee coverage financial benefits scholarship expenses educational costs'
  },
  {
    id: 'stipend',
    title: 'Stipend',
    description: 'Monthly stipend amount and financial support details',
    category: 'Financial',
    path: '/overview',
    icon: <DollarSign className="h-4 w-4" />,
    keywords: ['stipend', 'monthly allowance', 'amount', 'money', 'financial support', 'living allowance'],
    content: 'monthly stipend living allowance financial support amount monthly payment'
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    description: 'Housing and accommodation support information',
    category: 'Living',
    path: '/overview',
    icon: <Building className="h-4 w-4" />,
    keywords: ['accommodation', 'housing', 'dormitory', 'residence', 'place to stay', 'hostel', 'student housing'],
    content: 'accommodation housing student dormitory residence halls living arrangements'
  },
  {
    id: 'medical-insurance',
    title: 'Medical Insurance',
    description: 'Health insurance coverage and medical benefits',
    category: 'Living',
    path: '/overview',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['medical insurance', 'health insurance', 'healthcare', 'medical coverage', 'insurance'],
    content: 'medical insurance health coverage healthcare benefits medical services'
  },
  {
    id: 'travel-ticket',
    title: 'Travel Ticket',
    description: 'Flight ticket and travel support information',
    category: 'Travel',
    path: '/overview',
    icon: <Plane className="h-4 w-4" />,
    keywords: ['ticket', 'flight ticket', 'travel', 'airfare', 'transportation', 'travel support'],
    content: 'travel ticket flight support transportation airfare travel arrangements'
  },

  // Support & Community
  {
    id: 'seniors',
    title: 'Seniors',
    description: 'Connect with senior students and get guidance',
    category: 'Pages',
    path: '/seniors',
    icon: <Users className="h-4 w-4" />,
    keywords: ['seniors', 'senior students', 'alumni', 'mentors', 'guidance', 'help', 'connect'],
    content: 'senior students alumni mentorship guidance support network student community'
  },

  // Important Terms & Organizations
  {
    id: 'etc',
    title: 'ETC',
    description: 'Education and Training Commission information',
    category: 'Organizations',
    path: '/overview',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['etc', 'education training commission', 'commission', 'education commission'],
    content: 'education training commission etc organization educational authority'
  },
  {
    id: 'tempus',
    title: 'Tempus',
    description: 'Tempus Public Foundation managing the scholarship',
    category: 'Organizations',
    path: '/overview',
    icon: <Globe className="h-4 w-4" />,
    keywords: ['tempus', 'tempus foundation', 'public foundation', 'scholarship management'],
    content: 'tempus public foundation scholarship management hungarian government organization'
  },
  {
    id: 'hec-portal',
    title: 'HEC Portal',
    description: 'Higher Education Commission portal for applications',
    category: 'Organizations',
    path: '/overview',
    icon: <Globe className="h-4 w-4" />,
    keywords: ['hec portal', 'higher education commission', 'hec', 'portal', 'application portal'],
    content: 'higher education commission hec portal application submission pakistani students'
  },
  {
    id: 'visa',
    title: 'Visa',
    description: 'Student visa information and requirements',
    category: 'Travel',
    path: '/documents',
    icon: <FileText className="h-4 w-4" />,
    keywords: ['visa', 'student visa', 'visa requirements', 'immigration', 'entry', 'visa process'],
    content: 'student visa requirements immigration process entry permit hungarian visa'
  }
];

// Function to get all search data including universities
export function getAllSearchData(): SearchResult[] {
  return [...coreSearchData, ...universityData];
}

// Function to search through data
export function searchData(query: string, data: SearchResult[] = getAllSearchData()): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return data.filter(item => {
    const searchableText = [
      item.title,
      item.description,
      item.category,
      ...item.keywords,
      item.content || ''
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aExactTitle = a.title.toLowerCase().includes(query.toLowerCase());
    const bExactTitle = b.title.toLowerCase().includes(query.toLowerCase());
    
    if (aExactTitle && !bExactTitle) return -1;
    if (!aExactTitle && bExactTitle) return 1;
    
    // Then prioritize keyword matches
    const aKeywordMatch = a.keywords.some(keyword => 
      keyword.toLowerCase().includes(query.toLowerCase())
    );
    const bKeywordMatch = b.keywords.some(keyword => 
      keyword.toLowerCase().includes(query.toLowerCase())
    );
    
    if (aKeywordMatch && !bKeywordMatch) return -1;
    if (!aKeywordMatch && bKeywordMatch) return 1;
    
    return 0;
  });
}