import React from 'react';
import { Award, Shield, BookOpen, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Affiliations = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const getLogoUrl = (name: string) => {
    switch (name) {
      case 'NIOS':
        return 'https://static.wixstatic.com/media/5d6bf1_e58ed9eb2d2245b090d06877bc60bf75~mv2.jpg';
      case 'Trinity College London':
        return 'https://static.wixstatic.com/media/5d6bf1_e46f0d2c834844239591ef711ce48fbf~mv2.jpg';
      case 'Rockschool Awards':
        return 'https://static.wixstatic.com/media/5d6bf1_bb788543c3744e1e9df5e76ca44ab7b3~mv2.jpg';
      case 'Berklee College of Music':
        return 'https://static.wixstatic.com/media/5d6bf1_a15b6a09b8b94268bf8b2dbc372937a6~mv2.png';
      case 'KM Music Conservatory':
        return 'https://static.wixstatic.com/media/5d6bf1_432cafc851de4f178864b5510b6e0f47~mv2.png';
      default:
        return '';
    }
  };

  const affiliations = [
    {
      name: 'NIOS',
      type: 'Indian Board',
      icon: Award,
      color: 'blue',
      description: 'National Institute of Open Schooling: We curate our syllabus for students specifically choosing NIOS, including their musical subjects'
    },
    {
      name: 'Trinity College London',
      type: 'Exam Board',
      icon: Award,
      color: 'purple',
      description: 'Grades from initial to 8, UCAS points and credits for higher education. Several options for each instrument: Classical and Jazz, Rock and Pop, and Theory'
    },
    {
      name: 'Rockschool Awards',
      type: 'Exam Board',
      icon: BookOpen,
      color: 'green',
      description: 'Modern board with digital tool-based learning. Ideal for contemporary pathways such as music production and ukulele. Also UCAS-eligible for credits in the UCAS system'
    },
    {
      name: 'Berklee College of Music',
      type: 'Higher Education',
      icon: Shield,
      color: 'orange',
      description: 'We curate and apply for higher education courses with Berklee College of Music, including their auditions. A prestigious college in Boston, this is the world\'s premier university for studying music'
    },
    {
      name: 'KM Music Conservatory',
      type: 'Summer Courses',
      icon: Shield,
      color: 'red',
      description: 'We select and apply students to summer courses at KM Music Conservatory, including their auditions'
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200',
          iconColor: 'text-blue-600'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200',
          iconColor: 'text-purple-600'
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-br from-green-50 to-green-100',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
          iconColor: 'text-green-600'
        };
      case 'orange':
        return {
          bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
          iconColor: 'text-orange-600'
        };
      case 'red':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-red-100',
          iconBg: 'bg-gradient-to-br from-red-100 to-red-200',
          iconColor: 'text-red-600'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
          iconBg: 'bg-gradient-to-br from-gray-100 to-gray-200',
          iconColor: 'text-gray-600'
        };
    }
  };

  return (
    <section id="affiliations" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Certifications & Affiliations</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trust in our professional credentials and commitment to excellence in music education
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {affiliations.map((affiliation, index) => {
            const colors = getColorClasses(affiliation.color);
            return (
            <div 
              key={index} 
              className={`${colors.bg} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-40 h-40 bg-white rounded-xl mx-auto mb-2 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <img 
                  src={getLogoUrl(affiliation.name)} 
                  alt={`${affiliation.name} logo`}
                  className="max-w-32 max-h-32 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {affiliation.name}
              </h3>
              <p className={`${colors.iconColor} font-medium mb-2`}>{affiliation.type}</p>
              <p className="text-gray-700 text-base">{affiliation.description}</p>
            </div>
          );
          })}
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Certified Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;