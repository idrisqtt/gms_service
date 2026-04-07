import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Directions from './components/Directions';
import Services from './components/Services';
import About from './components/About';
import Partners from './components/Partners';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="app-main">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Directions />
        <Services />
        <About />
        <Partners />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
