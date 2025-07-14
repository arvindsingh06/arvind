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

  // Generate smooth moving and blinking stars
  const generateMovingStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.3,
      moveX: (Math.random() - 0.5) * 100, // Random horizontal movement
      moveY: (Math.random() - 0.5) * 100, // Random vertical movement
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 4 + 3,
      blinkDelay: Math.random() * 3,
      blinkDuration: Math.random() * 2 + 1,
    }));
  };

  const movingStars = generateMovingStars(80);
  const blinkingStars = generateMovingStars(60);
  const shootingStars = generateMovingStars(12);

  // Add smooth startup state
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    // Delay animation start for smooth initialization
    const timer = setTimeout(() => {
      setIsAnimationReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Smooth Galaxy Background with Moving and Blinking Stars */}
      <div className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${isAnimationReady ? 'opacity-100' : 'opacity-0'}`}>
        {/* Deep Space Gradient with Smooth Transitions */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-800/30 via-slate-900/60 to-black"></div>
        
        {/* Smooth Nebula Effects */}
        <div className="absolute inset-0 opacity-0 animate-fade-in-up delay-300">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-smooth-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-smooth-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-smooth-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Smooth Moving Stars */}
        {isAnimationReady && movingStars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute animate-smooth-float opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.animationDelay + 0.5}s`,
              animationDuration: `${star.animationDuration}s`,
              '--move-x': `${star.moveX}px`,
              '--move-y': `${star.moveY}px`,
              animationFillMode: 'both',
            } as React.CSSProperties}
          >
            <div 
              className="smooth-star bg-white rounded-full shadow-white/80 animate-fade-in-up"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0,
                boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${star.opacity * 0.8})`,
                animation: `fade-in-up 0.8s ease-out ${star.animationDelay + 0.8}s both, smooth-float ${star.animationDuration}s linear infinite ${star.animationDelay + 1.3}s`,
              }}
            />
          </div>
        ))}

        {/* Blinking Stars */}
        {isAnimationReady && blinkingStars.map((star) => (
          <div
            key={`blink-${star.id}`}
            className="absolute opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `fade-in-up 0.8s ease-out ${star.blinkDelay + 1}s both, smooth-blink ${star.blinkDuration}s ease-in-out infinite ${star.blinkDelay + 1.5}s`,
            }}
          >
            <div 
              className="blinking-star bg-white rounded-full opacity-0"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.9)`,
              }}
            />
          </div>
        ))}

        {/* Smooth Shooting Stars */}
        {isAnimationReady && shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="absolute opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `smooth-shooting ${star.animationDuration}s linear infinite ${star.animationDelay + 2}s`,
            }}
          >
            <div className="smooth-shooting-star"></div>
          </div>
        ))}

        {/* Smooth Distant Galaxies */}
        {isAnimationReady && [...Array(3)].map((_, i) => (
          <div
            key={`galaxy-${i}`}
            className="absolute opacity-0 animate-fade-in-up"
            style={{
              left: `${20 + i * 30}%`,
              top: `${25 + (i % 2) * 35}%`,
              animationDelay: `${i * 1.5 + 2}s`,
            }}
          >
            <div 
              className="smooth-galaxy bg-gradient-radial from-white/12 via-blue-200/8 to-transparent rounded-full blur-sm animate-smooth-galaxy"
              style={{ 
                width: `${80 + i * 25}px`, 
                height: `${80 + i * 25}px`,
                background: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(147,197,253,0.08) 30%, transparent 70%)`,
                animationDelay: `${i * 1.5 + 2.5}s`,
              }}
            />
          </div>
        ))}

        {/* Smooth Constellation Lines */}
        <svg className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ${isAnimationReady ? 'opacity-30' : 'opacity-0'}`} style={{ zIndex: 1, transitionDelay: '3s' }}>
          <defs>
            <linearGradient id="smooth-constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>
          {/* Smooth constellation lines */}
          <line x1="20%" y1="30%" x2="35%" y2="25%" stroke="url(#smooth-constellation-gradient)" strokeWidth="1" className="animate-smooth-pulse" style={{ animationDelay: '3.5s' }} />
          <line x1="35%" y1="25%" x2="45%" y2="40%" stroke="url(#smooth-constellation-gradient)" strokeWidth="1" className="animate-smooth-pulse" style={{ animationDelay: '4s' }} />
          <line x1="60%" y1="20%" x2="75%" y2="35%" stroke="url(#smooth-constellation-gradient)" strokeWidth="1" className="animate-smooth-pulse" style={{ animationDelay: '4.5s' }} />
          <line x1="75%" y1="35%" x2="80%" y2="50%" stroke="url(#smooth-constellation-gradient)" strokeWidth="1" className="animate-smooth-pulse" style={{ animationDelay: '5s' }} />
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