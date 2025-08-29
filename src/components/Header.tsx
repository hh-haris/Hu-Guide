import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedSearch from '@/components/EnhancedSearch';
import { AnimatedThemeToggler } from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenMenu = () => setIsMenuOpen(true);
    window.addEventListener('openMenu', handleOpenMenu);
    return () => window.removeEventListener('openMenu', handleOpenMenu);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: 'Overview', path: '/overview' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'USAT', path: '/usat' },
    { name: 'University Finder', path: '/university-search' },
    { name: 'Documents', path: '/documents' },
    { name: 'Cities', path: '/cities' },
    { name: 'Seniors', path: '/seniors' },
    { name: 'Official', path: '/official' },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-neutral-800 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container">
          <div className="flex items-center justify-between h-14">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="flex items-center">
                <span className="font-secondary text-brand-orange font-extrabold text-2xl">hu</span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-2">
              <EnhancedSearch />
              <AnimatedThemeToggler />
              <motion.button
                onClick={toggleMenu}
                className="p-2 hover:bg-white/10 rounded-full transition"
                aria-label="Menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="open" initial={{ rotate: 180 }} animate={{ rotate: 0 }} exit={{ rotate: 180 }} transition={{ duration: 0.2 }}>
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
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
                    <motion.li key={item.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`block py-3 px-4 rounded-lg transition text-base font-primary ${
                          isActive(item.path) ? 'bg-brand-orange text-white' : 'hover:bg-muted text-foreground'
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
