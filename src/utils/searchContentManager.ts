// Search Content Manager - Example of how to add new content dynamically
import { addSearchContent, updateSearchContent, type SearchItem } from '../services/searchService';

/**
 * Example function to add new page content to search
 * This can be called whenever new pages or content are added to the website
 */
export const addNewPageToSearch = (pageData: {
  name: string;
  path: string;
  description: string;
  type?: string;
  keywords?: string[];
  priority?: number;
}) => {
  const searchItem: SearchItem = {
    type: pageData.type || 'page',
    name: pageData.name,
    path: pageData.path,
    description: pageData.description,
    keywords: pageData.keywords,
    priority: pageData.priority || 5
  };
  
  addSearchContent(searchItem);
};

/**
 * Example function to add multiple content items at once
 */
export const addBulkContentToSearch = (contentItems: SearchItem[]) => {
  addSearchContent(contentItems);
};

/**
 * Example function to update existing search content
 */
export const updatePageInSearch = (path: string, updates: Partial<SearchItem>) => {
  updateSearchContent(path, updates);
};

/**
 * Example: Adding content when a new university is added
 */
export const addUniversityToSearch = (university: {
  name: string;
  slug: string;
  description: string;
  city: string;
  specializations: string[];
}) => {
  const searchItem: SearchItem = {
    type: 'university',
    name: university.name,
    path: `/university-search/${university.slug}`,
    description: `${university.description} Located in ${university.city}`,
    keywords: [
      ...university.specializations.map(s => s.toLowerCase()),
      university.city.toLowerCase(),
      'university',
      'education',
      'study'
    ],
    priority: 8
  };
  
  addSearchContent(searchItem);
};

/**
 * Example: Adding content when new city information is added
 */
export const addCityToSearch = (city: {
  name: string;
  slug: string;
  description: string;
  highlights: string[];
}) => {
  const searchItem: SearchItem = {
    type: 'city',
    name: city.name,
    path: `/cities/${city.slug}`,
    description: city.description,
    keywords: [
      ...city.highlights.map(h => h.toLowerCase()),
      'city',
      'location',
      'student life',
      'living'
    ],
    priority: 7
  };
  
  addSearchContent(searchItem);
};

/**
 * Example: Adding content for new documents or guides
 */
export const addDocumentToSearch = (document: {
  name: string;
  path: string;
  description: string;
  category: string;
  requirements: string[];
}) => {
  const searchItem: SearchItem = {
    type: 'document',
    name: document.name,
    path: document.path,
    description: document.description,
    keywords: [
      ...document.requirements.map(r => r.toLowerCase()),
      document.category.toLowerCase(),
      'document',
      'required',
      'application'
    ],
    priority: 7
  };
  
  addSearchContent(searchItem);
};

/**
 * Example: Adding USAT-related content
 */
export const addUSATContentToSearch = (content: {
  name: string;
  subject: string;
  description: string;
  topics: string[];
}) => {
  const searchItem: SearchItem = {
    type: 'content',
    name: content.name,
    path: `/usat/${content.subject.toLowerCase().replace(/\s+/g, '-')}`,
    description: content.description,
    keywords: [
      ...content.topics.map(t => t.toLowerCase()),
      content.subject.toLowerCase(),
      'usat',
      'test',
      'preparation',
      'exam'
    ],
    priority: 8
  };
  
  addSearchContent(searchItem);
};

// Usage Examples:

/*
// Adding a new page
addNewPageToSearch({
  name: 'Student Life',
  path: '/student-life',
  description: 'Complete guide to student life in Hungary',
  keywords: ['student', 'life', 'lifestyle', 'activities'],
  priority: 8
});

// Adding a new university
addUniversityToSearch({
  name: 'Central European University',
  slug: 'ceu',
  description: 'International university offering graduate programs',
  city: 'Budapest',
  specializations: ['Social Sciences', 'Public Policy', 'Law']
});

// Adding a new city
addCityToSearch({
  name: 'Kecskemét',
  slug: 'kecskemet',
  description: 'Modern city with growing student population',
  highlights: ['Automotive Industry', 'Mercedes Plant', 'Technical Education']
});

// Adding new document requirement
addDocumentToSearch({
  name: 'Bank Statement',
  path: '/documents',
  description: 'Financial proof showing sufficient funds for living expenses',
  category: 'Financial Documents',
  requirements: ['bank statement', 'financial proof', 'funds', 'expenses']
});

// Adding new USAT content
addUSATContentToSearch({
  name: 'Physics Chapter',
  subject: 'General Science',
  description: 'Physics topics and concepts for USAT General Science',
  topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Waves']
});
*/

export default {
  addNewPageToSearch,
  addBulkContentToSearch,
  updatePageInSearch,
  addUniversityToSearch,
  addCityToSearch,
  addDocumentToSearch,
  addUSATContentToSearch
};