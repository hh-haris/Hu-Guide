import { create } from 'zustand';
import FlexSearch from 'flexsearch';

interface SearchStore {
  index: any;
  initializeSearch: () => void;
  addToIndex: (content: any) => void;
  search: (query: string) => Promise<SearchResult[]>;
}

interface SearchResult {
  id: string;
  title: string;
  content: string;
  type: 'heading' | 'subheading' | 'content';
  path: string;
}

const useSearchStore = create<SearchStore>((set, get) => ({
  index: null,

  initializeSearch: () => {
    const index = FlexSearch.create({
      encode: 'advanced',
      tokenize: 'full',
      suggest: true,
      cache: true,
      doc: {
        id: 'id',
        field: ['title', 'content', 'keywords'],
      },
    });
    set({ index });
  },

  addToIndex: (content) => {
    const { index } = get();
    if (!index) return;

    // Process headings, subheadings, and content
    const processContent = (node: any, path: string) => {
      if (node.type === 'heading') {
        index.add({
          id: `${path}-${node.id}`,
          title: node.text,
          content: node.text,
          type: 'heading',
          path,
        });
      }

      // Add special keywords
      const keywords = [
        'Insights', 'Tuition fee', 'Stipend', 'Accommodation', 
        'Medical insurance', 'Ticket', 'ETC', 'Tempus', 
        'HEC Portal', 'Visa', 'USAT Schedule', 'Timeline',
        'University Finder', 'Cities', 'Jobs'
      ];

      keywords.forEach(keyword => {
        if (node.content?.includes(keyword)) {
          index.add({
            id: `${path}-${keyword.toLowerCase().replace(' ', '-')}`,
            title: keyword,
            content: node.content,
            type: 'content',
            path,
          });
        }
      });
    };

    // Process the content recursively
    const traverse = (node: any, path: string) => {
      processContent(node, path);
      if (node.children) {
        node.children.forEach((child: any) => traverse(child, path));
      }
    };

    traverse(content, content.path);
  },

  search: async (query: string) => {
    const { index } = get();
    if (!index || !query) return [];

    const results = await index.search(query, {
      limit: 10,
      suggest: true,
    });

    return results;
  },
}));

export default useSearchStore;