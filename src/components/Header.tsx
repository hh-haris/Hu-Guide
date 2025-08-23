
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Pro', path: '/pro' },
    { name: 'Official', path: '/official' }
  ];

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
              {/* Theme Toggle */}
              <ThemeToggle />
              
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
                      <div className="w-6 h-0.5 bg-foreground rounded-full transition-colors"></div>
                      <div className="w-6 h-0.5 bg-foreground rounded-full transition-colors"></div>
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
              className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-xl overflow-y-auto"
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
                            : 'hover:bg-brand-light-gray dark:hover:bg-gray-800 text-foreground'
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
