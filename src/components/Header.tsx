
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen for custom event from Get Started button
  useEffect(() => {
    const handleOpenMenu = () => {
      setIsMenuOpen(true);
    };

    window.addEventListener('openMenu', handleOpenMenu);
    return () => window.removeEventListener('openMenu', handleOpenMenu);
  }, []);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  // Updated menu items - removed Universities and renamed University Search
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

  // Universal search data - this would ideally come from a search index
  const searchData = [
    // Pages
    { type: 'page', name: 'Overview', path: '/overview', description: 'General overview of Stipendium Hungaricum' },
    { type: 'page', name: 'Timeline', path: '/timeline', description: 'Application timeline and deadlines' },
    { type: 'page', name: 'USAT', path: '/usat', description: 'University Selection and Aptitude Test information' },
    { type: 'page', name: 'University Finder', path: '/university-search', description: 'Search and find universities' },
    { type: 'page', name: 'Documents', path: '/documents', description: 'Required documents for application' },
    { type: 'page', name: 'Cities', path: '/cities', description: 'Information about Hungarian cities' },
    { type: 'page', name: 'Seniors', path: '/seniors', description: 'Connect with seniors and their experiences' },
    { type: 'page', name: 'Official', path: '/official', description: 'Official information and links' },
    
    // USAT subjects
    { type: 'content', name: 'USAT Computer Science', path: '/usat/computer-science', description: 'Computer Science USAT preparation' },
    { type: 'content', name: 'USAT Medical', path: '/usat/medical', description: 'Medical USAT preparation' },
    { type: 'content', name: 'USAT Engineering', path: '/usat/engineering', description: 'Engineering USAT preparation' },
    { type: 'content', name: 'USAT Arts', path: '/usat/arts', description: 'Arts USAT preparation' },
    { type: 'content', name: 'USAT Commerce', path: '/usat/commerce', description: 'Commerce USAT preparation' },
    { type: 'content', name: 'USAT General Science', path: '/usat/general-science', description: 'General Science USAT preparation' },
    
    // Key topics
    { type: 'content', name: 'Stipendium Hungaricum', path: '/overview', description: 'Full scholarship program information' },
    { type: 'content', name: 'Scholarship Requirements', path: '/overview', description: 'Eligibility and requirements' },
    { type: 'content', name: 'Application Process', path: '/timeline', description: 'Step by step application guide' },
    { type: 'content', name: 'Motivation Letter', path: '/documents/motivation-letter', description: 'How to write motivation letter' },
    { type: 'content', name: 'HuBot', path: '/hubot', description: 'AI assistant for Hungary scholarship' },
    { type: 'content', name: 'Pro Services', path: '/pro', description: 'Professional assistance services' },
    { type: 'content', name: 'Visa Information', path: '/visa', description: 'Visa requirements and process' },
    { type: 'content', name: 'Registration Guide', path: '/registration-guide', description: 'Complete registration walkthrough' },
    { type: 'content', name: 'Universities', path: '/universities', description: 'List of Hungarian universities' },
    { type: 'content', name: 'Before After', path: '/before-after', description: 'Success stories and transformations' },
    
    // Cities - check actual slug format from Cities page
    { type: 'content', name: 'Budapest', path: '/cities/budapest', description: 'Capital city of Hungary' },
    { type: 'content', name: 'Debrecen', path: '/cities/debrecen', description: 'Second largest city in Hungary' },
    { type: 'content', name: 'Szeged', path: '/cities/szeged', description: 'University city in southern Hungary' },
    { type: 'content', name: 'Pécs', path: '/cities/pecs', description: 'Historic city in southern Hungary' },
    { type: 'content', name: 'Győr', path: '/cities/gyor', description: 'Industrial city in northwestern Hungary' },
    { type: 'content', name: 'Miskolc', path: '/cities/miskolc', description: 'University city in northern Hungary' },
  ];

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Limit to 8 results

    setSearchResults(filtered);
  };

  const handleSearchResultClick = (item: any) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    navigate(item.path);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false); // Close menu when opening search
      // Focus search input after animation
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 300);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-brand-gray dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container">
          <div className="flex items-center justify-between h-14">
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                /* Search Mode Layout */
                <motion.div
                  key="search-mode"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center w-full space-x-3"
                >
                  {/* Close Search Button */}
                  <motion.button
                    onClick={toggleSearch}
                    className="p-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-full smooth-transition"
                    aria-label="Close Search"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>

                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Search everything..."
                      className="w-full px-4 py-2 text-sm bg-brand-light-gray dark:bg-gray-800 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-brand-orange dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    
                    {/* Search Results Dropdown */}
                    {searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-brand-gray dark:border-gray-600 max-h-80 overflow-y-auto z-50"
                      >
                        {searchResults.map((item, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSearchResultClick(item)}
                            className="w-full text-left px-4 py-3 hover:bg-brand-light-gray dark:hover:bg-gray-700 border-b border-brand-gray dark:border-gray-600 last:border-b-0 smooth-transition"
                            whileHover={{ x: 4 }}
                          >
                            <div className="font-medium text-sm text-foreground dark:text-white">{item.name}</div>
                            <div className="text-xs text-muted-foreground dark:text-gray-400 mt-1">{item.description}</div>
                            <div className="text-xs text-brand-orange mt-1">{item.type}</div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Theme Toggle */}
                  <ThemeToggle />
                </motion.div>
              ) : (
                /* Normal Mode Layout */
                <motion.div
                  key="normal-mode"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between w-full"
                >
                  {/* Logo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/" className="flex items-center">
                      <span className="font-secondary text-brand-orange font-extrabold text-2xl">hu</span>
                    </Link>
                  </motion.div>

                  {/* Right side controls */}
                  <div className="flex items-center space-x-2">
                    {/* Search Icon */}
                    <motion.button
                      onClick={toggleSearch}
                      className="p-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-full smooth-transition"
                      aria-label="Search"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Search className="h-5 w-5" />
                    </motion.button>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Hamburger Menu */}
                    <motion.button
                      onClick={toggleMenu}
                      className="p-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-full smooth-transition"
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
                </motion.div>
              )}
            </AnimatePresence>
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
              className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl overflow-y-auto"
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
                            : 'hover:bg-brand-light-gray dark:hover:bg-gray-800 text-foreground dark:text-gray-200'
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
