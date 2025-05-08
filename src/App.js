import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Courses from './components/Courses';
import ScrollToTopButton from './components/ScrollToTopButton';
import CallButton from './components/CallButton';
import WhyChooseDivine from './components/WhyChooseDivine';
import Achievements from './components/Achievements'
import AskDoubtPopup from './components/AskDoubtPopup';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <WhyChooseDivine />
      <Achievements/>
      <Testimonials />
      <About />
      <AskDoubtPopup />
      <Contact />
      <ScrollToTopButton />
      <CallButton />
      <Footer />
    </div>
  );
}

export default App;
