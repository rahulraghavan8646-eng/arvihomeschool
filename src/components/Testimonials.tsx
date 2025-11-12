
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { ref: studentsRef, isVisible: studentsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: 'Rohan\'s mother',
      role: 'Keyboard student- Beginner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'I love the classes that my kid is attending with Arvi school of music. He is getting the freedom to be a good pianist. Arvi school of music is the best. He has very good focus during the sessions and I am very happy because of that. TYSM Arvi. You rock!😆',
      rating: 5,
      color: 'blue'
    },
    {
      name: 'Chirag\'s Father',
      role: 'Trinity Grade 7 Guitar player',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Extremely happy with my kid’s progress under Rahul’s watchful guidance and mentorship. Kudos to Arvi School for a doing wonderful job of nurturing talent and keeping the kids interested in music so that they can pursue their passion in the long term as well.',
      rating: 5,
      color: 'green'
    },
    {
      name: 'Vedh\'s mother',
      role: 'Keyboard grade 3 student',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Very kind, friendly, patient and talented teacher. Understands the  abilities of kids and pushes them to do their best. Great place to learn music, Highly recommend!',
      rating: 5,
      color: 'purple'
    }
  ];

  const studentTestimonials = [
    {
      name: 'Sai Priya',
      instrument: 'Trinity Guitar grade 4 and Songwriting',
      text: 'I have learnt music with Rahul sir under Arvi school of music and fine arts for almost 4 years and it has been the most wonderful experience . sir has not only taught me music but also how to enjoy it to the fullest.',
      color: 'orange'
    },
    {
      name: 'Chinmay',
      instrument: 'Trinity Guitar and Trinity Keyboard Grade 5',
      text: 'It is an amazing place to learn to play an instrument FAST. The teacher is very understanding, and classes are always fun to attend unlike other music schools. 100% recommended.',
      color: 'red'
    },
    {
      name: 'Rahi',
      instrument: 'Rap, Songwriting and Music Production',
      text: 'Had great experience , the way you put efforts towards project is mind blowing. Very talented musician and very humble human being. Thank you so much sir ! May god bless you 😇',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-50 to-blue-100';
      case 'green':
        return 'bg-gradient-to-br from-green-50 to-green-100';
      case 'purple':
        return 'bg-gradient-to-br from-purple-50 to-purple-100';
      case 'orange':
        return 'bg-gradient-to-br from-orange-50 to-orange-100';
      case 'red':
        return 'bg-gradient-to-br from-red-50 to-red-100';
      case 'indigo':
        return 'bg-gradient-to-br from-indigo-50 to-indigo-100';
      default:
        return 'bg-white';
    }
  };
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Testimonials</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our students and their parents. We thank them for their really kind words. Very encouraging!
          </p>
        </div>

        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {testimonials.map((testimonial, index) => {
            return (
            <div 
              key={index} 
              className={`${getColorClasses(testimonial.color)} rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 ${
                testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-700">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
              </div>
            </div>
          );
          })}
        </div>

        <div 
          ref={studentsRef}
          className={`bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-lg transition-all duration-1000 delay-600 ${
            studentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((student, index) => {
              return (
              <div 
                key={index} 
                className={`${getColorClasses(student.color)} rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 ${
                  studentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-gray-700">{student.instrument}</p>
                </div>
                
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">{student.text}</p>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Join Our Musical Family
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
