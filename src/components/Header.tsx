import React from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Add offset to account for fixed header
      setTimeout(() => {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse flex-shrink-0">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              מי אני
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              פעילויות שלי
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              המלצות
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              תמונות מהשטח
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              שנדבר?
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                מי אני
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                פעילויות שלי
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                המלצות
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                תמונות מהשטח
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-right px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                שנדבר?
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;