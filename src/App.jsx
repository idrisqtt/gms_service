import React from 'react';
/* Header removed as requested */
import Hero from './components/Hero';
import Stats from './components/Stats';
import Directions from './components/Directions';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="app-main">
      <main>
        <Hero />
        <Stats />
        <Directions />
        <Services />
        <About />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
