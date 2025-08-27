export interface SearchItem {
  title: string;
  path: string;
  keywords: string[];
}

export const SEARCH_DATA: SearchItem[] = [
  { title: 'Home', path: '/', keywords: ['home', 'start', 'welcome'] },
  { title: 'Overview', path: '/overview', keywords: ['overview', 'insights', 'details', 'stipendium', 'hungaricum'] },
  { title: 'Timeline', path: '/timeline', keywords: ['timeline', 'steps', 'schedule'] },
  { title: 'USAT', path: '/usat', keywords: ['usat', 'test', 'categories', 'engineering', 'medical', 'arts', 'commerce', 'general science'] },
  { title: 'USAT Engineering', path: '/usat/engineering', keywords: ['usat engineering', 'physics', 'chemistry', 'mathematics'] },
  { title: 'USAT Medical', path: '/usat/medical', keywords: ['usat medical', 'biology', 'chemistry'] },
  { title: 'USAT Computer Science', path: '/usat/computer-science', keywords: ['usat cs', 'computer science', 'programming'] },
  { title: 'USAT Arts', path: '/usat/arts', keywords: ['usat arts'] },
  { title: 'USAT Commerce', path: '/usat/commerce', keywords: ['usat commerce'] },
  { title: 'USAT General Science', path: '/usat/general-science', keywords: ['usat general', 'general science'] },
  { title: 'Documents', path: '/documents', keywords: ['documents', 'requirements'] },
  { title: 'Motivation Letter', path: '/documents/motivation-letter', keywords: ['motivation letter', 'statement', 'sop'] },
  { title: 'Cities', path: '/cities', keywords: ['cities', 'city', 'hungary cities'] },
  // Popular cities as direct entries
  { title: 'Budapest', path: '/cities/budapest', keywords: ['city', 'budapest', 'capital'] },
  { title: 'Debrecen', path: '/cities/debrecen', keywords: ['city', 'debrecen'] },
  { title: 'Pécs', path: '/cities/pecs', keywords: ['city', 'pecs'] },
  { title: 'Győr', path: '/cities/gyor', keywords: ['city', 'gyor'] },
  { title: 'Baja', path: '/cities/baja', keywords: ['city', 'baja'] },
  { title: 'Dunaújváros', path: '/cities/dunaujvaros', keywords: ['city', 'dunaujvaros'] },
  { title: 'Eger', path: '/cities/eger', keywords: ['city', 'eger'] },
  { title: 'Gödöllő', path: '/cities/godollo', keywords: ['city', 'godollo'] },
  { title: 'Kecskemét', path: '/cities/kecskemet', keywords: ['city', 'kecskemet'] },
  { title: 'Miskolc', path: '/cities/miskolc', keywords: ['city', 'miskolc'] },
  { title: 'Nyíregyháza', path: '/cities/nyiregyhaza', keywords: ['city', 'nyiregyhaza'] },
  { title: 'Sopron', path: '/cities/sopron', keywords: ['city', 'sopron'] },
  { title: 'Szeged', path: '/cities/szeged', keywords: ['city', 'szeged'] },
  { title: 'Veszprém', path: '/cities/veszprem', keywords: ['city', 'veszprem'] },
  { title: 'University Finder', path: '/university-search', keywords: ['universities', 'search', 'finder'] },
  { title: 'Seniors', path: '/seniors', keywords: ['seniors', 'alumni', 'mentors'] },
  { title: 'Official', path: '/official', keywords: ['official', 'hec', 'government'] },
];

export function searchSite(query: string, limit: number = 10): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = SEARCH_DATA.map((item) => {
    const haystack = [item.title, ...item.keywords].join(' ').toLowerCase();
    let score = 0;
    if (item.title.toLowerCase().includes(q)) score += 5;
    if (haystack.includes(q)) score += 3;
    // startswith bonus
    if (item.title.toLowerCase().startsWith(q)) score += 2;
    return { item, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item);
  return scored;
}

