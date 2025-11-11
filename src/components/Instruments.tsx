import React from 'react';
import { Guitar, Piano, Drum, Music, Headphones, FileText, Mic } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Instruments = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const getCardColor = (name: string) => {
    switch (name) {
      case 'Guitar':
        return 'bg-gradient-to-br from-purple-50 to-purple-100';
      case 'Keyboard':
        return 'bg-gradient-to-br from-green-50 to-green-100';
      case 'Piano':
        return 'bg-gradient-to-br from-red-50 to-red-100';
      case 'Ukulele':
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100';
      case 'Music Production':
        return 'bg-gradient-to-br from-indigo-50 to-indigo-100';
      case 'Music Theory':
        return 'bg-gradient-to-br from-orange-50 to-orange-100';
      case 'Songwriting':
        return 'bg-gradient-to-br from-pink-50 to-pink-100';
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100';
    }
  };

  const instruments = [
    {
      name: 'Guitar',
      icon: Guitar,
      description: 'Acoustic, Electric, or Classical Guitars',
      details: 'Performance oriented. Let us rock the campfires',
    },
    {
      name: 'Piano',
      icon: Piano,
      description: 'Read music notation and play like a professional pianist',
      details: 'From Coldplay and Taylor Swift to Beethoven and Mozart, the world is yours', 
    },
    {
      name: 'Keyboard',
      icon: Piano,
      description: 'Digital keyboard, one-person band, and modern music',
      details: 'Use all the functions on the keyboard to sing and play as a one-person band',
    },
    {
      name: 'Drums',
      icon: Drum,
      description: 'Acoustic or electric drums: contemporary to modern',
      details: 'Drummers are rare; the world is waiting for you to perform',
    },
    {
      name: 'Ukulele',
      icon: Guitar,
      description: 'Fun and easy introduction to stringed instruments',
      details: 'Travel-friendly, beginner-friendly, kid-friendly. Learn your favorite songs'
    },
    {
      name: 'Music Production',
      icon: Headphones,
      description: 'Produce your own music professionally',
      details: 'See yourself on Spotify and 30+ music platforms',
    },
    {
      name: 'Music Theory',
      icon: FileText,
      description: 'Comprehensive understanding of musical concepts',
      details: 'In-depth analysis of music? This is for the select few', 
    },
    {
      name: 'Songwriting',
      icon: Mic,
      description: 'Create and compose your songs with professional production',
      details: 'Writing is an art; express your emotions as songs and have them produced by an expert',
    }
  ];

  return (
    <section id="instruments" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Instruments We Teach</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the perfect musical instrument for your homeschool journey. Our comprehensive 
            program covers everything from traditional instruments to modern music production.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {instruments.map((instrument, index) => {
            const isEven = index % 2 === 0;
            return (
            <div 
              key={index} 
              className={`${getCardColor(instrument.name)} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <instrument.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {instrument.name}
              </h3>
              <p className="text-gray-600 text-center mb-2 text-base">
                {instrument.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-center text-base">
                  <span className="text-gray-500"></span>
                  <span className="font-medium text-gray-800">{instrument.details}</span>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div 
          ref={ctaRef}
          className={`mt-8 text-center transition-all duration-1000 delay-800 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instruments;