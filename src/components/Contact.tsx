import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentAge: '',
    instrument: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      studentAge: '',
      instrument: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the fee?',
      answer: 'Charges are based on the type of classes, number of classes, and the instruments. Fee structure and terms can be found at www.arvischool.com/fees. We do not have admission fees, book fees, or any other non-essential charges.'
    },
    {
      question: 'What opportunities do the students have?',
      answer: 'Students have access to the best syllabus, interactive tools, mentorship, musical community, online recitals, studio visits, song recording, and much more. And of course, most of them have no charges at all.',
    },
    {
      question: 'What type of classes are these?',
      answer: 'We offer both online and offline music classes. We also have both group and private classes.',
    },
    {
      question: 'What makes Arvi School of Music ideal for homeschoolers?',
      answer: 'We have thought about this question for so long that we believe we have the answers. Students who are homeschooled have immense potential. This is very powerful when unlocked. We hope to be that key.',
    },
    {
      question: 'I\'m still not convinced.',
      answer: 'We understand that you need the best for your child. Can you call or write to us and let us know your expectations? Even if we cannot offer them, they\'ll still be great feedback.',
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Do you think we can make a difference? Call us and find out.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <a 
                    href="tel:+917760523376"
                    className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <Phone className="h-6 w-6 text-blue-600" />
                  </a>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+91 77605 23376</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">arvimusicedu@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Pipeline Road, MSR Nagar, near New BEL Road</p>
                   <p className="text-gray-700">near Dollars Colony, near Mathikere</p>
                   <p className="text-gray-700">near Ramaiah College, Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-700 text-base">Monday-Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-700 text-base">Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-700">
                    We typically respond to inquiries within 24 hours. For urgent matters,
                    please call directly during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a message for a callback</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student Age *
                    </label>
                    <select
                      name="studentAge"
                      value={formData.studentAge}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      <option value="6-8">6-8 years</option>
                      <option value="9-12">9-12 years</option>
                      <option value="13-15">13-15 years</option>
                      <option value="16-18">16-18 years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instrument of Interest *
                  </label>
                  <select
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select instrument</option>
                    <option value="guitar">Guitar</option>
                    <option value="piano">Piano</option>
                    <option value="keyboard">Keyboard</option>
                    <option value="drums">Drums</option>
                    <option value="ukulele">Ukulele</option>
                    <option value="music-production">Music Production</option>
                    <option value="music-theory">Music Theory</option>
                    <option value="songwriting">Songwriting</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your child's musical interests and any questions you have..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message (Or call us)</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div 
          ref={faqRef}
          className={`mt-8 transition-all duration-1000 delay-800 ${
            faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const colors = [
                'bg-gradient-to-br from-blue-50 to-blue-100',
                'bg-gradient-to-br from-green-50 to-green-100',
                'bg-gradient-to-br from-purple-50 to-purple-100',
                'bg-gradient-to-br from-orange-50 to-orange-100',
                'bg-gradient-to-br from-red-50 to-red-100'
              ];
              return (
              <div 
                key={index} 
                className={`${colors[index % colors.length]} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-500 ${
                  faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;