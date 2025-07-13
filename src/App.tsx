import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Internship from './components/Internship';
import Memes from './components/Memes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Internship />
            <Memes />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;