import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const motto = "Learning from data, building for the future.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < motto.length) {
        setTypedText(motto.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Spheres */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`sphere-${i}`}
            className="absolute sphere-container"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              zIndex: 0,
            }}
          >
            <div className={`sphere bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-400 to-teal-400' : 'from-orange-400 to-pink-400'} opacity-20 blur-2xl`} style={{ width: 80 + i * 10, height: 80 + i * 10 }}></div>
          </div>
        ))}
        {/* Floating Hexagons */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`hexagon-${i}`}
            className="absolute geometric-shape"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              zIndex: 0,
            }}
          >
            <div className="hexagon bg-gradient-to-br from-blue-300 to-teal-300 opacity-30" style={{ width: 48, height: 48 }}></div>
          </div>
        ))}
        {/* Floating Diamonds */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`diamond-${i}`}
            className="absolute geometric-shape"
            style={{
              left: `${60 + i * 15}%`,
              top: `${10 + i * 40}%`,
              animationDelay: `${i * 0.9}s`,
              zIndex: 0,
            }}
          >
            <div className="diamond bg-gradient-to-br from-orange-300 to-pink-300 opacity-20" style={{ width: 32, height: 32 }}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-2xl overflow-hidden">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-300">
            Arvind Singh Rathore
          </h1>

          {/* Tagline */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up delay-500">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
              AI/ML Engineer
            </span>
            <span className="mx-2">|</span>
            <span className="bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent font-semibold">
              Data Analyst
            </span>
            <span className="mx-2">|</span>
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              Python Developer
            </span>
          </div>

          {/* Motto with Typing Effect */}
          <div className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 animate-fade-in-up delay-700">
            <span className="italic">"{typedText}"</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-1000">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;