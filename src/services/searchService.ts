// Search Service for Auto-updating Search Data
export interface SearchItem {
  type: string;
  name: string;
  path: string;
  description: string;
  keywords?: string[];
  priority?: number;
}

class SearchService {
  private searchData: SearchItem[] = [];
  private subscribers: ((data: SearchItem[]) => void)[] = [];

  constructor() {
    this.initializeData();
  }

  // Initialize with base search data
  private initializeData() {
    this.searchData = [
      // Main Pages
      { type: 'page', name: 'Overview', path: '/overview', description: 'General overview of Stipendium Hungaricum scholarship program', priority: 10 },
      { type: 'page', name: 'Timeline', path: '/timeline', description: 'Application timeline and important deadlines', priority: 10 },
      { type: 'page', name: 'USAT', path: '/usat', description: 'University Selection and Aptitude Test information', priority: 10 },
      { type: 'page', name: 'University Finder', path: '/university-search', description: 'Search and find Hungarian universities', priority: 10 },
      { type: 'page', name: 'Documents', path: '/documents', description: 'Required documents for scholarship application', priority: 10 },
      { type: 'page', name: 'Cities', path: '/cities', description: 'Information about Hungarian cities and student life', priority: 10 },
      { type: 'page', name: 'Seniors', path: '/seniors', description: 'Connect with seniors and their experiences', priority: 10 },
      { type: 'page', name: 'Official', path: '/official', description: 'Official government links and resources', priority: 10 },
      { type: 'page', name: 'HuBot', path: '/hubot', description: 'AI assistant for Hungary scholarship queries', priority: 8 },
      { type: 'page', name: 'Pro Services', path: '/pro', description: 'Professional assistance and consulting services', priority: 8 },
      { type: 'page', name: 'Visa Information', path: '/visa', description: 'Student visa requirements and application process', priority: 9 },
      { type: 'page', name: 'Registration Guide', path: '/registration-guide', description: 'Complete university registration walkthrough', priority: 8 },
      { type: 'page', name: 'Universities', path: '/universities', description: 'Complete list of Hungarian universities', priority: 9 },
      { type: 'page', name: 'Before After', path: '/before-after', description: 'Student success stories and transformations', priority: 7 },
      
      // Overview Page Content
      { type: 'section', name: 'Insights', path: '/overview', description: 'Pros and cons of Stipendium Hungaricum scholarship', priority: 9 },
      { type: 'section', name: 'Details', path: '/overview', description: 'Detailed eligibility requirements and criteria', priority: 9 },
      { type: 'content', name: 'Tuition Fee', path: '/overview', description: 'Complete exemption from all tuition fees', keywords: ['fee', 'tuition', 'cost', 'free'], priority: 8 },
      { type: 'content', name: 'Stipend', path: '/overview', description: 'Monthly stipend of 43,700 HUF (around 36,000 PKR)', keywords: ['stipend', 'allowance', 'money', 'huf', 'pkr'], priority: 8 },
      { type: 'content', name: 'Accommodation', path: '/overview', description: 'Free dormitory or housing contribution of 40,000 HUF', keywords: ['accommodation', 'housing', 'dormitory', 'residence'], priority: 8 },
      { type: 'content', name: 'Medical Insurance', path: '/overview', description: 'Full medical insurance coverage provided', keywords: ['medical', 'insurance', 'health', 'coverage'], priority: 7 },
      { type: 'content', name: 'Ticket', path: '/overview', description: 'Travel expense reimbursement by HEC', keywords: ['ticket', 'travel', 'flight', 'reimbursement'], priority: 7 },
      { type: 'content', name: 'Amount', path: '/overview', description: 'Scholarship amounts and financial coverage', keywords: ['amount', 'money', 'financial', 'coverage'], priority: 7 },
      
      // USAT Content
      { type: 'subject', name: 'USAT Computer Science', path: '/usat/computer-science', description: 'Computer Science test preparation and syllabus', priority: 8 },
      { type: 'subject', name: 'USAT Medical', path: '/usat/medical', description: 'Medical entrance test preparation', priority: 8 },
      { type: 'subject', name: 'USAT Engineering', path: '/usat/engineering', description: 'Engineering aptitude test preparation', priority: 8 },
      { type: 'subject', name: 'USAT Arts', path: '/usat/arts', description: 'Arts and humanities test preparation', priority: 8 },
      { type: 'subject', name: 'USAT Commerce', path: '/usat/commerce', description: 'Business and commerce test preparation', priority: 8 },
      { type: 'subject', name: 'USAT General Science', path: '/usat/general-science', description: 'General science test preparation', priority: 8 },
      { type: 'content', name: 'USAT Schedule', path: '/usat', description: 'Test dates, timings and examination schedule', keywords: ['schedule', 'dates', 'timing', 'exam'], priority: 8 },
      { type: 'content', name: 'Preparation Tips', path: '/usat', description: 'Effective study strategies and preparation tips', keywords: ['preparation', 'tips', 'study', 'strategy'], priority: 7 },
      { type: 'content', name: 'Verbal Section', path: '/usat', description: 'English language and verbal reasoning section', keywords: ['verbal', 'english', 'language'], priority: 7 },
      { type: 'content', name: 'Quantitative Section', path: '/usat', description: 'Mathematics and quantitative aptitude section', keywords: ['quantitative', 'math', 'mathematics'], priority: 7 },
      { type: 'content', name: 'Test Format', path: '/usat', description: 'USAT examination pattern and structure', keywords: ['format', 'pattern', 'structure'], priority: 7 },
      { type: 'content', name: 'Marking Scheme', path: '/usat', description: 'Scoring system and grade calculation', keywords: ['marking', 'scoring', 'grades'], priority: 7 },
      
      // Timeline Content
      { type: 'content', name: 'Application Deadline', path: '/timeline', description: 'Important dates and submission deadlines', keywords: ['deadline', 'dates', 'submission'], priority: 9 },
      { type: 'content', name: 'ETC', path: '/timeline', description: 'Educational Testing Council Pakistan', keywords: ['etc', 'testing', 'council'], priority: 8 },
      { type: 'content', name: 'Tempus', path: '/timeline', description: 'Tempus Public Foundation Hungary', keywords: ['tempus', 'foundation'], priority: 8 },
      { type: 'content', name: 'HEC Portal', path: '/timeline', description: 'Higher Education Commission online portal', keywords: ['hec', 'portal', 'online'], priority: 8 },
      { type: 'content', name: 'Result Announcement', path: '/timeline', description: 'Scholarship result declaration dates', keywords: ['result', 'announcement', 'declaration'], priority: 8 },
      { type: 'content', name: 'Document Submission', path: '/timeline', description: 'Required document submission process', keywords: ['document', 'submission', 'upload'], priority: 7 },
      { type: 'content', name: 'Interview Process', path: '/timeline', description: 'Selection interview and evaluation', keywords: ['interview', 'selection', 'evaluation'], priority: 7 },
      
      // Document Content
      { type: 'document', name: 'Motivation Letter', path: '/documents/motivation-letter', description: 'Personal statement and motivation letter guide', keywords: ['motivation', 'letter', 'statement'], priority: 8 },
      { type: 'document', name: 'Transcript', path: '/documents', description: 'Academic transcripts and grade certificates', keywords: ['transcript', 'grades', 'academic'], priority: 7 },
      { type: 'document', name: 'Passport', path: '/documents', description: 'Valid passport requirements', keywords: ['passport', 'travel', 'document'], priority: 7 },
      { type: 'document', name: 'CNIC', path: '/documents', description: 'Computerized National Identity Card', keywords: ['cnic', 'identity', 'card'], priority: 7 },
      { type: 'document', name: 'Medical Certificate', path: '/documents', description: 'Health and medical fitness certificate', keywords: ['medical', 'certificate', 'health'], priority: 6 },
      { type: 'document', name: 'Language Certificate', path: '/documents', description: 'English proficiency certification', keywords: ['language', 'english', 'proficiency'], priority: 6 },
      { type: 'document', name: 'Recommendation Letter', path: '/documents', description: 'Academic or professional recommendations', keywords: ['recommendation', 'letter', 'reference'], priority: 6 },
      
      // Cities and Locations
      { type: 'city', name: 'Budapest', path: '/cities/budapest', description: 'Capital city with top universities and vibrant student life', priority: 9 },
      { type: 'city', name: 'Debrecen', path: '/cities/debrecen', description: 'Second largest city with excellent medical universities', priority: 8 },
      { type: 'city', name: 'Szeged', path: '/cities/szeged', description: 'University city with strong research programs', priority: 8 },
      { type: 'city', name: 'Pécs', path: '/cities/pecs', description: 'Historic city with diverse academic offerings', priority: 8 },
      { type: 'city', name: 'Győr', path: '/cities/gyor', description: 'Industrial hub with engineering programs', priority: 7 },
      { type: 'city', name: 'Miskolc', path: '/cities/miskolc', description: 'Technical university city in northern Hungary', priority: 7 },
      { type: 'content', name: 'Cost of Living', path: '/cities', description: 'Living expenses and budget planning in Hungarian cities', keywords: ['cost', 'living', 'expenses', 'budget'], priority: 7 },
      { type: 'content', name: 'Jobs', path: '/cities', description: 'Part-time job opportunities for students', keywords: ['jobs', 'work', 'employment', 'part-time'], priority: 7 },
      { type: 'content', name: 'Transportation', path: '/cities', description: 'Public transport and travel options', keywords: ['transport', 'travel', 'bus', 'metro'], priority: 6 },
      
      // University Content
      { type: 'university', name: 'University of Debrecen', path: '/university-search', description: 'Leading medical and research university', priority: 8 },
      { type: 'university', name: 'Eötvös Loránd University', path: '/university-search', description: 'Premier university in Budapest', priority: 8 },
      { type: 'university', name: 'Budapest University of Technology', path: '/university-search', description: 'Top technical university for engineering', priority: 8 },
      { type: 'university', name: 'University of Szeged', path: '/university-search', description: 'Excellent research and academic programs', priority: 8 },
      { type: 'university', name: 'University of Pécs', path: '/university-search', description: 'Historic university with diverse faculties', priority: 7 },
      { type: 'university', name: 'Corvinus University', path: '/university-search', description: 'Business and economics specialization', priority: 7 },
      { type: 'content', name: 'University Rankings', path: '/university-search', description: 'Global and regional university rankings', keywords: ['rankings', 'rank', 'rating'], priority: 7 },
      { type: 'content', name: 'Admission Requirements', path: '/university-search', description: 'University-specific entry requirements', keywords: ['admission', 'requirements', 'entry'], priority: 7 },
      { type: 'content', name: 'Course Programs', path: '/university-search', description: 'Available degree programs and specializations', keywords: ['course', 'program', 'degree'], priority: 7 },
      
      // Visa and Legal
      { type: 'content', name: 'Visa', path: '/visa', description: 'Student visa application process and requirements', keywords: ['visa', 'application', 'student'], priority: 8 },
      { type: 'content', name: 'Residence Permit', path: '/visa', description: 'Long-term residence permit for students', keywords: ['residence', 'permit', 'stay'], priority: 7 },
      { type: 'content', name: 'Embassy', path: '/visa', description: 'Hungarian embassy procedures and contacts', keywords: ['embassy', 'consulate', 'contact'], priority: 7 },
      { type: 'content', name: 'Schengen', path: '/visa', description: 'Schengen area travel benefits for students', keywords: ['schengen', 'europe', 'travel'], priority: 6 },
      
      // Special Terms and Acronyms
      { type: 'term', name: 'SHS', path: '/overview', description: 'Stipendium Hungaricum Scholarship', keywords: ['shs', 'stipendium'], priority: 9 },
      { type: 'term', name: 'HEC', path: '/timeline', description: 'Higher Education Commission Pakistan', keywords: ['hec', 'commission'], priority: 8 },
      { type: 'term', name: 'USAT', path: '/usat', description: 'University Selection and Aptitude Test', keywords: ['usat', 'test', 'aptitude'], priority: 9 },
      { type: 'term', name: 'FSc', path: '/overview', description: 'Faculty of Science intermediate certification', keywords: ['fsc', 'science', 'intermediate'], priority: 7 },
      { type: 'term', name: 'FA', path: '/overview', description: 'Faculty of Arts intermediate certification', keywords: ['fa', 'arts', 'intermediate'], priority: 7 },
      { type: 'term', name: 'AJK', path: '/overview', description: 'Azad Jammu and Kashmir region', keywords: ['ajk', 'kashmir', 'jammu'], priority: 6 },
      { type: 'term', name: 'Hungarian Language', path: '/timeline', description: 'Mandatory Hungarian language learning requirement', keywords: ['hungarian', 'language', 'learning'], priority: 7 },
      { type: 'term', name: 'Credit System', path: '/overview', description: 'European Credit Transfer System (ECTS)', keywords: ['credit', 'ects', 'system'], priority: 6 },
      
      // Additional Content
      { type: 'content', name: 'Eligibility Criteria', path: '/overview', description: 'Complete eligibility requirements for application', keywords: ['eligibility', 'criteria', 'requirements'], priority: 8 },
      { type: 'content', name: 'Age Limit', path: '/overview', description: 'Age requirements and restrictions for applicants', keywords: ['age', 'limit', 'restriction'], priority: 7 },
      { type: 'content', name: 'Nationality Requirements', path: '/overview', description: 'Pakistani citizenship and dual nationality restrictions', keywords: ['nationality', 'citizenship', 'pakistani'], priority: 7 },
      { type: 'content', name: 'Academic Requirements', path: '/overview', description: 'Minimum educational qualifications needed', keywords: ['academic', 'education', 'qualification'], priority: 7 },
      { type: 'content', name: 'Financial Coverage', path: '/overview', description: 'Complete financial support and benefits', keywords: ['financial', 'support', 'benefits'], priority: 7 },
      { type: 'content', name: 'Duration', path: '/overview', description: 'Scholarship duration and program length', keywords: ['duration', 'length', 'time'], priority: 6 },
      { type: 'content', name: 'Renewal Conditions', path: '/overview', description: 'Requirements to maintain scholarship', keywords: ['renewal', 'maintain', 'conditions'], priority: 6 },
    ];
  }

  // Get all search data
  getData(): SearchItem[] {
    return [...this.searchData];
  }

  // Add new search item
  addItem(item: SearchItem): void {
    this.searchData.push(item);
    this.notifySubscribers();
  }

  // Add multiple items
  addItems(items: SearchItem[]): void {
    this.searchData.push(...items);
    this.notifySubscribers();
  }

  // Update existing item
  updateItem(path: string, updates: Partial<SearchItem>): void {
    const index = this.searchData.findIndex(item => item.path === path);
    if (index !== -1) {
      this.searchData[index] = { ...this.searchData[index], ...updates };
      this.notifySubscribers();
    }
  }

  // Remove item
  removeItem(path: string): void {
    this.searchData = this.searchData.filter(item => item.path !== path);
    this.notifySubscribers();
  }

  // Subscribe to data changes
  subscribe(callback: (data: SearchItem[]) => void): () => void {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  private notifySubscribers(): void {
    this.subscribers.forEach(callback => callback([...this.searchData]));
  }

  // Enhanced search with multiple strategies
  search(query: string, limit: number = 10): SearchItem[] {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    
    const results = this.searchData.filter(item => {
      const name = item.name.toLowerCase();
      const description = item.description.toLowerCase();
      const type = item.type.toLowerCase();
      const keywords = item.keywords?.join(' ').toLowerCase() || '';
      
      // Exact match
      if (name === searchTerm) return true;
      
      // Keywords match (highest priority after exact)
      if (keywords && keywords.includes(searchTerm)) return true;
      
      // Word boundary matching
      const searchWords = searchTerm.split(' ');
      const nameWords = name.split(' ');
      const descWords = description.split(' ');
      
      // All search words in name or description
      const allWordsInName = searchWords.every(word => 
        nameWords.some(nameWord => nameWord.includes(word))
      );
      const allWordsInDesc = searchWords.every(word => 
        descWords.some(descWord => descWord.includes(word))
      );
      
      // Partial matching
      const partialNameMatch = searchWords.some(word => name.includes(word));
      const partialDescMatch = searchWords.some(word => description.includes(word));
      const typeMatch = type.includes(searchTerm);
      
      return allWordsInName || allWordsInDesc || partialNameMatch || partialDescMatch || typeMatch;
    })
    .sort((a, b) => {
      // Sort by relevance and priority
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const aPriority = a.priority || 5;
      const bPriority = b.priority || 5;
      
      // Exact matches first
      if (aName === searchTerm && bName !== searchTerm) return -1;
      if (bName === searchTerm && aName !== searchTerm) return 1;
      
      // Keywords match
      const aKeywordMatch = a.keywords?.some(k => k.toLowerCase().includes(searchTerm));
      const bKeywordMatch = b.keywords?.some(k => k.toLowerCase().includes(searchTerm));
      if (aKeywordMatch && !bKeywordMatch) return -1;
      if (bKeywordMatch && !aKeywordMatch) return 1;
      
      // Name starts with query
      if (aName.startsWith(searchTerm) && !bName.startsWith(searchTerm)) return -1;
      if (bName.startsWith(searchTerm) && !aName.startsWith(searchTerm)) return 1;
      
      // Priority-based sorting
      if (aPriority !== bPriority) return bPriority - aPriority;
      
      // Name includes query
      if (aName.includes(searchTerm) && !bName.includes(searchTerm)) return -1;
      if (bName.includes(searchTerm) && !aName.includes(searchTerm)) return 1;
      
      return 0;
    })
    .slice(0, limit);

    return results;
  }
}

// Create singleton instance
export const searchService = new SearchService();

// Function to add dynamic content (can be called when new content is added)
export const addSearchContent = (items: SearchItem | SearchItem[]) => {
  if (Array.isArray(items)) {
    searchService.addItems(items);
  } else {
    searchService.addItem(items);
  }
};

// Function to update search content
export const updateSearchContent = (path: string, updates: Partial<SearchItem>) => {
  searchService.updateItem(path, updates);
};