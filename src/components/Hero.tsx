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

  // Generate stars for galaxy effect
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 2,
    }));
  };

  const stars = generateStars(150);
  const shootingStars = generateStars(8);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Galaxy Background with 3D Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Space Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-800/50 via-slate-900/80 to-black"></div>
        
        {/* Nebula Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* 3D Animated Stars */}
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.twinkleDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          >
            <div 
              className="star-3d bg-white rounded-full shadow-white/50"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
              }}
            />
          </div>
        ))}

        {/* Shooting Stars */}
        {shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="absolute animate-shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration + 2}s`,
            }}
          >
            <div className="shooting-star-trail"></div>
          </div>
        ))}

        {/* Distant Galaxies */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`galaxy-${i}`}
            className="absolute animate-galaxy-rotate"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <div 
              className="galaxy-spiral bg-gradient-radial from-white/10 via-blue-200/5 to-transparent rounded-full blur-sm"
              style={{ 
                width: `${60 + i * 20}px`, 
                height: `${60 + i * 20}px`,
                background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(147,197,253,0.05) 30%, transparent 70%)`
              }}
            />
          </div>
        ))}

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          {/* Constellation lines connecting some stars */}
          <line x1="20%" y1="30%" x2="35%" y2="25%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="35%" y1="25%" x2="45%" y2="40%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse delay-500" />
          <line x1="60%" y1="20%" x2="75%" y2="35%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse delay-1000" />
          <line x1="75%" y1="35%" x2="80%" y2="50%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-pulse delay-1500" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-white/20 ring-offset-4 ring-offset-transparent">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-300 drop-shadow-2xl">
            Arvind Singh Rathore
          </h1>

          {/* Tagline */}
          <div className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-500">
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
          <div className="text-lg md:text-xl text-gray-300 mb-12 animate-fade-in-up delay-700">
            <span className="italic">"{typedText}"</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-1000">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ring-2 ring-white/20 hover:ring-white/40">
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
          className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;