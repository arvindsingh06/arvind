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

  // Generate smooth moving and blinking stars with 3D effects
  const generateGalaxyStars = (count: number, type: 'moving' | 'blinking' | 'shooting' | 'twinkling') => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      moveX: (Math.random() - 0.5) * 200,
      moveY: (Math.random() - 0.5) * 200,
      animationDelay: Math.random() * 8,
      animationDuration: Math.random() * 6 + 4,
      blinkDelay: Math.random() * 4,
      blinkDuration: Math.random() * 3 + 2,
      rotationSpeed: Math.random() * 360,
      depth: Math.random() * 100 + 50, // For 3D depth effect
    }));
  };

  const movingStars = generateGalaxyStars(120, 'moving');
  const blinkingStars = generateGalaxyStars(80, 'blinking');
  const shootingStars = generateGalaxyStars(15, 'shooting');
  const twinklingStars = generateGalaxyStars(60, 'twinkling');

  // Add smooth startup state
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced Galaxy Background with 3D Moving Stars */}
      <div className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1500 ${isAnimationReady ? 'opacity-100' : 'opacity-0'}`}>
        {/* Deep Space Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 via-gray-900/40 to-black"></div>
        
        {/* Nebula Cloud Effects with 3D Depth */}
        <div className="absolute inset-0 opacity-0 animate-fade-in-up delay-500">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-galaxy-pulse" style={{ animationDelay: '1s', transform: 'translateZ(20px)' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-galaxy-pulse" style={{ animationDelay: '2s', transform: 'translateZ(30px)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-galaxy-pulse" style={{ animationDelay: '3s', transform: 'translateZ(40px)' }}></div>
          <div className="absolute top-1/6 right-1/3 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-galaxy-pulse" style={{ animationDelay: '4s', transform: 'translateZ(25px)' }}></div>
        </div>

        {/* 3D Moving Stars with Smooth Animation */}
        {isAnimationReady && movingStars.map((star) => (
          <div
            key={`moving-star-${star.id}`}
            className="absolute animate-3d-star-float opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              '--move-x': `${star.moveX}px`,
              '--move-y': `${star.moveY}px`,
              '--rotation': `${star.rotationSpeed}deg`,
              '--depth': `${star.depth}px`,
              animationFillMode: 'both',
              transform: `translateZ(${star.depth}px)`,
            } as React.CSSProperties}
          >
            <div 
              className="star-3d bg-white rounded-full animate-fade-in-up"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0,
                boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, ${star.opacity})`,
                animation: `fade-in-up 1s ease-out ${star.animationDelay + 1}s both, 3d-star-float ${star.animationDuration}s ease-in-out infinite ${star.animationDelay + 1.5}s`,
              }}
            />
          </div>
        ))}

        {/* Blinking Stars with 3D Depth */}
        {isAnimationReady && blinkingStars.map((star) => (
          <div
            key={`blinking-star-${star.id}`}
            className="absolute opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `fade-in-up 1s ease-out ${star.blinkDelay + 1.5}s both, 3d-star-blink ${star.blinkDuration}s ease-in-out infinite ${star.blinkDelay + 2}s`,
              transform: `translateZ(${star.depth}px)`,
            }}
          >
            <div 
              className="star-3d bg-white rounded-full opacity-0"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 6}px rgba(255, 255, 255, 0.9)`,
              }}
            />
          </div>
        ))}

        {/* Twinkling Stars with Cross Effect */}
        {isAnimationReady && twinklingStars.map((star) => (
          <div
            key={`twinkling-star-${star.id}`}
            className="absolute opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `fade-in-up 1s ease-out ${star.animationDelay + 2}s both, star-twinkle ${star.animationDuration}s ease-in-out infinite ${star.animationDelay + 2.5}s`,
              transform: `translateZ(${star.depth}px)`,
            }}
          >
            <div 
              className="star-cross bg-white rounded-full opacity-0 relative"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 8}px rgba(255, 255, 255, 0.8)`,
              }}
            >
              {/* Cross effect for twinkling */}
              <div className="absolute inset-0 star-cross-horizontal"></div>
              <div className="absolute inset-0 star-cross-vertical"></div>
            </div>
          </div>
        ))}

        {/* Enhanced Shooting Stars with 3D Trail */}
        {isAnimationReady && shootingStars.map((star) => (
          <div
            key={`shooting-star-${star.id}`}
            className="absolute opacity-0"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `3d-shooting-star ${star.animationDuration}s linear infinite ${star.animationDelay + 3}s`,
              transform: `translateZ(${star.depth}px)`,
            }}
          >
            <div className="shooting-star-3d">
              <div className="shooting-star-core"></div>
              <div className="shooting-star-trail"></div>
            </div>
          </div>
        ))}

        {/* 3D Distant Galaxies with Spiral Effect */}
        {isAnimationReady && [...Array(4)].map((_, i) => (
          <div
            key={`galaxy-${i}`}
            className="absolute opacity-0 animate-fade-in-up"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 2 + 3}s`,
              transform: `translateZ(${100 + i * 20}px)`,
            }}
          >
            <div 
              className="galaxy-spiral bg-gradient-radial from-white/10 via-blue-200/6 to-transparent rounded-full blur-sm animate-galaxy-rotate"
              style={{ 
                width: `${100 + i * 30}px`, 
                height: `${100 + i * 30}px`,
                background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(147,197,253,0.06) 30%, transparent 70%)`,
                animationDelay: `${i * 2 + 3.5}s`,
                animationDuration: `${20 + i * 5}s`,
              }}
            >
              {/* Spiral arms */}
              <div className="absolute inset-0 galaxy-arm-1"></div>
              <div className="absolute inset-0 galaxy-arm-2"></div>
            </div>
          </div>
        ))}

        {/* Enhanced Constellation Lines with 3D Effect */}
        <svg className={`absolute inset-0 w-full h-full transition-opacity duration-3000 ${isAnimationReady ? 'opacity-40' : 'opacity-0'}`} style={{ zIndex: 1, transitionDelay: '4s' }}>
          <defs>
            <linearGradient id="constellation-gradient-3d" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Constellation patterns with glow effect */}
          <line x1="15%" y1="25%" x2="30%" y2="20%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '4.5s' }} />
          <line x1="30%" y1="20%" x2="40%" y2="35%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '5s' }} />
          <line x1="40%" y1="35%" x2="25%" y2="45%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '5.5s' }} />
          
          <line x1="65%" y1="15%" x2="80%" y2="30%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '6s' }} />
          <line x1="80%" y1="30%" x2="85%" y2="45%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '6.5s' }} />
          <line x1="85%" y1="45%" x2="70%" y2="55%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '7s' }} />
          
          <line x1="45%" y1="60%" x2="60%" y2="70%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '7.5s' }} />
          <line x1="60%" y1="70%" x2="50%" y2="85%" stroke="url(#constellation-gradient-3d)" strokeWidth="1.5" filter="url(#glow)" className="animate-constellation-pulse" style={{ animationDelay: '8s' }} />
        </svg>

        {/* Floating Cosmic Dust Particles */}
        {isAnimationReady && [...Array(40)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute opacity-0 animate-fade-in-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5 + 2}s`,
            }}
          >
            <div 
              className="cosmic-dust"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 8 + 6}s`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image with 3D Glow Effect */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-white/20 ring-offset-4 ring-offset-transparent relative">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
              {/* 3D Glow effect around profile */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-white/10 to-teal-400/20 animate-profile-glow"></div>
            </div>
          </div>

          {/* Name with Enhanced Text Shadow */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-300 text-shadow-3d">
            Arvind Singh Rathore
          </h1>

          {/* Tagline with Gradient Animation */}
          <div className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-500">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold animate-gradient-text">
              AI/ML Engineer
            </span>
            <span className="mx-2 text-white/60">|</span>
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-semibold animate-gradient-text">
              Data Analyst
            </span>
            <span className="mx-2 text-white/60">|</span>
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-semibold animate-gradient-text">
              Python Developer
            </span>
          </div>

          {/* Motto with Enhanced Typing Effect */}
          <div className="text-lg md:text-xl text-gray-300 mb-12 animate-fade-in-up delay-700">
            <span className="italic text-shadow-soft">"{typedText}"</span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>

          {/* Enhanced CTA Button with 3D Effect */}
          <div className="animate-fade-in-up delay-1000">
            <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 ring-2 ring-white/20 hover:ring-white/40 overflow-hidden">
              {/* 3D Button Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </div>
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down Arrow with 3D Effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
        >
          <ChevronDown className="w-8 h-8 relative z-10" />
          {/* Glow effect for arrow */}
          <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;