// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // Initialize all components
  initializeScrollAnimations();
  initializeInstruments();
  initializeTestimonials();
  initializeAffiliations();
  initializeLinks();
  initializeFAQs();
  initializeContactForm();
  initializeBackToTop();
});

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Navigation functions
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

// Initialize instruments section
function initializeInstruments() {
  const instruments = [
    {
      name: 'Guitar',
      icon: 'guitar',
      description: 'Acoustic, Electric, or Classical Guitars',
      details: 'Performance oriented. Let us rock the campfires',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    {
      name: 'Piano',
      icon: 'piano',
      description: 'Read music notation and play like a professional pianist',
      details: 'From Coldplay and Taylor Swift to Beethoven and Mozart, the world is yours',
      color: 'bg-gradient-to-br from-red-50 to-red-100'
    },
    {
      name: 'Keyboard',
      icon: 'piano',
      description: 'Digital keyboard, one-person band, and modern music',
      details: 'Use all the functions on the keyboard to sing and play as a one-person band',
      color: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      name: 'Drums',
      icon: 'drum',
      description: 'Acoustic or electric drums: contemporary to modern',
      details: 'Drummers are rare; the world is waiting for you to perform',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      name: 'Ukulele',
      icon: 'guitar',
      description: 'Fun and easy introduction to stringed instruments',
      details: 'Travel-friendly, beginner-friendly, kid-friendly. Learn your favorite songs',
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100'
    },
    {
      name: 'Music Production',
      icon: 'headphones',
      description: 'Produce your own music professionally',
      details: 'See yourself on Spotify and 30+ music platforms',
      color: 'bg-gradient-to-br from-indigo-50 to-indigo-100'
    },
    {
      name: 'Music Theory',
      icon: 'file-text',
      description: 'Comprehensive understanding of musical concepts',
      details: 'In-depth analysis of music? This is for the select few',
      color: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      name: 'Songwriting',
      icon: 'mic',
      description: 'Create and compose your songs with professional production',
      details: 'Writing is an art; express your emotions as songs and have them produced by an expert',
      color: 'bg-gradient-to-br from-pink-50 to-pink-100'
    }
  ];

  const grid = document.getElementById('instruments-grid');
  instruments.forEach((instrument, index) => {
    const card = document.createElement('div');
    card.className = `${instrument.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 fade-in`;
    card.style.transitionDelay = `${index * 100}ms`;
    
    card.innerHTML = `
      <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
        <i data-lucide="${instrument.icon}" class="h-8 w-8 text-blue-600"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 text-center mb-2">${instrument.name}</h3>
      <p class="text-gray-600 text-center mb-2 text-base">${instrument.description}</p>
      <div class="space-y-2">
        <div class="flex items-center justify-between text-center text-base">
          <span class="text-gray-500"></span>
          <span class="font-medium text-gray-800">${instrument.details}</span>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Re-initialize icons for new elements
  lucide.createIcons();
}

// Initialize testimonials section
function initializeTestimonials() {
  const testimonials = [
    {
      name: "Rohan's mother",
      role: 'Keyboard student- Beginner',
      text: 'I love the classes that my kid is attending with Arvi school of music. He is getting the freedom to be a good pianist. Arvi school of music is the best. He has very good focus during the sessions and I am very happy because of that. TYSM Arvi. You rock!😆',
      rating: 5,
      color: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      name: "Chirag's Father",
      role: 'Trinity Grade 7 Guitar player',
      text: 'Extremely happy with my kid\'s progress under Rahul\'s watchful guidance and mentorship. Kudos to Arvi School for a doing wonderful job of nurturing talent and keeping the kids interested in music so that they can pursue their passion in the long term as well.',
      rating: 5,
      color: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      name: "Vedh's mother",
      role: 'Keyboard grade 3 student',
      text: 'Very kind, friendly, patient and talented teacher. Understands the abilities of kids and pushes them to do their best. Great place to learn music, Highly recommend!',
      rating: 5,
      color: 'bg-gradient-to-br from-purple-50 to-purple-100'
    }
  ];

  const studentTestimonials = [
    {
      name: 'Sai Priya',
      instrument: 'Trinity Guitar grade 4 and Songwriting',
      text: 'I have learnt music with Rahul sir under Arvi school of music and fine arts for almost 4 years and it has been the most wonderful experience . sir has not only taught me music but also how to enjoy it to the fullest.',
      color: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      name: 'Chinmay',
      instrument: 'Trinity Guitar and Trinity Keyboard Grade 5',
      text: 'It is an amazing place to learn to play an instrument FAST. The teacher is very understanding, and classes are always fun to attend unlike other music schools. 100% recommended.',
      color: 'bg-gradient-to-br from-red-50 to-red-100'
    },
    {
      name: 'Rahi',
      instrument: 'Rap, Songwriting and Music Production',
      text: 'Had great experience , the way you put efforts towards project is mind blowing. Very talented musician and very humble human being. Thank you so much sir ! May god bless you 😇',
      color: 'bg-gradient-to-br from-indigo-50 to-indigo-100'
    }
  ];

  // Parent testimonials
  const testimonialsGrid = document.getElementById('testimonials-grid');
  testimonials.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.className = `${testimonial.color} rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 fade-in`;
    card.style.transitionDelay = `${index * 200}ms`;
    
    const stars = Array(testimonial.rating).fill('<i data-lucide="star" class="h-5 w-5 text-yellow-400 fill-current"></i>').join('');
    
    card.innerHTML = `
      <div class="flex items-center space-x-4 mb-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">${testimonial.name}</h3>
          <p class="text-gray-700">${testimonial.role}</p>
        </div>
      </div>
      <div class="flex space-x-1 mb-2">${stars}</div>
      <div class="relative">
        <i data-lucide="quote" class="h-8 w-8 text-blue-200 absolute -top-2 -left-2"></i>
        <p class="text-gray-700 italic pl-6">${testimonial.text}</p>
      </div>
    `;
    
    testimonialsGrid.appendChild(card);
  });

  // Student testimonials
  const studentGrid = document.getElementById('student-testimonials-grid');
  studentTestimonials.forEach((student, index) => {
    const card = document.createElement('div');
    card.className = `${student.color} rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 fade-in`;
    card.style.transitionDelay = `${(index + 3) * 200}ms`;
    
    const stars = Array(5).fill('<i data-lucide="star" class="h-5 w-5 text-yellow-400 fill-current"></i>').join('');
    
    card.innerHTML = `
      <div class="mb-4">
        <h4 class="text-lg font-semibold text-gray-900">${student.name}</h4>
        <p class="text-gray-700">${student.instrument}</p>
      </div>
      <div class="flex space-x-1 mb-2">${stars}</div>
      <div class="relative">
        <i data-lucide="quote" class="h-8 w-8 text-blue-200 absolute -top-2 -left-2"></i>
        <p class="text-gray-700 italic pl-6">${student.text}</p>
      </div>
    `;
    
    studentGrid.appendChild(card);
  });
  
  // Re-initialize icons
  lucide.createIcons();
}

// Initialize affiliations section
function initializeAffiliations() {
  const affiliations = [
    {
      name: 'NIOS',
      type: 'Indian Board',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      description: 'National Institute of Open Schooling: We curate our syllabus for students specifically choosing NIOS, including their musical subjects',
      logo: 'https://static.wixstatic.com/media/5d6bf1_e58ed9eb2d2245b090d06877bc60bf75~mv2.jpg'
    },
    {
      name: 'Trinity College London',
      type: 'Exam Board',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      description: 'Grades from initial to 8, UCAS points and credits for higher education. Several options for each instrument: Classical and Jazz, Rock and Pop, and Theory',
      logo: 'https://static.wixstatic.com/media/5d6bf1_e46f0d2c834844239591ef711ce48fbf~mv2.jpg'
    },
    {
      name: 'Rockschool Awards',
      type: 'Exam Board',
      color: 'bg-gradient-to-br from-green-50 to-green-100',
      description: 'Modern board with digital tool-based learning. Ideal for contemporary pathways such as music production and ukulele. Also UCAS-eligible for credits in the UCAS system',
      logo: 'https://static.wixstatic.com/media/5d6bf1_bb788543c3744e1e9df5e76ca44ab7b3~mv2.jpg'
    },
    {
      name: 'Berklee College of Music',
      type: 'Higher Education',
      color: 'bg-gradient-to-br from-orange-50 to-orange-100',
      description: 'We curate and apply for higher education courses with Berklee College of Music, including their auditions. A prestigious college in Boston, this is the world\'s premier university for studying music',
      logo: 'https://static.wixstatic.com/media/5d6bf1_a15b6a09b8b94268bf8b2dbc372937a6~mv2.png'
    },
    {
      name: 'KM Music Conservatory',
      type: 'Summer Courses',
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      description: 'We select and apply students to summer courses at KM Music Conservatory, including their auditions',
      logo: 'https://static.wixstatic.com/media/5d6bf1_432cafc851de4f178864b5510b6e0f47~mv2.png'
    }
  ];

  const grid = document.getElementById('affiliations-grid');
  affiliations.forEach((affiliation, index) => {
    const card = document.createElement('div');
    card.className = `${affiliation.color} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 fade-in`;
    card.style.transitionDelay = `${index * 150}ms`;
    
    card.innerHTML = `
      <div class="flex items-center justify-center w-40 h-40 bg-white rounded-xl mx-auto mb-2 transform hover:scale-110 transition-transform duration-300 shadow-md">
        <img src="${affiliation.logo}" alt="${affiliation.name} logo" class="max-w-32 max-h-32 object-contain">
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-1">${affiliation.name}</h3>
      <p class="text-blue-600 font-medium mb-2">${affiliation.type}</p>
      <p class="text-gray-700 text-base">${affiliation.description}</p>
    `;
    
    grid.appendChild(card);
  });
}

// Initialize links section
function initializeLinks() {
  const links = [
    {
      title: 'Arvi School of Music',
      description: 'Explore our main website to learn more about our comprehensive music education programs and philosophy.',
      url: 'https://www.arvischool.com',
      icon: 'music',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      title: 'Multi-Musician Program',
      description: 'Discover our unique program designed to help students master multiple instruments and become versatile musicians.',
      url: 'https://www.arvischool.com/multi-musician',
      icon: 'users',
      color: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      title: 'Teacher Portfolio',
      description: 'View Rahul\'s complete portfolio, showcasing his musical journey, compositions, and teaching achievements.',
      url: 'https://www.arvischool.com/rahul',
      icon: 'user',
      color: 'bg-gradient-to-br from-orange-50 to-orange-100'
    }
  ];

  const grid = document.getElementById('links-grid');
  links.forEach((link, index) => {
    const card = document.createElement('div');
    card.className = `${link.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 fade-in`;
    card.style.transitionDelay = `${index * 200}ms`;
    
    card.innerHTML = `
      <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 transform hover:rotate-12 transition-transform duration-300">
        <i data-lucide="${link.icon}" class="h-8 w-8 text-blue-600"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 text-center mb-2">${link.title}</h3>
      <p class="text-gray-700 text-center mb-4 leading-relaxed">${link.description}</p>
      <div class="text-center">
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <span>Visit Site</span>
          <i data-lucide="external-link" class="h-4 w-4"></i>
        </a>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Re-initialize icons
  lucide.createIcons();
}

// Initialize FAQs
function initializeFAQs() {
  const faqs = [
    {
      question: 'What is the fee?',
      answer: 'Charges are based on the type of classes, number of classes, and the instruments. Fee structure and terms can be found at www.arvischool.com/fees. We do not have admission fees, book fees, or any other non-essential charges.',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      question: 'What opportunities do the students have?',
      answer: 'Students have access to the best syllabus, interactive tools, mentorship, musical community, online recitals, studio visits, song recording, and much more. And of course, most of them have no charges at all.',
      color: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      question: 'What type of classes are these?',
      answer: 'We offer both online and offline music classes. We also have both group and private classes.',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    {
      question: 'What makes Arvi School of Music ideal for homeschoolers?',
      answer: 'We have thought about this question for so long that we believe we have the answers. Students who are homeschooled have immense potential. This is very powerful when unlocked. We hope to be that key.',
      color: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      question: 'I\'m still not convinced.',
      answer: 'We understand that you need the best for your child. Can you call or write to us and let us know your expectations? Even if we cannot offer them, they\'ll still be great feedback.',
      color: 'bg-gradient-to-br from-red-50 to-red-100'
    }
  ];

  const container = document.getElementById('faq-container');
  faqs.forEach((faq, index) => {
    const faqElement = document.createElement('div');
    faqElement.className = `${faq.color} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-500 fade-in`;
    faqElement.style.transitionDelay = `${(index + 8) * 100}ms`;
    
    faqElement.innerHTML = `
      <button onclick="toggleFAQ(${index})" class="w-full px-6 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
        <h4 class="text-lg font-semibold text-gray-900">${faq.question}</h4>
        <i data-lucide="chevron-down" class="h-5 w-5 text-gray-500 faq-icon" id="faq-icon-${index}"></i>
      </button>
      <div class="px-6 pb-4 hidden" id="faq-answer-${index}">
        <p class="text-gray-700 text-base">${faq.answer}</p>
      </div>
    `;
    
    container.appendChild(faqElement);
  });
  
  // Re-initialize icons
  lucide.createIcons();
}

// Toggle FAQ function
let openFAQ = null;

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  
  if (openFAQ === index) {
    // Close current FAQ
    answer.classList.add('hidden');
    icon.setAttribute('data-lucide', 'chevron-down');
    openFAQ = null;
  } else {
    // Close previously open FAQ
    if (openFAQ !== null) {
      document.getElementById(`faq-answer-${openFAQ}`).classList.add('hidden');
      document.getElementById(`faq-icon-${openFAQ}`).setAttribute('data-lucide', 'chevron-down');
    }
    
    // Open new FAQ
    answer.classList.remove('hidden');
    icon.setAttribute('data-lucide', 'chevron-up');
    openFAQ = index;
  }
  
  // Re-initialize icons
  lucide.createIcons();
}

// Initialize contact form
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xeovqnpy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
      } else {
        alert('Oops! There was a problem submitting your form. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Oops! There was a problem submitting your form. Please try again or call us directly.');
    }
  });
}

// Initialize back to top button
function initializeBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
}