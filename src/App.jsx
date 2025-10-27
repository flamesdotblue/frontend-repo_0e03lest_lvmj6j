import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
