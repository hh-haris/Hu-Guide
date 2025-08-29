import { useState, useCallback } from 'react';

interface SearchResult {
  url: string;
  title: string;
  content: string;
  type: string;
  category: string;
}

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback(async (term: string) => {
    setIsSearching(true);
    try {
      // Implement your actual search logic here
      // This is a placeholder implementation
      const searchResults: SearchResult[] = [];
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setResults([]);
    setIsSearching(false);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    results,
    isSearching,
    search,
    clearSearch,
  };
}