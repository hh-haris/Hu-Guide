
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { searchSite } from '@/lib/search-data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(() => [] as ReturnType<typeof searchSite>);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
    setResults([]);
  };

  useEffect(() => {
    if (!isSearchOpen) return;
    const id = setTimeout(() => {
      setResults(searchSite(query));
    }, 100);
    return () => clearTimeout(id);
  }, [query, isSearchOpen]);

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

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background border-b border-brand-gray dark:border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            {!isSearchOpen && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="flex items-center">
                  <span className="font-secondary text-brand-orange font-extrabold text-2xl">hu</span>
                </Link>
              </motion.div>
            )}

            {/* Search bar expanded */}
            {isSearchOpen ? (
              <div className="flex-1 flex items-center gap-2">
                <button
                  aria-label="Close search"
                  className="p-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-full smooth-transition"
                  onClick={closeSearch}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative flex-1">
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search across the site..."
                    className="w-full h-10 rounded-full px-4 bg-brand-light-gray dark:bg-secondary outline-none text-sm"
                  />
                  {/* Results */}
                  <AnimatePresence>
                    {results.length > 0 && (
                      <motion.ul
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute z-50 mt-2 w-full max-h-64 overflow-auto rounded-lg border border-brand-gray dark:border-border bg-white dark:bg-background shadow"
                      >
                        {results.map((r) => (
                          <li key={r.path}>
                            <button
                              className="w-full text-left px-3 py-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-md font-primary text-sm"
                              onClick={() => {
                                closeSearch();
                                navigate(r.path);
                              }}
                            >
                              <div className="font-medium">{r.title}</div>
                              <div className="text-xs text-muted-foreground">{r.path}</div>
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <ThemeToggle />
                </div>
              </div>
            ) : (
              // Right side controls
              <div className="flex items-center space-x-2">
                {/* Hamburger Menu */}
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-brand-light-gray rounded-full smooth-transition"
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

                {/* Search Icon (between hamburger and theme toggle) */}
                <button
                  aria-label="Search"
                  className="p-2 hover:bg-brand-light-gray dark:hover:bg-gray-800 rounded-full smooth-transition"
                  onClick={openSearch}
                >
                  <Search className="h-5 w-5" />
                </button>

                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
            )}
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
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
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
                            : 'hover:bg-brand-light-gray text-foreground'
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
