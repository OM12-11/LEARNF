import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnologyOverview from './components/TechnologyOverview';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import TrustIndicators from './components/TrustIndicators';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TechnologyOverview />
      <Benefits />
      <HowItWorks />
      <Impact />
      <TrustIndicators />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;