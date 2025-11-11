import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Instruments from './components/Instruments';
import Teacher from './components/Teacher';
import Affiliations from './components/Affiliations';
import Testimonials from './components/Testimonials';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Instruments />
      <Teacher />
      <Testimonials />
      <Affiliations />
      <Links />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;