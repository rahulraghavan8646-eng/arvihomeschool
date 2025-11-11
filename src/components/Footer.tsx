import React from 'react';
import { Music, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 mb-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://static.wixstatic.com/media/5d6bf1_2dda9171c0194f33a8d9014c68b46ae7~mv2.png" 
                alt="Arvi School of Music logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold">Arvi School of Music for Homeschoolers</span>
              
            </button>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering homeschool families with quality music education that fits their vision. 
              Expert teacher, personalized instruction, and a passion for nurturing musical talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('instruments')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instruments
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('teacher')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Teacher
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('affiliations')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Affiliations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <a href="tel:+917760523376" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <span className="text-gray-300 text-base">+91 77605 23376</span>
                
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-base">arvimusicedu@gmail.com</span>
                
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-base">Bengaluru, Karnataka, India</span>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base mb-2 md:mb-0">
              © 2024 Arvi School of Music. All rights reserved.
            </p>
            <div className="flex space-x-6 text-base text-gray-400">
              <a href="https://www.arvischool.com/fees#privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 transform hover:scale-105">Privacy Policy</a>
              <a href="https://www.arvischool.com/fees" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 transform hover:scale-105">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;