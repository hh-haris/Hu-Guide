import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { useSearch } from '@/hooks/useSearch';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const { searchTerm, setSearchTerm, results, clearSearch } = useSearch();

  // Listen for custom event from Get Started button
  useEffect(() => {
    const handleOpenMenu = () => {
      setIsMenuOpen(true);
    };

    window.addEventListener('openMenu', handleOpenMenu);
    return () => window.removeEventListener('openMenu', handleOpenMenu);
  }, []);

  // Focus search input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search when route changes
  useEffect(() => {
    setIsSearchOpen(false);
    clearSearch();
  }, [location.pathname, clearSearch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      clearSearch();
    }
  };

  const handleSearchResultClick = (url: string) => {
    navigate(url);
    setIsSearchOpen(false);
    clearSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      clearSearch();
    } else if (e.key === 'Enter' && results.length > 0) {
      handleSearchResultClick(results[0].url);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: 'Overview', path: '/overview' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'USAT', path: '/usat' },
    { name: 'University Finder', path: '/university-search' },
    { name: 'Documents', path: '/documents' },
    { name: 'Cities', path: '/cities' },
    { name: 'Seniors', path: '/seniors' },
    { name: 'Official', path: '/official' }
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Hide when search is open */}
            <AnimatePresence mode="wait">
              {!isSearchOpen && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/" className="flex items-center">
                    <span className="font-secondary text-brand-orange font-extrabold text-2xl">hu</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Bar - Show when search is open */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 relative"
                >
                  <div className="relative">
                    <Input
                      ref={searchInputRef}
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full pr-4 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    
                    {/* Search Results Dropdown */}
                    {searchTerm && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto z-50"
                      >
                        {results.length > 0 ? (
                          <div className="py-2">
                            {results.map((result, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearchResultClick(result.url)}
                                className="w-full px-4 py-2 text-left hover:bg-muted transition-colors text-sm"
                              >
                                <div className="font-medium text-foreground">
                                  {result.title}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {result.category}
                                </div>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="px-4 py-3 text-sm text-muted-foreground">
                            No results found
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Search Toggle */}
              <motion.button
                onClick={toggleSearch}
                className="p-2 hover:bg-muted rounded-full smooth-transition"
                aria-label="Search"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isSearchOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="search"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Search className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Theme Toggle */}
              <AnimatedThemeToggler />
              
              {/* Hamburger Menu */}
              <motion.button
                onClick={toggleMenu}
                className="p-2 hover:bg-muted rounded-full smooth-transition"
                aria-label="Menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col space-y-1"
                    >
                      <div className="w-6 h-0.5 bg-foreground rounded-full"></div>
                      <div className="w-6 h-0.5 bg-foreground rounded-full"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-background shadow-xl overflow-y-auto border-l border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="p-6 pt-20">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`block py-3 px-4 rounded-lg smooth-transition text-base font-primary ${
                          isActive(item.path)
                            ? 'bg-brand-orange text-white'
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;