import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="app-container">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
