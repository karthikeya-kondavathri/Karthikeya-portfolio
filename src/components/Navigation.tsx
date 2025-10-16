import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Code, Briefcase, Award, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
        
        // Update active section based on scroll position
        const sections = navItems.map(item => item.id);
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 3D Desktop Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-2xl' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, rotateX: -90 }}
        animate={{ y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* 3D Logo */}
            <motion.div 
              className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
              onClick={() => scrollToSection('hero')}
              whileHover={{ 
                rotateY: 10,
                scale: 1.05,
                translateZ: 10
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="text-gradient">Karthikeya</span>
            </motion.div>

            {/* 3D Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ 
                    rotateY: 5,
                    scale: 1.05,
                    translateZ: 15
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring" }}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                    </motion.div>
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* 3D Mobile Theme Toggle and Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 3D Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-2xl"
              initial={{ y: -100, rotateX: -90 }}
              animate={{ y: 0, rotateX: 0 }}
              exit={{ y: -100, rotateX: -90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="container mx-auto px-6 py-4">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -50, rotateY: -90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10, rotateY: 5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full justify-start transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-primary/10 text-primary hover:bg-primary/20'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring" }}
                        >
                          <item.icon className="h-4 w-4 mr-3" />
                        </motion.div>
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Scroll Progress Indicator */}
      {typeof window !== 'undefined' && (
        <motion.div 
          className="fixed top-0 left-0 h-1 bg-gradient-primary z-50 transition-all duration-300"
          style={{
            width: `${((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
            boxShadow: '0 0 10px rgba(var(--primary), 0.5)'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* 3D Floating Action Button - Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              translateZ: 10
            }}
            whileTap={{ scale: 0.9 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Button
              size="sm"
              className="fixed bottom-6 right-6 z-40 rounded-full w-12 h-12 shadow-2xl hover:shadow-3xl"
              onClick={() => scrollToSection('hero')}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Home className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;