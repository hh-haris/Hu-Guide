import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { getAllSearchData, searchData, type SearchResult } from '@/lib/searchData';

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Get all search data
  const allSearchData = getAllSearchData();
  
  // Filter search results based on query
  const searchResults = searchQuery.trim() ? searchData(searchQuery, allSearchData) : [];
  // Group search results by category
  const groupedResults = searchResults.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as Record<string, SearchResult[]>);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (path: string) => {
    setOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground bg-background border border-border rounded-md hover:bg-muted smooth-transition"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </motion.button>

      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <CommandInput 
          placeholder="Search anything..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <AnimatePresence>
            {Object.entries(groupedResults).map(([category, items], groupIndex) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item, index) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.description} ${item.keywords.join(' ')} ${item.content || ''}`}
                    onSelect={() => runCommand(item.path)}
                    className="flex items-center space-x-2 px-2 py-3"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (groupIndex * 0.1) + (index * 0.05) }}
                      className="flex items-center space-x-3 w-full"
                    >
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                      </div>
                    </motion.div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </AnimatePresence>
        </CommandList>
      </CommandDialog>
    </>
  );
}