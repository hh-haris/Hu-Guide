
import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteSearchItems } from '@/search/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
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

  // Close search on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setQuery('');
  }, [location.pathname]);

  // Escape key closes search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

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

  const filteredSearch = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as { label: string; path: string }[];
    return siteSearchItems
      .filter((item) => item.label.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
    // Slight delay to focus input after it mounts
    setTimeout(() => {
      const input = document.getElementById('header-search-input') as HTMLInputElement | null;
      input?.focus();
    }, 50);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-gray"
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

            {/* Center Search Bar (expanded state) */}
            {isSearchOpen && (
              <div className="flex-1 mx-2">
                <div className="flex items-center h-10 rounded-full border border-brand-gray bg-white px-2">
                  <button
                    onClick={closeSearch}
                    className="p-2 rounded-full hover:bg-brand-light-gray smooth-transition"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <input
                    id="header-search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="ml-2 flex-1 bg-transparent outline-none font-primary text-sm text-foreground"
                  />
                  <div className="ml-2">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            )}

            {/* Right side controls */}
            {!isSearchOpen && (
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <ThemeToggle />
                {/* Search Icon (between theme toggle and hamburger) */}
                <motion.button
                  onClick={openSearch}
                  className="p-2 hover:bg-brand-light-gray rounded-full smooth-transition"
                  aria-label="Search"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SearchIcon className="h-5 w-5" />
                </motion.button>
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
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Search suggestions dropdown */}
      <AnimatePresence>
        {isSearchOpen && query && filteredSearch.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="fixed top-14 left-0 right-0 z-50"
          >
            <div className="mobile-container">
              <div className="rounded-xl border border-brand-gray bg-white shadow">
                {filteredSearch.map((item) => (
                  <button
                    key={item.path}
                    className="block w-full text-left px-4 py-3 font-primary text-sm hover:bg-brand-light-gray smooth-transition"
                    onClick={() => {
                      navigate(item.path);
                      closeSearch();
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && !isSearchOpen && (
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
