import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Teacher = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: integrationRef, isVisible: integrationVisible } = useScrollAnimation();

  return (
    <section id="teacher" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-2 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Meet Your Music Teacher</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          "A multi-instrumentalist, film composer, with a decade of music experience, and your friend"
          </p>
        </div>

        <div 
          ref={profileRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            profileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rahul Raghavan</h3>
                  <p className="text-gray-700">Founder & Homeschool Advocate</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rahul Raghavan is a Music Director, Educator, Composer, Multi-Instrumentalist, Producer, and Audio Engineer. He composes music for films, documentaries, advertisements, music videos, educational content, short films, and theater. He teaches guitar, keyboard, ukulele, drums, music production, and music theory after mastering all grades in each of them. He can additionally play veena, flute, djembe, handpan, and cajon.
                "Our knowledge is usually a drop in the ocean; I've tried to collect as many drops as I can."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Achievements</p>
                    <p className="text-base text-gray-700">Movies, documentaries, short films, educator, sound engineer, and a life dedicated to music</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Experience</p>
                    <p className="text-base text-gray-700">10+ years of teaching, 500+ students</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Teaching Philosophy</p>
                    <p className="text-base text-gray-700">
                      "I want my students to have Music as a lifelong friend. My life is dedicated to this pursuit. My students stay in touch long after our classes. I mentor them and they mentor me. Their achievements become my celebrations. That really is hard to beat."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-5 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://static.wixstatic.com/media/5d6bf1_ae00a71e470a4408b97ab4ad83df6b0d~mv2.jpg" 
                alt="Rahul Raghavan teaching music" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Musical Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teacher;