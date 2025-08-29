import { useState, useEffect, useMemo } from 'react';

interface SearchableContent {
  title: string;
  content: string;
  url: string;
  type: 'page' | 'heading' | 'subheading' | 'section' | 'insight' | 'detail';
  keywords: string[];
  category: string;
}

const searchableData: SearchableContent[] = [
  // Overview Page - Insights and Details sections
  {
    title: "Insights",
    content: "Program insights and comprehensive details about Stipendium Hungaricum",
    url: "/overview",
    type: "insight",
    keywords: ["insights", "information", "details", "understanding", "knowledge", "overview"],
    category: "Overview"
  },
  {
    title: "Details",
    content: "Detailed information about the scholarship program",
    url: "/overview",
    type: "detail",
    keywords: ["details", "specifics", "information", "comprehensive", "thorough"],
    category: "Overview"
  },
  {
    title: "Program Benefits",
    content: "Complete benefits package of Stipendium Hungaricum",
    url: "/overview",
    type: "section",
    keywords: ["benefits", "advantages", "package", "offer"],
    category: "Overview"
  },

  // Financial Benefits - Detailed breakdown
  {
    title: "Tuition Fee",
    content: "Full tuition fee coverage for all study programs",
    url: "/overview",
    type: "subheading",
    keywords: ["tuition", "fee", "cost", "expenses", "university", "charges", "study", "academic", "education"],
    category: "Financial"
  },
  {
    title: "Monthly Stipend",
    content: "Monthly stipend amount and payment details",
    url: "/overview",
    type: "subheading",
    keywords: ["stipend", "monthly", "allowance", "money", "amount", "salary", "payment", "income"],
    category: "Financial"
  },
  {
    title: "Stipend Amount",
    content: "Exact stipend amounts for different study levels",
    url: "/overview",
    type: "subheading",
    keywords: ["amount", "value", "sum", "quantity", "stipend", "money", "payment"],
    category: "Financial"
  },
  {
    title: "Accommodation Support",
    content: "Housing and accommodation financial support",
    url: "/overview",
    type: "subheading",
    keywords: ["accommodation", "housing", "dormitory", "residence", "living", "room", "place", "stay"],
    category: "Financial"
  },
  {
    title: "Medical Insurance",
    content: "Comprehensive health insurance coverage",
    url: "/overview",
    type: "subheading",
    keywords: ["medical", "insurance", "health", "healthcare", "coverage", "treatment", "doctor", "hospital"],
    category: "Financial"
  },
  {
    title: "Travel Ticket",
    content: "One-way flight ticket reimbursement to Hungary",
    url: "/overview",
    type: "subheading",
    keywords: ["ticket", "flight", "travel", "airfare", "reimbursement", "journey", "transport", "airplane"],
    category: "Financial"
  },

  // Timeline specific headings and content
  {
    title: "Application Timeline",
    content: "Complete application timeline and important dates",
    url: "/timeline",
    type: "heading",
    keywords: ["timeline", "schedule", "deadlines", "dates", "calendar", "application", "process"],
    category: "Timeline"
  },
  {
    title: "USAT Schedule",
    content: "University Selection Aptitude Test schedule and dates",
    url: "/timeline",
    type: "heading",
    keywords: ["usat", "schedule", "test", "dates", "timing", "aptitude", "selection", "university"],
    category: "Timeline"
  },
  {
    title: "Document Submission",
    content: "Document submission deadlines and requirements",
    url: "/timeline",
    type: "heading",
    keywords: ["document", "submission", "deadline", "requirements", "papers", "upload"],
    category: "Timeline"
  },
  {
    title: "Results Declaration",
    content: "When and how results are announced",
    url: "/timeline",
    type: "heading",
    keywords: ["results", "declaration", "announcement", "outcome", "decision", "selection"],
    category: "Timeline"
  },

  // USAT specific content and preparation
  {
    title: "USAT Preparation",
    content: "Complete guide for USAT test preparation",
    url: "/usat",
    type: "heading",
    keywords: ["preparation", "study", "tips", "guide", "practice", "ready"],
    category: "USAT"
  },
  {
    title: "Preparation Tips",
    content: "Expert tips for USAT exam preparation",
    url: "/usat",
    type: "heading",
    keywords: ["preparation", "tips", "study", "how", "prepare", "exam", "advice", "guidance"],
    category: "USAT"
  },
  {
    title: "Test Structure",
    content: "USAT test format and question patterns",
    url: "/usat",
    type: "heading",
    keywords: ["structure", "format", "pattern", "questions", "sections", "parts"],
    category: "USAT"
  },
  {
    title: "Sample Papers",
    content: "Practice papers and sample questions",
    url: "/usat",
    type: "heading",
    keywords: ["sample", "papers", "practice", "questions", "examples", "mock"],
    category: "USAT"
  },

  // University Finder specific content
  {
    title: "University Search",
    content: "Advanced university search and filtering",
    url: "/university-search",
    type: "heading",
    keywords: ["search", "find", "filter", "university", "institution", "college"],
    category: "Universities"
  },
  {
    title: "Program Selection",
    content: "Choose from available study programs",
    url: "/university-search",
    type: "heading",
    keywords: ["program", "selection", "course", "degree", "major", "field"],
    category: "Universities"
  },
  {
    title: "University Rankings",
    content: "Rankings and reputation of Hungarian universities",
    url: "/universities",
    type: "heading",
    keywords: ["rankings", "reputation", "top", "best", "quality", "rating"],
    category: "Universities"
  },
  {
    title: "Admission Requirements",
    content: "Specific admission criteria for each university",
    url: "/universities",
    type: "heading",
    keywords: ["admission", "requirements", "criteria", "eligibility", "qualifications"],
    category: "Universities"
  },

  // Specific University Names
  {
    title: "Budapest University of Technology",
    content: "BME - Leading technical university in Hungary",
    url: "/universities",
    type: "heading",
    keywords: ["bme", "budapest", "technology", "engineering", "technical"],
    category: "Universities"
  },
  {
    title: "Eötvös Loránd University",
    content: "ELTE - Premier university in Budapest",
    url: "/universities",
    type: "heading",
    keywords: ["elte", "eotvos", "lorand", "budapest", "sciences"],
    category: "Universities"
  },
  {
    title: "University of Debrecen",
    content: "Major university in eastern Hungary",
    url: "/universities",
    type: "heading",
    keywords: ["debrecen", "university", "medical", "sciences"],
    category: "Universities"
  },
  {
    title: "University of Szeged",
    content: "Research university in southern Hungary",
    url: "/universities",
    type: "heading",
    keywords: ["szeged", "research", "university", "medical"],
    category: "Universities"
  },

  // Documents page content
  {
    title: "Required Documents",
    content: "Complete list of required application documents",
    url: "/documents",
    type: "heading",
    keywords: ["required", "documents", "list", "needed", "necessary", "application"],
    category: "Documents"
  },
  {
    title: "Motivation Letter Guide",
    content: "How to write an effective motivation letter",
    url: "/documents/motivation-letter",
    type: "heading",
    keywords: ["motivation", "letter", "personal", "statement", "essay", "writing", "guide"],
    category: "Documents"
  },
  {
    title: "Academic Transcripts",
    content: "Academic records and transcript requirements",
    url: "/documents",
    type: "subheading",
    keywords: ["transcripts", "academic", "records", "grades", "marks", "certificates"],
    category: "Documents"
  },
  {
    title: "Language Certificates",
    content: "English language proficiency requirements",
    url: "/documents",
    type: "subheading",
    keywords: ["language", "certificates", "english", "proficiency", "ielts", "toefl"],
    category: "Documents"
  },
  {
    title: "Passport Copy",
    content: "Valid passport copy requirements",
    url: "/documents",
    type: "subheading",
    keywords: ["passport", "copy", "identity", "document", "valid"],
    category: "Documents"
  },

  // Cities and locations
  {
    title: "Study Cities",
    content: "Best cities in Hungary for international students",
    url: "/cities",
    type: "heading",
    keywords: ["cities", "study", "locations", "places", "student", "life"],
    category: "Cities"
  },
  {
    title: "Budapest",
    content: "Capital city with most universities and opportunities",
    url: "/cities/budapest",
    type: "heading",
    keywords: ["budapest", "capital", "main", "largest", "universities"],
    category: "Cities"
  },
  {
    title: "Debrecen",
    content: "Second largest city with major university",
    url: "/cities/debrecen",
    type: "heading",
    keywords: ["debrecen", "second", "largest", "university", "medical"],
    category: "Cities"
  },
  {
    title: "Szeged",
    content: "University city known for research and medicine",
    url: "/cities/szeged",
    type: "heading",
    keywords: ["szeged", "university", "research", "medicine", "southern"],
    category: "Cities"
  },
  {
    title: "Cost of Living",
    content: "Living expenses and budget planning for students",
    url: "/cities",
    type: "subheading",
    keywords: ["cost", "living", "expenses", "budget", "money", "affordable", "cheap"],
    category: "Cities"
  },

  // Job opportunities and career
  {
    title: "Job Opportunities",
    content: "Career prospects and job market for graduates",
    url: "/seniors",
    type: "heading",
    keywords: ["job", "opportunities", "career", "employment", "work", "profession", "graduates"],
    category: "Career"
  },
  {
    title: "Work Permits",
    content: "Work permit procedures for international students",
    url: "/seniors",
    type: "heading",
    keywords: ["work", "permits", "employment", "authorization", "legal"],
    category: "Career"
  },
  {
    title: "Internship Programs",
    content: "Internship opportunities during studies",
    url: "/seniors",
    type: "heading",
    keywords: ["internship", "programs", "experience", "training", "practice"],
    category: "Career"
  },

  // Official processes and organizations
  {
    title: "Tempus Public Foundation",
    content: "Official organization managing Stipendium Hungaricum",
    url: "/official",
    type: "heading",
    keywords: ["tempus", "foundation", "official", "organization", "management", "government"],
    category: "Official"
  },
  {
    title: "HEC Portal",
    content: "Higher Education Commission online portal",
    url: "/official",
    type: "heading",
    keywords: ["hec", "portal", "commission", "higher", "education", "online", "system"],
    category: "Official"
  },
  {
    title: "Visa Application",
    content: "Student visa application process and requirements",
    url: "/official",
    type: "heading",
    keywords: ["visa", "application", "process", "student", "permit", "immigration", "embassy"],
    category: "Official"
  },
  {
    title: "Embassy Procedures",
    content: "Hungarian embassy visa application procedures",
    url: "/official",
    type: "subheading",
    keywords: ["embassy", "consulate", "diplomatic", "mission", "hungarian", "procedures"],
    category: "Official"
  },

  // Special terms and acronyms
  {
    title: "ETC Programs",
    content: "European Training Centers and exchange programs",
    url: "/overview",
    type: "section",
    keywords: ["etc", "european", "training", "centers", "exchange", "programs"],
    category: "Programs"
  },
  {
    title: "Erasmus Opportunities",
    content: "Erasmus exchange program possibilities",
    url: "/overview",
    type: "section",
    keywords: ["erasmus", "exchange", "mobility", "europe", "study"],
    category: "Programs"
  },

  // Field-specific programs
  {
    title: "Engineering Programs",
    content: "Engineering and technical study programs",
    url: "/usat/engineering",
    type: "heading",
    keywords: ["engineering", "technical", "mechanical", "civil", "electrical", "computer"],
    category: "Programs"
  },
  {
    title: "Medical Programs",
    content: "Medicine and health sciences programs",
    url: "/usat/medical",
    type: "heading",
    keywords: ["medical", "medicine", "health", "sciences", "doctor", "physician"],
    category: "Programs"
  },
  {
    title: "Computer Science",
    content: "IT and computer science study programs",
    url: "/usat/computer-science",
    type: "heading",
    keywords: ["computer", "science", "it", "programming", "software", "technology"],
    category: "Programs"
  },
  {
    title: "Arts and Humanities",
    content: "Arts, literature and humanities programs",
    url: "/usat/arts",
    type: "heading",
    keywords: ["arts", "humanities", "literature", "philosophy", "history", "culture"],
    category: "Programs"
  },
  {
    title: "Business and Commerce",
    content: "Business administration and commerce programs",
    url: "/usat/commerce",
    type: "heading",
    keywords: ["commerce", "business", "management", "economics", "finance", "trade"],
    category: "Programs"
  },
  {
    title: "General Sciences",
    content: "General science and research programs",
    url: "/usat/general-science",
    type: "heading",
    keywords: ["general", "sciences", "research", "physics", "chemistry", "biology"],
    category: "Programs"
  }
];

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchableContent[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    setIsSearching(true);
    const term = searchTerm.toLowerCase().trim();
    
    const filteredResults = searchableData.filter(item => {
      // Exact title match (highest priority)
      if (item.title.toLowerCase() === term) return true;
      
      // Title contains search term
      if (item.title.toLowerCase().includes(term)) return true;
      
      // Content contains search term
      if (item.content.toLowerCase().includes(term)) return true;
      
      // Keywords exact match
      if (item.keywords.some(keyword => keyword === term)) return true;
      
      // Keywords partial match
      if (item.keywords.some(keyword => keyword.includes(term))) return true;
      
      // Multi-word search
      const searchWords = term.split(' ').filter(word => word.length > 1);
      if (searchWords.length > 1) {
        return searchWords.every(word => 
          item.title.toLowerCase().includes(word) ||
          item.content.toLowerCase().includes(word) ||
          item.keywords.some(keyword => keyword.includes(word))
        );
      }
      
      // Fuzzy matching for common misspellings
      const fuzzyMatches = {
        'tution': 'tuition',
        'accomodation': 'accommodation',
        'scholorship': 'scholarship',
        'univesity': 'university',
        'preperation': 'preparation'
      };
      
      const correctedTerm = fuzzyMatches[term as keyof typeof fuzzyMatches] || term;
      if (correctedTerm !== term) {
        return item.title.toLowerCase().includes(correctedTerm) ||
               item.content.toLowerCase().includes(correctedTerm) ||
               item.keywords.some(keyword => keyword.includes(correctedTerm));
      }
      
      return false;
    });

    // Sort results by relevance
    const sortedResults = filteredResults.sort((a, b) => {
      // Exact title match first
      if (a.title.toLowerCase() === term && b.title.toLowerCase() !== term) return -1;
      if (b.title.toLowerCase() === term && a.title.toLowerCase() !== term) return 1;
      
      // Title starts with term
      if (a.title.toLowerCase().startsWith(term) && !b.title.toLowerCase().startsWith(term)) return -1;
      if (b.title.toLowerCase().startsWith(term) && !a.title.toLowerCase().startsWith(term)) return 1;
      
      // Type priority: heading > subheading > section > page
      const typePriority = { heading: 1, subheading: 2, insight: 2, detail: 2, section: 3, page: 4 };
      return (typePriority[a.type as keyof typeof typePriority] || 5) - (typePriority[b.type as keyof typeof typePriority] || 5);
    });

    setIsSearching(false);
    return sortedResults.slice(0, 10); // Limit to top 10 results
  }, [searchTerm]);

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    isSearching,
    clearSearch: () => {
      setSearchTerm('');
      setResults([]);
    }
  };
}
