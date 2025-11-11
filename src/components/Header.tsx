import React, { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://static.wixstatic.com/media/5d6bf1_2dda9171c0194f33a8d9014c68b46ae7~mv2.png" 
              alt="Arvi School of Music logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Arvi School of Music</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('instruments')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Instruments
            </button>
            <button 
              onClick={() => scrollToSection('teacher')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Teacher
            </button>
             <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('affiliations')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Affiliations
            </button>
           
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('instruments')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Instruments
              </button>
              <button 
                onClick={() => scrollToSection('teacher')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Teacher
              </button>
              <button 
                onClick={() => scrollToSection('affiliations')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Affiliations
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg mx-4 hover:bg-blue-700"
              >
                Enquire Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;