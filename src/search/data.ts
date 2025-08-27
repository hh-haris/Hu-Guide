export type SearchItem = {
  label: string;
  path: string;
};

// Central list of searchable destinations across the website.
// Add new pages here to make them discoverable instantly.
export const siteSearchItems: SearchItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Overview', path: '/overview' },
  { label: 'Timeline', path: '/timeline' },
  { label: 'USAT', path: '/usat' },
  { label: 'USAT Engineering', path: '/usat/engineering' },
  { label: 'USAT Medical', path: '/usat/medical' },
  { label: 'USAT Computer Science', path: '/usat/computer-science' },
  { label: 'USAT Commerce', path: '/usat/commerce' },
  { label: 'USAT Arts', path: '/usat/arts' },
  { label: 'USAT General Science', path: '/usat/general-science' },
  { label: 'Universities', path: '/universities' },
  { label: 'University Finder', path: '/university-search' },
  { label: 'Documents', path: '/documents' },
  { label: 'Motivation Letter', path: '/documents/motivation-letter' },
  { label: 'Cities', path: '/cities' },
  { label: 'Seniors', path: '/seniors' },
  { label: 'Official', path: '/official' },
];

