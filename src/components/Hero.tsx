import React from 'react';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
          ref={heroRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="transition-all duration-1000 delay-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2">
              Music Education
              <span className="block text-blue-600">Designed for</span>
              <span className="block text-blue-600">Homeschoolers</span>
            </h1>
            <p className="mt-4 text-xl text-gray-700 leading-relaxed">
              We know homeschoolers have immense potential,
              so we've changed music education for them.
              We're a breakthrough because we've questioned everything.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Let's go</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('instruments')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Instruments
              </button>
            </div>

            <div 
              ref={featuresRef}
              className={`mt-8 grid grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 transform hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">For Homeschoolers</h3>
                <p className="text-base text-gray-700">Lessons that adapt to your homeschool vision</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 transform hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Personalized Learning</h3>
                <p className="text-base text-gray-700">Tailored to each student's pace and style</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-2 transform hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Expert Instruction</h3>
                <p className="text-base text-gray-700">A teacher who understands the potential of homeschooling</p>
              </div>
            </div>
          </div>
          
          <div className="relative transition-all duration-1000 delay-400">
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://static.wixstatic.com/media/5d6bf1_2da2116faec74f21ae06998f1f7d92f1~mv2.jpg" 
                alt="Homeschooled students learning music" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-gray-900">Only 10 slots</p>
              <p className="text-base text-gray-700">Small numbers, big impact, real difference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;