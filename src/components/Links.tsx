import React from 'react';
import { ExternalLink, Music, Users, User } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Links = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();

  const links = [
    {
      title: 'Arvi School of Music',
      description: 'Explore our main website to learn more about our comprehensive music education programs and philosophy.',
      url: 'https://www.arvischool.com',
      icon: Music,
      color: 'blue'
    },
    {
      title: 'Multi-Musician Program',
      description: 'Discover our unique program designed to help students master multiple instruments and become versatile musicians.',
      url: 'https://www.arvischool.com/multi-musician',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Teacher Portfolio',
      description: 'View Rahul\'s complete portfolio, showcasing his musical journey, compositions, and teaching achievements.',
      url: 'https://www.arvischool.com/rahul',
      icon: User,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          buttonBg: 'bg-blue-600 hover:bg-blue-700',
          buttonText: 'text-white'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600',
          buttonBg: 'bg-green-600 hover:bg-green-700',
          buttonText: 'text-white'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          iconBg: 'bg-orange-100',
          iconColor: 'text-orange-600',
          buttonBg: 'bg-orange-600 hover:bg-orange-700',
          buttonText: 'text-white'
        };
      default:
        return {
          bg: 'bg-gray-50',
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
          buttonBg: 'bg-gray-600 hover:bg-gray-700',
          buttonText: 'text-white'
        };
    }
  };

  return (
    <section id="links" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore More</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover additional resources and programs to enhance your musical journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const colors = getColorClasses(link.color);
            const refs = [card1Ref, card2Ref, card3Ref];
            const visibilities = [card1Visible, card2Visible, card3Visible];
            
            return (
              <div
                key={index}
                ref={refs[index]}
                className={`${colors.bg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  visibilities[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-full mx-auto mb-2 transform hover:rotate-12 transition-transform duration-300`}>
                  <link.icon className={`h-8 w-8 ${colors.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-700 text-center mb-4 leading-relaxed">
                  {link.description}
                </p>
                <div className="text-center">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 ${colors.buttonBg} ${colors.buttonText} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Links;