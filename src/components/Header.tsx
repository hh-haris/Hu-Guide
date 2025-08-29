import { useState, useRef, useEffect } from 'react';
import { Search, X, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export function EnhancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, results, isSearching, clearSearch } = useSearch();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleResultClick = (url: string, title: string) => {
    navigate(url);
    addToRecentSearches(title);
    setIsOpen(false);
    clearSearch();
  };

  const addToRecentSearches = (search: string) => {
    const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recent-searches', JSON.stringify(updated));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      clearSearch();
    } else if (e.key === 'Enter' && results.length > 0) {
      handleResultClick(results[0].url, results[0].title);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'insight':
      case 'detail':
        return '💡';
      case 'heading':
        return '📋';
      case 'subheading':
        return '📝';
      case 'section':
        return '📄';
      default:
        return '🔍';
    }
  };

  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900">{part}</mark> : 
        part
    );
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="h-9 w-9"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
            onClick={() => {
              setIsOpen(false);
              clearSearch();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-background border rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center px-4 py-3 border-b">
                <Search className="h-4 w-4 text-muted-foreground mr-3" />
                <Input
                  ref={inputRef}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border-0 bg-transparent px-0 py-0 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsOpen(false);
                    clearSearch();
                  }}
                  className="h-8 w-8 ml-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search Results or Recent Searches */}
              <div className="max-h-96 overflow-y-auto">
                {searchTerm ? (
                  <>
                    {isSearching && (
                      <div className="px-4 py-8 text-center text-muted-foreground">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-2">Searching...</p>
                      </div>
                    )}
                    
                    {!isSearching && results.length > 0 && (
                      <div className="py-2">
                        {results.map((result, index) => (
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleResultClick(result.url, result.title)}
                            className="w-full px-4 py-3 text-left hover:bg-muted transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-lg mt-1">{getTypeIcon(result.type)}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm group-hover:text-primary">
                                  {highlightText(result.title, searchTerm)}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {highlightText(result.content, searchTerm)}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs bg-muted px-2 py-1 rounded capitalize">
                                    {result.type}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {result.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    )}
                    
                    {!isSearching && results.length === 0 && (
                      <div className="px-4 py-8 text-center text-muted-foreground">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">No results found</p>
                        <p className="text-sm">Try searching for "insights", "tuition fee", "visa", or "USAT"</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-4">
                    {recentSearches.length > 0 && (
                      <div className="px-4 mb-4">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          Recent Searches
                        </h3>
                        <div className="space-y-1">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => setSearchTerm(search)}
                              className="block w-full text-left text-sm px-2 py-1 rounded hover:bg-muted transition-colors"
                            >
                              {search}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="px-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Quick Search</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {['Insights', 'Tuition Fee', 'Accommodation', 'USAT Schedule', 'Visa Process', 'Stipend Amount'].map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => setSearchTerm(suggestion)}
                            className="text-left text-sm px-3 py-2 bg-muted rounded hover:bg-muted/80 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
